// -- assets
import perfil from '../../assets/Mi foto.jpg';
import trofeo from '../../assets/Trofeo.png';
import bg_about from '../../assets/about-2.jpg';
import cape_about from '../../assets/cape-about.svg';
import moon from '../../assets/Moon.png';

// hooks
import Tilt from 'react-parallax-tilt';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { motion, type Variants } from 'framer-motion';

// -- contexts
import { useSwitchAnimation } from '../../context/animations/switchAnimation.tsx';

// -- Data
import { type HistoriaItem, historiaData } from '../../data/historia.ts';
import LogroCard from './cardsArchievements.tsx';
import { logrosData } from '../../data/logro.ts';

// -- components
import Skills from './skills.tsx';

export default function About() {
    const { animations } = useSwitchAnimation();
    const animationActive = animations.find(animation => animation.active);
    const animation = animationActive ? animationActive.animation : undefined;

    return (
        <motion.section className={`w-full h-auto text-white bg-bgPage`}
            key={'about'}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={animation}
            transition={{ duration: 0.4 }}
        >

            <HeaderAbout />
            <InfoAboutMe />
            <div className='bg-bgPage relative z-30'>
                <Skills />
                <History />
                <Achievements />
                <ContactForm />
            </div>
        </motion.section>
    )
}
// -- COMPONENTES
function ButtonHeader({ title }: { title: string }) {
    return (
        <span className='p-2 px-3 sm:p-2.5 sm:px-4 md:p-3 md:px-5 bg-bPage z-10 block w-max rounded-lg
                            relative font-semibold text-xs sm:text-sm md:text-base

                            after:-bottom-1.5 sm:after:-bottom-2 after:-left-1.5 sm:after:-left-2 after:absolute after:w-full after:h-full after:bg-blue-400/10 after:rounded-lg after:-z-10
                            bounceItem '>
            {title}
        </span>
    )
}

function HeaderAbout() {
    const moonReft = useRef<HTMLImageElement>(null);
    const capeReft = useRef<HTMLImageElement | null>(null);
    const capeReft2 = useRef<HTMLSpanElement | null>(null);

    // 1. Definimos las variantes de animación
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                // Tiempo de espera antes de iniciar la animación de los hijos
                delayChildren: 0.2,
                // Tiempo de retraso entre la aparición de cada elemento hijo
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    const handleScroll = () => {
        if (moonReft.current) {
            moonReft.current.style.transform = `translateY(${window.scrollY * 0.5}px) rotate(${window.scrollY * 0.2}deg)`;
            moonReft.current.style.scale = `${Math.max(window.scrollY * 0.0080, 1)}`;
        }

        if (capeReft.current && capeReft2.current) {
            capeReft.current.style.transform = `translateY(-${window.scrollY * 0.8}px)`;
            capeReft2.current.style.transform = `translateY(-${window.scrollY * 0.8}px)`;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', () => { handleScroll() });
        return () => window.removeEventListener('scroll', () => { handleScroll() });
    }, []);

    return (
        <div className={`w-full h-auto min-h-screen relative`}>
            <header className='w-full h-auto min-h-screen relative z-20 bg-transparent overflow-hidden'>
                <img src={bg_about} className='absolute top-0 left-0 w-full -z-20 h-full object-cover' />
                <img src={cape_about} className='absolute h-full object-cover w-full bottom-0 left-0 block z-80' ref={capeReft} />
                <span className='w-full bottom-[-80%] absolute block h-screen bg-[#0B1530] z-80' ref={capeReft2}></span>

                <motion.img src={moon} className='absolute top-[-10%] left-[-10%] w-[35%] -z-20 aspect-square object-cover max-md:w-[50%]' ref={moonReft}
                    initial={{
                        scale: 0,
                        translateY: -100,
                        filter: 'blur(10px)'
                    }}
                    animate={{
                        scale: 1,
                        translateY: 0,
                        filter: 'blur(0px)'
                    }}
                />

                <motion.div
                    className='w-full h-screen flex flex-col items-center justify-center text-center -mt-15'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div>
                        {/* 2. Bloque de Perfil y Textos */}
                        <div className='flex flex-row-reverse items-center gap-3 sm:gap-5 md:gap-6 flex-wrap justify-center w-max'>
                            <span className='text-center order-2 md:order-1'>
                                <motion.h2 className='flex items-center flex-wrap max-md:justify-end justify-center gap-2 sm:gap-3 text-3xl md:text-5xl font-bold bounceItem' variants={itemVariants}>
                                    <i className="fa-solid fa-code text-orange-700 text-2xl sm:text-3xl md:text-4xl"></i>
                                    Soy Andelson
                                </motion.h2>

                                <motion.h3 className='text-4xl md:text-6xl text-green-600 font-bold mt-1 bounceItem max-md:text-right' variants={itemVariants}>
                                    Dev. Software
                                </motion.h3>
                            </span>

                            <motion.img
                                src={perfil}
                                alt="imagen de perfil"
                                className='w-35 max-md:w-25 aspect-square object-cover rounded-full shadow-2xl order-1 md:order-2 bounceItem'
                                variants={itemVariants}
                            />
                        </div>
                    </div>

                    {/* 6. Los Botones de Experiencia */}
                    <motion.div className='flex items-center md:justify-end justify-center gap-2 sm:gap-3 md:gap-3.5 flex-wrap mt-4 sm:mt-5 md:mt-9' variants={itemVariants}>
                        <ButtonHeader title="+ 3 años de exp" />
                        <ButtonHeader title="+ 15 proyectos realizados" />
                    </motion.div>
                </motion.div>
            </header>
        </div>
    )
}

