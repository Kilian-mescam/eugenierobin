"use client"

import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from 'next/image'
import { SkillCards } from "../SkillCards";
import { BrandsPanel } from "./BrandPanel";

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
        <div className="flex flex-col sm:gap-5 items-center justify-center sm:mt-20">
            <div className='flex flex-col md:flex-row items-center'>
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
                <div className='px-10 flex flex-col gap-5 sm:m-10 justify-center'>
                    <div className="flex flex-col sm:flex-row gap-3 text-sm mx-8">
                        <div className="flex gap-3 w-full justify-between">
                            <Badge className="-rotate-5 min-w-32" variant='violetBeta'>App mobile</Badge>
                            <Badge className="rotate-5 min-w-24" variant='orange'>Site web</Badge>
                        </div>
                        <div className="flex gap-3 justify-between w-full">
                            <Badge className="-rotate-5 min-w-48" variant='rose'>Logiciel embarqué</Badge>
                            <Image 
                                src='/images/heart-svg.svg'
                                width={50}
                                height={70}
                                alt="Page not found"
                                priority={true}
                                title="Page Not Found"
                            />
                        </div>
                    </div>
                    <h3 className='text-2xl text-secondary'>Mettez <span className='font-bold'>l’utilisateur au cœur</span> de vos projets</h3>
                    <span className="text-xl">Je conçois des interfaces claires et intuitives pour faciliter le quotidien, résoudre des problèmes et créer des expériences engageantes.</span>
                    <div className="flex sm:justify-start justify-center">
                        <Button onClick={handleScroll} variant="secondary" className="text-white rounded-full h-12">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1673_3476)">
                                <path d="M5.26672 11.3936L1.82359 10.1249C1.72865 10.0898 1.64673 10.0265 1.58888 9.94349C1.53102 9.86046 1.5 9.76169 1.5 9.66049C1.5 9.55929 1.53102 9.46052 1.58888 9.37749C1.64673 9.29446 1.72865 9.23116 1.82359 9.19611L5.26672 7.92736L6.53547 4.48424C6.57051 4.3893 6.63381 4.30738 6.71684 4.24952C6.79987 4.19166 6.89864 4.16064 6.99984 4.16064C7.10104 4.16064 7.19981 4.19166 7.28284 4.24952C7.36587 4.30738 7.42917 4.3893 7.46422 4.48424L8.73297 7.92736L12.1761 9.19611C12.271 9.23116 12.3529 9.29446 12.4108 9.37749C12.4687 9.46052 12.4997 9.55929 12.4997 9.66049C12.4997 9.76169 12.4687 9.86046 12.4108 9.94349C12.3529 10.0265 12.271 10.0898 12.1761 10.1249L8.73297 11.3936L7.46422 14.8367C7.42917 14.9317 7.36587 15.0136 7.28284 15.0715C7.19981 15.1293 7.10104 15.1603 6.99984 15.1603C6.89864 15.1603 6.79987 15.1293 6.71684 15.0715C6.63381 15.0136 6.57051 14.9317 6.53547 14.8367L5.26672 11.3936Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11 1.66064V4.66064" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 5.16064V7.16064" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.5 3.16064H12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13 6.16064H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1673_3476">
                                <rect width="16" height="16" fill="white" transform="translate(0 0.660645)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            Parlez-moi de votre projet
                        </Button>
                    </div>
                </div>
            </div>
            <SkillCards />
            <BrandsPanel />
        </div>
    ) 
}