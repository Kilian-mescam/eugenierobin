"use client"

import { useState } from "react";
import { SkillCard } from "../SkillCard";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function PresentationBlock() {

  const [scrolling, setScrolling] = useState(false);
  
    const handleScroll = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          setScrolling(true); // Set state to indicate scrolling is in progress
          projectsSection.scrollIntoView({
            behavior: "smooth",  // Smooth scroll
            block: "start",      // Align at the top of the section
          });
          // Optionally reset the state after the scroll
          setTimeout(() => setScrolling(false), 1000); // Assuming 1s duration for scroll
        }
      };

    return (
        <div className="flex flex-col gap-10 items-center justify-center">
            <div className="flex gap-3">
                <Badge>GRAPHISTE</Badge>
                <Badge>DESIGNER UX/UI</Badge>
                <Badge>FREELANCE</Badge>
            </div>
            <div className="text-center">
                <h1 className='text-6xl font-black text-secondary px-80'>
                    Je design des interfaces claires et intuitives
                </h1>
                <h4 className='mt-7 text-xl text-seconday font-medium'>
                    L'empathie pour améliorer le quotidien, trouver des solutions, générer des émotions
                </h4>
                <div className="pt-10">
                    <Button onClick={handleScroll} variant="secondary" className="text-white rounded-full">✦ Mes réalisations</Button>
                </div>
                <div className="flex justify-center gap-10 ">
                    <SkillCard label="IMAGE DE MARQUE" image="/images/blob.svg" content="Je crée des logos et des identités visuelles qui reflètent votre univers et plaisent à votre audience"></SkillCard>
                    <SkillCard className="pt-10" label="EXPERIENCE UTILISATEUR" image="/images/sun.svg" content="Je conçois des interfaces pour simplifier la vie des utilisateurs et répondre efficacement à leurs besoins"></SkillCard>
                    <SkillCard className="pt-5" label="DESIGN D'INTERFACE" image="/images/trefle.svg" content="J'harmonise les designes en respectant votre charte graphique, les spécialisatés de votre plateforme"></SkillCard>
                </div>
            </div>
            <div id="projects"></div>
        </div>
    ) 
}