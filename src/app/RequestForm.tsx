"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"

import { InputWithLabel } from "@/components/inputs/InputWithLabel"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useAction } from 'next-safe-action/hooks'
import { useToast } from "@/hooks/use-toast"
import { LoaderCircle } from 'lucide-react'
import { DisplayServerActionResponse } from "@/components/DisplayServerActionResponse"
import { EmailRequestSchemaType, emailRequestSchema, serviceOptions } from "@/zod-schemas/request"
import { Checkbox } from "@radix-ui/react-checkbox"  
import { MultipleCheckboxWithLabel } from "@/components/inputs/MultipleCheckboxWithLabel"

export default function RequestForm() {
    const { isLoading } = useKindeBrowserClient()
    const  { toast } = useToast();

    const defaultValues: EmailRequestSchemaType = {
        selectedServices: [],
        name: '',
        companyName: '',
        email: '',
        description: '',
    }

    const form = useForm<EmailRequestSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(emailRequestSchema),
        defaultValues,
    })

    const { 
        execute: executeSave,
        result: saveResult,
        isPending: isSaving,
    } = useAction(async (data: EmailRequestSchemaType) => {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    
        if (!response.ok) {
            throw new Error('Failed to send email');
        }
    
        return await response.json();
    }, {
        // onSuccess({ data }) {
        //     if (data?.message) {
        //         toast({
        //             variant: "default",
        //             title: "Success!",
        //             description: data?.message,
        //         })
        //     }
        // },
        // onError({ error }) {
        //     toast({
        //         variant: "destructive",
        //         title: "Error!",
        //         description: "Save Failled",
        //     })
        // }
    })

    async function submitForm(data: EmailRequestSchemaType) {
        executeSave(data)
    }

    return (
        <div className="flex flex-col gap-1 sm:px-8">
            {/* <DisplayServerActionResponse result={saveResult} /> */}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submitForm)}
                    className="flex flex-col md:flex-row gap-4 md:gap-8"
                >
                    <div className="flex flex-col gap-4 w-full">
                    
                        <MultipleCheckboxWithLabel<EmailRequestSchemaType>
                            fieldTitle="Votre demande concerne"
                            nameInSchema="selectedServices"
                            items={serviceOptions}                           
                        />

                        <InputWithLabel<EmailRequestSchemaType>
                            fieldTitle="Name"
                            nameInSchema="name"
                        />
                        <InputWithLabel<EmailRequestSchemaType>
                            fieldTitle="companyName"
                            nameInSchema="companyName"
                        />
                        <InputWithLabel<EmailRequestSchemaType>
                            fieldTitle="email"
                            nameInSchema="email"
                        />
                        <InputWithLabel<EmailRequestSchemaType>
                            fieldTitle="description"
                            nameInSchema="description"
                        />
                       
                        <div className="flex gap-2">
                            <Button
                                type="submit"
                                className="text-black w-3/4"
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
                        </div>
                    </div>

                </form>
            </Form>

        </div>
    )
}