function InfoAboutMe() {
    return (
        <section className='w-full min-h-[70vh] text-center relative
        bg-linear-to-t from-bgPage to-[#0B1530] flex items-center justify-center
        z-30'>
            <motion.div className="max-w-3xl mx-auto px-6 relative z-20"
                initial={{ y: 80, opacity: 0, scale: 1 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2
                    className={`text-6xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter bounceItem`}
                >
                    ¿Quién soy?
                </motion.h2>

                <p
                    className={`mt-6 text-center text-xl md:text-2xl text-white leading-relaxed font-medium text-shadow-2xs/80 bounceItem`}
                >
                    Soy un dev <span className="text-emerald-300 font-bold">Front-End</span> con habilidades adicionales de <span className="text-emerald-300 font-bold">Back-End</span>.
                    Mi portafolio refleja un crecimiento constante y un compromiso firme con la innovación.
                    Cada proyecto que realizo es una <span className="text-emerald-100 font-semibold">fusión entre tecnología y creatividad</span>.
                </p>
            </motion.div>
        </section>
    )
}

function History() {
    return (
        <>
            <section className='w-full h-90 bg-bPage flex items-center justify-center text-center p-4 relative z-10'>
                {/* Texto con efecto hundido/grabado */}
                <h2
                    className="text-8xl sm:text-8xl md:text-9xl lg:text-9xl font-bold bounceItem"
                    style={{
                        color: '#0f2525',
                        textShadow: `
                            1px 1px 2px rgba(255, 255, 255, 0.10),
                            -1px -1px 1px rgba(0, 0, 0, 20)
                        `
                    }}
                >
                    Mi historia
                </h2>
            </section>

            <section className='w-full max-w-7xl mx-auto h-auto relative mt-2 flex gap-5 flex-wrap p-4 sm:p-7 py-4 justify-center z-10 bg-bgPage'>
                {historiaData.map((item) => (
                    <HistoriaCard key={item.id} item={item} />
                ))}
            </section>
        </>
    )
}


interface HistoriaCardProps {
    item: HistoriaItem;
}

function HistoriaCard({ item }: HistoriaCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? item.imagenes.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === item.imagenes.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <article className='w-80 grow max-w-100 sm:max-w-90 h-auto rounded-lg p-4 flex flex-col items-start gap-3 text-start relative z-2
        
        after:content-[""] after:absolute after:rounded-lg after:-z-2
        after:bg-white/5 after:border after:border-gray-300/5
        after:w-full after:h-[85%] after:bottom-0 after:left-0 bounceItem
        '>
            <div className='relative w-full group'>
                <motion.img
                    src={item.imagenes[currentImageIndex]}
                    key={item.imagenes[currentImageIndex]}
                    alt={`Imagen ${currentImageIndex + 1} del proyecto`}
                    className='rounded-lg shadow-2xl w-full h-64 object-cover transition-opacity duration-300'

                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                />

                {item.imagenes.length > 1 && (
                    <>
                        <div className='absolute bottom-2 left-2 z-10 flex items-center gap-2'>
                            <button
                                onClick={handlePrevImage}
                                className='p-1 px-2.5 text-sm rounded-full bg-blue-400/50 hover:bg-blue-400/70 text-white transition-all active:scale-95'
                            >
                                <i className="fa-solid fa-angle-left"></i>
                            </button>

                            <button
                                onClick={handleNextImage}
                                className='p-1 px-2.5 text-sm rounded-full bg-blue-400/50 hover:bg-blue-400/70 text-white transition-all active:scale-95'
                            >
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>

                        {/* Indicador de imágenes */}
                        <div className='absolute bottom-2 right-2 z-10 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs'>
                            {currentImageIndex + 1} / {item.imagenes.length}
                        </div>
                    </>
                )}
            </div>

            <div className='flex-1 flex flex-col gap-3 w-full'>
                <p
                    className='text-sm sm:text-base leading-relaxed overflow-y-auto max-h-40 p-1 text-balance'
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#064e3b transparent',
                    }}

                    dangerouslySetInnerHTML={{ __html: item.descripcion }}
                />

                <p className='text-white/30 text-sm mt-auto'>
                    <i className="fa-solid fa-calendar-day mr-1"></i>
                    Fecha: {item.fecha}
                </p>
            </div>
        </article>
    );
}

