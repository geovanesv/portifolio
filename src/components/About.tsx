'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

function About() {
    return (
        <section
            // ref={ref}
            id="about" 
            className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
            style={{ transform: "scale(0.9)" }}
        >
            
            <motion.div
                initial="hidden"
                animate="visible"
                className='flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]'>
                <div className='h-full w-full flex flex-col gap-2 justify-center m-auto text-start'>
                    <motion.div
                        variants={slideInFromTop(2)}
                        className='Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]'
                    >
                        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                        <h1 className='Welcome-text text-[13px]'>Desenvolvedor FullStack</h1>
                    </motion.div>

                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className='flex flex-col gap-4  text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                        <span>
                            Criando
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> a sua melhor </span>
                            experiência
                        </span>

                    </motion.div>
                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className='text-lg text-gray-400 my-5 max-w-[600px]'
                    >
                        Eu sou um Desenvolvedor de Software com experiência em criação de websites e sistemas web. Conheça meus projetos e habilidades.
                    </motion.p>
                    <div className='flex gap-4 w-full'>
                        <motion.a
                            variants={slideInFromLeft(1)}
                            className='py-2 px-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
                            Saber mais!
                        </motion.a>
                        <motion.a
                            variants={slideInFromLeft(1)}
                            className='py-2 px-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
                            Baixar CV
                        </motion.a>
                    </div>

                </div>
                <motion.div
                    variants={slideInFromRight(0.8)}
                    className='w-full h-full flex justify-center items-center'>
                    <Image
                        src="/mainIconsdark.svg"
                        alt="work icons"
                        height={650}
                        width={650}
                    />

                </motion.div>
            </motion.div>
            
        </section>
    )
}

export default About