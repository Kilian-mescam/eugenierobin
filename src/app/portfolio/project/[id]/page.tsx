import { Badge } from "@/components/ui/badge";
import { getProject } from "@/lib/queries/getProject";
import { useRouter, useSearchParams } from "next/navigation";

export default async function Page({
  params, 
}: {
  params: Promise<{ id: string }>
}) {

  const projectId = (await params).id
 
  const project = await getProject(parseInt(projectId))

  return (
        <div className="relative mt-3 text-white ">
          {project?.image && <img src={project?.image} alt={project.title} className="object-cover h-screen w-full relative" /> }
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent "></div>
            
            <div className="absolute top-1/4 ml-40 flex flex-col gap-10 w-1/3 ">

                <div className="flex gap-3">
                    <Badge variant="transparent">UX/UI</Badge>
                    <Badge variant="transparent">BRANDING</Badge>
                    <Badge variant="transparent">SITE WEB</Badge>
                    <Badge variant="transparent">CONSEIL</Badge>
                    <Badge variant="transparent">FREELANCE</Badge>
                </div>

                <div className="pr-10 flex flex-col gap-5">
                    <h1 className='text-5xl font-white'>{project?.title}</h1>
                    <p className="text-base">{project.description}</p>
                </div>

            </div>
        </div>
  );
}