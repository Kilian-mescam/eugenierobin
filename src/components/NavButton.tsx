import { LucideIcon } from "lucide-react";


import Link from "next/link"
import { Button } from "@/components/ui/button";

type Props = {
    icon?: LucideIcon,
    label: string,
    href?: string,
}

export function NavButton({
    icon: Icon,
    label,
    href,
}: Props) {
    return (
        <Button 
        variant="secondary"
        size="icon"
        aria-label={label}
        title={label}
        className="text-white bg-secondary rounded-full"
        asChild
        >
            {href && Icon && (  
            <Link href={href}>
                <Icon />
            </Link>
            )}
        </Button>
    )
}