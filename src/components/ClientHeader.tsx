import { ArrowRight } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image'
import { MailButton } from './MailButton';

export function ClientHeader() {
    return (
        <header className='animate-slide h-40 p-6 top-0 z-20  bg-primary'>
            <div className="flex h-8 items-center justify-between w-full">

                <div className='flex items-center gap-2'>
                <Image 
                    className="mt-10 rounded-xl"
                    src="/images/logo-youjine.png"
                    width={200}
                    height={200}
                    sizes="200px"
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />

                </div>

                <div className='flex items-center gap-10'>
                <Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="home">
                    <h6 className="hidden sm:block text-md m-0 mt-1">
                        A propos
                    </h6>
                </Link>

                <MailButton href="/customers" label="eugenierobin.ui@gmail.com" icon={ArrowRight} />
                </div>
            </div>
        </header>
    ) 
}