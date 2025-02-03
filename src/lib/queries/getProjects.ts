import { db } from "@/db"
import { projects } from "@/db/schema"

export async function getProjects() {
    const projectsData = await db.select()
        .from(projects)

    return projectsData
}