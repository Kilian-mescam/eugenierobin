import { LucideIcon } from "lucide-react";


import Link from "next/link"
import { Button } from "./ui/Button";

type Props = {
    icon: LucideIcon,
    label: string,
    href?: string,
}

export function MailButton({
    icon: Icon,
    label,
    href,
}: Props) {
    return (
        <Button 
        variant="outline"
        size="icon"
        aria-label={label}
        title={label}
        className="w-60 rounded-full text-sm text-black text-center hover:none"
        asChild
        >
            {href ? (  
            <Link href={href} className="flex justify-center items-center gap-2 ml-0" title="home">
            <h6 className="hidden sm:block text-md m-0 mt-1">
                {label}
            </h6>
        </Link>
            ) : (<Icon />)}
        </Button>
    )
}