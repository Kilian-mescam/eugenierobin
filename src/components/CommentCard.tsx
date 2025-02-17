import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Props = {
    content: string,
    job: string,
    name: string,
}

export function CommentCard ({
    content,
    name,
    job
}: Props) {
    return (
        <Card className="w-full h-full py-6">
            <CardContent className="font-archivo text-sm text-dark">
                    {content}
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className='flex gap-4 items-center'>
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col font-thin'>
                        <span className='font-bold'>{name}</span>
                        <span className='italic'>{job}</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}