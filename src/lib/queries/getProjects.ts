import { db } from "@/db"
import { projects } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getProjects() {
    const projectsData = await db.select()
        .from(projects)

    return projectsData
}