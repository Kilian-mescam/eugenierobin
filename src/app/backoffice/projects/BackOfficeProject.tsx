import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { selectProjectSchemaType } from "@/zod-schemas/project";
import Link from "next/link";
import { CreateProjectDialog } from "./form/CreateProjectDialog";

type Props = {
    project?: selectProjectSchemaType,
}

export default function Project({ project }: Props) {
    if (!project) return null; // In case project data is missing

    return (
        <div className="m-10 relative text-white rounded-2xl cursor-pointer mt-10">
            <img src={project.imageUrl} alt={project.title} className="object-cover rounded-xl w-full h-full relative" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-xl "></div>
            
            <div className="absolute top-5 flex flex-col justify-between bottom-5 left-5 right-5">

                <div className="flex flex-col gap-4">
                    <h1 className='text-2xl font-white'>{project.title}</h1>
                    <div className="flex gap-3">
                        <Badge variant="transparent">UX/UI</Badge>
                        <Badge variant="transparent">BRANDING</Badge>
                        <Badge variant="transparent">SITE WEB</Badge>
                        <Badge variant="transparent">CONSEIL</Badge>
                        <Badge variant="transparent">FREELANCE</Badge>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div>
                        <CreateProjectDialog project={project} />
                    </div>
                    <Button variant="destructive" className="text-white rounded-full">
                        <Link href={`/project/${project.id}`}>Supprimer Projet</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
