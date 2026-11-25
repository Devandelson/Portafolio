// assets
import avatar from '../../assets/Avatar-remove.png';
import imgMi from '../../assets/Sobre Mí.png';
import imgArchive from '../../assets/Archivos.png';
import imgProyect from '../../assets/Proyectos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';
import ExtractPresentationImg from '../../data/imagesPresentation.ts';

// Hooks
import { motion, AnimatePresence, type Variants } from "motion/react"
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

// -- contexts
import { useMenu } from '../../context/menu/switchMenu.tsx';
import { useSwitchAnimation } from '../../context/animations/switchAnimation.tsx';
import useWallpaper from "../../context/pages/setting.tsx";
import { useHistory } from '../../context/pages/historyData.tsx';

// Componentes
import Setting from '../../pages/settings/setting.tsx';
import HomeVideo from './components/video.tsx';
import Intro from './components/Intro.tsx';

function HomePage() {
  const [option, setOpcion] = useState(false);
  const [video, setVideo] = useState(() => {
    const histories = useHistory.getState().histories;
    return !(histories && histories.length > 0);
  });
  
  const currentHistories = useHistory.getState().histories;

  const { listMenu, setTMenu } = useMenu();
  const fondos = useWallpaper((state) => state.wallpapers);
  const fondoHome = fondos.filter((item) => {
    return item.selected;
  })[0].src;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: 'easeOut' } },
  }

  const { animations } = useSwitchAnimation();
  const animationActive = animations.find(animation => animation.active);
  const animation = animationActive ? animationActive.animation : undefined;
  const avatarClass =
    'm-auto aspect-square object-cover rounded-full bounceItem';
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleStartExperience = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.play()
      .then(() => {
        video.pause();
        video.currentTime = 0;
      })
      .catch(console.warn);

    setTimeout(() => {
      video.play().catch((err) => {
        console.warn(err.name, err);
        video.muted = true;
        video.play();
      });
    }, 1500);
  };

  useEffect(() => {
    function checkLoadPage() {
      if (currentHistories && currentHistories.length > 0) {
        setVideo(false);
      }
    }
    checkLoadPage();
  }, []);

  return (
    <>
      {video && <Intro event={handleStartExperience}></Intro>}
      <AnimatePresence mode='wait'>
        {video && <HomeVideo setVideo={setVideo} videoRef={videoRef}></HomeVideo>}
      </AnimatePresence>

      <motion.div className='w-full min-h-screen h-auto bg-bgPage text-txWhite flex items-center flex-col justify-center rounded-2xl sm:p-6 md:p-7 relative z-2 overflow-hidden'
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animation}
        transition={{ duration: 0.4 }}
        key={'home'}
      >
        {video == false &&
          <motion.img
            src={fondoHome}
            alt="Fondo de la pantalla de inicio"
            className='w-full h-full top-0 left-0 absolute -z-2 object-cover rounded-2xl'
            initial={{ opacity: 0, scale: 2.2, filter: 'blur(12px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 2.2,
              ease: [0.16, 1, 0.3, 1], // arranca rápido y frena muy suave
              opacity: { duration: 1, ease: 'easeOut' }, // aparece antes de terminar el zoom
            }}
          />
        }

        <span className='w-full h-full top-0 left-0 absolute -z-1 bg-black/30 rounded-2xl' ></span>

        <FontAwesomeIcon icon={faPenClip} className='fixed bottom-7 right-7 text-2xl text-white transition-all hover:scale-110 active:scale-95 duration-100 hover:text-orange-500 cursor-pointer z-30'
          onClick={() => { setOpcion((prev) => !prev) }}
        ></FontAwesomeIcon>

        <AnimatePresence mode="wait">
          {video == false && <motion.div
            key="content"
            className="w-full flex flex-col justify-center items-center relative z-2 p-6 h-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.img
              layoutId="avatar"
              src={avatar}
              alt="Avatar del programador"
              className={`${avatarClass} w-48 sm:w-64 md:w-80`}
              initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 12, duration: 1.2 }}
            />

            <motion.h1
              variants={item}
              className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center px-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent bounceItem"
            >
              Bienvenido a mi portafolio
            </motion.h1>

            <motion.p
              variants={item}
              className="text-gray-400 text-base sm:text-xl md:text-2xl lg:text-3xl text-center px-4 mt-2 bounceItem"
            >
              Explora mi trayectoria, proyectos y habilidades.
            </motion.p>

            <motion.div variants={item} className="w-full flex justify-center">
              <Seeker />
            </motion.div>

            <motion.section
              variants={item}
              className="w-full max-w-3xl mx-auto flex items-center justify-center gap-4 sm:gap-5 mt-6 sm:mt-7 flex-wrap px-4"
            >
              {listMenu.slice(1).map((data, index) => (
                <NavigationCard key={index} index={index} action={setTMenu} title={data.name} />
              ))}
            </motion.section>

            <motion.section variants={item} className="w-full max-w-3xl mt-15 sm:mt-10 px-4">
              <hr className="border-gray-50/10" />
              <div className="w-full flex items-center gap-2 flex-wrap p-2 text-white/60 text-xs sm:text-sm md:text-base">
                <p className="flex items-center gap-1 sm:gap-2">
                  <motion.span
                    className="w-2 aspect-square rounded-full bg-green-300 block"
                    animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  System Active |
                </p>
                <p className="flex items-center gap-1">
                  <i className="fa-solid fa-calendar-day"></i>
                  <span className="hidden sm:inline">Last Build:</span>
                  <span className="sm:hidden">Build:</span> 3.2 - 11/22/2026
                </p>
              </div>
            </motion.section>
          </motion.div>}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence mode="wait">
        {option && (<Setting setOpcion={setOpcion} />)}
      </AnimatePresence>
    </>
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
      className='cursor-pointer group bounceItem'
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
  const addHistory = useHistory.getState().addHistory;
  const [valueInput, setValue] = useState("");
  const { listMenu, setTMenu } = useMenu();

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      const searchValue = valueInput.toLowerCase();
      const foundMenu = listMenu.find(menu => menu.name.toLowerCase() === searchValue);
      if (foundMenu) {
        setTMenu(foundMenu.name);
        const img = ExtractPresentationImg(foundMenu.name);
        addHistory({
          'image': img ?? '',
          'path': foundMenu.path,
          'title': foundMenu.name
        });
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
      className="w-full max-w-3xl mx-auto mt-8 sm:mt-12 md:mt-15 p-4 sm:p-5 md:p-6 bg-black/40 focus-within:bg-black backdrop-blur-xl rounded-2xl sm:rounded-3xl flex items-center gap-3 sm:gap-4 md:gap-5 transition-colors group bounceItem"
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
        className="grow outline-none bg-transparent text-sm sm:text-base placeholder:text-gray-500"
        value={valueInput}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => { handleSearch(e); }}
      />
    </motion.section>
  )
}

export default HomePage;