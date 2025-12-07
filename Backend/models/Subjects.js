import mongoose from "mongoose";
const subjectSchema = new mongoose.Schema({
    class: { type: String, required: true },
    subjects: { type: [String], required: true }
});
export default mongoose.model("Subject", subjectSchema);