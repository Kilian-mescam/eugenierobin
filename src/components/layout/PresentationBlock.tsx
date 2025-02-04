"use client"

import { useState } from "react";
import { SkillCard } from "../SkillCard";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from 'next/image'
import { ArrowUpRight } from "lucide-react";

export function PresentationBlock() {

  const [scrolling, setScrolling] = useState(false);
  
    const handleScroll = () => {
        const projectsSection = document.getElementById("form");
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
        <div className="flex flex-col gap-5 items-center justify-center mt-20">
            <div className='flex'>
                <div className='w-1/2 h-72 px-10 flex items-center justify-center'>
                    <Link href="/"title="home">
                        <Image 
                            className="rounded-xl"
                            src="/images/logo-youjine.svg"
                            width={300}
                            height={300}
                            sizes="300px"
                            alt="Page not found"
                            priority={true}
                            title="Page Not Found"
                        />
                    </Link>
                    <div className="text-2xl rotate-[-0.2rad] mb-10">
                        <h6>Je suis</h6>
                        <h1 className='text-6xl font-black text-secondary'>
                            Designer d'interface
                        </h1>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-5 m-10 justify-center'>
                    <div className="flex gap-3 text-sm">
                        <Badge><span>Instagram</span><span><ArrowUpRight size={14} strokeWidth={3}/></span></Badge>
                        <Badge><span>Linkedin</span><span><ArrowUpRight size={14} strokeWidth={3}/></span></Badge>
                    </div>
                    <span className="text-xl">Je conçois des interfaces claires et intuitives pour faciliter le quotidien, résoudre des problèmes et créer des expériences engageantes.</span>
                    <div>
                        <Button onClick={handleScroll} variant="violet" className="text-white rounded-full">Parlez-moi de votre projet</Button>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <SkillCard className='bg-skillcard-ux-img bg-cover' imageBackground={"/images/skillcard-background.png"} alt="ux" image="/images/sun.svg" content="J’audite et conçois des interfaces pour simplifier la vie des utilisateurs et répondre efficacement à leurs besoins"></SkillCard>
                <SkillCard className='bg-skillcard-ui-img bg-cover' imageBackground={"/images/skillcard-background.png"} alt="ui" image="/images/trefle.svg" content="J’harmonise les designs en respectant votre charte graphique, les spécificités de votre plateforme"></SkillCard>
                <SkillCard className='bg-skillcard-branding-img  bg-cover' imageBackground={"/images/skillcard-background.png"} alt="branding" image="/images/blob.svg" content="Je crée des logos et des identités visuelles qui reflètent votre univers et plaisent à votre audience"></SkillCard>
            </div>
            <div className='py-7 bg-secondary flex flex-row h-40 items-center justify-around text-white w-full rounded-xl'>
                <Image 
                    src='/images/Prairy.svg'
                    width={100}
                    height={70}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
                <Image 
                    src='/images/Beaba.svg'
                    width={80}
                    height={70}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
                <Image 
                    src='/images/APRR.svg'
                    width={80}
                    height={70}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
                <Image 
                    src='/images/Aida.svg'
                    width={60}
                    height={50}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
                <Image 
                    src='/images/ecole-des-loisirs.svg'
                    width={150}
                    height={70}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
                <Image 
                    src='/images/Cyril.svg'
                    width={170}
                    height={70}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
           </div>
        </div>
    ) 
}