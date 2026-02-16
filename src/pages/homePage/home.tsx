// assets
import avatar from '../../assets/Avatar-remove.png';
import imgMi from '../../assets/Sobre Mí.png';
import imgArchive from '../../assets/Archivos.png';
import imgProyect from '../../assets/Proyectos.png';
import fondoHome from '../../assets/fondo2_portafolio.jpeg';

// Hooks
import { motion, AnimatePresence } from "motion/react"
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

// -- contexts
import { useMenu } from '../../context/menu/switchMenu.tsx';

// Componentes
function HomePage() {
  const { listMenu, setTMenu } = useMenu();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de carga

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-full min-h-screen h-auto bg-bgPage text-txWhite flex items-center flex-col justify-center rounded-2xl sm:p-6 md:p-7 relative z-2'>
      <img src={fondoHome} alt="Fondo de la pantalla de inicio" className='w-full h-full top-0 left-0 absolute -z-2 object-cover rounded-2xl' />
      <span className='w-full h-full top-0 left-0 absolute -z-1 bg-black/20 rounded-2xl' ></span>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className='flex flex-col items-center gap-4 sm:gap-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className='w-16 h-16 sm:w-20 sm:h-20 border-4 border-blue-400/30 border-t-blue-400 rounded-full'
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              className='text-lg sm:text-xl md:text-2xl text-blue-400 font-medium text-center px-4'
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Cargando portafolio...
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className='w-full flex items-center flex-col justify-center relative z-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={avatar}
              alt="Avatar del programador"
              className='w-40 sm:w-60 md:w-80 lg:w-90 aspect-square object-cover rounded-full'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            <motion.h1
              className='mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center px-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bienvenido a mi Portafolio
            </motion.h1>

            <motion.p
              className='text-gray-400 text-base sm:text-xl md:text-2xl lg:text-3xl text-center px-4 mt-2'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explora mi trayectoria, proyectos y habilidades.
            </motion.p>

            <Seeker></Seeker>

            <section className='w-full max-w-3xl mx-auto flex items-center justify-center gap-4 sm:gap-5 mt-6 sm:mt-7 flex-wrap px-4'>
              {
                listMenu.slice(2).map((data, index) => (
                  <NavigationCard key={index} index={index} action={setTMenu} title={data.name}></NavigationCard>
                ))
              }
            </section>

            <motion.section
              className='w-full max-w-3xl mt-8 sm:mt-10 px-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <hr className='border-gray-50/10' />
              <div className='w-full flex items-center gap-2 flex-wrap p-2 text-white/60 text-xs sm:text-sm md:text-base'>
                <p className='flex items-center gap-1 sm:gap-2'>
                  <motion.span
                    className='w-2 aspect-square rounded-full bg-green-300 block'
                    animate={{
                      scale: [1, 1.2, 1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  System Active |
                </p>
                <p className='flex items-center gap-1'>
                  <i className="fa-solid fa-calendar-day"></i>
                  <span className='hidden sm:inline'>Last Build:</span>
                  <span className='sm:hidden'>Build:</span> 2.4.0 - 2/13/2026
                </p>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function NavigationCard({ index, title, action }: { index: number, title: string, action?: (name: string) => void }) {

  let img = imgMi;

  switch (title) {
    case "Proyectos":
      img = imgProyect;
      break;
    case "Archivos":
      img = imgArchive;
      break;
    default:
      img = imgMi;
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.8 + (index * 0.15),
        type: "spring",
        stiffness: 100
      }}
      className='cursor-pointer group'
      onClick={() => action ? action(title) : null}
    >
      <span className='w-max h-max p-1.5 sm:p-2 px-2 sm:px-3 relative block overflow-hidden
      after:absolute after:w-full after:h-1/2 after:bottom-0 after:bg-blue-400 after:rounded-lg
      after:left-0 after:transition-all after:duration-200
      hover:after:h-full hover:after:shadow-xl hover:after:shadow-blue-400/20
      active:after:scale-95
      '>
        <img
          src={img}
          alt={`Logo ${title}`}
          className='relative z-10 w-12 sm:w-14 md:w-16 lg:w-17 aspect-square object-cover transition-transform duration-200 group-hover:scale-110 group-active:scale-95'
        />
      </span>
      <p className='w-full text-center font-medium text-sm sm:text-base md:text-lg mt-1 sm:mt-2 transition-colors duration-200 group-hover:text-blue-400'>
        {title}
      </p>
    </motion.article>
  )
}

function Seeker() {
  const [valueInput, setValue] = useState("");
  const { listMenu, setTMenu } = useMenu();

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      const searchValue = valueInput.toLowerCase();
      const foundMenu = listMenu.find(menu => menu.name.toLowerCase() === searchValue);
      if (foundMenu) {
        setTMenu(foundMenu.name);
      } else {
        Swal.fire({
          title: 'No se encontró la sección',
          text: 'Por favor, ingresa un nombre de sección válido (Sobre mí, Proyectos, Archivos).',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }
  }
  return (
    <motion.section
      className='w-full max-w-3xl mx-auto mt-8 sm:mt-12 md:mt-15 p-4 sm:p-5 md:p-6 bg-black/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl flex items-center gap-3 sm:gap-4 md:gap-5 group'
      initial={{ opacity: 0, width: "50%" }}
      animate={{ opacity: 1, width: "100%" }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      <datalist id="sectionList">
        <option value="Sobre mí"></option>
        <option value="Proyectos"></option>
        <option value="Archivos"></option>
      </datalist>
      <i className="fa-solid fa-magnifying-glass text-gray-500 transition-colors group-focus-within:text-white text-base sm:text-lg"></i>
      <input
        type="text"
        placeholder="Buscar en el portafolio..."
        list="sectionList"
        className='grow outline-none bg-transparent text-sm sm:text-base placeholder:text-gray-500'
        value={valueInput}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => { handleSearch(e) }}
      />
    </motion.section>
  )
}

export default HomePage;