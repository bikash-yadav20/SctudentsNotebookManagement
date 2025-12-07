import express from "express";
import { getSubjects } from "../Controllers/SubjectsController.js";

const router = express.Router();

// Example: GET /api/subjects/Class 5
router.get("/:className", getSubjects);

export default router;
