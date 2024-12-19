import { db } from "@/db"
import { projects } from "@/db/schema"
import { ilike, or } from "drizzle-orm"

export async function getProjectSearchResults(searchText: string) {
    const results = await db.select()
        .from(projects)
        .where(or(
            ilike(projects.title, `%${searchText}%`),
            ilike(projects.clientName, `%${searchText}%`),
        ))

    return results
}
