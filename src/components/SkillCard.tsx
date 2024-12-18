import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from 'next/image'

type Props = {
    image: string,
    imageModified?: string
    label: string,
    content: string,
}

export function SkillCard({
    image,
    imageModified,
    label,
    content,
}: Props) {
    return (
        <Card className="max-w-72">
            <div className="flex flex-col items-center">
                <Image 
                    className="mt-10 rounded-xl"
                    src={image}
                    width={200}
                    height={200}
                    sizes="200px"
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