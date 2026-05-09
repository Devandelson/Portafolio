import { motion, useMotionValue, animate } from "framer-motion";

// -- Types
interface ParticleItem {
    color: string;
    x: number;
    duration: number;
    delay: number;
}

interface ItemParticleProps {
    item: ParticleItem;
}

function ParticleExample() {
    const countItems: number = 40;
    const colors: string[] = [
        '#00e5ff',
        '#1de9b6',
        '#40c4ff',
        '#b2ebf2',
        '#69ffdb',
        '#00bcd4',
        '#e0f7fa',
        '#80deea',
        '#26c6da',
        '#00acc1',
    ];

    const dataItems: ParticleItem[] = [];

    for (let x: number = 0; x <= countItems; x++) {
        const indiceColor = Math.floor(Math.random() * colors.length);

        const basicDataItems: ParticleItem = {
            color: colors[indiceColor],
            x: Math.floor(Math.random() * window.innerWidth) + 1,
            duration: (Math.random() * 10) + 3,
            delay: (Math.random() * 10) + 3,
        };

        dataItems.push(basicDataItems);
    }

    return (
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-30 bg-transparent overflow-hidden">
            {dataItems.map((item, index) => (
                <ItemParticle item={item} key={index} />
            ))}
        </div>
    );
}

function ItemParticle({ item }: ItemParticleProps) {
    const offsetX = useMotionValue(0);

    function mouseEnter(e: React.MouseEvent) {
        const directionX = e.clientX > item.x ? -60 : 60;

        animate(offsetX, offsetX.get() + directionX, {
            type: "spring",
        });
    }

    return (
        <motion.span
            className="absolute p-6 pointer-events-auto max-md:pointer-events-none!"
            style={{ x: offsetX, left: item.x, top: -60 }}
            animate={{ y: ["-30px", "130vh"] }}
            transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "linear",
            }}
            onMouseEnter={mouseEnter}
        >
            <span
                className="w-6 aspect-square rounded-full block"
                style={{
                    background: item.color,
                    boxShadow: `0 0 6px 2px ${item.color}55`,
                }}
            />
        </motion.span>
    );
}

export default ParticleExample;