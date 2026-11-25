// Hooks
import { motion } from "motion/react"

// -- contexts
import { useMenu } from '../../../context/menu/switchMenu.tsx';
import { useHistory } from "../../../context/pages/historyData.tsx";

import ExtractPresentationImg from "../../../data/imagesPresentation.ts";

export default function NavMenu() {
    const { listMenu, setTMenu } = useMenu();

    return (
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
                    path={menu.path}
                />
            ))}
        </motion.ul>
    )
}

function MenuOption({ icon, isConfig, isActive, name, action, styles, path }: {
    icon: string,
    isConfig: boolean,
    isActive: boolean,
    name: string,
    action?: (name: string) => void,
    styles?: string,
    path: string
}) {
    const addHistory = useHistory.getState().addHistory;
    const config = isConfig ? ['text-base sm:text-lg md:text-xl'] : ['text-xl sm:text-2xl', ''];
    const active = isActive
        ? 'bg-blue-400/90 shadow-lg text-white shadow-blue-400/50 border-white/30'
        : 'bg-bgPage text-white/70';

    const handleClick = () => {
        action?.(name || '');
        const img = ExtractPresentationImg(name);
        addHistory({
            'image': img ?? '',
            'path': path,
            'title': name
        });
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