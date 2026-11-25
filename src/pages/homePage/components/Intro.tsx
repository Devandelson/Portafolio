import { AnimatePresence, motion } from "motion/react"
import { useState } from "react";

export default function Intro({ event }: {
    event: () => void
}) {
    const [triggerIntro, setTriggerIntro] = useState(false);

    const bg = ['bg-orange-100', 'bg-orange-300', 'bg-orange-500', 'bg-orange-700', 'bg-orange-900', 'bg-orange-950'];

    return (
        <AnimatePresence mode="wait">
            {triggerIntro == false &&
                <motion.section className='flex items-center justify-center fixed top-0 left-0 w-full h-screen z-250 bg-gray-900 overflow-hidden'
                    exit={{
                        opacity: 0
                    }}
                    transition={{
                        delay: 1
                    }}
                >
                    <motion.button className="cursor-pointer transition-all bg-blue-500 text-white px-4 py-1.5 rounded-lg duration-100
                        border-blue-600
                        border-b-4 hover:brightness-110 hover:-translate-y-px hover:border-b-[6px]
                        active:border-b-2 active:brightness-90 active:translate-y-px"
                        exit={{
                            scale: 0
                        }}
                        transition={{
                            delay: 0.2
                        }}
                        onClick={() => {
                            setTriggerIntro(true);
                            event();
                        }}
                    >
                        ¡Vamos!
                    </motion.button>

                    {
                        [1, 3, 5, 7, 9, 11].map((value, index) => (
                            <motion.span className={`size-30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            ${bg[index]}`}
                                key={index}
                                style={{
                                    zIndex: -value,
                                    scale: index > 4 ? 50 : -value
                                }}
                                exit={{
                                    scale: [index > 4 ? 50 : value, value + (value * 0.3), 0]
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * (0.5 * 0.1),
                                    ease: [.27, -0.34, .6, 1.28]
                                }}
                            >
                            </motion.span>
                        ))
                    }
                </motion.section>

            }
        </AnimatePresence>
    )
}