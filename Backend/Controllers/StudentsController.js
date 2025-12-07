import Student from "../models/Students.js";

// Get all unique classes
export const getClasses = async (req, res) => {
  try {
    const classes = await Student.distinct("class");
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get sections for a given class
export const getSections = async (req, res) => {
  try {
    const sections = await Student.distinct("section", {
      class: req.params.className,
    });
    res.json(sections);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get students by class + section
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find({
      class: req.params.className,
      section: req.params.sectionName,
    });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

