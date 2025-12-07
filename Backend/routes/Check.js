import express from "express";
import {
  saveNotebookChecks,
  getNotebookChecks
} from "../Controllers/CheckController.js";
import Student from "../models/Students.js";   // <-- add this

const router = express.Router();

router.put("/:id/notebookChecks", saveNotebookChecks);
router.get("/:id/notebookChecks", getNotebookChecks);

// New route for full report
router.get("/:id/report", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student); // full student object with notebookChecks
  } catch (err) {
    console.error("Error fetching report:", err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

export default router;
