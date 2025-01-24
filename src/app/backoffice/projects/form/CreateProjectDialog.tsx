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
                {projectId ? "modifier projet" : "Créer un nouveau projet"} 
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{projectId ? "modifier projet" : "Créer un nouveau projet"} </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <ProjectForm project={project} />
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
};
