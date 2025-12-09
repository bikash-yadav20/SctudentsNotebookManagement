import express from "express";
import { getSubjects } from "../Controllers/SubjectsController.js";

const router = express.Router();


router.get("/:className", getSubjects);

export default router;
