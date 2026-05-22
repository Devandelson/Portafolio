import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// types
import { type Proyecto } from '../../../data/proyectos.ts';
import { tecnologiasData } from "../../../data/tecnologias.ts";
import type { OpenState } from '../utils/types.tsx';

// Utils ========================================
import { getButtonContent } from '../utils/detectButton.tsx';

interface VerImagenProps {
    imagenes: string[];
    indexInicial: number;
    onClose: () => void;
    info?: Omit<Proyecto, 'imagenes'> & {
        onOpen: (open: OpenState) => void;
    };
}

export default function VerImagen({ imagenes, indexInicial, onClose, info
}: VerImagenProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(indexInicial);
    const handlePrevImage = () => {
        setCurrentImageIndex(prev =>
            prev === 0 ? imagenes.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prev =>
            prev === imagenes.length - 1 ? 0 : prev + 1
        );
    };

    const buttonContent = info
        ? getButtonContent({ ...info, imagenes: imagenes }, info.onOpen)
        : null;

    return (
        <>
            <span className="fixed h-screen w-full top-0 left-0 inset-0 z-50"
                onClick={onClose}
            >

            </span>
            <motion.div
                className="fixed h-screen top-0 left-0 inset-0 z-60 flex items-center justify-center bg-black/80 backdrop-blur-sm pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* marco */}
                <motion.div
                    className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 max-w-187.5 w-full max-h-[80vh] overflow-scroll scrollbar-none pointer-events-auto"

                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                >
                    {/* close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 left-8 text-white p-1 px-3 bg-black/50 text-3xl 
                    hover:bg-blue-400 cursor-pointer z-10 rounded-lg"
                    >
                        ✕
                    </button>

                    <article className="relative max-w-[80vw] w-full">
                        {/* imagen */}
                        <div className="relative w-full h-100">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    src={imagenes[currentImageIndex]}
                                    className="w-full h-full rounded-lg object-cover"

                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    key={currentImageIndex}
                                />
                            </AnimatePresence>

                            {/* controles */}
                            {imagenes.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrevImage}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-blue-600"
                                    >
                                        <i className="fas fa-chevron-left"></i>
                                    </button>

                                    <button
                                        onClick={handleNextImage}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-blue-600"
                                    >
                                        <i className="fas fa-chevron-right"></i>
                                    </button>


                                    {/* contador */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full text-white text-sm">
                                        {currentImageIndex + 1} / {imagenes.length}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* info of the proyect (regular proyect) */}
                        {info && (
                            <div className="mt-10 px-4">
                                <h2 className="text-3xl text-white font-bold mb-2">{info.titulo}</h2>
                                <p className="text-gray-400 mb-4 text-lg">{info.descripcion}</p>
                                <div className="flex flex-wrap gap-2">
                                    {info.logos.map((tech, i) => {
                                        const icon = tecnologiasData.find(t => t.id === tech);

                                        return (
                                            <span
                                                key={i}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-sm bg-slate-200/50 dark:bg-slate-700/50 text-xs font-medium text-slate-700 dark:text-slate-300"
                                            >
                                                <i className={icon?.icono} />
                                                {icon?.nombre}
                                            </span>
                                        )
                                    }
                                    )}
                                </div>

                                {buttonContent && (
                                    <button
                                        onClick={buttonContent.action}
                                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-semibold text-sm cursor-pointer
                                    mt-8 mb-4
                                    "
                                    >
                                        {buttonContent.text}
                                        <i className={`${buttonContent.icon} ml-2 text-xs`}></i>
                                    </button>
                                )}
                            </div>
                        )}
                    </article>
                </motion.div>
            </motion.div>
        </>
    );
}
