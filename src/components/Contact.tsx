'use client'

import { useState } from "react";


import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

// function ContactForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e: { target: { name: any; value: any; }; }) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e: { preventDefault: () => void; }) => {
//         e.preventDefault();
//         // Aqui você pode adicionar a lógica para enviar os dados do formulário
//         console.log(formData);
//         // Resetar o formulário
//         setFormData({
//             name: '',
//             email: '',
//             message: ''
//         });
//     };

//     return (
//         <section className="flex items-center justify-center min-h-screen bg-transparent">
//             <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-8 bg-transparent rounded-md shadow-md">
//                 <motion.div
//                     variants={slideInFromLeft(0.9)}
//                     className='flex items-center gap-4 text-4xl font-bold text-white max-w-[300px] w-auto h-auto'>
//                     <p>Qualificações</p>
//                 </motion.div>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Nome"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full p-4 mb-4 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full p-4 mb-4 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
//                 />
//                 <textarea
//                     name="message"
//                     placeholder="Mensagem"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full p-4 mb-4 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
//                 />
//                 <button type="submit" style={{backgroundColor:"#220859"}} className="w-full p-4 bg-blue text-white rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
//                     Enviar
//                 </button>
//             </form>
//         </section>
//     );
// }

// export default ContactForm;



function Contact() {
    const [formData, setFormData] = useState({
                name: '',
                email: '',
                message: ''
            });
        
            const handleChange = (e: { target: { name: any; value: any; }; }) => {
                const { name, value } = e.target;
                setFormData(prevState => ({
                    ...prevState,
                    [name]: value
                }));
            };
        
            const handleSubmit = (e: { preventDefault: () => void; }) => {
                e.preventDefault();
                // Aqui você pode adicionar a lógica para enviar os dados do formulário
                console.log(formData);
                // Resetar o formulário
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            };
        
    return (
        <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-transparent">
           
                 
            <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-8 bg-transparent rounded-md shadow-md">
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 mb-4 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 mb-4 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
                <textarea
                    name="message"
                    placeholder="Mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-4 mb-4 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
                <button type="submit" style={{backgroundColor:"#220859"}} className="w-full p-4 bg-blue text-white rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Enviar
                </button>
            </form>
            </div>

            {/* Coluna direita para o título e texto */}
            <div className="lg:w-1/2 px-8" style={{marginTop:"-180px"}}>
                <div className="text-6xl font-bold text-white mb-8">
                    Vamos trabalhar juntos
                </div>
                <p className="text-white">
                    Pronto para transformar ideias em realidade? Seja um projeto, uma colaboração ou apenas para dizer oi, deixe uma mensagem abaixo. Sou todo ouvidos e ansiosa para iniciarmos essa jornada juntos!
                </p>
            </div>
        </section>
    );
}

export default Contact;
