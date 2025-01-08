import { ArrowRight } from "lucide-react";

import Link from "next/link"
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
    label: string,
    href?: string,
}

export function MailButton({
    label,
    href,
}: Props) {

    return (
        <Button 
        variant="mail"
        size="mail"
        aria-label={label}
        className="relative group flex items-center"
        title={label}
        asChild
        >
            {href ? (  
            <Link href={href} className="flex justify-center items-center" title="home">
            <h6 className="hidden text-base sm:block m-0 group-hover:transition group-hover:ease-in-out delay-150 group-hover:-translate-x-5 duration-200">
                {label}
            </h6>
            <FaArrowRight className="absolute right-0  opacity-0 group-hover:opacity-100 group-hover:transition group-hover:ease-in-out delay-150 group-hover:-translate-x-5 duration-200" />

        </Link>
            ) : (<ArrowRight size={44} strokeWidth={3} />)}
        </Button>
    )
}