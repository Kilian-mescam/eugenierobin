export const metadata = { 
    title: "Projects Search",
}
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { ProjectsList } from "./projects/ProjectsList";

export default async function Backoffice() {
    const {isAuthenticated} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    console.log('isUserAuthenticated', isUserAuthenticated)
    if (!isUserAuthenticated) { redirect("/login") }
    else { return (
        <div className='p-5 flex justify-between gap-4'>
        <div className='w-full '>
            <ProjectsList />
        </div>
        <div className='bg-green-500 w-full'>Form</div>
      </div>) }
}