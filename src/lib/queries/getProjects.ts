import { db } from "@/db"
import { projects } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getProjects() {
    const customers = await db.select()
        .from(projects)

    return customers
}
