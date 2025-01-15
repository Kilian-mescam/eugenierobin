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
                <FormItem className="w-full flex items-center gap-2">
                    <FormLabel
                        className="text-base w-1/3 mt-2"
                        htmlFor={nameInSchema}
                    >
                        {fieldTitle}
                    </FormLabel>

                    {items.map((item) => (
                         <FormField
                         key={item.id}
                         control={form.control}
                         name={nameInSchema}
                         render={({ field }) => {
                             return (
                             <FormItem
                                 key={item.id}
                                 className="flex flex-row items-start space-x-3 space-y-0"
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
                                 <FormLabel className="text-sm font-normal">
                                 {item.label}
                                 </FormLabel>
                             </FormItem>
                             )
                         }}
                         />
                    ))}
                    

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}