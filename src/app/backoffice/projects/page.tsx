import { getProjectSearchResults } from "@/lib/queries/getProjectSearchResults"
import ProjectSearch from "./ProjectSearch"

export const metadata = { 
    title: "Projects Search",
}

export default async function Projects({
    searchParams, 
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { searchText } = await searchParams

    if (!searchText) return <ProjectSearch />

    const results = await getProjectSearchResults(searchText)

    return (
        <>
            <ProjectSearch />
            <p>{JSON.stringify(results)}</p>
        </>
    )
}