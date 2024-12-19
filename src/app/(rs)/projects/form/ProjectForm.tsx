"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"

import { insertProjectSchema, type insertProjectSchemaType, type selectProjectSchemaType } from "@/zod-schemas/project"
import { InputWithLabel } from "@/components/inputs/InputWithLabel"

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"

import { StatesArray } from "@/constants/StateArray"
import { saveProjectAction } from "@/app/actions/saveProjectAction"
import { useAction } from 'next-safe-action/hooks'
import { useToast } from "@/hooks/use-toast"
import { LoaderCircle } from 'lucide-react'
import { DisplayServerActionResponse } from "@/components/DisplayServerActionResponse"

type Props = {
    project?: selectProjectSchemaType,
}

export default function ProjectForm({ project }: Props) {
    const { getPermission, getPermissions, isLoading } = useKindeBrowserClient()
    const isManager = !isLoading && getPermission('manager')?.isGranted

    const permObj = getPermissions()
    const isAuthorized = !isLoading && permObj.permissions.some(perm => perm === 'manager' || perm === 'admin')

    const  { toast } = useToast();

    const defaultValues: insertProjectSchemaType = {
        id: project?.id ?? 0,
        title: project?.title ?? '',
        clientName: project?.clientName ?? '',
        description: project?.description ?? '',
        imageUrl: project?.imageUrl ?? ''
    }

    const form = useForm<insertProjectSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(insertProjectSchema),
        defaultValues,
    })

    const { 
        execute: executeSave,
        result: saveResult,
        isPending: isSaving,
        reset: resetSaveAction
    } = useAction(saveProjectAction, {
        onSuccess({ data }) {
            if (data?.message) {
                toast({
                    variant: "default",
                    title: "Success!",
                    description: data?.message,
                })
            }
        },
        onError({ error }) {
            toast({
                variant: "destructive",
                title: "Error!",
                description: "Save Failled",
            })
        }
    })

    async function submitForm(data: insertProjectSchemaType) {
        executeSave(data)
    }

    return (
        <div className="flex flex-col gap-1 sm:px-8">
            <DisplayServerActionResponse result={saveResult} />
            <div>
                <h2 className="text-2xl font-bold">
                    {project?.id ? "Edit" : "New"} Customer {project?.id ? `#${project.id}`: "Form"}
                </h2>
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submitForm)}
                    className="flex flex-col md:flex-row gap-4 md:gap-8"
                >
                    <div className="flex flex-col gap-4 w-full max-w-xs">
                        <InputWithLabel<insertProjectSchemaType>
                            fieldTitle="Titre"
                            nameInSchema="title"
                        />
                        <InputWithLabel<insertProjectSchemaType>
                            fieldTitle="Nom du client"
                            nameInSchema="clientName"
                        />
                        <InputWithLabel<insertProjectSchemaType>
                            fieldTitle="Description"
                            nameInSchema="description"
                        />
                    </div>

                    <div className="flex flex-col gap-4 w-full max-w-xs">
                        

                        <div className="flex gap-2">
                            <Button
                                type="submit"
                                className="w-3/4"
                                variant="default"
                                title="Save"
                                disabled={isSaving}
                            >
                                {isSaving ? (
                                    <>
                                        <LoaderCircle className="animate-spin" /> Saving
                                    </>
                                ) : "Save" }
                            </Button>

                            <Button
                                type="button"
                                variant="destructive"
                                title="Reset"
                                onClick={() => { 
                                    form.reset(defaultValues)
                                    resetSaveAction()
                                }}
                            >
                                Reset
                            </Button>
                        </div>
                    </div>

                </form>
            </Form>

        </div>
    )
}