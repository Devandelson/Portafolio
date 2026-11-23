// Hooks
import { AnimatePresence } from "motion/react"
import { useState, type ReactNode } from "react";

// components 
import NavMenu from "./Menu/navMenu.tsx";
import SocialFloat from './controles.tsx';
import Sonido from './sonido.tsx';
import History from "./Menu/history.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// -- contexts
import { useMenu } from '../../context/menu/switchMenu.tsx';
import { faClockRotateLeft, faGear } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ children }: { children: ReactNode }) => {
    const { listMenu } = useMenu();
    const [animationTabOptions, setAnimationTabOptions] = useState(false);
    const [historyMenu, setHistoryMenu] = useState(false);

    const selectOption = listMenu.filter((item) => { return item.state == true });
    const conditionMenu = selectOption?.[0]?.name !== 'Home' && selectOption.length > 0;

    return (
        <>
            <div className="w-full relative h-auto">
                {/* ------- Floating components -------- */}
                {/* Button to open the settings */}
                <span className="fixed block top-0 right-0 w-12 rounded-bl-4xl aspect-square bg-bPage z-95"
                    onClick={() => { setAnimationTabOptions((prev) => !prev) }}
                >
                    <FontAwesomeIcon icon={faGear} className="text-white text-xl p-2 py-2.5 rounded-full outline-4 absolute bottom-0 left-0 bg-bPage outline-bgPage hover:bg-bgPage hover:scale-105 active:scale-90 transition-all cursor-pointer"></FontAwesomeIcon>
                </span>

                <div className={`top-0 right-0 z-90 w-0 h-0 fixed rounded-bl-full bg-bgPage overflow-hidden transition-all ${animationTabOptions ? 'w-30! h-31!' : ''}`}>
                    <SocialFloat />
                    <Sonido></Sonido>
                </div>

                <AnimatePresence mode="wait">
                    {conditionMenu && (
                        <NavMenu></NavMenu>
                    )}
                </AnimatePresence>
                <FontAwesomeIcon icon={faClockRotateLeft} className="text-2xl text-white fixed top-3 left-3 z-60 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    onClick={() => { setHistoryMenu((prev) => !prev) }}
                ></FontAwesomeIcon>
                {/* -------- End floating component -------- */}

                <AnimatePresence mode="wait">
                    {historyMenu && <History></History>}
                </AnimatePresence>

                {children}
            </div>
        </>
    );
};


export default Menu;