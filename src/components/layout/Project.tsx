import { selectProjectSchemaType } from "@/zod-schemas/project";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
    project?: selectProjectSchemaType,
}

export default function Project({ project }: Props) {
    if (!project) return null; // In case project data is missing

    return (
        <div className="relative py-3 text-white">
            <img src={project.imageUrl} alt={project.title} className="object-cover h-screen w-full rounded-2xl relative" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-2xl top-3 bottom-3"></div>
            
            <div className="absolute top-1/4 ml-40 flex flex-col gap-10 w-1/3 ">

                <div className="flex gap-3">
                    <Badge variant="transparent">UX/UI</Badge>
                    <Badge variant="transparent">BRANDING</Badge>
                    <Badge variant="transparent">SITE WEB</Badge>
                    <Badge variant="transparent">CONSEIL</Badge>
                    <Badge variant="transparent">FREELANCE</Badge>
                </div>

                <div className="pr-10 flex flex-col gap-5">
                    <h1 className='text-5xl font-white'>{project.title}</h1>
                    <p className="text-base">{project.description}</p>
                </div>
                
                <div>
                    <Button variant="secondary" className="text-white rounded-full">
                        <Link href="/login">Découvrir le projet</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
