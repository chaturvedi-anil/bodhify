import { z } from "zod";

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
    .max(200, "Subtitle cannot exceed 200 characters")
    .optional(),

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
    .min(300, "Description must be at least 300 characters"),

  subject: z.string().trim().min(2, "Subject is required"),

  price: z.number().min(0, "Price cannot be negative").default(0),

  instructorId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid instructor ID")
    .optional(),

  courseLanguage: z.string().trim().min(2, "Course language is required"),

  level: z.enum(["Beginner", "Intermediate", "Advanced"]).default("Beginner"),

  thumbnail: z
    .object({
      url: z.string().url("Invalid thumbnail URL"),
      publicId: z.string().min(1, "Public ID is required"),
    })
    .optional(),

  learningOutcomes: z
    .array(z.string().trim().min(1, "Learning outcome cannot be empty"))
    .default([]),

  prerequisites: z
    .array(z.string().trim().min(1, "Prerequisite cannot be empty"))
    .default([]),

  tags: z.array(z.string().trim().min(1, "Tag cannot be empty")).default([]),

  duration: z.string().trim().min(1, "Duration is required"),

  isPublished: z.boolean().default(false),
});

export const updateCourseSchemaValidation = z
  .object({
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
      .min(300, "Description must be at least 300 characters"),

    subject: z.string().trim().min(2, "Subject is required"),

    price: z.number().min(0, "Price cannot be negative"),

    courseLanguage: z.string().trim().min(2, "Course language is required"),

    level: z.enum(["Beginner", "Intermediate", "Advanced"]),

    thumbnail: z.object({
      url: z.string().url("Invalid thumbnail URL"),
      publicId: z.string().min(1, "Public ID is required"),
    }),

    learningOutcomes: z.array(
      z.string().trim().min(1, "Learning outcome cannot be empty"),
    ),

    prerequisites: z.array(
      z.string().trim().min(1, "Prerequisite cannot be empty"),
    ),

    tags: z.array(z.string().trim().min(1, "Tag cannot be empty")),

    duration: z.string().trim().min(1, "Duration is required"),

    isPublished: z.boolean(),
  })
  .partial();
