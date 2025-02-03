"use server"

import { eq } from "drizzle-orm"
import { flattenValidationErrors } from 'next-safe-action'
import { redirect } from 'next/navigation'

import { db } from '@/db'
import { projects } from "@/db/schema"
import { actionClient } from '@/lib/safe-action'
import { insertProjectSchema, type insertProjectSchemaType } from "@/zod-schemas/project"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export const deleteProjectAction = actionClient
    .metadata({ actionName: 'deleteProjectAction'})
    .schema(insertProjectSchema, {
        handleValidationErrorsShape: async (ve) => flattenValidationErrors(ve).fieldErrors,
    })
    .action(async ({ 
        parsedInput: project
    }: { parsedInput: insertProjectSchemaType }) => {

        const { isAuthenticated } = getKindeServerSession()

        const isAuth = await isAuthenticated()

        if (!isAuth) redirect('/login')

        // Existing customer
        const result = await db.delete(projects)
            .where(eq(projects.id, project.id!))
            .returning({ deletedId: projects.id })

        return { message: `Project ID #${result[0].deletedId} is deleted successfully`}
    })