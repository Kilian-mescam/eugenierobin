"use client"

import { useFormContext } from "react-hook-form"

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { Checkbox } from '@/components/ui/checkbox'
import { ItemType } from "@/types"

type Props<S> = {
    items: ItemType[]
    fieldTitle: string,
    nameInSchema: keyof S & string,
    disabled?: boolean;
}

export function MultipleCheckboxWithLabel<S>({
    items, fieldTitle, nameInSchema, disabled = false
}: Props<S>) {
    const form = useFormContext()

    return (
        
        <FormField
            control={form.control}
            name={nameInSchema}
            render={({ field }) => (
                <FormItem className="w-full flex flex-col items-start mt-24">
                    <FormLabel
                        className="text-base"
                        htmlFor={nameInSchema}
                    >
                        {fieldTitle}
                    </FormLabel>

                    <div className='grid grid-cols-2 gap-2 w-full'>
                        {items.map((item) => (
                            <FormField
                            key={item.id}
                            control={form.control}
                            name={nameInSchema}
                            render={({ field }) => {
                                return (
                                <FormItem
                                    key={item.id}
                                    className="flex flex-row items-center space-x-3 space-y-0"
                                >
                                    <FormControl>
                                    <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                        return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                (value: string) => value !== item.id
                                                )
                                            )
                                        }}
                                    />
                                    </FormControl>
                                    <FormLabel className="text-lg font-normal">
                                    {item.label}
                                    </FormLabel>
                                </FormItem>
                                )
                            }}
                            />
                        ))}
                    </div>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}