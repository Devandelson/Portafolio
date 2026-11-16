import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, MotionConfig, motion, type Variants } from 'motion/react'
import { historiaData as data } from '../../data/historia.ts'

const ease = [0.22, 1, 0.36, 1] as const
const spring = { type: 'spring', stiffness: 220, damping: 28 } as const
const VISIBLE = 4 // active image + 3 peeking behind it

// d = direction (1 forward, -1 back) so everything enters/leaves from the correct side
const tile: Variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60, scale: 0.9, filter: 'blur(8px)' }),
    show: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    exit: (d: number) => ({ opacity: 0, x: d * -60, scale: 0.9, filter: 'blur(8px)' }),
}
const text: Variants = {
    enter: (d: number) => ({ opacity: 0, y: d * 24 }),
    show: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d * -24 }),
}
// side tiles hide on small screens so the active image keeps its space
const responsive = ['', '', 'max-sm:hidden', 'max-lg:hidden']

export default function HistorySlider() {
    const [[index, dir], setNav] = useState<[number, number]>([0, 1])
    const [img, setImg] = useState(0) // active image inside the active article
    const total = data.length
    const active = data[index]
    const order = Array.from({ length: Math.min(VISIBLE, total) }, (_, k) => data[(index + k) % total])

    const go = (i: number, d: number) => {
        setNav([(i + total) % total, d])
        setImg(0)
    }
    const step = (d: number) => setImg((p) => (p + d + active.imagenes.length) % active.imagenes.length)

    return (
        <MotionConfig reducedMotion="user">
            <section className="relative z-10 mx-auto mt-2 grid w-full max-w-7xl grid-cols-1 gap-6 bg-bgPage p-4 sm:p-7 lg:grid-cols-[auto_minmax(0,400px)_minmax(0,1fr)] lg:gap-10">
                {/* RAIL: click any number; the green pill slides to it */}
                <nav className="order-2 min-w-0 lg:order-none">
                    <ul className="relative flex items-center justify-between gap-2 overflow-x-auto p-2 lg:h-full lg:flex-col lg:overflow-visible lg:px-4 lg:py-0">
                        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/15 lg:left-1/2 lg:top-0 lg:h-full lg:w-px lg:-translate-x-1/2 lg:translate-y-0" />
                        {data.map((it, i) => (
                            <li key={it.id} className="relative z-10 shrink-0">
                                <button
                                    type="button"
                                    aria-label={`Ir a ${it.titulo}`}
                                    aria-current={i === index}
                                    onClick={() => go(i, i > index ? 1 : -1)}
                                    className={`relative grid h-9 w-9 cursor-pointer place-items-center rounded-full text-sm font-semibold transition-colors
                                    ${i === index ? 'text-black' : 'bg-neutral-800 text-white/60 hover:text-white'}`}
                                >
                                    {i === index && (
                                        <motion.span layoutId="rail-pill" transition={spring} className="absolute inset-0 rounded-full bg-green-500" />
                                    )}
                                    <span className="relative">{i + 1}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* TEXT */}
                <article className="order-3 flex min-h-48 flex-col lg:order-none">
                    <AnimatePresence mode="wait" custom={dir} initial={false}>
                        <motion.div
                            key={active.id}
                            custom={dir}
                            variants={text}
                            initial="enter"
                            animate="show"
                            exit="exit"
                            transition={{ duration: 0.35, ease }}
                            className='max-h-100 h-auto overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-green-600'
                        >
                            <h3 className="text-balance font-bold leading-tight sm:text-2xl lg:text-3xl">{active.titulo}</h3>
                            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">{active.descripcion}</p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="mt-auto flex gap-3 pt-6">
                        <button
                            type="button"
                            onClick={() => go(index - 1, -1)}
                            className="flex cursor-pointer items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-semibold text-white transition hover:bg-white/10 active:scale-95"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} /> Anterior
                        </button>
                        <button
                            type="button"
                            onClick={() => go(index + 1, 1)}
                            className="flex cursor-pointer items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400 active:scale-95"
                        >
                            Siguiente <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </article>

                {/* IMAGES: active card up front, the next ones peek behind at descending heights */}
                <div className="relative order-1 flex h-72 min-w-0 items-center gap-3 sm:h-[420px] lg:order-none lg:h-[480px]">
                    <AnimatePresence mode="popLayout" custom={dir} initial={false}>
                        {order.map((it, k) => (
                            <motion.div
                                key={it.id}
                                layout
                                custom={dir}
                                variants={tile}
                                initial="enter"
                                animate="show"
                                exit="exit"
                                transition={{ layout: spring, default: { duration: 0.5, ease } }}
                                style={{ flex: k === 0 ? 3.2 : 1, height: `${100 - k * 16}%`, borderRadius: 24 }}
                                className={`relative min-w-0 overflow-hidden bg-neutral-800 ${responsive[k]}`}
                            >
                                <motion.img layout src={String(it.imagenes[0])} alt={k === 0 ? it.titulo : ''} className="absolute inset-0 h-full w-full object-cover" />

                                {k === 0 ? (
                                    <>
                                        {/* extra photos of the same article crossfade over the first one */}
                                        <AnimatePresence initial={false}>
                                            {img > 0 && (
                                                <motion.img
                                                    key={img}
                                                    src={String(it.imagenes[img])}
                                                    alt=""
                                                    className="absolute inset-0 h-full w-full object-cover"
                                                    initial={{ opacity: 0, scale: 1.04 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.35, ease }}
                                                />
                                            )}
                                        </AnimatePresence>
                                        {it.imagenes.length > 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/50 p-1 backdrop-blur-md"
                                            >
                                                <button type="button" aria-label="Imagen anterior" onClick={() => step(-1)} className="grid h-8 w-8 cursor-pointer place-items-center rounded-full text-white transition hover:bg-white/20 active:scale-90">
                                                    <FontAwesomeIcon icon={faChevronLeft} />
                                                </button>
                                                <span className="flex items-center gap-1.5">
                                                    {it.imagenes.map((_, j) => (
                                                        <span key={j} className={`h-1.5 rounded-full transition-all ${j === img ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`} />
                                                    ))}
                                                </span>
                                                <button type="button" aria-label="Imagen siguiente" onClick={() => step(1)} className="grid h-8 w-8 cursor-pointer place-items-center rounded-full text-white transition hover:bg-white/20 active:scale-90">
                                                    <FontAwesomeIcon icon={faChevronRight} />
                                                </button>
                                            </motion.div>
                                        )}
                                    </>
                                ) : (
                                    <button
                                        type="button"
                                        aria-label={`Ir a ${it.titulo}`}
                                        onClick={() => go((index + k) % total, 1)}
                                        className="absolute inset-0 cursor-pointer bg-black/35 transition-colors duration-300 hover:bg-black/10"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>
        </MotionConfig>
    )
}