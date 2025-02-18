"use client"

import Link from 'next/link'
import { MailButton } from './MailButton';
import { useState } from 'react';
import Image from 'next/image'

export function ClientHeader() {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <header className='h-14 p-6 top-0 z-20 '>
            <div className="flex h-8 items-center justify-end sm:justify-between w-full">
                <div className='hidden sm:block'>
                    <Link href="/"title="home">
                        <Image 
                            className="rounded-xl"
                            src="/images/logo-eugenie-robin.svg"
                            width={100}
                            height={100}
                            sizes="500px"
                            alt="Page not found"
                            priority={true}
                            title="Page Not Found"
                        />
                    </Link>
                </div>
                   
                <div className='flex mt-32 sm:mt-0 items-center gap-10 o'>
                    <Link href="/about" className="text-base font-medium flex justify-center items-center gap-2 ml-0" title="home">
                        Portfolio
                    </Link>
                    <Link href="/about" className="text-base font-medium flex justify-center items-center gap-2 ml-0" title="home">
                        A propos
                    </Link>
                    <div className='hidden sm:block '>
                        <MailButton
                            href="/" 
                            label="Contact"
                            isHovered={isHovered}
                            setIsHovered={setIsHovered}
                            mailto="mailto:eugenierobin.ui@gmail.com"
                        />
                    </div>
                </div>
            </div>
        </header>
    ) 
}