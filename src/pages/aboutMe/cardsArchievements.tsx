import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Logro } from '../../data/logro.ts';

interface LogroCardProps {
    logro: Logro;
}

export default function LogroCard({ logro }: LogroCardProps) {
    // const [isActive, setIsActive] = useState(false);

    // const handleToggle = () => {
    //     setIsActive(!isActive);
    // };

    return (
        <article
            tabIndex={0}
            className="relative mb-4 break-inside-avoid border-4 sm:border-6 border-bPage rounded-2xl overflow-hidden
            cursor-pointer outline-none duration-200 group/article bounceItem
            hover:shadow-2xl hover:shadow-blue-400/20
            focus:shadow-2xl focus:shadow-blue-400/20"
            data-aos="fade-up"
        >
            <img
                src={logro.imagen}
                alt={logro.titulo}
                className="w-full h-auto block duration-200
                group-hover/article:scale-110 group-hover/article:blur-sm
                group-focus/article:blur-none!"
            />

            <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-bPage w-[90%] h-[20%] p-3 rounded-t-2xl
                text-center flex flex-col items-center justify-start overflow-hidden
                backdrop-blur-sm duration-200 transition-all

                group-hover/article:w-full group-hover/article:h-full
                group-hover/article:bg-bPage/60 group-hover/article:rounded-sm
                group-hover/article:bottom-0 group-hover/article:justify-center

                group-focus/article:h-0! group-focus/article:p-0!"
            >
                <h3
                    className="text-xl sm:text-2xl font-bold duration-200
                    group-hover/article:text-2xl sm:group-hover/article:text-4xl
                    group-focus/article:text-2xl sm:group-focus/article:text-4xl"
                >
                    {logro.titulo}
                </h3>
                <p
                    className="text-sm sm:text-base mt-2 duration-200
                    group-hover/article:text-base sm:group-hover/article:text-lg
                    group-focus/article:text-base sm:group-focus/article:text-lg"
                >
                    {logro.descripcion}
                </p>

                {/* Indicador de click */}
                <div
                    className="mt-3 text-blue-400 text-xs font-semibold opacity-0 transition-opacity
                    group-hover/article:opacity-100
                    group-focus/article:opacity-0!"
                >
                    <i className="fas fa-hand-pointer mr-1"></i>
                    Click para mantener
                </div>
            </div>

            {/* Badge de check cuando está enfocado */}
            <div
                className="absolute top-3 right-3 bg-blue-600 text-white size-8 rounded-full
                flex items-center justify-center shadow-lg z-10
                scale-0 -rotate-180 opacity-0 transition-all duration-300
                group-focus/article:scale-100 group-focus/article:rotate-0 group-focus/article:opacity-100"
            >
                <i className="fas fa-check text-sm"></i>
            </div>
        </article>
    );
}