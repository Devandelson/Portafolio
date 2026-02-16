// import { useState } from 'react';

// Hooks
import { motion } from "motion/react"
import type { ReactNode } from "react";
import Swal from 'sweetalert2';

// -- contexts
import { useMenu } from '../../context/menu/switchMenu.tsx';

const Menu = ({ children }: { children: ReactNode }) => {
    const { listMenu, setTMenu } = useMenu();

    return (
        <div className="w-full min-h-screen relative h-auto bg-bPage/40 
         flex flex-col md:grid md:grid-cols-[auto_1fr]
        ">
            {/* Menu Mobile - Horizontal en la parte superior */}
            <motion.ul 
                className="flex md:hidden flex-row gap-3 items-center justify-center py-4 px-4 w-full bg-bPage/40 backdrop-blur-sm sticky top-0 z-50"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {
                    listMenu.map((menu, index) => (
                        <MenuOption 
                            icon={menu.icon} 
                            isConfig={(index == 0 ? true : false)} 
                            isActive={menu.state} 
                            key={index} 
                            name={menu.name}
                            action={setTMenu}
                            isMobile={true}
                        />
                    ))
                }
            </motion.ul>

            {/* Menu Desktop - Vertical en el lado */}
            <motion.ul 
                className="hidden md:flex flex-col gap-5 items-center pt-13 h-max sticky top-0 left-1.5 w-18 z-2"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {
                    listMenu.map((menu, index) => (
                        <MenuOption 
                            icon={menu.icon} 
                            isConfig={(index == 0 ? true : false)} 
                            isActive={menu.state} 
                            key={index} 
                            name={menu.name}
                            action={setTMenu}
                            isMobile={false}
                        />
                    ))
                }
            </motion.ul>

            <span className="w-full h-full flex items-center justify-center bg-bpage p-2 sm:p-3 md:p-4 px-1 pr-2 sm:pr-3">
                <div className="w-full h-full bg-bgPage rounded-3xl sm:rounded-[35px] md:rounded-[40px] relative">
                    {children}
                </div>
            </span>
        </div>
    );
};

function MenuOption(
    {
        icon,
        isConfig,
        isActive,
        name,
        action,
        isMobile = false
    }:
        {
            icon: string,
            isConfig: boolean,
            isActive: boolean,
            name?: string,
            action?: (name: string) => void,
            isMobile?: boolean
        }
) {
    const config = isConfig ? ['text-base sm:text-lg md:text-xl', isMobile ? '' : 'mb-4'] : ['text-xl sm:text-2xl', ''];
    const active = isActive ? 'bg-blue-400 shadow-lg text-white shadow-blue-400' : 'bg-bPage text-white/80';

    const handleClick = isConfig ? () => {
        Swal.fire({
            title: 'Módulo en mantenimiento',
            text: 'Esta sección se encuentra actualmente en mantenimiento. Por favor, intenta nuevamente más tarde.',
            icon: 'info',
            confirmButtonText: 'Entendido',
            background: '#1a1a2e',
            color: '#fff',
            confirmButtonColor: '#3b82f6'
        });
    }
    : () => action && action(name || '');

    return (
        <li className={
            `w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all hover:bg-blue-400 hover:shadow-lg hover:text-white hover:scale-110 cursor-pointer hover:shadow-blue-400

            active:scale-[0.95]
            
            ${active} ${config[1]}`
        } onClick={handleClick}>
            <i className={`${icon} ${config[0]}`}></i>
        </li>
    )
}

export default Menu;