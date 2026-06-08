import mongoose, { trusted } from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  subTitle: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  subject: { type: String, required: true },
  price: { type: Number, default: 0 },
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  courseLanguage: { type: String, required: true, trim: true },
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    default: "Beginner",
  },
  thumbnail: {
    url: String,
    publicId: String,
  },
  learningOutcomes: [String],

  prerequisites: [String],

  tags: [String],
  duration: { type: String, required: true, trim: true },
  isPublished: { type: Boolean, default: false },
  enrolledStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export default mongoose.model("Course", courseSchema);
