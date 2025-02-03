import { Button } from "@/components/ui/button";
import { selectProjectSchemaType } from "@/zod-schemas/project";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useAction } from "next-safe-action/hooks";
import { deleteProjectAction } from "@/app/actions/deleteProjectAction";
import { useToast } from "@/hooks/use-toast";

type Props = {
  project?: selectProjectSchemaType,
}

export function DeleteProjectDialog({ project }: Props) {
    return (
      <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon" title='Delete' className='rounded-full w-full text-white px-5'>Supprimer le projet</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Voulez-vous vraiment supprimer le projet {project?.clientName}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={() => { deleteProjectAction} } className='text-destructive'>Supprimer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      )
};
