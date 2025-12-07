import Student from "../models/Students.js";


export const saveNotebookChecks = async (req, res) => {
  try {
    console.log("Controller hit!", req.body);
    const { id } = req.params;
    const { subject, checks, remark } = req.body;

    if (!subject || subject.trim() === "") {
      return res.status(400).json({ error: "Subject is required" });
    }

    // Load student first
    const studentDoc = await Student.findById(id);

if (!studentDoc) {
  return res.status(404).json({ error: "Student not found" });
}

const subjectExists = studentDoc.notebookChecks.some(s => s.subject === subject);

if (subjectExists) {
  // Update existing subject
  const updated = await Student.findByIdAndUpdate(
    id,
    {
      $set: { "notebookChecks.$[elem].checks": checks },
      $push: { "notebookChecks.$[elem].remarks": { text: remark, date: new Date() } }
    },
    {
      new: true,
      arrayFilters: [{ "elem.subject": subject }]
    }
  );
  return res.json(updated);
} else {
  // Add new subject entry
  studentDoc.notebookChecks.push({
    subject,
    checks: checks || [false, false, false, false, false, false],
    remarks: [{ text: remark, date: new Date() }]
  });
  await studentDoc.save();
  return res.json(studentDoc);
}

  } catch (err) {
    console.error("Error saving notebook checks:", err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
};


// Get notebook checks for a student
export const getNotebookChecks = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);

    if (!student) return res.status(404).json({ error: "Student not found" });

    res.json(student.notebookChecks || []);
  } catch (err) {
    console.error("Error fetching notebook checks:", err);
    res.status(500).json({ error: "Server error" });
  }
};
