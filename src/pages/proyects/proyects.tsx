// Componentes
import VerImagen from './verImagen.tsx';

// assets
import projectBackground from '../../assets/fondo7_portafolio.jpg';
import projectIcon from '../../assets/3d proyecto.png';

// hooks
import { motion, AnimatePresence, type Variants } from "motion/react";
import { useState } from 'react';

// data
import { type Proyecto, proyectosData } from '../../data/proyectos.ts';
import { tecnologiasData } from '../../data/tecnologias.ts';

// -- contexts
import { useSwitchAnimation } from '../../context/animations/switchAnimation.tsx';

type OpenState = {
    isOpen: boolean;
    imagenes: string[];
    indexInicial: number;
    onClose: () => void;
};

export default function Proyect() {
    const [filter, setFilter] = useState<'todos' | 'destacado' | 'regular'>('todos');
    const [open, setOpen] = useState<OpenState>({
        isOpen: false,
        imagenes: [],
        indexInicial: 0,
        onClose: () => { }
    });

    const { animations } = useSwitchAnimation();
    const animationActive = animations.find(animation => animation.active);
    const animation = animationActive ? animationActive.animation : undefined;

    // Filtrar proyectos
    const proyectosFiltrados = filter === 'todos'
        ? proyectosData
        : proyectosData.filter(proyecto => proyecto.categoria === filter);

    return (
        <>
            <motion.div
                className="w-full min-h-screen h-auto relative"
                initial="hidden"
                animate="visible"
                exit="exit"
                key={'proyects'}
                variants={animation}
                transition={{ duration: 0.4 }}
            >
                <Header />
                <Filters onFilterChange={setFilter} />
                <ProjectGrid 
                    key={filter} 
                    proyectos={proyectosFiltrados}
                    setOpen={setOpen}
                />
            </motion.div>

            {/* Modal para ver imágenes */}
            <AnimatePresence>
                {open.isOpen && (
                    <VerImagen
                        imagenes={open.imagenes}
                        indexInicial={open.indexInicial}
                        onClose={() => setOpen({ ...open, isOpen: false })}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

function Header() {
    return (
        <section className='w-full min-h-90 h-auto overflow-hidden relative z-1 flex items-center justify-center gap-3.5 flex-wrap p-5'>
            <img
                src={projectBackground}
                alt="Fondo proyecto"
                className='absolute top-0 left-0 w-full h-full -z-10 blur-sm object-cover'
            />

            <h2 className='text-white text-5xl flex flex-col text-start font-bold max-w-md w-full 
                md:text-5xl md:text-start
                max-md:text-3xl max-md:text-center max-md:mt-10 max-md:w-full max-md:px-4'>
                Descubre lo que he
                <span className='font-bold bg-linear-to-r from-green-500 to-blue-500 bg-clip-text text-transparent 
                    md:text-6xl md:text-start
                    max-md:text-4xl max-md:text-center'>
                    creado con pasión.
                </span>
            </h2>
            <img
                src={projectIcon}
                alt="icono proyecto"
                className='w-150 object-contain'
            />
        </section>
    );
}

// --- Componente de filtro
interface FiltersProps {
    onFilterChange: (categoria: 'todos' | 'destacado' | 'regular') => void;
}

function Filters({ onFilterChange }: FiltersProps) {
    const [activeFilter, setActiveFilter] = useState<'todos' | 'destacado' | 'regular'>('todos');

    const handleFilterClick = (filter: 'todos' | 'destacado' | 'regular') => {
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    const filterButtons: ReadonlyArray<{
        value: 'todos' | 'destacado' | 'regular';
        label: string;
        icon: string;
    }> = [
        { value: 'todos', label: 'Todos', icon: 'fas fa-th' },
        { value: 'destacado', label: 'Destacados', icon: 'fas fa-star' },
        { value: 'regular', label: 'Regulares', icon: 'fas fa-folder' }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-7 mt-5">
            <div className="flex flex-col items-start gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="flex items-center space-x-2 sm:space-x-3 text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                    <span>Categorías</span>
                    <i className="fas fa-chevron-right text-blue-600"></i>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                    {filterButtons.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => handleFilterClick(filter.value)}
                            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium shadow-md transition-all text-sm sm:text-base
                                ${activeFilter === filter.value
                                    ? 'bg-blue-600 text-white shadow-blue-600/20'
                                    : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white'
                                }`}
                        >
                            <i className={`${filter.icon} mr-2`}></i>
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ------- Contenedor de proyectos
interface ProjectGridProps {
    proyectos: typeof proyectosData;
    setOpen: (open: OpenState) => void;
}

function ProjectGrid({ proyectos, setOpen }: ProjectGridProps) {
    const contaienerVariants: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
    };

    const childrenVarints: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="max-w-7xl mx-auto px-4 pb-8">
            {proyectos.length === 0 ? (
                <div className="text-center py-20">
                    <i className="fas fa-folder-open text-6xl text-slate-400 mb-4"></i>
                    <p className="text-slate-400 text-xl">No hay proyectos en esta categoría</p>
                </div>
            ) : (
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={contaienerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <AnimatePresence>
                        {proyectos.map(proyecto => (
                            <ProjectCard 
                                key={proyecto.id} 
                                proyecto={proyecto} 
                                variants={childrenVarints} 
                                setOpen={setOpen} 
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </section>
    );
}

// --- item proyecto.
interface ProjectCardProps {
    proyecto: Proyecto;
    variants: Variants;
    setOpen: (open: OpenState) => void;
}

interface ButtonContent {
    text: string;
    icon: string;
    action: () => void;
}

function ProjectCard({ proyecto, variants, setOpen }: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? proyecto.imagenes.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === proyecto.imagenes.length - 1 ? 0 : prev + 1
        );
    };

    // Obtener tecnologías del proyecto
    const tecnologias = proyecto.logos
        .map(logoId => tecnologiasData.find(tech => tech.id === logoId))
        .filter((tech): tech is NonNullable<typeof tech> => tech !== undefined);

    // Determinar el icono y texto del botón
    const getButtonContent = (): ButtonContent | null => {
        switch (proyecto.tipoBoton) {
            case 'visualizar':
                return {
                    text: 'Ver proyecto',
                    icon: 'fas fa-external-link-alt',
                    action: () => window.open(proyecto.enlace, '_blank')
                };
            case 'github':
                return {
                    text: 'Ver en GitHub',
                    icon: 'fab fa-github',
                    action: () => window.open(proyecto.enlace, '_blank')
                };
            case 'imagen':
                return {
                    text: 'Ver imágenes',
                    icon: 'fas fa-images',
                    action: () => {
                        setOpen({
                            isOpen: true,
                            imagenes: proyecto.imagenes,
                            indexInicial: 0,
                            onClose: () => setOpen({
                                isOpen: false,
                                imagenes: [],
                                indexInicial: 0,
                                onClose: () => {}
                            })
                        });
                    }
                };
            default:
                return null;
        }
    };

    const buttonContent = getButtonContent();

    return (
        <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group relative h-full grid grid-rows-[auto_1fr]"
            variants={variants}
        >
            {/* Glow effect para destacados */}
            {proyecto.categoria === 'destacado' && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity rounded-full"></div>
            )}

            {/* Image container */}
            <div className="relative h-56 overflow-hidden">
                <img
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                    src={proyecto.imagenes[currentImageIndex]}
                />

                {/* Navigation buttons - solo si hay más de 1 imagen */}
                {proyecto.imagenes.length > 1 && (
                    <>
                        <div className="absolute bottom-3 left-3 flex space-x-2">
                            <button
                                onClick={handlePrevImage}
                                className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors active:scale-95"
                            >
                                <i className="fas fa-chevron-left text-xs"></i>
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors active:scale-95"
                            >
                                <i className="fas fa-chevron-right text-xs"></i>
                            </button>
                        </div>

                        {/* Indicador de imágenes */}
                        <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                            {currentImageIndex + 1} / {proyecto.imagenes.length}
                        </div>
                    </>
                )}

                {/* Badge de destacado */}
                {proyecto.categoria === 'destacado' && (
                    <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        <i className="fas fa-star mr-1"></i>
                        Destacado
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 relative z-10 grid grid-rows-[auto_auto_1fr_auto]">
                <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white">
                    {proyecto.titulo}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {tecnologias.map((tech) => (
                        <span
                            key={tech.id}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-200/50 dark:bg-slate-700/50 text-xs font-medium text-slate-700 dark:text-slate-300 h-max"
                        >
                            <i className={tech.icono}></i>
                            {tech.nombre}
                        </span>
                    ))}
                </div>

                <p
                    className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: proyecto.descripcion }}
                />

                {buttonContent && (
                    <button
                        onClick={buttonContent.action}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-semibold text-sm"
                    >
                        {buttonContent.text}
                        <i className={`${buttonContent.icon} ml-2 text-xs`}></i>
                    </button>
                )}
            </div>
        </motion.div>
    );
}