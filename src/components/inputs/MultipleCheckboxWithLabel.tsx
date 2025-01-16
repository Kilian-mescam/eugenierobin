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

                    <div className="grid grid-cols-2 gap-2 w-full">
                        {items.map((item) => (
                            <FormItem
                                key={item.id || item.label} // Ensure a unique key for each checkbox
                                className="flex flex-row items-center space-x-3 space-y-0"
                            >
                                <FormControl>
                                    <Checkbox
                                        checked={field.value?.includes(item.id)} // Ensure the checkbox reflects the current state
                                        onCheckedChange={(checked) => {
                                            // Update the form value when the checkbox is toggled
                                            const updatedValue = checked
                                                ? [...field.value, item.id] // Add the item to the selected array
                                                : field.value?.filter(
                                                      (value: string) => value !== item.id
                                                  ); // Remove the item from the selected array
                                            field.onChange(updatedValue); // Update form state
                                        }}
                                        disabled={disabled} // Optionally disable checkbox
                                    />
                                </FormControl>
                                <FormLabel className="text-lg font-normal">
                                    {item.label}
                                </FormLabel>
                            </FormItem>
                        ))}
                    </div>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}