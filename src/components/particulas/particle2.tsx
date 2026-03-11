import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

import copoNieve from '../../assets/Copo.png';

// -- Types
interface ParticleItem {
    x: number;
    duration: number;
    delay: number;
}

interface ItemParticleProps {
    item: ParticleItem;
}

function Particle2() {
    const countItems: number = 40;
    const [particleStop, setParticleStop] = useState<boolean>(false);
    const [timeParticle, setTimeParticle] = useState<number>(5000);

    const dataItems: ParticleItem[] = useMemo(() => {
        const items: ParticleItem[] = [];

        for (let x = 0; x < countItems; x++) {
            items.push({
                x: Math.floor(Math.random() * window.innerWidth) + 1,
                duration: (Math.random() * 10) + 3,
                delay: (Math.random() * 10) + 3,
            });
        }

        return items;
    }, []);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> = setInterval(() => {
            setParticleStop(true);
        }, timeParticle);

        const handleMouseMove = () => {
            clearInterval(interval);

            interval = setInterval(() => {
                setParticleStop(true);
            }, timeParticle);

            setParticleStop(false);
            setTimeParticle(5000);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearInterval(interval);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [timeParticle]);

    const classActiveParticle: [string, string] = particleStop
        ? ['bg-blue-400/50 pointer-events-auto backdrop-blur-sm', 'scale-110']
        : ['bg-transparent pointer-events-none', ''];

    return (
        <section className={`fixed top-0 left-0 w-full h-screen z-30 overflow-hidden transition-all ${classActiveParticle[0]}`}>
            <div className={`w-full h-full block ${classActiveParticle[1]} transition-all duration-300`}>
                {dataItems.map((item, index) => (
                    <ItemParticle item={item} key={index} />
                ))}
            </div>
        </section>
    );
}

function ItemParticle({ item }: ItemParticleProps) {
    const offsetX = useMotionValue(0);

    function mouseEnter(e: React.MouseEvent) {
        const directionX = e.clientX > item.x ? -60 : 60;

        animate(offsetX, offsetX.get() + directionX, {
            type: "spring",
            stiffness: 200,
            damping: 15,
        });
    }

    return (
        <motion.span
            className="absolute p-6 pointer-events-auto"
            style={{ x: offsetX, left: item.x, top: -100 }}
            animate={{ y: ["-30px", "130vh"] }}
            transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "linear",
            }}
            onMouseEnter={mouseEnter}
        >
            <span className="w-18 aspect-square p-2 rounded-full block">
                <img src={copoNieve} className="w-full h-full object-contain" alt="copo de nieve" />
            </span>
        </motion.span>
    );
}

export default Particle2;