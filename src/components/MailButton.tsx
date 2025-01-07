import { LucideIcon } from "lucide-react";

import Link from "next/link"
import { Button } from "@/components/ui/button";

type Props = {
    icon: LucideIcon,
    label: string,
    href?: string,
    isHovered?: boolean;
    setIsHovered: (hover: boolean) => void;
}

export function MailButton({
    icon: Icon,
    label,
    href,
    isHovered,
    setIsHovered
}: Props) {

    return (
        <Button 
        variant="mail"
        size="mail"
        aria-label={label}
        title={label}
        asChild
        onMouseEnter={() => setIsHovered(true)} // Use the parent's state setter
        onMouseLeave={() => setIsHovered(false)} // Use the parent's state setter
        >
            {href ? (  
            <Link href={href} className="flex justify-center items-center" title="home">
            <h6 className="hidden text-base sm:block m-0">
                {label}
            </h6>
            {isHovered ? <Icon className={`ml-2 transition duration-500 ease-in-out ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`} /> : null}
        </Link>
            ) : (<Icon />)}
        </Button>
    )
}