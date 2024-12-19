import { selectProjectSchemaType } from "@/zod-schemas/project";

type Props = {
    project?: selectProjectSchemaType,
}

export default function Project({ project }: Props) {
    if (!project) return null; // In case project data is missing

    return (
        <div className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p><strong>Client:</strong> {project.clientName}</p>
            <p>{project.description}</p>
        </div>
    );
};
