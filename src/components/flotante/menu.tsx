// Hooks
import { motion, AnimatePresence } from "motion/react"
import { useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

// -- contexts
import { useMenu } from '../../context/menu/switchMenu.tsx';

const Menu = ({ children }: { children: ReactNode }) => {
    const { listMenu, setTMenu } = useMenu();
    const [activeSetting, setActiveSetting] = useState(false);

    return (
        <div className="w-full min-h-screen relative h-auto bg-bPage/40
         flex flex-col md:grid md:grid-cols-[auto_1fr] grid-rows-1 z-50 translate-0
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
                            animationConfig={setActiveSetting}
                        />
                    ))
                }
            </motion.ul>

            {/* Menu Desktop - Vertical en el lado */}
            <motion.ul
                className="hidden md:flex flex-col gap-5 items-center pt-13 sticky z-50 pr-7 
                w-max h-max top-0 left-3
                "
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <span className="w-7 h-screen absolute -right-4 z-10 bg-bgPage/40 top-0 content-none block">
                </span>
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
                            animationConfig={setActiveSetting}
                        />
                    ))
                }
            </motion.ul>

            <div className="relative w-full h-screen flex flex-col items-center justify-center bg-bpage rounded-tl-4xl rounded-bl-4xl overflow-hidden z-60">
                <div className="w-full h-full overflow-y-auto relative">
                    <AnimatePresence mode="wait">
                        <div key="children">{children}</div>
                    </AnimatePresence>
                </div>
            </div>
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
        isMobile = false,
        animationConfig
    }:
        {
            icon: string,
            isConfig: boolean,
            isActive: boolean,
            name?: string,
            action?: (name: string) => void,
            isMobile?: boolean,
            animationConfig?: Dispatch<SetStateAction<boolean>>
        }
) {
    const config = isConfig ? ['text-base sm:text-lg md:text-xl', isMobile ? '' : 'mb-4'] : ['text-xl sm:text-2xl', ''];
    const active = isActive ? 'bg-blue-400 shadow-lg text-white shadow-blue-400' : 'bg-bPage text-white/80';

    const handleClick = () => {
        action?.(name || '');
        animationConfig?.(false);
    };

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