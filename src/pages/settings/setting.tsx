import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

// Resource
import img1 from '../../assets/fondo1_portafolio.jpeg';
import img2 from '../../assets/fondo2_portafolio.jpeg';
import img3 from '../../assets/fondo3_portafolio.jpg';
import img4 from '../../assets/fondo4_portafolio.jpg';
import img5 from '../../assets/fondo6_portafolio.jpg';
import img6 from '../../assets/fondo7_portafolio.jpg';

// Context
import { useSwitchAnimation } from '../../context/animations/switchAnimation.tsx';
import useWallpaper from "../../context/pages/setting.tsx";

// ── Data ─────────────────────────────────────────────────────────────────────

const COLOR_THEMES_Default = [
    { id: "normal", label: "Normal", bg: "bg-blue-800/5", selected: true, bg1: "#101D22", bg2: "#1C2E35" },
    
    // Richer deep navy with clear blue identity
    { id: "ocean", label: "Ocean Blue", bg: "bg-blue-500", selected: false, bg1: "#050e1f", bg2: "#0c1e3d" },
    
    // Deeper forest green, more color presence
    { id: "jade", label: "Jade Forest", bg: "bg-emerald-500", selected: false, bg1: "#041510", bg2: "#082a18" },
    
    // Warm dark amber/rust, feels like sunset
    { id: "sunset", label: "Sunset Clay", bg: "bg-amber-600", selected: false, bg1: "#1c0d00", bg2: "#341800" },
    
    // True deep indigo/violet, clearly purple
    { id: "indigo", label: "Midnight Indigo", bg: "bg-indigo-600", selected: false, bg1: "#07051a", bg2: "#110d30" },
    
    // Cool blue-gray, distinct from normal
    { id: "slate", label: "Slate Gray", bg: "bg-slate-400", selected: false, bg1: "#0d1017", bg2: "#181c26" },
]

const WALLPAPER_THUMBS_default = [
    { id: 1, selected: false, src: img1 },
    { id: 2, selected: true, src: img2 },
    { id: 3, selected: false, src: img3 },
    { id: 4, selected: false, src: img4 },
    { id: 5, selected: false, src: img5 },
    { id: 6, selected: false, src: img6 },
]

// ── Sub-components ────────────────────────────────────────────────────────────

function SettingHeader() {
    return (
        <header className="flex flex-col items-center text-center mb-16">
            <i className="fa-solid fa-gear text-orange-300 text-shadow-lg text-shadow-amber-500 text-8xl mb-10"></i>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight dark:text-white uppercase">
                Configuración del <span className="text-primary">Portafolio</span>
            </h1>
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl text-lg font-medium">
                Personaliza tu espacio de trabajo creativo con herramientas de alta fidelidad.
            </p>
        </header>
    )
}

function ThemeCard({ theme, themeAction }) {
    function changeColor() {
        themeAction((prev) => {
            const copyPrev = [...prev];
            copyPrev.map((item) => {
                if (item.id == theme.id) {
                    item.selected = true;
                } else {
                    item.selected = false;
                }
            })

            return copyPrev;
        });

        document.documentElement.style.setProperty('--color-bgPage', theme.bg1);
        document.documentElement.style.setProperty('--color-bPage', theme.bg2);
    }

    return (
        <div className="group relative cursor-pointer"
            onClick={() => { changeColor() }}
        >
            <div className={`aspect-16/10 rounded-xl overflow-hidden p-1 bg-slate-900/50 transition-all ${theme.selected
                ? "shadow-2xl shadow-white/40 p-0!"
                : "border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600"
                }`}>
                <div className={`w-full h-full rounded-[10px] ${theme.bg} flex flex-col justify-end p-3`}>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    </div>
                </div>
            </div>

            <div className="mt-3 flex items-center gap-2">
                {theme.selected && <i className="fa-solid fa-circle-check text-white text-sm"></i>}
                <span className="text-sm font-semibold dark:text-slate-300">{theme.label}</span>
            </div>
        </div>
    )
}

function ColorThemes() {
    const [COLOR_THEMES, setCOLOR_THEMES] = useState(COLOR_THEMES_Default);
    return (
        <div className="md:col-span-8 glass p-8 rounded-2xl glow-soft">
            <div className="flex items-center gap-3 mb-8 text-white">
                <i className="fa-solid fa-palette text-primary text-xl"></i>
                <h2 className="text-xl font-bold dark:text-white">Temas de colores</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {COLOR_THEMES.map((theme) => (
                    <ThemeCard key={theme.id} theme={theme} themeAction={setCOLOR_THEMES} />
                ))}
            </div>
        </div>
    )
}

