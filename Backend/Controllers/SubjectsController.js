import Subject from "../models/Subjects.js";

// Get subjects for a given class
export const getSubjects = async (req, res) => {
  try {
    const { className } = req.params; // read class name from URL
    const subjectList = await Subject.findOne({ class: className }); // query MongoDB

    if (!subjectList) {
      return res.status(404).json({ subjects: [] }); // if no data found
    }

    res.json(subjectList.subjects); // send back the subjects array
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
