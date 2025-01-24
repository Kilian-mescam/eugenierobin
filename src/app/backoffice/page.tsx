export const metadata = { 
    title: "Projects Search",
}
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { ProjectsList } from "./projects/ProjectsList";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { CreateProjectDialog } from "./projects/CreateProjectDialog";

export default async function Backoffice() {
    const {isAuthenticated} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    console.log('isUserAuthenticated', isUserAuthenticated)
    if (!isUserAuthenticated) { redirect("/login") }
    else { return (
        <div className='p-10 flex flex-col justify-between items-center gap-4'>
            <div className="h-10 w-1/4">
                <CreateProjectDialog />
            </div>
            <ProjectsList />
      </div>) }
}