function WallpaperThumbs({ WALLPAPER_THUMBS, setWallpapers }) {
    function changeWallpaper(id: number) {
        const copyPrev = [...WALLPAPER_THUMBS];
        copyPrev.map((item) => {
            if (item.id == id) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        })

        setWallpapers(copyPrev);
    }

    return (
        <div className="grid grid-cols-3 gap-4 mt-6">
            {WALLPAPER_THUMBS.map((thumb) => (
                <div key={thumb.id} className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all active:scale-[0.95] ${thumb.selected
                    ? "border-2 border-amber-600 scale-105"
                    : "opacity-50 hover:opacity-100 hover:scale-110"
                    }  `} 
                onClick={() => {changeWallpaper(thumb.id)}}    
                >
                    <img alt="Thumb" className="w-full h-full object-cover" src={thumb.src} />
                </div>
            ))}
        </div>
    )
}

function Wallpaper() {
    const wallpapers = useWallpaper((state) => state.wallpapers);
    const setWallpapers = useWallpaper((state) => state.setWallpapers);

    const MAIN_WALLPAPER = wallpapers.filter((item) => {
        return item.selected;
    })[0];

    return (
        <div className="md:col-span-4 glass p-8 rounded-2xl glow-soft">
            <div className="flex items-center gap-3 mb-8 text-white">
                <i className="fa-solid fa-image text-primary text-xl"></i>
                <h2 className="text-xl font-bold dark:text-white">Fondo de pantalla</h2>
            </div>
            <div className="relative group">
                <div className="relative aspect-square  shadow-2xl transition-transform duration-500 hover:scale-[1.02] z-10 mb-10">
                    <AnimatePresence mode="wait">
                        <motion.img alt="Nature wallpaper" className="w-full h-full object-cover rounded-2xl z-10" src={MAIN_WALLPAPER.src} key={MAIN_WALLPAPER.id}
                            initial={{ scale: 0, rotate: 60, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            exit={{ scale: 0, rotate: 60, opacity: 0 }}
                        />

                        <motion.span className="w-full h-full rotate-12 bg-green-300/40 top-0 left-0 -z-10 absolute rounded-2xl" key={MAIN_WALLPAPER.id + 1}
                            initial={{ scale: 0, rotate: -60, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            exit={{ scale: 0, rotate: 60, opacity: 0 }}
                        ></motion.span>
                    </AnimatePresence>

                    <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></span>

                    <div className="absolute bottom-4 left-4 right-4">
                        <span className="bg-primary/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                            Seleccionado
                        </span>
                    </div>
                </div>
                <WallpaperThumbs WALLPAPER_THUMBS={wallpapers} setWallpapers={setWallpapers} />
            </div>
        </div>
    )
}

function MotionButton({ option, changeAnimation }) {

    function functionChangeAnimation() {
        changeAnimation(option.name);
    }

    return option.active ? (
        <button className="group p-6 rounded-2xl border-2 border-primary bg-primary/5 transition-all flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform text-white">
                <i className={`${option.icon} text-2xl`}></i>
            </div>
            <div className="text-center">
                <div className="text-sm font-bold dark:text-white">{option.label}</div>
                {option.badge && <div className="text-[10px] uppercase tracking-widest text-primary font-bold">{option.badge}</div>}
            </div>
        </button>
    ) : (
        <button className="group p-6 rounded-2xl border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-900/40 transition-all flex flex-col items-center gap-4"
            onClick={functionChangeAnimation}
        >
            <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                <i className={`${option.icon} text-2xl`}></i>
            </div>
            <div className="text-center">
                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">
                    {option.label}
                </div>
            </div>
        </button>
    )
}

function MotionType() {
    const { animations, setAnimation } = useSwitchAnimation();

    return (
        <div className="md:col-span-12 glass p-8 rounded-2xl glow-soft">
            <div className="flex items-center gap-3 mb-8 text-white">
                <i className="fa-solid fa-film text-primary text-xl"></i>
                <h2 className="text-xl font-bold dark:text-white">Tipo de movimiento</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                {animations.map((option) => (
                    <MotionButton key={option.name} option={option} changeAnimation={setAnimation} />
                ))}
            </div>
        </div>
    )
}

// ── Root export ───────────────────────────────────────────────────────────────

export default function Setting() {
    return (
        <motion.main
            className="w-full h-screen overflow-y-auto z-70 bg-[#f0f4f8] dark:bg-[#020617] transition-colors duration-200 scrollbar rounded-2xl fixed top-0 left-0"
            initial={{ x: "-100%", filter: "blur(10px)", opacity: 0 }}
            animate={{ x: 0, filter: "blur(0px)", opacity: 1 }}
            exit={{ x: "-100%", filter: "blur(10px)", opacity: 0 }}
        >
            <div className="max-w-6xl mx-auto px-8 py-12 relative z-10">
                <SettingHeader />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <ColorThemes />
                    <Wallpaper />
                    <MotionType />
                </div>
            </div>
        </motion.main>
    )
}