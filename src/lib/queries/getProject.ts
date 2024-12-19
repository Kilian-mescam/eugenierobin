import { db } from "@/db"
import { projects } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getProject(id: number) {
    const customer = await db.select()
        .from(projects)
        .where(eq(projects.id, id))

    return customer[0]
}
