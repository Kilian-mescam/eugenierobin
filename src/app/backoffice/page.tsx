export const metadata = { 
    title: "Projects Search",
}
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import ProjectForm from "./projects/form/ProjectForm2";
import { redirect } from "next/navigation";

export default async function Backoffice() {
    const {isAuthenticated} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    console.log('isUserAuthenticated', isUserAuthenticated)
    if (!isUserAuthenticated) { redirect("/login") }
    else { return <ProjectForm /> }
}