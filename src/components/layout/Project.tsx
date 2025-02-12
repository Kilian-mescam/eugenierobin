"use client"

import { selectProjectSchemaType } from "@/zod-schemas/project";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
    project?: selectProjectSchemaType,
}

export default function Project({ project }: Props) {
    if (!project) return null; // In case project data is missing
         // States to track hover for each image
         const [hoveredImage, setHoveredImage] = useState<boolean>(false);

         // Function to handle mouse enter
         const handleMouseEnter = () => {
             setHoveredImage(true);
         };
     
         // Function to handle mouse leave
         const handleMouseLeave = () => {
             setHoveredImage(false);
         };

    return (
        <div className="relative py-3 text-white">
            <img src={project.imageUrl} alt={project.title} className="object-cover h-screen w-full rounded-2xl relative" />
            <div className={cn("absolute inset-0 rounded-2xl top-3 bottom-3 opacity-50", hoveredImage ? "bg-[radial-gradient(circle_at_center,_orange_0%,_#7F00FF_100%)]" : "bg-gradient-to-r from-black/50 to-transparent")} ></div>
            
            <div 
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={handleMouseLeave}
                className="absolute top-1/4 ml-20 flex flex-col gap-10 w-1/2 cursor-pointer"
            >

                <div className={cn("flex gap-3 transition-all duration-500 ease-in-out transform", hoveredImage ? "-translate-y-4" : "")}>
                    <Badge variant="transparent">UX/UI</Badge>
                    <Badge variant="transparent">BRANDING</Badge>
                    <Badge variant="transparent">CONSEIL</Badge>
                </div>

                <div className=" flex flex-col gap-5">
                    <h1 className={cn('text-[52px] italic text-5xl font-semibold font-white transition-all duration-500 ease-in-out transform ', hoveredImage ? "-translate-y-2 rotate-[-0.05rad]" : "")}>{project.title}</h1>
                    <p className={cn("font-archivo font-normal text-sm text-base duration-500 ease-in-out transform", hoveredImage ? "translate-y-4" : "")}>{project.description}</p>
                </div>
                
                <div className={cn('duration-500 ease-in-out transform', hoveredImage ? "translate-y-4" : "")}>
                    <Button variant="secondary" className="text-white rounded-full">
                        <Link href={`/portfolio/project/${project.id}`}>Découvrir le projet</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
