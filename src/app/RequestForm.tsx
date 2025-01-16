"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"

import { CustomInputWithLabel } from "@/components/inputs/CustomInputWithLabel"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useAction } from 'next-safe-action/hooks'
import { useToast } from "@/hooks/use-toast"
import { LoaderCircle } from 'lucide-react'
import { DisplayServerActionResponse } from "@/components/DisplayServerActionResponse"
import { EmailRequestSchemaType, emailRequestSchema, serviceOptions } from "@/zod-schemas/request"
import { MultipleCheckboxWithLabel } from "@/components/inputs/MultipleCheckboxWithLabel"
import { sendEmailAction } from "./actions/sendEmailAction"

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
    } = useAction(sendEmailAction, {
        onSuccess({ data } ) {
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

    function submitForm(data: EmailRequestSchemaType) {
        console.log("executeSave", executeSave);
        executeSave(data)
    }

    return (
        <div className="flex flex-col sm:px-8">
            <DisplayServerActionResponse result={saveResult} />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(submitForm)}
                    className="flex flex-col md:flex-row gap-4 md:gap-8 px-10"
                >
                    <div className="flex flex-col gap-10 w-full">
                    

                        <MultipleCheckboxWithLabel<EmailRequestSchemaType>
                            fieldTitle="Votre demande concerne"
                            nameInSchema="selectedServices"
                            items={serviceOptions}                           
                        />


                        <div className="flex flex-col gap-4 w-full">
                            <CustomInputWithLabel<EmailRequestSchemaType>
                                fieldTitle="Nom, prénom"
                                nameInSchema="name"
                            />
                            <CustomInputWithLabel<EmailRequestSchemaType>
                                fieldTitle="Entreprise"
                                nameInSchema="companyName"
                            />
                            <CustomInputWithLabel<EmailRequestSchemaType>
                                fieldTitle="Email*"
                                nameInSchema="email"
                            />
                            <CustomInputWithLabel<EmailRequestSchemaType>
                                fieldTitle="Décrivez-moi votre projet"
                                nameInSchema="description"
                            />
                        </div>
                       
                        <div className="flex gap-2">
                            <Button
                                type="submit"
                                className="text-black text-white"
                                variant="violet"
                                title="Envoyer ma demande"
                                disabled={isSaving}
                            >
                                {isSaving ? (
                                    <>
                                        <LoaderCircle className="animate-spin" /> Saving
                                    </>
                                ) : "Envoyer ma demande" }
                            </Button>
                        </div>
                    </div>

                </form>
            </Form>

        </div>
    )
}