import { useInView } from 'react-intersection-observer';
import confetti from 'canvas-confetti';

function Achievements() {
    const { ref, inView } = useInView({ triggerOnce: true });

    if (inView) {
        confetti({
            particleCount: 800,
            spread: 800,
            origin: { y: 0.6 },
        });
    }

    return (
        <div className='w-full p-4 max-w-7xl mx-auto'
            ref={ref}
        >
            <section className='w-full flex items-center gap-2 flex-wrap justify-center text-center mb-10 mt-20 z-2 relative min-h-125 sm:min-h-100'>
                <Tilt
                    scale={1.15} transitionSpeed={2500} reset={false}
                >
                    <motion.img src={trofeo} alt="Trofeo" className='w-87.5 object-fill bounceItem cursor-pointer!'
                        // 1. Activamos el arrastre en ambos ejes
                        drag
                        // 2. Limitamos el movimiento (0 significa que su "casa" es el centro)
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        // 3. Qué tan elástico es el rebote al jalarlo (0 = rígido, 1 = súper suelto)
                        dragElastic={0.15}
                        // 4. Suavidad de la física de retorno
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}
                        // 5. Animación rápida mientras mantienes el touch/click presionado
                        whileTap={{ scale: 0.95, cursor: "grabbing" }}
                    />
                </Tilt>


                <span className="p-4 sm:p-7 bg-bPage rounded-2xl font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl block relative
                
                after:absolute after:-top-4 sm:after:-top-7 after:left-2 sm:after:left-4 after:content-['+_5'] after:text-3xl sm:after:text-5xl after:block after:z-10 after:text-white bounceItem
                ">
                    <h2>Logros</h2>
                </span>
            </section>

            <section className='w-full h-auto relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                {logrosData.map((logro, index) => (
                    <LogroCard key={logro.id} logro={logro} index={index} />
                ))}
            </section>
        </div>
    );
}

function ContactForm() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950/30 flex items-center justify-center mt-10 p-4 sm:p-6 lg:p-8 bounceItem">
            <style>{`
        .input-glow:focus-within {
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        
        .social-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-btn:hover {
          transform: translateY(-4px);
        }
      `}</style>

            <div className="w-full max-w-2xl">
                {/* Header con emoji animado */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className="inline-block mb-4">
                        <div className="text-6xl sm:text-7xl lg:text-8xl">
                            👋
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                            ¿Hablamos?
                        </h2>
                        <i className="fas fa-sparkles text-emerald-400 text-xl sm:text-2xl"></i>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
                        Estoy buscando nuevas oportunidades profesionales. Si crees que mi perfil encaja en tu equipo, me encantaría conversar.
                    </p>
                </div>

                {/* Card principal */}
                <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-500/10 shadow-2xl overflow-hidden">
                    {/* Efecto de brillo de fondo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        {/* Header interno */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                    Ponte en contacto
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm">
                                    Abierto a nuevas vacantes y desafíos técnicos
                                </p>
                            </div>
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg">
                                <i className="fas fa-envelope text-slate-900 text-xl sm:text-2xl"></i>
                            </div>
                        </div>

                        {/* Formulario */}
                        <form className="space-y-6"
                            action="https://formspree.io/f/xyyrwzae"
                            method="POST"
                        >
                            {/* Campo Email */}
                            <div className="group">
                                <label
                                    htmlFor="email"
                                    className="block text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-emerald-400 transition-colors mb-2 ml-1"
                                >
                                    Tu Correo Institucional / Personal
                                </label>
                                <div className="input-glow rounded-xl transition-all duration-300">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="nombre@empresa.com"
                                        className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:border-emerald-500/50 outline-none transition-all text-white placeholder:text-slate-600 font-medium"
                                    />
                                </div>
                            </div>

                            {/* Campo Mensaje */}
                            <div className="group">
                                <label
                                    htmlFor="message"
                                    className="block text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-emerald-400 transition-colors mb-2 ml-1"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                    Mensaje o Propuesta
                                </label>
                                <div className="input-glow rounded-xl transition-all duration-300">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Cuéntame sobre la vacante o el equipo..."
                                        rows={4}
                                        className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:border-emerald-500/50 outline-none transition-all text-white placeholder:text-slate-600 resize-none font-medium"
                                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                    />
                                </div>
                            </div>

                            {/* Botón de envío */}
                            <button
                                type="submit"
                                className="w-full py-4 sm:py-5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-900 font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all transform active:scale-[0.98] flex justify-center items-center gap-3 group"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                <span>Enviar Propuesta</span>
                                <i className="fas fa-paper-plane text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}