// Hooks
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from 'react';

// Assets
import marco from '../../assets/Marco.svg';
import nave from '../../assets/Nave.svg';

// Sounds
import SonidoColision from '../../assets/Sounds/colision.mp3';
import SonidoDisparo from '../../assets/Sounds/disparo.mp3';

function Particle3() {
    const [changeItem, setChangeItem] = useState<number>(0);
    const mouseXRef = useRef<number>(window.innerWidth / 2);
    const naveRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            mouseXRef.current = e.clientX;
        };
        const handleTouch = (e: TouchEvent) => {
            mouseXRef.current = e.touches[0].clientX;
        };
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("touchmove", handleTouch, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleTouch);
        };
    }, []);

    useEffect(() => {
        const interval: ReturnType<typeof setInterval> = setInterval(() => {
            setChangeItem(prev => prev + 1);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const SDisparo = new Audio(SonidoDisparo);
        SDisparo.play().catch(() => {});
        const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
            SDisparo.pause();
            SDisparo.currentTime = 0;
        }, 1500);
        return () => {
            clearTimeout(timer);
            SDisparo.pause();
            SDisparo.currentTime = 0;
        };
    }, [changeItem]);

    useEffect(() => {
        return () => { deactivateModeColision(); };
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.section
                className="fixed top-0 left-0 w-full pointer-events-none z-30"
                style={{
                    height: '100dvh',
                    background: 'linear-gradient(135deg, rgba(0,20,60,0.45) 0%, rgba(0,80,140,0.25) 40%, rgba(0,180,200,0.15) 100%)',
                    boxShadow: 'inset 0 0 80px rgba(0,150,255,0.08), 0 0 40px rgba(0,200,255,0.12)',
                }}
                initial={{ scale: 1.5, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 1.5, opacity: 0, y: -20 }}
            >
                <img
                    src={marco}
                    alt="marco decorativo"
                    className="max-md:scale-200"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                        opacity: 0.6,
                        pointerEvents: 'none',
                    }}
                />

                <Nave mouseXRef={mouseXRef} naveRef={naveRef} />
                <BreakItem key={changeItem} mouseXRef={mouseXRef} naveRef={naveRef} />
            </motion.section>
        </AnimatePresence>
    );
}

// ─── Nave ─────────────────────────────────────────────────────────────────────
interface NaveProps {
    mouseXRef: React.RefObject<number>;
    naveRef: React.RefObject<HTMLSpanElement | null>;
}

function Nave({ mouseXRef, naveRef }: NaveProps) {
    useEffect(() => {
        let rafId: number;
        const update = () => {
            if (naveRef.current) {
                naveRef.current.style.left = mouseXRef.current + "px";
            }
            rafId = requestAnimationFrame(update);
        };
        rafId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(rafId);
    }, [mouseXRef, naveRef]);

    return (
        <span
            ref={naveRef}
            className="-translate-x-1/2"
            style={{
                position: 'absolute',
                bottom: '16px',
                left: `${mouseXRef.current}px`,
                width: 'clamp(55px, 9vw, 95px)',
                zIndex: 10,
            }}
        >
            <img src={nave} alt="nave" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </span>
    );
}

// ─── BreakItem (proyectil) ─────────────────────────────────────────────────────
interface BreakItemProps {
    mouseXRef: React.RefObject<number>;
    naveRef: React.RefObject<HTMLSpanElement | null>;
}

function BreakItem({ mouseXRef, naveRef }: BreakItemProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const spawnX = useRef<number>(mouseXRef.current);
    const spawnY = useRef<number>(window.innerHeight - 100);

    useEffect(() => {
        if (naveRef.current) {
            const rect = naveRef.current.getBoundingClientRect();
            spawnY.current = rect.top;
        }
        if (divRef.current) {
            divRef.current.style.left = `${spawnX.current}px`;
            divRef.current.style.top  = `${spawnY.current}px`;
        }
    }, []);

    const checkCollision = () => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const projCenterX = rect.left + rect.width / 2;
        const projTop     = rect.top;
        const projBottom  = rect.bottom;

        document.querySelectorAll('.bounceItem').forEach((item) => {
            if (item.classList.contains('elementoColisionado')) return;
            item.classList.add('bounceItemBorder');
            const b = item.getBoundingClientRect();
            const overlapX = projCenterX >= b.left && projCenterX <= b.right;
            const overlapY = projTop <= b.bottom && projBottom >= b.top;
            if (overlapX && overlapY) {
                item.classList.add('elementoColisionado');
                const sfx = new Audio(SonidoColision);
                sfx.play().catch(() => {});
                const sfxTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
                    sfx.pause();
                    sfx.currentTime = 0;
                }, 1000);
                // Limpieza preventiva si el componente se desmonta antes
                return () => clearTimeout(sfxTimer);
            }
        });
    };

    return (
        <motion.div
            ref={divRef}
            className="absolute -translate-x-1/2 z-30"
            style={{ left: `${spawnX.current}px`, top: `${spawnY.current}px` }}
            onUpdate={checkCollision}
            animate={{ y: [0, -(spawnY.current + 100)] }}
            transition={{ duration: 2.5, ease: 'linear' }}
        >
            <div className="flex items-center gap-1.5 h-6">
                <span className="w-1.5 h-full block bg-red-400 rounded-sm shadow-[0_0_6px_rgba(248,113,113,0.8)]" />
                <span className="w-1.5 h-full block bg-red-400 rounded-sm shadow-[0_0_6px_rgba(248,113,113,0.8)]" />
            </div>
        </motion.div>
    );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function deactivateModeColision() {
    document.querySelectorAll('.bounceItem').forEach((item) => {
        item.classList.remove('bounceItemBorder');
        item.classList.add('elementoEntrada');
        const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
            item.classList.remove('elementoColisionado');
            item.classList.remove('elementoEntrada');
        }, 500);
        return () => clearTimeout(timer);
    });
}

export default Particle3;