"use client"

import Link from 'next/link'
import Image from 'next/image'
import { MailButton } from './MailButton';
import { useState } from 'react';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react';

export function BackHeader() {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <header className='h-32 p-6 top-0 z-20'>
            <div className="flex h-8 items-center justify-between w-full">

                <div className='flex items-center gap-2'>
                <Link href="/"title="home">
                    <Image 
                        className="mt-10 rounded-xl"
                        src="/images/logo-youjine.svg"
                        width={200}
                        height={200}
                        sizes="200px"
                        alt="Page not found"
                        priority={true}
                        title="Page Not Found"
                    />
                </Link>
                
                </div>

                <div className='flex items-center gap-10'>
                    <Button variant="secondary" size="icon" aria-label='logout' title='Logout' className='rounded-full w-full text-white px-5' asChild>
                        <LogoutLink>
                            <LogOut />
                            Se déconnecter
                        </LogoutLink>
                    </Button>
                </div>
            </div>
        </header>
    ) 
}