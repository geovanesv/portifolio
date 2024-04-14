'use client'
import React from 'react'
import SkillDataProvider from './SkillDataProvider'
import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/data'
// import { useSectionInView } from "@/lib/Hooks"
// import { useSectionInView } from '@lib/Hooks'
import SkillText from './SkillText'

function Skills() {
    // const { ref } = useSectionInView("Skills");
    return (
        <section
            // ref={ref}
            id="skills" 
            className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
            style={{ transform: "scale(0.9)" }}
        >
            <SkillText />
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 place-items-center'>
                {Frontend_skill.map((image, index) => {
                    return (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    )
                })}
            </div>

            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 place-items-center'>

                {Backend_skill.map((image, index) => {
                    return (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    )
                })}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 place-items-center'>

                {Full_stack.map((image, index) => {
                    return (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    )
                })}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 place-items-center'>

                {Other_skill.map((image, index) => {
                    return (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    )
                })}
            </div>

            <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video
                        className='w-full h-auto'
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>

        </section >
    )
}

export default Skills