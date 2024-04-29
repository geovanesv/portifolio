

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

import { Socials } from '@/data'


// import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
// // import { motion } from 'framer-motion'; // Importa o motion para animações
// // import Image from 'next/image'; // Importa o Image para imagens otimizadas

// function About() {
//     return (
//         <section
//             id="about" 
//             className='flex flex-col items-center justify-center gap-2 h-full relative overflow-hidden py-20'
//             style={{ transform: "scale(0.9)" }}
//         >
            
//             <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 className='flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]'>
//                 <div className='h-full w-full flex flex-col gap-2 justify-center m-auto text-start'>
                    
//                     <motion.div
//                         variants={slideInFromLeft(0.9)}
//                         className='flex flex-col gap-4 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                    
//                         <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 '>
//                             Sobre Mim
//                         </span>
//                     </motion.div>

//                     <motion.div
//                         variants={slideInFromLeft(0.7)}
//                         className='text-lg text-gray-400 my-5 max-w-[600px]'
//                     >

//                         <motion.div
//                             variants={slideInFromLeft(0.9)}
//                             className='flex items-center gap-4 text-4xl font-bold text-white max-w-[300px] w-auto h-auto'>
//                             <img src="/Graduation.png" alt="Ícone de Graduação" className="w-24 h-24" />
//                             <p>Qualificações</p>
//                         </motion.div>

//                         <br />
//                         <ul className="list-disc pl-6 text-white">
//                             <li className="flex items-center">
//                                 <ArrowRightCircleIcon className="w-5 h-5 mr-2 text-purple-500" />
//                                 Bacharel em Ciência da Computação
//                             </li>
//                             <li className="flex items-center">
//                                 <ArrowRightCircleIcon className="w-5 h-5 mr-2 text-purple-500" />
//                                 Full Stack Developer
//                             </li>
//                             <li className="flex items-center">
//                                 <ArrowRightCircleIcon className="w-5 h-5 mr-2 text-purple-500" />
//                                 Analista de TI
//                             </li>
//                             <li className="flex items-center">
//                                 <ArrowRightCircleIcon className="w-5 h-5 mr-2 text-purple-500" />
//                                 Técnico em Informática
//                             </li>
//                         </ul>
//                     </motion.div>
                    
//                 </div>

                
//                 <motion.div
//                     variants={slideInFromRight(1.0)}
//                     className='w-full h-full flex justify-center items-center'
//                 >
//                     <div className="relative rounded-full overflow-hidden border-2 border-purple-900">
//                         <Image 
//                             src="/avatar.png"
//                             alt="work icons"
//                             className="rounded-full"
//                             layout="responsive"
//                             width={650}
//                             height={650}
//                             style={{filter: "brightness(1.1) contrast(1.1) drop-shadow(3px 5px 5px #6836e3)"}}
//                         />
//                         <div className="absolute inset-0 border-4 border-purple-500 filter blur-md"> 
//                         </div>
//                     </div>
//                 </motion.div>
//             </motion.div>
            
//         </section>
//     )
// }


import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'

function About() {
    return (
        <section
            id="about" 
            className='flex flex-col items-center justify-center gap-2 h-full relative overflow-hidden py-20'
            style={{ transform: "scale(0.9)" }}
        >
            
            <motion.div
                initial="hidden"
                animate="visible"
                className='flex flex-col sm:flex-row items-center justify-center px-6 sm:px-20 mt-20 w-full z-[20]'>
                <div className='h-full w-full flex flex-col gap-2 justify-center m-auto text-center sm:text-start'> {/* Altera para text-center em telas menores */}
                    
                    <motion.div
                        variants={slideInFromLeft(0.9)}
                        className='flex flex-col gap-4 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                    
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 '>
                            Sobre Mim
                        </span>
                    </motion.div>

                    <motion.div
                        variants={slideInFromLeft(0.7)}
                        className='text-lg text-gray-400 my-5 max-w-[600px] sm:text-justify' // Justifica o texto em telas menores
                    >

                        {/* <motion.div
                            variants={slideInFromLeft(0.9)}
                            className='flex items-center gap-4 text-4xl font-bold text-white max-w-[300px] w-auto h-auto'>
                            <img src="/Graduation.png" alt="Ícone de Graduação" className="w-24 h-24" />
                            <p>Qualificações</p>
                        </motion.div> */}

                        <br />
                        <p className='pl-6 text-white'>
                            Olá eu sou Geovane Araujo, um desenvolvedor entusiasmado que se dedica a criar soluções inovadoras
                            para impulsionar a experiência do usuário e resolver problemas de maneira eficiente.
                            Com uma formação em Ciência da Computação pelo Instituto Federal de Educação,
                            Ciência e Tecnologia do Ceará, concentrei meus estudos no desenvolvimento web fullstack,
                            priorizando tecnologias como NodeJS, NestJS, ReactJS, NextJS, Laravel, VueJS, Docker, Mysql, PostgreSQL, MongoDB. Estou constantemente em busca
                            de desafios que impulsionem meu crescimento profissional.

                        </p>
                        {/* <ul className="flex flex-wrap list-disc pl-6 text-white">
                            <li className="flex items-center w-1/2">
                                <ArrowRightCircleIcon className="w-5 h-5 mr-2 text-purple-500" />
                                Computação
                            </li>
                            <li className="flex items-center w-1/2">
                                <ArrowRightCircleIcon className="w-5 h-5 mr-2 text-purple-500" />
                                Developer
                            </li>
                            <li className="flex items-center w-1/2">
                                <ArrowRightCircleIcon className="w-5 h-5 mr-2 text-purple-500" />
                                FullStack
                            </li>
                            <li className="flex items-center w-1/2">
                                <ArrowRightCircleIcon className="w-5 h-5 mr-2 text-purple-500" />
                                Java
                            </li>
                        </ul> */}

                    </motion.div>
                    
                </div>

                
                <motion.div
                    variants={slideInFromRight(1.0)}
                    className='w-full h-full flex justify-center items-center sm:pl-8 mt-8 sm:mt-0' // Adiciona espaço à esquerda em telas maiores
                >
                    <div className="relative rounded-full overflow-hidden border-2 border-purple-900">
                        <Image 
                            src="/avatar.png"
                            alt="work icons"
                            className="rounded-full"
                            layout="responsive"
                            width={400}
                            height={400}
                            style={{filter: "brightness(1.1) contrast(1.1) drop-shadow(3px 5px 5px #6836e3)"}}
                        />
                        <div className="absolute inset-0 border-4 border-purple-500 filter blur-md"> 
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            
        </section>
    )
}

export default About
