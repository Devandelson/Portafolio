// assets ========================================
import CircleProyect from '../../../assets/CircleProyect.svg';

// Hooks ========================================
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// types
import { proyectosData, type Proyecto } from '../../../data/proyectos.ts';
import { tecnologiasData } from '../../../data/tecnologias.ts';
import type { OpenState } from '../utils/types.tsx';

// Utils ========================================
import { getButtonContent } from '../utils/detectButton.tsx';


export default function MainProyects({ setOpen }: { setOpen: (open: OpenState) => void }) {
    const [dataProyects] = useState<Proyecto[]>(() =>
        proyectosData.filter((item) => item.categoria === 'destacado')
    );
    const [current, setCurrent] = useState(0);

    const [rotation, setRotation] = useState(0);

    const [animating, setAnimating] = useState(false);

    const count = dataProyects.length;
    const step = 360 / count;

    const navigate = (dir: 1 | -1) => {
        if (animating) return;
        setAnimating(true);
        setCurrent(prev => (prev + dir + count) % count);
        setRotation(prev => prev - dir * step); // accumulates, never resets
        setTimeout(() => setAnimating(false), 900);
    };

    return (
        <section className="w-full h-max mb-40 overflow-hidden">
            <h3 className="text-center text-white text-5xl block mt-10 font-bold">
                Proyectos destacados
            </h3>
            <div className="grid grid-cols-1 max-lg:justify-center lg:grid-cols-2 gap-8 items-center mt-15 px-4">
                <CardInfoProyect
                    project={dataProyects[current]}
                    current={current}
                    total={count}
                    animating={animating}
                    onNext={() => navigate(1)}
                    onPrev={() => navigate(-1)}
                    setOpen={setOpen}
                />
                <RotateImage
                    projects={dataProyects}
                    current={current}
                    rotation={rotation}
                />
            </div>
        </section>
    );
}

// ─── Info Card ────────────────────────────────────────────────────────────────

interface CardProps {
    project: Proyecto;
    current: number;
    total: number;
    animating: boolean;
    onNext: () => void;
    onPrev: () => void;
    setOpen: (open: OpenState) => void;
}

function CardInfoProyect({ project, current, total, animating, onNext, onPrev, setOpen }: CardProps) {
    const buttonContent = getButtonContent(project, setOpen);

    return (
        <article className="text-white max-w-md w-full max-lg:text-center max-lg:m-auto flex flex-col max-lg:justify-center">
            {/* Controls */}
            <span className="flex items-center gap-2 mb-6 max-lg:justify-center">
                <button
                    onClick={onPrev}
                    className="p-3 py-1.5 bg-white/20 text-white rounded-sm hover:bg-white/30 transition-colors"
                >
                    <i className="fa-solid fa-chevron-left" />
                </button>
                <button
                    onClick={onNext}
                    className="p-3 py-1.5 bg-white/20 text-white rounded-sm hover:bg-white/30 transition-colors"
                >
                    <i className="fa-solid fa-chevron-right" />
                </button>
                <span className="text-white/40 text-sm ml-1">
                    {current + 1} / {total}
                </span>
            </span>

            {/* Content — fades on change via opacity transition */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={String(animating)}
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 8, opacity: 0 }}
                >
                    <h4 className="text-3xl font-bold mb-2">{project.titulo}</h4>

                    <section className="flex items-center max-lg:justify-center gap-2 flex-wrap mb-4">
                        {project.logos.map((tech, i) => {
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
    projects: Proyecto[];
    current: number;
    rotation: number;
}

function RotateImage({ projects, current, rotation }: RotateProps) {
    const count = projects.length;

    return (
        // Responsive square container — all sizing is relative to this
        <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center">

            {/* Decorative circle SVG */}
            <AnimatePresence mode='wait'>
                <motion.svg
                    key={current}
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full"
                    style={{ filter: 'brightness(0) invert(85%)' }}
                    initial={{ rotate: -360, scale: 1.2, opacity: 0 }}
                    animate={{ rotate: -140, scale: 1, opacity: 1 }}
                    exit={{ rotate: -360, scale: 1.2, opacity: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    <image
                        href={CircleProyect}
                        x="0" y="0"
                        width="100%" height="100%"
                    />
                </motion.svg>
            </AnimatePresence>

            {/* Single rotating assembly — circle + images all spin together */}
            <div
                className="absolute inset-0"
                style={{
                    transform: `translate(-0%, 50%) rotate(${rotation}deg)`,
                    transition: 'transform 2s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >

                {/* Images orbiting around the circle */}
                {projects.map((project, i) => {
                    // Distribute images evenly; start from the top (-90°)
                    const angleDeg = (360 / count) * i - 90;
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const radius = 50; // % from center — adjust to taste
                    const cx = 50 + radius * Math.cos(angleRad); // % left
                    const cy = 50 + radius * Math.sin(angleRad); // % top
                    const isActive = i === current;

                    return (
                        <div
                            key={project.titulo}
                            className="absolute rounded-2xl overflow-hidden"
                            style={{
                                // Responsive size: 38% of the container's width
                                width: '80%',
                                aspectRatio: '4 / 3',
                                left: `${cx}%`,
                                top: `${cy}%`,
                                // Center on the orbit point, then counter-rotate to stay upright
                                transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                                transition: 'transform 0.85s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.85s, box-shadow 0.5s',
                                opacity: isActive ? 1 : 0,
                                boxShadow: isActive ? '0 20px 50px rgba(0,0,0,0.6)' : 'none',
                                zIndex: isActive ? 10 : 1,
                            }}
                        >
                            <img
                                src={project.imagenes[0]}
                                alt={project.titulo}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}