import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Logro } from '../../data/logro.ts';

interface LogroCardProps {
    logro: Logro;
    index: number;
}

export default function LogroCard({ logro, index }: LogroCardProps) {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={handleToggle}
            className={`${logro.gridSpan} relative border-4 sm:border-6 border-bPage rounded-2xl overflow-hidden
            cursor-pointer
            duration-200
            group/article
            h-87.5
            hover:shadow-2xl hover:shadow-blue-400/20
            ${isActive ? 'shadow-2xl shadow-blue-400/20' : ''}
            `}
        >
            <img
                src={logro.imagen}
                alt={logro.titulo}
                className={`w-full h-full object-cover object-center
                group-hover/article:scale-110
                group-hover/article:blur-sm
                duration-200
                ${isActive ? 'blur-none!' : ''}
                `}
            />

            <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 bg-bPage w-[90%] p-3 rounded-t-2xl text-center flex flex-col items-center justify-center h-max [interpolate-size:allow-keywords] overflow-hidden
                
                group-hover/article:w-full group-hover/article:h-full
                group-hover/article:bg-bPage/60 group-hover/article:rounded-sm
                backdrop-blur-sm
                
                ${isActive ? 'h-0! p-0!' : ''}

                duration-200 transition-all
                `}
            >
                <h3
                    className={`text-xl sm:text-2xl font-bold
                    group-hover/article:text-2xl sm:group-hover/article:text-4xl
                    ${isActive ? 'text-2xl sm:text-4xl' : ''}
                    duration-200
                    `}
                >
                    {logro.titulo}
                </h3>
                <p
                    className={`text-sm sm:text-base 
                    group-hover/article:text-base sm:group-hover/article:text-lg 
                    ${isActive ? 'text-base sm:text-lg' : ''}
                    duration-200 mt-2
                    `}
                >
                    {logro.descripcion}
                </p>

                {/* Indicador de click */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 0 : 1 }}
                    className="mt-3 text-blue-400 text-xs font-semibold opacity-0 group-hover/article:opacity-100 transition-opacity"
                >
                    <i className="fas fa-hand-pointer mr-1"></i>
                    Click para mantener
                </motion.div>
            </div>

            {/* Badge de check cuando está activo */}
            {isActive && (
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute top-3 right-3 bg-blue-600 text-white size-8 rounded-full flex items-center justify-center shadow-lg z-10"
                >
                    <i className="fas fa-check text-sm"></i>
                </motion.div>
            )}
        </motion.article>
    );
}