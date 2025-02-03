import { pgTable, serial, varchar, timestamp, integer } from "drizzle-orm/pg-core"

export const projects = pgTable("projects", {
    id: serial("id").primaryKey(),
    title: varchar("title").notNull(),
    clientName: varchar("client_name").notNull(),
    description: varchar("description").notNull(),
    imageUrl: varchar("image_url").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
})
