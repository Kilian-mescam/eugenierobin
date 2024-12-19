"use server"

import { eq } from "drizzle-orm"
import { flattenValidationErrors } from 'next-safe-action'
import { redirect } from 'next/navigation'

import { db } from '@/db'
import { projects } from "@/db/schema"
import { actionClient } from '@/lib/safe-action'
import { insertProjectSchema, type insertProjectSchemaType } from "@/zod-schemas/project"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export const saveProjectAction = actionClient
    .metadata({ actionName: 'saveProjectAction'})
    .schema(insertProjectSchema, {
        handleValidationErrorsShape: async (ve) => flattenValidationErrors(ve).fieldErrors,
    })
    .action(async ({ 
        parsedInput: project
    }: { parsedInput: insertProjectSchemaType }) => {

        const { isAuthenticated } = getKindeServerSession()

        const isAuth = await isAuthenticated()

        if (!isAuth) redirect('/login')

        if (project.id === 0) {
            const result = await db.insert(projects).values({
                title: project.title,
                clientName: project.clientName,
                description: project.description,
                imageUrl: project.imageUrl
            }).returning({ insertedId: projects.id })

            return { message: `Project ID #${result[0].insertedId} created successfully`}
        }

        // Existing customer
        const result = await db.update(projects)
            .set({
                title: project.title,
                clientName: project.clientName,
                description: project.description,
                imageUrl: project.imageUrl
            })
            .where(eq(projects.id, project.id!))
            .returning({ updatedId: projects.id })

        return { message: `Project ID #${result[0].updatedId} updated successfully`}
    })