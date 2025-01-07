import { ArrowRight } from "lucide-react";

import Link from "next/link"
import { Button } from "@/components/ui/button";

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
        className="group flex items-center"
        title={label}
        asChild
        >
            {href ? (  
            <Link href={href} className="flex justify-center items-center " title="home">
            <h6 className="hidden text-base sm:block m-0">
                {label}
            </h6>
            <ArrowRight size={28} strokeWidth={3}  className="w-0 hidden text-[0px] group-hover:w-6  group-hover:inline-block group-hover:animate-appearLeft"/>
            
            
        </Link>
            ) : (<ArrowRight size={44} strokeWidth={3} />)}
        </Button>
    )
}