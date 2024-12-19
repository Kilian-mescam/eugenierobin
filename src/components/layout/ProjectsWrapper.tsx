import { getProjects } from "@/lib/queries/getProjects";
import Project from "./Project";

export async function ProjectsWrapper() {

    const projectData = await getProjects()
    
    return (
        <div className="projects-list">
                {projectData.map((project, index) => (
                    <Project
                        key={index}
                        project={project}                    />
                ))}
            </div>
    ) 
}