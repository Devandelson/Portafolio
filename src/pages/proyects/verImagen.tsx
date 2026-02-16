import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface VerImagenProps {
    imagenes: string[];
    indexInicial: number;
    onClose: () => void;
}

export default function VerImagen({ imagenes, indexInicial, onClose }: VerImagenProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(indexInicial);
    const handlePrevImage = () => {
        setCurrentImageIndex(prev =>
            prev === 0 ? imagenes.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prev =>
            prev === imagenes.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* cerrar */}
            <button
                onClick={onClose}
                className="absolute top-5 right-5 text-white text-3xl hover:text-blue-400 cursor-pointer"
            >
                ✕
            </button>

            {/* marco */}
            <motion.div
                className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4"

                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
            >

                {/* imagen */}
                <AnimatePresence mode="wait">
                    <motion.img
                        src={imagenes[currentImageIndex]}
                        className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg"

                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        key={currentImageIndex}
                    />
                </AnimatePresence>


                {/* controles */}
                {imagenes.length > 1 && (
                    <>
                        <button
                            onClick={handlePrevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-blue-600"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        <button
                            onClick={handleNextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-blue-600"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>


                        {/* contador */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full text-white text-sm">
                            {currentImageIndex + 1} / {imagenes.length}
                        </div>
                    </>
                )}
            </motion.div>
        </motion.div>
    );
}
