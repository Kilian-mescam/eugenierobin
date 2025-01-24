
import { getProjects } from "@/lib/queries/getProjects";
import BackOfficeProject from "./BackOfficeProject";

export async function ProjectsList() {
    const projectData = await getProjects()
    return (
        <div>
            {projectData.map((project, index) => (
                <BackOfficeProject
                    key={index}
                    project={project}                    
                />
            ))}
        </div>
    ) 
}