// Componentes
import VerImagen from './components/verImagen.tsx';
import MainProyects from './components/mainProyect.tsx';
import ProjectGrid from './components/component_proyect.tsx';

// assets
import projectBackground from '../../assets/Home_v1.jpg';
import projectBackgroundSVG from '../../assets/Home_v1.png';
import { proyectosData } from '../../data/proyectos.ts';
import particlesProyect from '../../assets/Proyect p2.png';

// hooks
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useRef, useState } from 'react';

// -- contexts
import { useSwitchAnimation } from '../../context/animations/switchAnimation.tsx';

// types
import { type OpenState } from './utils/types.tsx';

export default function Proyect() {
    const [open, setOpen] = useState<OpenState>({
        isOpen: false,
        imagenes: [],
        indexInicial: 0,
        onClose: () => { }
    });

    const { animations } = useSwitchAnimation();
    const animationActive = animations.find(animation => animation.active);
    const animation = animationActive ? animationActive.animation : undefined;

    // Filtrar proyectos
    const proyectosFiltrados = proyectosData.filter(proyecto => proyecto.categoria === 'regular');

    const [elementReguar, setElementRegular] = useState<number | null>(0);
    const copyChooseElement = proyectosFiltrados.find(proyecto => proyecto.id === elementReguar);

    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"], // desde que entra por abajo hasta que sale por arriba
    });

    const particlesY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

    return (
        <>
            <motion.div
                className="w-full h-auto relative bg-bgPage"
                initial="hidden"
                animate="visible"
                exit="exit"
                key={'proyects'}
                variants={animation}
                transition={{ duration: 0.4 }}
            >
                <Header />

                <section className='w-full h-auto relative'>
                    <div className='p-5 max-w-7xl mx-auto'>
                        <MainProyects setOpen={setOpen}></MainProyects>
                    </div>

                    <div className='relative
                        bg-linear-to-b bg-bgPage from-0% to-blue-800/50 to-75%
                    '>
                        <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
                            <motion.div
                                style={{ y: particlesY }}
                                className="pointer-events-none absolute inset-x-0 -top-[50%] h-[200%] will-change-transform"
                            >
                                <img
                                    src={particlesProyect}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                        <div className='max-w-7xl mx-auto p-4'>
                            <h2 data-aos="zoom-in" className='text-white text-5xl font-bold mt-30 mb-120 ml-5 z-30 text-center '>Proyectos regulares</h2>
                            <ProjectGrid
                                proyectos={proyectosFiltrados}
                                setOpen={setOpen}
                                setElementRegular={setElementRegular}
                            />
                        </div>
                    </div>
                </section>
            </motion.div>

            {/* Modal para ver imágenes */}
            <AnimatePresence>
                {open.isOpen && (
                    <VerImagen
                        imagenes={open.imagenes}
                        indexInicial={open.indexInicial}
                        onClose={() => {
                            setOpen({ ...open, isOpen: false });
                            setElementRegular(null);
                        }}
                        info={copyChooseElement ? {
                            ...copyChooseElement,
                            onOpen: setOpen
                        } : undefined}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

function Header() {
    return (
        <section className='w-full min-h-screen h-auto relative z-1 gap-3.5 flex-wrap flex  p-5 justify-center'>
            <img
                src={projectBackground}
                alt="Fondo proyecto"
                className='absolute top-0 left-0 w-full h-full -z-10 object-cover
                '
            />
            <img
                src={projectBackgroundSVG}
                alt="Fondo proyecto"
                className='absolute top-0 left-0 w-full h-full z-10 object-cover
                '
            />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute -bottom-5 w-full z-40'><path fill="var(--color-bgPage)" fillOpacity="1" d="M0,32L72,64L144,288L216,160L288,288L360,288L432,128L504,96L576,160L648,96L720,256L792,96L864,96L936,256L1008,96L1080,224L1152,320L1224,128L1296,96L1368,192L1440,64L1440,320L1368,320L1296,320L1224,320L1152,320L1080,320L1008,320L936,320L864,320L792,320L720,320L648,320L576,320L504,320L432,320L360,320L288,320L216,320L144,320L72,320L0,320Z"></path></svg>

            <h2 className='text-white text-6xl font-bold text-center bounceItem w-full max-w-4xl text-shadow-2xs/50 sticky top-10 mt-[25%] h-max'>
                Descubre lo que he
                <span className='font-bold bg-linear-to-r from-green-500 to-blue-500 bg-clip-text text-transparent ml-3 
                    md:text-6xl md:text-start
                    max-md:text-4xl max-md:text-center'>
                    creado con pasión.
                </span>
            </h2>
        </section>
    );
}