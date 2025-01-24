import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
          <DialogContent className="sm:max-w-[800px] h-[600px]">
            <DialogHeader>
              <DialogTitle>{project?.id ? `Editer le projet : ${project.clientName}` : "Créer un nouveau projet"}</DialogTitle>
            </DialogHeader>
            <ProjectForm project={project} />
          </DialogContent>
        </Dialog>
      )
};
