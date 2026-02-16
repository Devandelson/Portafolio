// Hooks
import { motion } from "motion/react"
import Swal from "sweetalert2"

const SocialFloat = () => {
    return (
        <motion.ul className="flex gap-3 fixed items-center  bg-bgPage/30 backdrop-blur-lg p-2 px-4 rounded-full border border-white/5 z-10

        md:top-5 md:right-5 md:translate-x-0
        top-20 right-1/2 translate-x-1/2
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
                icon="fa-solid fa-ban"
                color="hover:bg-red-500 hover:shadow-red-500"
                onClick={() => {
                    Swal.fire({
                        title: 'Módulo en mantenimiento',
                        text: 'Esta sección se encuentra actualmente en mantenimiento. Por favor, intenta nuevamente más tarde.',
                        icon: 'info',
                        confirmButtonText: 'Entendido',
                        background: '#1a1a2e',
                        color: '#fff',
                        confirmButtonColor: '#3b82f6'
                    });
                }}
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