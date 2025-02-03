import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from 'next/image'

type Props = {
    image: string,
    imageBackground: string
    imageModified?: string
    content: string,
    className?: string
    alt: string
    object: string
}

export function SkillCard({
    image,
    imageModified,
    imageBackground,
    content,
    className,
    alt,
    object
}: Props) {
    return (
        <Card className="relative rounded-3xl h-[544px] w-full flex flex-col items-center justify-center">
            <img src={imageBackground} alt={alt} className={` h-full w-full rounded-2xl ${object}`} />
            <div className="absolute flex flex-col items-start mx-14 gap-6">
                <Image 
                    className={className}
                    src={image}
                    width={200}
                    height={200}
                    sizes="200px"
                    alt={alt}
                    priority={true}
                />
                <div className='text-white text-lg'>{content}</div>
            </div>
        </Card>
    )
}