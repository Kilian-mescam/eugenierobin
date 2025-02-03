import { useFormContext } from "react-hook-form"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { InputHTMLAttributes, useState } from "react"
import { ImagePlus } from "lucide-react";
import { useDropzone } from "react-dropzone";
import React from "react";

type Props<S> = {
    fieldTitle: string,
    nameInSchema: keyof S & string,
    className?: string,
    image?: string,
} & InputHTMLAttributes<HTMLInputElement>

export function ImageUploaderWithLabel<S>({
    fieldTitle, nameInSchema, className, image, ...props
} : Props<S>) {
    const form = useFormContext()
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(image ?? null);

    const onDrop = React.useCallback(
        (acceptedFiles: File[]) => {
          const reader = new FileReader();
          try {
            reader.onload = () => setPreview(reader.result as string);
            reader.readAsDataURL(acceptedFiles[0]);
            form.setValue("image", acceptedFiles[0]);
            form.clearErrors("image");
          } catch (error) {
            setPreview(null);
            form.resetField("image");
          }
        },
        [form],
      );

      const { getRootProps, getInputProps, isDragActive, fileRejections } =
      useDropzone({
        onDrop,
        maxFiles: 1,
        maxSize: 1000000000,
        accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
      });
  
    return (
        <FormField
            control={form.control}
            name={nameInSchema}
            render={() => (
                <FormItem className="mx-auto">
                  <FormLabel
                    className={`${
                      fileRejections.length !== 0 && "text-destructive"
                    }`}
                  >
                    <FormLabel
                        className="text-base"
                        htmlFor={nameInSchema}
                    >
                        {fieldTitle}
                    </FormLabel>
                  </FormLabel>
                  <FormControl>
                    <div
                      {...getRootProps()}
                      className="mx-auto  flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-foreground p-8 shadow-sm shadow-foreground"
                    >
                      {preview && (
                        <img
                          src={preview as string}
                          alt="Uploaded image"
                          className="max-h-[200px] rounded-lg"
                        />
                      )}
                      <ImagePlus
                        className={`size-20 ${preview ? "hidden" : "block"}`}
                      />
                      <Input {...getInputProps()} type="file" />
                      {isDragActive ? (
                        <p>Drop the image!</p>
                      ) : (
                        <p>Click here or drag an image to upload it</p>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage>
                    {fileRejections.length !== 0 && (
                      <p>
                        Image must be less than 1MB and of type png, jpg, or jpeg
                      </p>
                    )}
                  </FormMessage>
                </FormItem>
              )}
        />
    )
}