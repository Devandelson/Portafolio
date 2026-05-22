// data
import { type Proyecto } from '../../../data/proyectos.ts';

// types
import { type Variants } from "motion/react";
import { type OpenState } from '../utils/types.tsx';

// hooks
import { motion, AnimatePresence } from "motion/react";
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

interface ProjectGridProps {
    proyectos: Proyecto[];
    setOpen: (open: OpenState) => void;
    setElementRegular: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function ProjectGrid({ proyectos, setOpen, setElementRegular }: ProjectGridProps) {
    const contaienerVariants: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
    };

    const childrenVarints: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="max-w-7xl mx-auto px-4 pb-8">
            {proyectos.length === 0 ? (
                <div className="text-center py-20 bounceItem">
                    <i className="fas fa-folder-open text-6xl text-slate-400 mb-4"></i>
                    <p className="text-slate-400 text-xl">No hay proyectos</p>
                </div>
            ) : (
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={contaienerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <AnimatePresence>
                        {proyectos.filter(t => t?.state !== false)
                        .map(proyecto => (
                            <Tilt reset={false} key={proyecto.id}>
                                <ProjectCard  
                                    proyecto={proyecto}
                                    variants={childrenVarints}
                                    setOpen={setOpen}
                                    setElementRegular={setElementRegular}
                                />
                            </Tilt>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </section>
    );
}

// --- item proyecto.
interface ProjectCardProps {
    proyecto: Proyecto;
    variants: Variants;
    setOpen: (open: OpenState) => void;
    setElementRegular: React.Dispatch<React.SetStateAction<number | null>>;
}

function ProjectCard({ proyecto, variants, setElementRegular, setOpen }: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? proyecto.imagenes.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === proyecto.imagenes.length - 1 ? 0 : prev + 1
        );
    };

    const stateProyect: boolean = proyecto?.state == false ? false : true;

    return (
        stateProyect && (
            <motion.div
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group relative h-full grid grid-rows-[auto_1fr] bounceItem`}
                variants={variants}
                onClick={() => {
                    setElementRegular(proyecto.id);
                    setOpen((prev) => ({ ...prev, isOpen: true, imagenes: proyecto.imagenes }));
                }}
            >
                {/* Image container */}
                <div className="relative h-56 overflow-hidden group">
                    <span className='absolute z-10 bg-black/50 w-full h-0 bottom-0 left-0 text-white text-3xl text-center font-bold flex items-center justify-center
                    group-hover:h-full transition-all duration-200 cursor-pointer overflow-hidden
                    '>
                        Ver mas
                    </span>
                    <AnimatePresence mode='wait'>
                        <motion.img
                            alt={proyecto.titulo}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all"
                            src={proyecto.imagenes[currentImageIndex]}
                            key={proyecto.imagenes[currentImageIndex]}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{
                                duration: 0.2
                            }}
                        />
                    </AnimatePresence>

                    {/* Navigation buttons - solo si hay más de 1 imagen */}
                    {proyecto.imagenes.length > 1 && (
                        <>
                            <div className="absolute bottom-3 left-3 flex space-x-2">
                                <button
                                    onClick={handlePrevImage}
                                    className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors active:scale-95"
                                >
                                    <i className="fas fa-chevron-left text-xs"></i>
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors active:scale-95"
                                >
                                    <i className="fas fa-chevron-right text-xs"></i>
                                </button>
                            </div>

                            {/* Indicador de imágenes */}
                            <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                                {currentImageIndex + 1} / {proyecto.imagenes.length}
                            </div>
                        </>
                    )}
                </div>
            </motion.div>
        )
    );
}