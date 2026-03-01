// Hooks
import { motion } from "motion/react"
import { useEffect, useState } from "react";

// Type
import { type particle } from "../../types/particles/particle.ts";

const SocialFloat = ({ setParticle, particleSelect, particle }: {
    setParticle: React.Dispatch<React.SetStateAction<particle[]>>,
    particle: particle[],
    particleSelect: particle | undefined
}) => {
    const [indiceParticle, setIndiceParticle] = useState(0);

    function changeParticle() {
        const totalParticle: number = particle.length - 1;
        setIndiceParticle((prev) => {
            const copyPrev = prev;
            const upCount: number = copyPrev + 1;
            if (upCount > totalParticle) {
                return 0;
            } else {
                return upCount;
            }
        })
    }

    useEffect(() => {
        particleSelect?.event?.();

        setParticle((prev) => {
            const copyPrev = [...prev];
            copyPrev.map((item) => {
                item.isActive = false;
            })

            copyPrev[indiceParticle].isActive = true;
            return copyPrev;
        })
    }, [indiceParticle]);

    return (
        <motion.ul className="flex gap-3 fixed items-center  bg-bgPage/30 backdrop-blur-lg p-2 px-4 rounded-full border border-white/5 z-40 top-5 right-5

        max-md:top-23 max-md:right-[65%]
        "
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <SocialOption
                icon="fa-brands fa-github"
                href="https://github.com/Devandelson"
                color="hover:bg-gray-700 hover:shadow-gray-700"
            />
            <SocialOption
                icon={particleSelect?.icon ?? 'fa-solid fa-ban'}
                color="hover:bg-red-500 hover:shadow-red-500"
                onClick={() => { changeParticle() }}
            />
        </motion.ul>
    );
};

function SocialOption(
    {
        icon,
        href,
        color,
        onClick
    }: {
        icon: string,
        href?: string,
        color: string,
        onClick?: () => void
    }
) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            e.preventDefault()
            onClick()
        }
    }

    return (
        <li>
            <a
                href={href || "#"}
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
                onClick={handleClick}
                className={`
                    py-2.5 px-2.5 rounded-full flex items-center justify-center 
                    transition-all cursor-pointer
                    bg-bgPage/50 text-white/90 border border-gray-50/20
                    hover:text-white hover:scale-110 hover:shadow-lg
                    active:scale-95
                    text-xl
                    ${color}
                `}>
                <i className={icon}></i>
            </a>
        </li>
    );
}

export default SocialFloat;