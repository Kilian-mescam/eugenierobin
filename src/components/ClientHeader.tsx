"use client"

import Link from 'next/link'
import { MailButton } from './MailButton';
import { useState } from 'react';

export function ClientHeader() {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <header className='h-14 p-6 top-0 z-20'>
            <div className="flex h-8 items-center justify-end w-full">
                <div className='flex items-center gap-10'>
                    <Link href="/about" className="flex justify-center items-center gap-2 ml-0" title="home">
                        <h6 className="hidden sm:block text-base m-0 mt-1">
                            Portfolio
                        </h6>
                    </Link>
                    <Link href="/about" className="flex justify-center items-center gap-2 ml-0" title="home">
                        <h6 className="hidden sm:block text-base m-0 mt-1">
                            A propos
                        </h6>
                    </Link>

                    <MailButton
                        href="/" 
                        label="eugenierobin.ui@gmail.com"
                        isHovered={isHovered}
                        setIsHovered={setIsHovered}
                        mailto="mailto:eugenierobin.ui@gmail.com"
                    />
                </div>
            </div>
        </header>
    ) 
}