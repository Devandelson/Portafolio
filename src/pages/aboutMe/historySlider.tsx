// resources
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { type HistoriaItem, historiaData } from '../../data/historia.ts';

// Hooks
import { useState } from 'react';

// tools
import { motion, AnimatePresence } from 'motion/react'

export default function HistorySlider() {
    const [hData, setHData] = useState<HistoriaItem[]>(() =>
        historiaData.map((item, i) => ({ ...item, estado: i === 0 }))
    );
    const [listNumber, setListNumber] = useState<number>(0);
    const [imgIndex, setImgIndex] = useState<number>(0); // imagen activa dentro del artículo

    // variables -----------------
    const activeHData = hData[0];
    const totalImgs = activeHData.imagenes.length;
    const hasMultiple = totalImgs > 1;
    const currentSrc = activeHData.imagenes[imgIndex] ?? activeHData.imagenes[0];
    const imgs = hData.map((item) => [item.imagenes[0], item.estado]);
    const ease = [0.22, 1, 0.36, 1] as const;
    const spring = { type: "spring", stiffness: 220, damping: 28, mass: 0.9 } as const;

    function next() {
        setHData((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first].map((it, i) => ({ ...it, estado: i === 0 }));
        });
        setListNumber((prev) => (prev + 1) % hData.length);
        setImgIndex(0);
    }

    function back() {
        setHData((prev) => {
            const last = prev[prev.length - 1];
            return [last, ...prev.slice(0, -1)].map((it, i) => ({ ...it, estado: i === 0 }));
        });
        setListNumber((prev) => (prev - 1 + hData.length) % hData.length);
        setImgIndex(0);
    }

    function nextImg() {
        setImgIndex((prev) => (prev + 1) % totalImgs);
    }

    function prevImg() {
        setImgIndex((prev) => (prev - 1 + totalImgs) % totalImgs);
    }

    return (
        <section
            className="relative z-10 mx-auto mt-2 grid w-full max-w-7xl grid-cols-1 gap-5 bg-bgPage p-4
            sm:p-7 lg:grid-cols-[auto_minmax(0,450px)_minmax(0,1fr)] lg:gap-8"
        >
            {/* NUMEROS: horizontal en móvil, vertical en escritorio */}
            <nav className="order-2 min-w-0 lg:order-none lg:h-full">
                <ul
                    className="relative flex list-none items-center justify-between gap-2 overflow-x-auto px-2 py-2
                    lg:h-full lg:flex-col lg:gap-8 lg:overflow-visible lg:px-6 lg:py-0"
                >
                    {/* línea */}
                    <span
                        className="absolute left-0 top-1/2 w-full -translate-y-1/2 border-t border-white
                        lg:left-1/2 lg:top-0 lg:h-full lg:w-0 lg:-translate-x-1/2 lg:translate-y-0 lg:border-l lg:border-t-0"
                    />
                    {hData.map((_, index) => (
                        <li
                            key={index}
                            className={`z-10 shrink-0 rounded-full border border-transparent text-center text-sm font-semibold transition-all sm:text-base
                            ${listNumber === index
                                    ? 'border-white bg-black p-2 px-3.5 text-white sm:px-4'
                                    : 'bg-white p-1 px-2.5 text-black'}`}
                        >
                            {index + 1}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* TEXTO */}
            <article className="order-3 grid w-full grid-rows-[auto_1fr_auto] lg:order-none lg:max-w-[450px]">
                <h3 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                    {activeHData.titulo}
                </h3>
                <p className="mt-3 text-base sm:mt-4 sm:text-lg">
                    {activeHData.descripcion}
                </p>

                <section className="mt-5 flex flex-wrap items-center gap-2">
                    <ButtonHistory label="atras" funcion={back} />
                    <ButtonHistory label="alante" funcion={next} />
                </section>
            </article>

            {/* IMAGENES: arriba en móvil */}
            <div className="order-1 min-w-0 lg:order-none lg:min-h-[350px]">
                <div className="relative flex h-64 w-full flex-nowrap items-center gap-1.5 overflow-hidden sm:h-80 lg:h-full">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {/* Active image (contenedor con botones internos) */}
                        <motion.div
                            key={`active-${activeHData.id}`}
                            layout
                            className="group/img relative h-full w-full max-w-[70%] shrink-0 overflow-hidden rounded-lg bg-gray-50
                            transition-[max-width,border-radius] duration-500
                            sm:max-w-[60%] lg:max-w-[55%] lg:hover:max-w-[80%] lg:hover:rounded-xl"
                            style={{ willChange: "transform, opacity, filter" }}
                            initial={{ y: -20, opacity: 0, filter: "blur(10px)", scale: 0.96 }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
                            exit={{ y: 20, opacity: 0, filter: "blur(10px)", scale: 0.96 }}
                            transition={{
                                layout: spring,
                                y: spring,
                                scale: spring,
                                opacity: { duration: 0.4, ease },
                                filter: { duration: 0.4, ease },
                            }}
                        >
                            {/* cambio suave entre las imágenes del mismo artículo */}
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.img
                                    key={currentSrc}
                                    src={String(currentSrc)}
                                    alt={activeHData.titulo || 'Imagen del logro'}
                                    className="h-full w-full object-cover"
                                    initial={{ opacity: 0, scale: 1.03 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25, ease }}
                                />
                            </AnimatePresence>

                            {hasMultiple && (
                                <>
                                    <ButtonImage direction="left" funcion={prevImg} />
                                    <ButtonImage direction="right" funcion={nextImg} />

                                    {/* contador */}
                                    <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2.5 py-0.5 text-xs font-semibold text-white">
                                        {imgIndex + 1} / {totalImgs}
                                    </span>

                                    {/* puntos */}
                                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                                        {activeHData.imagenes.map((_, i) => (
                                            <span
                                                key={i}
                                                className={`h-1.5 rounded-full transition-all ${i === imgIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </motion.div>

                        {/* Side images */}
                        {imgs.map((imgItem, i) =>
                            imgItem[1] === false && (
                                <motion.img
                                    key={`side-${imgItem[0]}`}
                                    layout
                                    src={String(imgItem[0])}
                                    alt=""
                                    className="h-full w-full max-w-[35%] shrink-0 rounded-lg bg-gray-50 object-cover sm:max-w-[40%]"
                                    style={{ willChange: "transform, opacity, filter" }}
                                    initial={{ x: -40, opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                                    animate={{ x: 0, opacity: 1, filter: "blur(0px)", scale: 0.9 }}
                                    exit={{ x: -40, opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                                    transition={{
                                        layout: spring,
                                        x: spring,
                                        scale: spring,
                                        opacity: { duration: 0.4, ease, delay: i * 0.04 },
                                        filter: { duration: 0.4, ease, delay: i * 0.04 },
                                    }}
                                />
                            )
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

function ButtonHistory({ label, funcion }: { label: 'alante' | 'atras', funcion: () => void }) {
    return (
        <button
            aria-label={label}
            className="group relative cursor-pointer overflow-hidden rounded-lg border-2 border-green-500 px-5 py-2 transition-all active:scale-90"
            onClick={funcion}
        >
            <span className="relative z-10 text-xl font-bold text-white duration-500 group-hover:text-green-500">
                <FontAwesomeIcon icon={label === 'alante' ? faChevronRight : faChevronLeft} />
            </span>
            <span className="absolute left-0 top-0 h-full w-full bg-green-500 duration-500 group-hover:-translate-x-full" />
            <span className="absolute left-0 top-0 h-full w-full bg-green-500 duration-500 group-hover:translate-x-full" />
            <span className="absolute left-0 top-0 h-full w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full" />
            <span className="absolute left-0 top-0 h-full w-full bg-green-500 delay-300 duration-500 group-hover:translate-y-full" />
        </button>
    )
}

// Botones dentro de la imagen
function ButtonImage({ direction, funcion }: { direction: 'left' | 'right', funcion: () => void }) {
    return (
        <button
            type="button"
            aria-label={direction === 'left' ? 'Imagen anterior' : 'Imagen siguiente'}
            onClick={funcion}
            className={`absolute top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full
            bg-black/55 text-white backdrop-blur-sm transition-all hover:bg-green-500 active:scale-90
            ${direction === 'left' ? 'left-2' : 'right-2'}`}
        >
            <FontAwesomeIcon icon={direction === 'left' ? faChevronLeft : faChevronRight} />
        </button>
    )
}