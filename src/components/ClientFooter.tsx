import RequestForm from '@/app/RequestForm'
import Image from 'next/image'

export function ClientFooter() {
    return (
        <footer className='bg-secondary bottom-0'>
           <div className='text-white flex justify-between p-32'>
                <div className='w-1/4 flex flex-col gap-4'>
                    <Image 
                        className="rounded-xl"
                        src="/images/flower.svg"
                        width={150}
                        height={150}
                        sizes="150px"
                        alt="Page not found"
                        priority={true}
                        title="Page Not Found"
                    />
                    <h1 className='text-4xl font-bold'>Vous avez un projet ?</h1>

                    <h6>Décrivez-le moi, j’ai peut-être les compétences qu’il vous faut !</h6>

                    <div className='flex flex-row'>
                        <Image 
                            className="rounded-xl"
                            src="/images/dribbble.png"
                            width={75}
                            height={75}
                            sizes="75px"
                            alt="Page not found"
                            priority={true}
                            title="Page Not Found"
                        />
                        <Image 
                            className="rounded-xl"
                            src="/images/In.png"
                            width={75}
                            height={75}
                            sizes="75px"
                            alt="Page not found"
                            priority={true}
                            title="Page Not Found"
                        />
                    </div>
                </div>
                <div className='w-3/4 p-10'>
                    <RequestForm />
                </div>
           </div>
           <div className='border-t botder-b border py-7 flex flex-row items-center justify-around text-white'>
                <Image 
                    src='/images/Prairy.png'
                    width={100}
                    height={70}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
                <Image 
                    src='/images/Beaba.png'
                    width={80}
                    height={70}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
                <Image 
                    src='/images/APRR.png'
                    width={80}
                    height={70}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
                <Image 
                    src='/images/Aida.png'
                    width={60}
                    height={50}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
                <Image 
                    src='/images/ecole-des-loisirs.png'
                    width={150}
                    height={70}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
                <Image 
                    src='/images/Cyril.png'
                    width={170}
                    height={70}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
           </div>
           <div className='flex justify-between text-white px-32 py-20'>
                <div>
                    <Image 
                    src='/images/Logo-small.png'
                    width={110}
                    height={70}
                    alt="Page not found"
                    priority={true}
                    title="Page Not Found"
                />
                </div>
                <div className='flex flex-row'>
                        <Image 
                            className="rounded-xl"
                            src="/images/dribbble.png"
                            width={75}
                            height={75}
                            sizes="75px"
                            alt="Page not found"
                            priority={true}
                            title="Page Not Found"
                        />
                        <Image 
                            className="rounded-xl"
                            src="/images/In.png"
                            width={75}
                            height={75}
                            sizes="75px"
                            alt="Page not found"
                            priority={true}
                            title="Page Not Found"
                        />
                </div>
           </div>
           <div className='flex justify-between text-white px-32 py-10'>
                <div>Tous droits réservés Eugénie Robin 2025</div>
                <div>Website by Kilian Mescam</div>
           </div>
        </footer>
    ) 
}