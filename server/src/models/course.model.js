import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    subTitle: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true },

    subject: { type: String, required: true, trim: true },

    price: { type: Number, default: 0, min: 0 },
    originalPrice: { type: Number, default: 0, min: 0 },
    discount: { type: Number, default: 0, min: 0, max: 100 },

    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    courseLanguage: { type: String, required: true, trim: true },

    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    thumbnail: {
      url: { type: String, required: true },
      publicId: { type: String, required: true },
    },

    learningOutcomes: [{ type: String }],
    prerequisites: [{ type: String }],
    tags: [{ type: String }],

    duration: { type: Number, required: true },

    isPublished: { type: Boolean, default: false },

    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    whatYouWillLearn: [
      {
        subjectName: { type: String, required: true },
        topics: [{ type: String, required: true }],
        projects: [{ type: String, required: true }],
        liveDay: { type: String, required: true },
      },
    ],

    whoIsThisFor: [
      {
        subTitle: { type: String, required: true },
        targetAudience: [
          {
            title: { type: String, required: true },
            description: { type: String, required: true },
          },
        ],
      },
    ],

    careerOutcomes: [
      {
        subTitle: { type: String, required: true },
        outcomes: [
          {
            title: { type: String, required: true },
            description: { type: String, required: true },
          },
        ],
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("Course", courseSchema);
