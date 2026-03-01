// -- Hooks
import { motion, useMotionValue, animate } from "framer-motion";

import copoNieve from '../../assets/Copo.png';
import { useEffect, useState, useMemo } from "react";

function Particle2() {
    // variables
    const countItems: number = 40;;
    const [particleStop, setParticleStop] = useState(false);
    const [timeParticle, setTimeParticle] = useState(5000);

    const dataItems = useMemo(() => {
        const items = [];

        for (let x = 0; x < countItems; x++) {
            items.push({
                x: Math.floor(Math.random() * window.innerWidth) + 1,
                duration: (Math.random() * 10) + 3
            });
        }

        return items;
    }, []);

    useEffect(() => {
        let interval = setInterval(() => {
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

    const classActiveParticle = particleStop ? ['bg-blue-400/50 pointer-events-auto backdrop-blur-sm', 'scale-110'] : ['bg-transparent pointer-events-none', ''];

    return (
        <section className={`fixed top-0 left-0 w-full h-screen z-30 overflow-hidden transition-all ${classActiveParticle[0]}`}>
            <div className={`w-full h-full block ${classActiveParticle[1]} transition-all duration-300`}>
                {
                    dataItems.map((item, index) => (
                        <ItemParticle item={item} key={index}></ItemParticle>
                    ))
                }
            </div>
        </section>
    );
};

function ItemParticle({ item }) {
    const offsetX = useMotionValue(0);  // offset separado para el hover

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
            animate={{ y: ["−30px", "130vh"] }}
            transition={{
                duration: item.duration,
                delay: item.delay ?? item.duration,
                repeat: Infinity,
                ease: "linear",
            }}
            onMouseEnter={mouseEnter}
        >
            <span className="w-18 aspect-square p-2 rounded-full block">
                <img src={copoNieve} className="w-full h-full object-contain" />
            </span>
        </motion.span>
    );
}

export default Particle2;