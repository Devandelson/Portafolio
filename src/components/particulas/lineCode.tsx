// -- Hooks
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import imgCode from '../../assets/linea de programacion.png';
import { useEffect, useState, useRef } from "react";

type ParticleItem = {
    id: number;
    position: number; // 0 = izquierda, 1 = derecha
    y: number;
    w: number;
    x: number;
    duration: number;
    delay: number;
};

const PANEL_WIDTH = 420;
const WIDTHS = [280, 310, 340, 360, 390, 420];

function randomFrom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function createParticleData(id: number): ParticleItem {
    const position = Math.round(Math.random());
    const w = randomFrom(WIDTHS);
    // x pegado al borde, sin salirse — la línea siempre se ve completa
    const maxX = PANEL_WIDTH - w;
    const x = Math.max(0, Math.random() * maxX);

    return {
        id,
        position,
        y: 0,
        w,
        x,
        duration: 7 + Math.random() * 9,
        delay: Math.random() * 1.5,
    };
}

function LineCode() {
    const [particles, setParticles] = useState<ParticleItem[]>(() =>
        Array.from({ length: 6 }, (_, i) => createParticleData(i))
    );
    const counterRef = useRef(6);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        function schedule() {
            const nextDelay = 200 + Math.random() * 400;
            timeout = setTimeout(() => {
                const id = counterRef.current++;
                setParticles(prev => [...prev, createParticleData(id)]);
                schedule();
            }, nextDelay);
        }

        schedule();
        return () => clearTimeout(timeout);
    }, []);

    function removeParticle(id: number) {
        setParticles(prev => prev.filter(p => p.id !== id));
    }

    function updateY(id: number, newY: number) {
        setParticles(prev =>
            prev.map(p => p.id === id ? { ...p, y: newY } : p)
        );
    }

    return (
        <>
            {/* Overlay verde izquierdo — muy transparente, solo tinte */}
            <div
                className="fixed top-0 left-0 h-screen pointer-events-none z-20"
                style={{
                    width: PANEL_WIDTH,
                    background: `linear-gradient(to right,
                        rgba(0, 60, 15, 0.28) 0%,
                        rgba(0, 50, 10, 0.14) 60%,
                        transparent 100%
                    )`,
                }}
            />

            {/* Overlay verde derecho */}
            <div
                className="fixed top-0 right-0 h-screen pointer-events-none z-20"
                style={{
                    width: PANEL_WIDTH,
                    background: `linear-gradient(to left,
                        rgba(0, 60, 15, 0.28) 0%,
                        rgba(0, 50, 10, 0.14) 60%,
                        transparent 100%
                    )`,
                }}
            />

            <div
                className="fixed top-0 left-0 h-screen pointer-events-none z-30"
                style={{ width: PANEL_WIDTH }}
            >
                {particles
                    .filter(p => p.position === 0)
                    .map(item => (
                        <ItemParticle
                            key={item.id}
                            data={item}
                            mirror={false}
                            onRemove={removeParticle}
                            onUpdateY={updateY}
                        />
                    ))}
            </div>

            <div
                className="fixed top-0 right-0 h-screen pointer-events-none z-30"
                style={{ width: PANEL_WIDTH }}
            >
                {particles
                    .filter(p => p.position === 1)
                    .map(item => (
                        <ItemParticle
                            key={item.id}
                            data={item}
                            mirror={true}
                            onRemove={removeParticle}
                            onUpdateY={updateY}
                        />
                    ))}
            </div>
        </>
    );
}

// -------------------------------------------------------

type ItemParticleProps = {
    data: ParticleItem;
    mirror: boolean;
    onRemove: (id: number) => void;
    onUpdateY: (id: number, y: number) => void;
};

function ItemParticle({ data, mirror, onRemove, onUpdateY }: ItemParticleProps) {
    const { id, w, x, duration, delay } = data;

    const motionY = useMotionValue(-40);

    useMotionValueEvent(motionY, "change", (latest) => {
        onUpdateY(id, latest);
    });

    return (
        <motion.div
            className="absolute top-0 pointer-events-none"
            style={{
                y: motionY,
                left: x,
                width: w,
                opacity: 0.90,
                transformOrigin: 'left center',
                transform: mirror ? 'scaleX(-1)' : undefined,
            }}
            animate={{ y: '125vh' }}
            transition={{
                duration,
                delay,
                ease: [0.05, 0.2, 0.55, 1],
            }}
            onAnimationComplete={() => onRemove(id)}
        >
            <img
                src={imgCode}
                draggable={false}
                style={{
                    width: '100%',
                    display: 'block',
                    filter: 'hue-rotate(85deg) saturate(1.3) brightness(1.0)',
                    pointerEvents: 'none',
                }}
                className="max-md:pointer-events-none!"
            />
        </motion.div>
    );
}

export default LineCode;