export const metadata = { 
    title: "Projects Search",
}
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { ProjectsList } from "./projects/ProjectsList";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default async function Backoffice() {
    const {isAuthenticated} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    console.log('isUserAuthenticated', isUserAuthenticated)
    if (!isUserAuthenticated) { redirect("/login") }
    else { return (
        <div className='p-10 flex flex-col justify-between gap-4'>
            <div className='m-auto w-1/4'>
                <Button variant="secondary" size="icon" aria-label='logout' title='Logout' className='rounded-full w-full text-white px-5' asChild>
                    <Link href='/create'>
                        <CirclePlus />
                        Créer un nouveau projet
                    </Link>
                </Button>
            </div>
            <ProjectsList />
      </div>) }
}