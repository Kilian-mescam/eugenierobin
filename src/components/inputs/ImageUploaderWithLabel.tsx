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

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setSelectedImage(file);
          setPreview(URL.createObjectURL(file)); // Image preview
        }
      };

      const handleUpload = async () => {
        if (!selectedImage) return;
    
        const formData = new FormData();
        formData.append('image', selectedImage);
    
        try {
          const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
          if (!res.ok) throw new Error('Upload failed');
          const data = await res.json();
          console.log('Uploaded successfully:', data);
        } catch (error) {
          console.error('Error uploading:', error);
        }
      };
  
    return (
        <FormField
            control={form.control}
            name={nameInSchema}
            render={({ field }) => (
                <FormItem>
                    <FormLabel
                        className="text-base"
                        htmlFor={nameInSchema}
                    >
                        {fieldTitle}
                    </FormLabel>

                    <FormControl>
                        <div className='flex flex-col gap-4'>
                            <Input
                                id={nameInSchema}
                                className={`w-full max-w-xs cursor-pointer border border-input disabled:text-blue-500 dark:disabled:text-green-500 disabled:opacity-75 ${className}`}
                                type="file" 
                                onChange={handleImageChange} 
                            />
                            {preview && <img src={preview} alt="Image preview" style={{ maxWidth: '300px' }} />}
                        </div>
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}