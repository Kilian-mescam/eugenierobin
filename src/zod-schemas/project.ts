import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { projects } from "@/db/schema"

export const insertProjectSchema = createInsertSchema(projects, {
     title: (schema) => schema.title.min(1, "Title is required"),
     clientName: (schema) => schema.clientName.min(1, "client name is required"),
     description: (schema) => schema.description.min(1, "Description is required"),
     imageUrl: (schema) => schema.imageUrl.min(1, "image Url is required"),
})

export const selectProjectSchema = createSelectSchema(projects)

export type insertProjectSchemaType = typeof insertProjectSchema._type

export type selectProjectSchemaType = typeof selectProjectSchema._type