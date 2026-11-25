import { motion, AnimatePresence } from 'motion/react';
import { useHistory } from '../../../context/pages/historyData';
import { Link } from 'react-router';

export default function History() {
    const listH = useHistory((s) => s.histories);

    return (
        <motion.nav
            className="p-5 fixed top-4 left-4 h-[calc(100% - 32px)] rounded-lg z-50 bg-bPage/50 backdrop-blur-2xl overflow-y-auto overflow-x-hidden"
            initial={{ opacity: 0, x: -50, width: 0 }}
            animate={{ opacity: 1, x: 0, width: "248px" }}
            exit={{ opacity: 0, x: -50, width: 0 }}
            transition={{ type: "spring", stiffness: 290, damping: 26, mass: 0.9 }}
        >
            <p className="text-gray-200 ml-3">Pestañas recientes</p>
            <hr className="border-none outline-[0.2px] outline-gray-100/10 mt-2 mb-5" />

            {listH.length > 0 ? (
                <ul className="w-full flex flex-col gap-3 scrollbar-thumb-transparent scrollbar-thin">
                    <AnimatePresence initial={false}>
                        {listH.map((item) => (
                            <ItemHistory key={item.path} {...item} />
                        ))}
                    </AnimatePresence>
                </ul>
            ) : (
                <EmptyHistory />
            )}
        </motion.nav>
    );
}

function ItemHistory({ title, image, path }: { title: string; image: string; path: string }) {
    const deleteHistory = useHistory((s) => s.deleteHistory);

    return (
        <motion.li
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, x: -40 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative group h-40 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 hover:ring-white/30 transition-shadow"
        >
            <Link to={path ?? '/'} className="w-full h-full p-3 flex items-end">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 -z-10 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                <div className="relative z-10 w-full flex items-center justify-between gap-2 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold truncate">{title}</p>
                    <span className="text-white/80 text-xs px-2 py-1 rounded-full bg-white/15 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                        Abrir <i className="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
            </Link>

            <button
                aria-label={`Eliminar ${title}`}
                onClick={() => deleteHistory(title)}
                className="absolute top-2 right-2 size-8 grid place-items-center rounded-full bg-black/50 backdrop-blur-md text-white/80 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 hover:bg-red-500 hover:text-white active:scale-90 transition-all cursor-pointer"
            >
                <i className="fa-solid fa-xmark"></i>
            </button>
        </motion.li>
    );
}

function EmptyHistory() {
    return (
        <motion.div
            className="w-full text-center gap-2 mt-10 px-2 text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
        >
            <i className="fa-regular fa-folder-open text-4xl text-gray-500"></i>
            <p className="text-gray-300">No hay pestañas recientes</p>
            <p className="text-sm text-gray-500">
                Las páginas que visites aparecerán aquí.
            </p>
        </motion.div>
    );
}