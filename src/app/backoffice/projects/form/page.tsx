import { BackButton } from "@/components/BackButton";
import { getProject } from "@/lib/queries/getProject";
import * as Sentry from "@sentry/nextjs"
import ProjectForm from "@/app/backoffice/projects/form/ProjectForm2";

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { projectId } = await searchParams

    if (!projectId) return { title: "New Project" }

    return { title: `Edit Project #${projectId}`}
}

export default async function ProjectFormPage({
    searchParams, 
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {
        const { projectId } = await searchParams

        // Edit a customer from
        if (projectId) {
            const project = await getProject(parseInt(projectId))

            if (!project) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Project ID #{projectId} not found</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
            console.log(project)
            // put customer form component 
            return <ProjectForm project={project} />
        } else {
            // new customer form component 
            return <ProjectForm />
        }
    } catch (e) {
        if (e instanceof Error) {
            Sentry.captureException(e)
            throw e
        }
    }
}