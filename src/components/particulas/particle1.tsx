// -- Hooks
import { motion, useMotionValue, animate } from "framer-motion";

function ParticleExample() {
    // variables
    const countItems: number = 40;
    const colors: string[] = [
        '#00e5ff',   // cian eléctrico
        '#1de9b6',   // verde teal brillante
        '#40c4ff',   // azul cielo neón
        '#b2ebf2',   // cian pálido/blanco hielo
        '#69ffdb',   // verde menta neón
        '#00bcd4',   // cian medio
        '#e0f7fa',   // blanco azulado suave
        '#80deea',   // teal claro
        '#26c6da',   // cian saturado
        '#00acc1',   // azul-verde profundo
    ];
    const dataItems = [];

    for (let x: number = 0; x <= countItems; x++) {
        const indiceColor = Math.floor(Math.random() * colors.length);

        const basicDataItems = {
            color: colors[indiceColor],
            x: Math.floor(Math.random() * window.innerWidth) + 1,
            duration: (Math.random() * 10) + 3
        };

        dataItems.push(basicDataItems);
    }

    return (
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-30 bg-transparent overflow-hidden">
            {
                dataItems.map((item, index) => (
                    <ItemParticle item={item} key={index}></ItemParticle>
                ))
            }
        </div>
    );
};

function ItemParticle({ item }) {
    const offsetX = useMotionValue(0);

    function mouseEnter(e: React.MouseEvent) {
        const directionX = e.clientX > item.x ? -60 : 60;

        animate(offsetX, offsetX.get() + directionX, {
            type: "spring",
        });
    }

    return (
        <motion.span
            className="absolute p-6 pointer-events-auto"
            style={{ x: offsetX, left: item.x, top: -60 }}
            animate={{ y: ["-30px", "130vh"] }}
            transition={{
                duration: item.duration,
                delay: item.delay ?? item.duration,
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