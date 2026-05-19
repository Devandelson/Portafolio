// -- assets
import perfil from '../../assets/Mi foto.jpg';
import trofeo from '../../assets/Trofeo.png';
import bg_about from '../../assets/Home_v2.jpg';
import bg_about2 from '../../assets/Home_v2SS.png';
import Moon from '../../assets/Moon.png';
import sky from '../../assets/sky.png';

// hooks
import { motion, type Variants } from "motion/react"
import { useState } from 'react';

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
    const cardVariants: Variants = {
        offscreen: {
            y: '100px',
            scale: 0.8,
            opacity: 0,
        },
        onscreen: {
            y: 10,
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    }

    return (
        <div className={`w-full
        h-auto min-h-screen
        relative bg-linear-to-b from-slate-950 via-purple-900/40 to-orange-200`}>
            <header className='w-full h-auto min-h-screen relative z-20 bg-transparent'>
                <motion.img src={Moon} className='absolute w-80 aspect-square -top-20 -left-20 -z-10 object-cover'
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 0.5 }}
                    variants={cardVariants}
                />

                <span className='w-full h-full absolute top-0 left-0 overflow-hidden'>
                    <motion.img src={sky} className='absolute w-full h-1/2 top-0 left-0 -z-10 object-cover'
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ amount: 0.8 }}
                        variants={cardVariants}
                    />
                </span>


                <img src={bg_about2} className='absolute w-full h-full top-0 left-0 z-30 object-cover object-center pointer-events-none' />

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-0 z-40'><path fill="#09192f" fill-opacity="1" d="M0,32L72,64L144,288L216,160L288,288L360,288L432,128L504,96L576,160L648,96L720,256L792,96L864,96L936,256L1008,96L1080,224L1152,320L1224,128L1296,96L1368,192L1440,64L1440,320L1368,320L1296,320L1224,320L1152,320L1080,320L1008,320L936,320L864,320L792,320L720,320L648,320L576,320L504,320L432,320L360,320L288,320L216,320L144,320L72,320L0,320Z"></path></svg>

                <motion.div className='w-full h-auto flex flex-col items-center z-20 justify-center text-center pointer-events-auto! sticky! top-25 md:top-10
                '
                    initial="offscreen"
                    animate="onscreen"
                    variants={cardVariants}
                >
                    <div className='flex flex-row-reverse items-center gap-3 sm:gap-5 md:gap-6 flex-wrap justify-center w-max m-auto'>
                        <span className='text-center order-2 md:order-1'>
                            <h2 className='flex items-center flex-wrap
                            max-md:justify-end justify-center
                            gap-2 sm:gap-3 text-3xl md:text-5xl font-bold bounceItem'>
                                <i className="fa-solid fa-code text-orange-400 text-2xl sm:text-3xl md:text-4xl"></i>
                                Soy Andelson
                            </h2>
                            <h3 className='text-4xl md:text-6xl text-green-600 font-bold mt-1 bounceItem max-md:text-right'>
                                Dev. FrontEnd
                            </h3>
                        </span>
                        <img
                            src={perfil}
                            alt="imagen de perfil"
                            className='w-40 max-md:w-25 aspect-square object-cover rounded-full shadow-2xl order-1 md:order-2 bounceItem'
                        />
                    </div>

                    <div className='flex items-center md:justify-end justify-center gap-2 sm:gap-3 md:gap-3.5 flex-wrap mt-4 sm:mt-5 md:mt-6'>
                        <ButtonHeader title="+ 3 años de exp" />
                        <ButtonHeader title="+ 15 proyectos realizados" />
                    </div>

                    <button className='flex flex-col items-center gap-1 sm:gap-1.5 text-lg sm:text-xl md:text-2xl mt-6 sm:mt-8 md:mt-10 hover:text-blue-400 transition-colors bounceItem cursor-pointer'>
                        Descubre más <i className="fa-solid fa-angle-down animate-bounce"></i>
                    </button>
                </motion.div>
            </header>
        </div>
    )
}

function InfoAboutMe() {
    return (
        <section className='w-full min-h-[70vh] text-center relative
        bg-linear-to-t from-bgPage to-[#09192f] flex items-center justify-center
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
                <motion.img src={trofeo} alt="Trofeo" className='w-[50%] object-fill bounceItem'
                    animate={{ y: -30 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />

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
                            Contáctame aquí
                        </h2>
                        <i className="fas fa-sparkles text-emerald-400 text-xl sm:text-2xl"></i>
                    </div>
                    <p className="text-slate-400 text-sm sm:text-base">
                        ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
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
                                    Envíame un mensaje
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm">
                                    Lleva tu marca al siguiente nivel
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
                                    Email
                                </label>
                                <div className="input-glow rounded-xl transition-all duration-300">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="nombre@ejemplo.com"
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
                                    Mensaje
                                </label>
                                <div className="input-glow rounded-xl transition-all duration-300">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Cuéntame sobre tu proyecto..."
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
                                <span>Enviar Mensaje</span>
                                <i className="fas fa-paper-plane text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}