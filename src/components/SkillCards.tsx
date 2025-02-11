import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import Image from 'next/image'
import { useState } from "react";

type Props = {
    image: string,
    imageBackground: string
    content: string,
    className?: string
    alt: string
    title: string
    label: string
}

export function SkillCards() {
    const [hoveredCard, setHoveredCard] = useState<{ [key: string]: boolean }>({});

    const handleMouseEnter = (id: string) => {
        setHoveredCard((prevState) => ({ ...prevState, [id]: true }));
    };

    const handleMouseLeave = (id: string) => {
        setHoveredCard((prevState) => ({ ...prevState, [id]: false }));
    };
    return (
        <div className="flex gap-5">
        <Card 
            id='1'
            className={cn(
                "cursor-pointer rounded-3xl h-[544px] w-full flex flex-col items-center justify-center bg-skillcard-ux-img bg-cover")}
            onMouseEnter={() => handleMouseEnter('1')}
            onMouseLeave={() => handleMouseLeave('1')}>
            <div className=" flex flex-col items-start mx-14 gap-6 relative">
                <div className='relative'>
                    <div className="absolute">
                        <Image 
                            className={cn("transition-all duration-700 ease-in-out transform" , hoveredCard['1'] ? "-translate-y-16 -rotate-45 opacity-0" : "opacity-100")}
                            src="/images/star6.svg"
                            width={180}
                            height={180}
                            sizes="200px"
                            alt="ux"
                            priority={true}
                        />
                        <h1 className={cn("italic text-white text-center text-3xl font-bold absolute top-20 left-16 transition-all duration-700 ease-in-out transform", hoveredCard['1'] ? "-translate-y-16" : "")}>UX</h1>
                    </div>
                    <div className="">
                        <Image 
                            className={cn("transition-all duration-700 ease-in-out transform" , hoveredCard['1'] ? "-translate-y-16 -rotate-45 opacity-10O" : "opacity-0")}
                            src="/images/star6-modified.svg"
                            width={180}
                            height={180}
                            sizes="200px"
                            alt="ux"
                            priority={true}
                        />
                        <h1 className={cn("italic text-white text-center text-3xl font-bold absolute top-20 left-16 transition-all duration-700 ease-in-out transform", hoveredCard['1'] ? "-translate-y-16" : "")}>UX</h1>
                    </div>
                </div>
                <h3
                    className={cn(
                        "absolute top-36 leading-8 font-light italic text-3xl text-white transition-all duration-700 ease-in-out transform", // Animation classes
                        hoveredCard['1'] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-0" // Opacity and translation on hover
                    )}
                >
                    Design d'expérience utilisateur
                </h3>
                <div className={cn('text-white text-lg transition-all duration-700 ease-in-out transform ', hoveredCard['1'] ? "translate-y-14" : "")}>
                    J’audite et conçois des interfaces pour simplifier la vie des utilisateurs et répondre efficacement à leurs besoins
                </div>
            </div>
        </Card>
        <Card 
            id='2'
            className={cn(
                "cursor-pointer rounded-3xl h-[544px] w-full flex flex-col items-center justify-center bg-skillcard-ui-img bg-cover"
            )}
            onMouseEnter={() => handleMouseEnter('2')}
            onMouseLeave={() => handleMouseLeave('2')}>
            <div className=" flex flex-col items-start mx-14 gap-6 relative">
                <div className="relative">
                    <Image 
                        className={cn("transition-all duration-700 ease-in-out transform translate-y-2" , hoveredCard['2'] ? "-translate-y-16 rotate-90" : "")}
                        src={hoveredCard['2'] ? "/images/star4-modified.svg" : "/images/star4.svg"}
                        width={180}
                        height={180}
                        sizes="200px"
                        alt='ui'
                        priority={true}
                    />
                    <h1 className={cn("italic text-white text-center text-3xl font-bold absolute top-20 left-18 transition-all duration-700 ease-in-out transform", hoveredCard['2'] ? "-translate-y-16" : "")}>UI</h1>
                </div>
                <h3
                    className={cn(
                        "w-1/2 absolute top-38 leading-8 font-light italic text-3xl text-white transition-all duration-700 ease-in-out transform", // Animation classes
                        hoveredCard['2'] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-0" // Opacity and translation on hover
                    )}
                >
                    Design d'interface utilisateur
                </h3>
                <div className={cn('text-white text-lg transition-all duration-700 ease-in-out transform ', hoveredCard['2'] ? "translate-y-16" : "")}>J’harmonise les designs en respectant votre charte graphique, les spécificités de votre plateforme</div>
            </div>
        </Card>
        <Card 
            id='3'
            className={cn(
                "cursor-pointer rounded-3xl h-[544px] w-full flex flex-col items-center justify-center bg-skillcard-branding-img bg-cover")}
            onMouseEnter={() => handleMouseEnter('3')}
            onMouseLeave={() => handleMouseLeave('3')}>
            <div className=" flex flex-col items-start mx-14 gap-6 relative">
                <div className="relative">
                    <Image 
                        className={cn("transition-all duration-700 ease-in-out transform translate-y-2" , hoveredCard['3'] ? "-translate-y-10 rotate-90" : "")}
                        src={hoveredCard['3'] ? "/images/star3-modified.svg" : "/images/star3.svg"}
                        width={180}
                        height={180}
                        sizes="200px"
                        alt="branding"
                        priority={true}
                    />
                    <h1 className={cn("italic text-white text-center text-3xl font-bold absolute top-20 left-7 transition-all duration-700 ease-in-out transform", hoveredCard['3'] ? "-translate-y-14" : "")}>Branding</h1>
                </div>
                <h3
                    className={cn(
                        "absolute top-40 leading-8 font-light italic text-3xl text-white transition-all duration-700 ease-in-out transform", // Animation classes
                        hoveredCard['3'] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-0" // Opacity and translation on hover
                    )}
                >
                    Image de marque
                </h3>
                <div className={cn('text-white text-lg transition-all duration-700 ease-in-out transform ', hoveredCard['3'] ? "translate-y-8" : "")}>Je crée des logos et des identités visuelles qui reflètent votre univers et plaisent à votre audience</div>
            </div>
        </Card>
        </div>
    )
}