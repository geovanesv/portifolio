'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
function SkillText() {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
                variants={slideInFromTop(2)}
                className='Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px]'>Este portfólio foi feito com NextJs 14</h1>
            </motion.div>
            <motion.div
                variants={slideInFromTop(0.5)}
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
               Faça suas aplicações com tecnologias modernas
            </motion.div>
            <motion.div
                variants={slideInFromRight(0.5)}
                className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                Nunca perco uma tarefa, prazo ou ideia
            </motion.div>
        </div>
    )
}

export default SkillText