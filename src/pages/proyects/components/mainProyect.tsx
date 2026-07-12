// assets ========================================
import CircleProyect from '../../../assets/CircleProyect.svg';

// Hooks ========================================
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// types
import { proyectosData, type Proyecto } from '../../../data/proyectos.ts';
import { tecnologiasData } from '../../../data/tecnologias.ts';
import type { OpenState } from '../utils/types.tsx';

interface specialProyect extends Proyecto {
    visible: boolean
}

// Utils ========================================
import { getButtonContent } from '../utils/detectButton.tsx';


export default function MainProyects({ setOpen }: { setOpen: (open: OpenState) => void }) {
    // formating data
    const data: Proyecto[] = proyectosData.filter((item) => item.categoria === 'destacado');
    const formatData = data.map((item) => {
        return { ...item, visible: false }
    });
    formatData[0].visible = true;

    const [dataProyects, setDataProyects] = useState<specialProyect[]>(formatData);
    const count = dataProyects.length - 1;
    const mainProyect = dataProyects.filter((item) => item.visible == true)[0];

    return (
        <section className="w-full h-max mb-40 overflow-hidden">
            <h3 className="text-center text-white text-5xl block mt-10 font-bold">
                Proyectos destacados
            </h3>
            <div className="grid grid-cols-1 max-lg:justify-center lg:grid-cols-2 gap-8 items-center mt-15 px-4">
                <CardInfoProyect
                    project={mainProyect}
                    setOpen={setOpen}
                    setDataProyects={setDataProyects}
                    countProyects={(count + 1)}
                    dataProyects={dataProyects}
                />
                <RotateImage
                    project={mainProyect}
                    dataProyects={dataProyects}
                />
            </div>
        </section>
    );
}

// ─── Info Card ────────────────────────────────────────────────────────────────

interface CardProps {
    project: specialProyect;
    dataProyects: specialProyect[];
    setOpen: (open: OpenState) => void;
    setDataProyects: React.Dispatch<React.SetStateAction<specialProyect[]>>;
    countProyects: number
}

function CardInfoProyect({ project, setOpen, setDataProyects, countProyects, dataProyects }: CardProps) {
    const buttonContent = getButtonContent(project, setOpen);
    const indexActiveProyect = dataProyects.findIndex((item) => {
        return item.visible == true;
    })

    function HandleControlsInfo(typeButton: 'next' | 'back') {
        setDataProyects((prev) => {
            const indexActive = prev.findIndex((item) => item.visible === true);

            let nextIndex: number;
            if (typeButton === 'next') {
                nextIndex = indexActive === countProyects - 1 ? 0 : indexActive + 1;
            } else {
                nextIndex = indexActive === 0 ? countProyects - 1 : indexActive - 1;
            }

            // ✅ mapea creando objetos NUEVOS, sin mutar los originales
            return prev.map((item, i) => ({
                ...item,
                visible: i === nextIndex
            }));
        });
    }

    return (
        <article className="text-white max-w-md w-full max-lg:text-center max-lg:m-auto flex flex-col max-lg:justify-center">
            {/* Controls */}
            <span className="flex items-center gap-2 mb-6 max-lg:justify-center">
                {/* Back */}
                <button
                    className="p-3 py-1.5 bg-white/20 text-white rounded-sm hover:bg-white/30 transition-colors"
                    onClick={() => { HandleControlsInfo('back') }}
                >
                    <i className="fa-solid fa-chevron-left" />
                </button>
                {/* Next */}
                <button
                    className="p-3 py-1.5 bg-white/20 text-white rounded-sm hover:bg-white/30 transition-colors"
                    onClick={() => { HandleControlsInfo('next') }}
                >
                    <i className="fa-solid fa-chevron-right" />
                </button>
                {/* Active proyect */}
                <span className="text-white/40 text-sm ml-1">
                    {(indexActiveProyect + 1)} / {countProyects}
                </span>
            </span>

            {/* Content — fades on change via opacity transition */}
            <AnimatePresence mode='wait'>
                <motion.div
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 8, opacity: 0 }}
                    transition={{
                        duration: 0.5
                    }}
                    key={project.titulo}
                >
                    <h4 className="text-3xl font-bold mb-2">{project.titulo}</h4>

                    <section className="flex items-center max-lg:justify-center gap-2 flex-wrap mb-4">
                        {project.logos.map((tech, i) => {
                            const icon = tecnologiasData.find(t => t.id === tech);

                            return (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-sm bg-slate-200/50 dark:bg-slate-700/50 text-xs font-medium text-slate-700 dark:text-slate-300">
                                    <i className={icon?.icono} />
                                    {icon?.nombre}
                                </span>
                            )
                        }
                        )}
                    </section>

                    {<p
                        dangerouslySetInnerHTML={{ __html: project.descripcion }}
                        className="text-lg text-gray-400 font-semibold mb-10"
                    />}

                    {buttonContent && (
                        <button
                            onClick={buttonContent.action}
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-semibold text-sm cursor-pointer"
                        >
                            {buttonContent.text}
                            <i className={`${buttonContent.icon} ml-2 text-xs`}></i>
                        </button>
                    )}
                </motion.div>
            </AnimatePresence>
        </article>
    );
}

// ─── Rotating Circle ──────────────────────────────────────────────────────────

interface RotateProps {
    project: specialProyect;
    dataProyects: specialProyect[];
}

function RotateImage({ project, dataProyects }: RotateProps) {
    // const count = projects.length;
    const [move, setMove] = useState(true);

    useEffect(() => {
        if (!dataProyects) return;

        function switcht() {
            setMove(false);
            setTimeout(() => {
                setMove(true);
            }, 500);
        };
        switcht();
    }, [dataProyects])

    return (
        // Responsive square container — all sizing is relative to this
        <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center">

            {/* Decorative circle SVG */}
            <AnimatePresence mode='wait'>
                {move && (
                    <motion.svg
                        key={project.titulo}
                        viewBox="0 0 100 100"
                        className="absolute w-[120%] top-1/2 -translate-y-1/2 left-30 aspect-square
                    max-lg:rotate-90  max-lg:top-[95%] max-lg:left-1/2 max-lg:-translate-x-1/2
                    "
                        style={{ filter: 'brightness(0) invert(85%)' }}
                        initial={{ rotate: 190, scale: 1.2, opacity: 0 }}
                        animate={{ rotate: 50, scale: 1, opacity: 1 }}
                        exit={{ rotate: -180, scale: 1, opacity: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                    >
                        <image
                            href={CircleProyect}
                            x="0" y="0"
                            width="100%" height="100%"
                        />
                    </motion.svg>)}
            </AnimatePresence>

            {/* Single rotating assembly — circle + images all spin together */}
            <div
                className="absolute z-10 w-full max-w-87.5 aspect-square flex items-center justify-center
                max-md:max-w-50
                "
            >
                {/* Images orbiting around the circle */}
                <AnimatePresence mode='wait'>
                    {move && (
                        <motion.div className="absolute rounded-2xl overflow-hidden -left-2
                        w-full h-full
                        max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:-top-15
                        "
                            key={project.titulo}
                            initial={{
                                opacity: 0, translateY: -400, translateX: 300, scale: 0
                            }}
                            animate={{
                                opacity: 1, translateY: 0, translateX: 0, scale: 1
                            }}
                            exit={{
                                opacity: 0, translateY: 180, translateX: 130, scale: 0.4
                            }}
                            transition={{
                                duration: 0.38
                            }}
                        >
                            <img
                                src={project.imagenes[0]}
                                alt={project.titulo}
                                className="w-full aspect-square object-cover"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}