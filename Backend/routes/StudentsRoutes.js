import express from "express";
import { getClasses, getSections, getStudents, } from "../Controllers/StudentsController.js";

const router = express.Router();

router.get("/classes", getClasses);
router.get("/sections/:className", getSections);
router.get("/students/:className/:sectionName", getStudents);

export default router;
