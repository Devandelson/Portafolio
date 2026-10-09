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
                <span className="fixed block bottom-0 left-0 w-18 rounded-tr-4xl aspect-square bg-bPage z-95"></span>
                <span className="fixed block bottom-5 left-5 z-95">
                    <MenuOption
                        icon={'fa-solid fa-gear'}
                        isConfig={true}
                        isActive={false}
                        key={0}
                        name={'config'}
                        action={handleOption}
                        animationConfig={() => { }}
                        styles="border-bgPage! bg-bPage! border-none! outline-9 outline-bgPage -translate-y-0! hover:shadow-none!"
                    />
                </span>

                <AnimatePresence mode="wait">
                    {conditionMenu && (
                        <motion.ul
                            className="fixed bottom-0 left-1/2 z-95 flex h-max w-max -translate-x-1/2 items-center gap-3
                            bg-bPage px-6 p-0 backdrop-blur-2xl backdrop-saturate-150
                            shadow-xl shadow-black/20 ring-1 ring-white/10
                            rounded-t-2xl rounded-b-none

                            before:absolute before:bottom-0 before:-left-5 before:size-5 before:content-['']
                            before:bg-bPage before:backdrop-blur-2xl
                            before:[mask-image:radial-gradient(circle_at_0_0,transparent_20px,black_20.5px)]

                            after:absolute after:bottom-0 after:-right-5 after:size-5 after:content-['']
                            after:bg-bPage after:backdrop-blur-2xl
                            after:[mask-image:radial-gradient(circle_at_100%_0,transparent_20px,black_20.5px)]
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

function MenuOption({ icon, isConfig, isActive, name, action, animationConfig, styles }: {
    icon: string,
    isConfig: boolean,
    isActive: boolean,
    name?: string,
    action?: (name: string) => void,
    animationConfig?: Dispatch<SetStateAction<boolean>>,
    styles?: string
}) {
    const config = isConfig ? ['text-base sm:text-lg md:text-xl'] : ['text-xl sm:text-2xl', ''];
    const active = isActive
        ? 'bg-blue-400/90 shadow-lg text-white shadow-blue-400/50 border-white/30'
        : 'bg-bgPage text-white/70';

    const handleClick = () => {
        action?.(name || '');
        animationConfig?.(false);
    };

    return (
        <li
            className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full 
                flex items-center justify-center transition-all duration-200
                backdrop-blur-sm -translate-y-5
                hover:shadow-lg hover:text-white hover:scale-110 hover:shadow-blue-400/40
                cursor-pointer active:scale-[0.95] border-4 border-bPage
                ${active} ${config[1]} ${styles}`}
            onClick={handleClick}
        >
            <i className={`${icon} ${config[0]}`}></i>
        </li>
    );
}

export default Menu;