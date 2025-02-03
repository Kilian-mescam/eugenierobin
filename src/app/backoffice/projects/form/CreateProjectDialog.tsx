import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ProjectForm from "./ProjectForm";
import { selectProjectSchemaType } from "@/zod-schemas/project";

type Props = {
  project?: selectProjectSchemaType,
}

export function CreateProjectDialog({ project }: Props) {
  const projectId = project?.id
    return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" size="icon" title='Create' className='rounded-full w-full text-white px-5'>
                {projectId ? "Editer le projet" : "Créer un nouveau projet"} 
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[1000px] h-[700px]">
            <DialogHeader>
              <DialogTitle>{project?.id ? `Editer le projet : ${project.clientName}` : "Créer un nouveau projet"}</DialogTitle>
            </DialogHeader>
            <ProjectForm project={project} />
          </DialogContent>
        </Dialog>
      )
};
