"use client"

import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from 'next/image'
import { ArrowUpRight } from "lucide-react";
import { SkillCards } from "../SkillCards";

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
                        <h6 className="italic ">Je suis</h6>
                        <h1 className='text-6xl font-semibold font-black text-secondary italic'>
                            Designer d'interface
                        </h1>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-5 m-10 justify-center'>
                    <div className="flex gap-3 text-sm">
                        <Badge className="-rotate-5" variant='violetBeta'>App mobile</Badge>
                        <Badge className="rotate-5" variant='orange'>Site web</Badge>
                        <Badge className="-rotate-5" variant='rose'>Logiciel embarqué</Badge>
                        <Image 
                            src='/images/heart-svg.svg'
                            width={50}
                            height={70}
                            alt="Page not found"
                            priority={true}
                            title="Page Not Found"
                        />
                    </div>
                    <h3 className='text-2xl text-secondary'>Mettez <span className='font-bold'>l’utilisateur au cœur</span> de vos projets</h3>
                    <span className="text-xl">Je conçois des interfaces claires et intuitives pour faciliter le quotidien, résoudre des problèmes et créer des expériences engageantes.</span>
                    <div>
                        <Button onClick={handleScroll} variant="secondary" className="text-white rounded-full">Parlez-moi de votre projet</Button>
                    </div>
                </div>
            </div>
            <SkillCards />
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