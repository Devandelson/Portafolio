// hooks
import { motion } from "motion/react"

// -- contexts
import { useSwitchAnimation } from '../../context/animations/switchAnimation.tsx';

// -- asstes
import cv from '../../assets/Cv dev-Andelson Gonzalez.pdf';

export default function Archive() {
    const { animations } = useSwitchAnimation();
    const animationActive = animations.find(animation => animation.active);
    const animation = animationActive ? animationActive.animation : undefined;

    return (
        <motion.div className="w-full max-w-7xl mx-auto min-h-screen h-auto relative"
            initial="hidden"
            animate="visible"
            exit="exit"
            key={'archive'}
            variants={animation}
            transition={{ duration: 0.4 }}
        >
            <span className="w-32 sm:w-40 md:w-50 aspect-square absolute top-0 left-0 rounded-full bg-blue-400/50 blur-3xl"></span>

            <div className="p-4 sm:p-6 md:p-10 w-full h-auto relative overflow-hidden">
                <Headerarchive />
                <div className="overflow-y-auto custom-scrollbar mt-6 md:mt-10">
                    <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-sm">
                        <TablaArchivos />

                        <span className="p-10 sm:p-16 md:p-20 flex flex-col items-center justify-center text-center text-white">
                            <div className="size-12 sm:size-14 md:size-16 rounded-full bg-white/5 flex items-center justify-center mb-3 md:mb-4">
                                <i className="fa-solid fa-inbox text-arc-text-dim/50 text-2xl sm:text-3xl"></i>
                            </div>
                            <p className="text-arc-text-dim text-xs sm:text-sm font-medium">Fin de los archivos públicos</p>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function Headerarchive() {
    return (
        <header className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <section className="relative group">
                <div className="absolute -inset-1 bg-primary/20 rounded-xl md:rounded-2xl blur-xl group-hover:bg-primary/30 transition-all"></div>
                <div className="relative flex items-center justify-center size-14 sm:size-16 md:size-20 bg-linear-to-br from-primary to-[#0e8eb8] rounded-xl md:rounded-2xl shadow-2xl border border-white/20">
                    <i className="fa-solid fa-folder-open text-3xl sm:text-4xl md:text-5xl text-white"></i>
                    <div className="absolute -top-1 -right-1 size-5 sm:size-6 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 flex items-center justify-center">
                        <i className="fa-solid fa-plus text-[10px] sm:text-xs text-white"></i>
                    </div>
                </div>
            </section>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2">Archivos</h1>
        </header>
    );
}

function TablaArchivos() {
    return (
        <div className="overflow-x-auto text-white w-full relative">
            {/* Vista Desktop (tabla normal) */}
            <table className="hidden md:table w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                        <th className="px-6 lg:px-8 py-4 lg:py-5 text-arc-text-dim font-bold text-xs uppercase tracking-widest">Nombre del archivo</th>
                        <th className="px-6 lg:px-8 py-4 lg:py-5 text-arc-text-dim font-bold text-xs uppercase tracking-widest">Fecha</th>
                        <th className="px-6 lg:px-8 py-4 lg:py-5 text-arc-text-dim font-bold text-xs uppercase tracking-widest">Tamaño</th>
                        <th className="px-6 lg:px-8 py-4 lg:py-5 text-arc-text-dim font-bold text-xs uppercase tracking-widest text-right">Controles</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    <tr className="group hover:bg-white/[0.03] transition-colors">
                        <td className="px-6 lg:px-8 py-5 lg:py-6">
                            <div className="flex items-center gap-3 lg:gap-4">
                                <div className="size-10 lg:size-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 ring-1 ring-red-500/20 group-hover:scale-110 transition-transform">
                                    <i className="fa-solid fa-file-pdf text-xl lg:text-2xl"></i>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-base lg:text-lg leading-none mb-1">Curriculum</p>
                                    <p className="text-arc-text-dim text-xs font-medium">Curriculum_Vitae_Updated.pdf</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 lg:px-8 py-5 lg:py-6">
                            <p className="text-arc-text-dim text-sm font-semibold">19/06/2025</p>
                        </td>
                        <td className="px-6 lg:px-8 py-5 lg:py-6">
                            <p className="text-arc-text-dim text-sm font-semibold">1.04 MB</p>
                        </td>
                        <td className="px-6 lg:px-8 py-5 lg:py-6 text-right">
                            <button className="inline-flex items-center gap-2 px-5 lg:px-6 py-2 lg:py-2.5 bg-white/10 hover:bg-primary hover:text-background-dark text-white rounded-xl text-sm font-bold transition-all border border-white/10 hover:border-primary shadow-sm">
                                <i className="fa-solid fa-download text-base lg:text-lg"></i>
                                <a href={cv} download='Andelson-Gonzalez-FrontEnd-CV'>Descargar</a>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Vista Mobile (cards) */}
            <div className="md:hidden space-y-4 p-4">
                <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5 hover:bg-white/[0.05] transition-colors">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="size-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 ring-1 ring-red-500/20">
                            <i className="fa-solid fa-file-pdf text-2xl"></i>
                        </div>
                        <div className="flex-1">
                            <p className="text-white font-bold text-base leading-tight mb-1">Curriculum</p>
                            <p className="text-arc-text-dim text-xs font-medium">Curriculum_Vitae_Updated.pdf</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-arc-text-dim text-[10px] uppercase tracking-wider font-bold mb-1">Fecha</p>
                            <p className="text-white text-sm font-semibold">19/06/2025</p>
                        </div>
                        <div>
                            <p className="text-arc-text-dim text-[10px] uppercase tracking-wider font-bold mb-1">Tamaño</p>
                            <p className="text-white text-sm font-semibold">1.04 MB</p>
                        </div>
                    </div>

                    <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-primary hover:text-background-dark text-white rounded-xl text-sm font-bold transition-all border border-white/10 hover:border-primary shadow-sm">
                        <i className="fa-solid fa-download text-base"></i>
                        <span>Descargar</span>
                    </button>
                </div>

                {/* Puedes repetir más cards aquí */}
            </div>
        </div>
    )
}