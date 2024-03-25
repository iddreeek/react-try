import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const ProjectCards = ({ title, src, desc, stack, link }) => {
    return (
        <main className=' w-full h-full flex items-center justify-center'>
            <div className='h-full w-[80%] flex flex-col justify-center items-center text-black'>
                <div className='h-[20%] p-4 font-bold text-xl text-green-400'>
                    <Link href={link}>{title}</Link>
                </div>
                <div className='w-full h-full p-4 relative'>
                    <Image src={src} alt={title} fill className=' object-contain'></Image>
                </div>
                <div className='h-[15%] p-4 text-lg text-green-500 lato flex justify-center items-center gap-2'>
                    {stack.map((s)=>(
                        <div key={s.ID} className=' border-2 border-green-400 rounded-lg py-1 px-4 text-green-400 shadow-inner shadow-green-400 flex justify-center items-center font-bold lato text-sm'>{s.Icon}<span>{s.Tech}</span></div>
                        
                    ))}
                </div>
                <div className='h-[15%] p-4 text-lg text-green-500 lato break-words'>
                    {desc}
                </div>
            </div>
        </main>
    );
};