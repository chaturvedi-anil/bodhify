import { z } from "zod";

const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

export const courseSchemaValidation = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  subTitle: z
    .string()
    .trim()
    .min(3, "Subtitle must be at least 3 characters")
    .max(200, "Subtitle cannot exceed 200 characters"),

  slug: z
    .string()
    .trim()
    .min(3, "Slug is required")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers, and hyphens",
    ),

  description: z
    .string()
    .trim()
    .min(50, "Description must be at least 50 characters"),

  subject: z.string().trim().min(2, "Subject is required"),

  price: z.number().min(0, "Price cannot be negative").default(0),

  originalPrice: z
    .number()
    .min(0, "Original price cannot be negative")
    .default(0),

  discount: z
    .number()
    .min(0, "Discount cannot be negative")
    .max(100, "Discount cannot exceed 100")
    .default(0),

  courseLanguage: z.string().trim().min(2, "Course language is required"),

  level: z.enum(["Beginner", "Intermediate", "Advanced"]).default("Beginner"),

  thumbnail: z.object({
    url: z.string().url("Invalid thumbnail URL"),
    publicId: z.string().min(1, "Public ID is required"),
  }),

  learningOutcomes: z.array(z.string().trim().min(1)).default([]),

  prerequisites: z.array(z.string().trim().min(1)).default([]),

  tags: z.array(z.string().trim().min(1)).default([]),

  duration: z.number().min(1, "Duration must be at least 1 hour"),

  isPublished: z.boolean().default(false),

  enrolledStudents: z.array(objectIdSchema).default([]),

  whatYouWillLearn: z
    .array(
      z.object({
        subjectName: z.string().trim().min(1, "Subject name is required"),
        topics: z.array(z.string().trim().min(1, "Topic cannot be empty")),
        liveDay: z.string().trim().min(1, "Live day is required"),
      }),
    )
    .default([]),

  whoIsThisFor: z
    .array(
      z.object({
        subTitle: z.string().trim().min(1, "Subtitle is required"),
        targetAudience: z.array(
          z.object({
            title: z.string().trim().min(1, "Title is required"),
            description: z.string().trim().min(1, "Description is required"),
          }),
        ),
      }),
    )
    .default([]),

  careerOutcomes: z
    .array(
      z.object({
        subTitle: z.string().trim().min(1, "Subtitle is required"),
        outcomes: z.array(
          z.object({
            title: z.string().trim().min(1, "Title is required"),
            description: z.string().trim().min(1, "Description is required"),
          }),
        ),
      }),
    )
    .default([]),
});

export const updateCourseSchemaValidation = courseSchemaValidation.partial();
