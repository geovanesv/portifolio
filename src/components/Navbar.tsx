
'use client';

import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Socials } from '@/data';
import Image from 'next/image';

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleMenuClick = (menu: React.SetStateAction<string>) => {
        setActiveMenu(menu);
    };


    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Defina a largura de acordo com seu design responsivo
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <div className='w-full fixed top-0 shadow-lg bg-[#03001447] z-50 px-4 md:px-10 py-2'>
            <div className='w-full flex flex-row items-center justify-between' style={{ marginTop: "10px", marginBottom: "10px" }}>
                <div className='flex items-center'>
                    <a href="#">
                        <span className='font-bold text-gray-300 hidden md:block'>
                            Geovane Araujo Dev
                        </span>
                    </a>
                </div>

                {/* Renderização condicional do menu principal */}
                {!isMobile && (
                    <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                        <div className='flex w-full h-auto items-center justify-between font-semibold border border-[#7042f861] text-gray-300 bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full'>
                            <a href="#about" className={`text-gray-300 hover:text-white ${activeMenu === 'about' ? 'font-bold text-white' : ''}`} onClick={() => handleMenuClick('about')}>Sobre mim</a>
                            <a href="#skills" className={`text-gray-300 hover:text-white ${activeMenu === 'skills' ? 'font-bold text-white' : ''}`} onClick={() => handleMenuClick('skills')}>Habilidades</a>
                            <a href="#projetos" className={`text-gray-300 hover:text-white ${activeMenu === 'projetos' ? 'font-bold text-white' : ''}`} onClick={() => handleMenuClick('projetos')}>Projetos</a>
                            <a href="#contato" className={`text-gray-300 hover:text-white ${activeMenu === 'contato' ? 'font-bold text-white' : ''}`} onClick={() => handleMenuClick('contato')}>Contato</a>
                        </div>
                    </div>
                )}

                {/* Botão do sidebar para dispositivos móveis */}
                <div className="md:hidden">
                    <button className="text-white" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`md:hidden fixed top-0 right-0 z-50 bg-[#03001447] w-64 h-full transition-transform transform ${isSidebarOpen ? '' : 'translate-x-full'}`}>
                <div className="py-4 px-8">
                    <div className="flex flex-col gap-4">
                        <a href="#about" className={`text-gray-300 hover:text-white ${activeMenu === 'about' ? 'font-bold text-white' : ''}`} onClick={() => { handleMenuClick('about'); toggleSidebar(); }}>Sobre mim</a>
                        <a href="#skills" className={`text-gray-300 hover:text-white ${activeMenu === 'skills' ? 'font-bold text-white' : ''}`} onClick={() => { handleMenuClick('skills'); toggleSidebar(); }}>Habilidades</a>
                        <a href="#projetos" className={`text-gray-300 hover:text-white ${activeMenu === 'projetos' ? 'font-bold text-white' : ''}`} onClick={() => { handleMenuClick('projetos'); toggleSidebar(); }}>Projetos</a>
                        <a href="#contato" className={`text-gray-300 hover:text-white ${activeMenu === 'contato' ? 'font-bold text-white' : ''}`} onClick={() => { handleMenuClick('contato'); toggleSidebar(); }}>Contato</a>
                    </div>

                    <div className="flex justify-center gap-5 text-white mt-8">
                        {Socials?.map((social, index) => (
                            <a href={social.link} key={index} target='_blank'>
                                <img
                                    src={social.src}
                                    alt={social.name}
                                    width={24}
                                    height={24}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-40" onClick={toggleSidebar}></div>}
        </div>
    )
}

export default Navbar;
