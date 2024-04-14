import { Socials } from '@/data'
import Image from 'next/image'
import React from 'react'

function Navbar() {
    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001447] backdrop-blur-md z-50 px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href="#" className='h-auto w-auto flex flex-row items-center'>
                    {/* <Image
                        src="/logo.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className='cursor-pointer hover:animate-slowspin'
                    /> */}
                    <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                        Geovane Araujo Dev
                    </span>
                </a>

                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <div className='flex w-full h-auto items-center justify-between font-semibold border border-[#7042f861] text-gray-300 bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full'>
                        <a href="#about-me" className='cursor-pointer'>Sobre mim</a>
                        <a href="#skills" className='cursor-pointer'>Habilidades</a>
                        <a href="#projetos" className='cursor-pointer'>Projetos</a>
                    </div>
                </div>

                <div className='flex flex-row gap-5 text-white'>
                    {Socials?.map((social): any => {
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={24}
                            height={24}
                        />
                    })}
                </div>

            </div>
        </div>
    )
}

export default Navbar