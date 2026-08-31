// Hooks
import { motion, AnimatePresence } from "motion/react"
import { useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

// components 
import Setting from '../../pages/settings/setting.tsx';

// -- contexts
import { useMenu } from '../../context/menu/switchMenu.tsx';

const Menu = ({ children }: { children: ReactNode }) => {
    const { listMenu, setTMenu } = useMenu();
    const [activeSetting, setActiveSetting] = useState(false);
    const [option, setOpcion] = useState(false);

    function handleOption(name: string) {
        setOpcion((prev) => !prev);
        return name;
    }

    const selectOption = listMenu.filter((item) => { return item.state == true });
    const conditionMenu = selectOption?.[0]?.name !== 'Home'
        && selectOption.length > 0;

    return (
        <>
            <AnimatePresence mode="wait">
                {option && (<Setting />)}
            </AnimatePresence>

            <div className="w-full min-h-screen relative h-auto">
                <span className="fixed block bottom-7 left-5 z-95">
                    <MenuOption
                        icon={'fa-solid fa-gear'}
                        isConfig={true}
                        isActive={false}
                        key={0}
                        name={'config'}
                        action={handleOption}
                        animationConfig={() => { }}
                    />
                </span>

                <AnimatePresence mode="wait">
                    {conditionMenu && (
                        <motion.ul
                            className="fixed flex gap-3 items-center z-95
                            w-max h-max bottom-5 left-1/2 -translate-x-1/2 
                            bg-bPage/50 backdrop-blur-2xl backdrop-saturate-150
                            border border-white/10 
                            shadow-xl shadow-black/20
                            ring-1 ring-white/10
                            p-2.5 px-4 rounded-2xl
                        "
                            initial={{ opacity: 0, y: 100, scale: 0 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        >
                            {listMenu.map((menu, index) => (
                                <MenuOption
                                    icon={menu.icon}
                                    isConfig={index === 0}
                                    isActive={menu.state}
                                    key={index}
                                    name={menu.name}
                                    action={setTMenu}
                                    animationConfig={setActiveSetting}
                                />
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                <div className="w-full min-h-screen h-auto relative">
                    <AnimatePresence mode="wait">
                        <div key="children">{children}</div>
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

function MenuOption({ icon, isConfig, isActive, name, action, animationConfig }: {
    icon: string,
    isConfig: boolean,
    isActive: boolean,
    name?: string,
    action?: (name: string) => void,
    animationConfig?: Dispatch<SetStateAction<boolean>>
}) {
    const config = isConfig ? ['text-base sm:text-lg md:text-xl'] : ['text-xl sm:text-2xl', ''];
    const active = isActive
        ? 'bg-blue-400/90 shadow-lg text-white shadow-blue-400/50 border border-white/30'
        : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/15';

    const handleClick = () => {
        action?.(name || '');
        animationConfig?.(false);
    };

    return (
        <li
            className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full 
                flex items-center justify-center transition-all duration-200
                backdrop-blur-sm
                hover:shadow-lg hover:text-white hover:scale-110 hover:shadow-blue-400/40
                cursor-pointer active:scale-[0.95]
                ${active} ${config[1]}`}
            onClick={handleClick}
        >
            <i className={`${icon} ${config[0]}`}></i>
        </li>
    );
}

export default Menu;