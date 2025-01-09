import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from 'next/image'

type Props = {
    image: string,
    imageModified?: string
    label: string,
    content: string,
    className?: string
}

export function SkillCard({
    image,
    imageModified,
    label,
    content,
    className
}: Props) {
    return (
        <Card className="max-w-72">
            <div className="flex flex-col items-center">
                <Image 
                    className={className}
                    src={image}
                    width={250}
                    height={250}
                    sizes="300px"
                    alt={label}
                    priority={true}
                    title={label}
                />
            </div>
            <CardHeader>
                <CardTitle>{label}</CardTitle>
                <CardDescription>{content}</CardDescription>
            </CardHeader>
        </Card>
    )
}