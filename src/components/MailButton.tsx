import { ArrowRight } from "lucide-react";

import Link from "next/link"
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
    label: string,
    href?: string,
    isHovered: boolean;
    setIsHovered: (hover: boolean) => void,
    mailto: string
}

export function MailButton({
    label,
    href,
    isHovered,
    setIsHovered,
    mailto
}: Props) {

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (mailto) {
          e.preventDefault(); // Prevent default behavior
          window.location.href = mailto; // Open email client
        }
      };

    return (
        <Button 
        variant="mail"
        size="mail"
        aria-label={label}
        className={`relative group flex items-center ${isHovered ? 'transition-spacing hover:pl-10 ease-in-out delay-150 duration-300' : 'transition-spacing hover:pl-10 ease-in-out delay-150 duration-300'}`}
        title={label}
        asChild
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        >
            {href ? (  
            <Link href={mailto} className="flex  justify-center items-center" title="home">
            <span className={`hidden text-base sm:block m-0 ${isHovered ? 'transition ease-in-out delay-150 -translate-x-5 duration-300' : 'transition ease-in-out delay-150 duration-300'}`}>
                {label}
            </span>
            <FaArrowRight className={`absolute right-0 stroke-2 opacity-0 ${isHovered ? 'opacity-100 transition ease-in-out delay-150 -translate-x-5 duration-300' : 'transition opacity-0 ease-in-out delay-50 -translate-x-5 duration-200'}`} />
            <FaArrowRight className={`hidden opacity-0 ${isHovered ? 'transition ease-in-out delay-150 w-80 duration-300' : ''} `} />

        </Link>
            ) : (<ArrowRight size={44} strokeWidth={3} />)}
        </Button>
    )
}