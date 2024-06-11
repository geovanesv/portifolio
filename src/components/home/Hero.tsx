"use client";
import React from 'react'
import HeroContent from './HeroContent'

export default function Home() {
    return (
        <div className='relative flex flex-col h-full w-full' >
            {/* <video
                autoPlay
                muted
                loop
                className='rotate-180 absolute top-[-260px] left-0 z-[1] w-full h-full object-cover'
            >
                <source src="/blackhole.webm" type='video/webm' />
            </video> */}
            <HeroContent />
        </div>
    )
}
