// Hooks
import { motion } from "motion/react"

const MusicFloat = () => {
    return (
        <motion.div 
            className="fixed bottom-4 right-4 bg-linear-to-r from-[#1a1a2e] to-[#16213e] px-4 py-3 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3 min-w-60 opacity-0! z-30 pointer-events-none"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
        >
            {/* Song Info & Progress */}
            <div className="flex-1 min-w-0">
                <div className="text-[9px] text-cyan-400 font-bold tracking-wider uppercase mb-0.5">
                    AMBIENTE
                </div>
                <div className="text-white font-medium text-xs truncate mb-1.5">
                    Música de Fondo
                </div>
                {/* Progress Bar */}
                <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "33%" }}
                        transition={{ duration: 1, delay: 0.8 }}
                    />
                </div>
            </div>

            {/* Play Button */}
            <button className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform active:scale-95 shadow-lg shadow-cyan-500/50">
                <i className="fa-solid fa-play text-white text-xs ml-0.5"></i>
            </button>
        </motion.div>
    );
};

export default MusicFloat;