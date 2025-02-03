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
import { TextAreaWithLabel } from "@/components/inputs/TextAreaWithLabel"
import { ImageUploaderWithLabel } from "@/components/inputs/ImageUploaderWithLabel"

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
        <div className="flex flex-col">
            <DisplayServerActionResponse result={saveResult} />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submitForm)}
                    className="flex flex-col gap-4 md:gap-8"
                >
                    <div className="flex flex-col gap-8">
                        <div className='flex flex-col'>
                            <div className="flex">
                                <div className="flex flex-col gap-4 w-1/2">
                                    <InputWithLabel<insertProjectSchemaType>
                                        fieldTitle="Titre"
                                        nameInSchema="title"
                                        className="w-full"
                                    />
                                    <InputWithLabel<insertProjectSchemaType>
                                        fieldTitle="Nom du client"
                                        nameInSchema="clientName"
                                    />
                                </div>

                                <div className='w-1/2 px-5'>
                                    <ImageUploaderWithLabel<insertProjectSchemaType>
                                        fieldTitle="Image du client"
                                        nameInSchema="imageUrl"
                                        image={project?.imageUrl}
                                    /> 
                                </div>

                                   
                            </div>
                            <TextAreaWithLabel<insertProjectSchemaType>
                                        fieldTitle="Description"
                                        nameInSchema="description"
                                        className='h-full'
                                    />     
                        </div>
                        
                    </div>
                    <div className="flex flex-col gap-4 w-full max-w-xs">
                        <div className="flex gap-2 mt-10">
                            <Button
                                type="submit"
                                className="w-3/4 text-white"
                                variant="secondary"
                                title="Save"
                                disabled={isSaving}
                            >
                                {isSaving ? (
                                    <>
                                        <LoaderCircle className="animate-spin" /> Saving
                                    </>
                                ) : "Save" }
                            </Button>
                        </div>
                    </div>

                </form>
            </Form>

        </div>
    )
}