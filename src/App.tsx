// hooks
import { BrowserRouter, Routes, Route, Outlet } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { useState, lazy, Suspense } from 'react';

// Contextos
import { MenuProvider } from './context/menu/switchMenu.tsx';
import { SwitchAnimationProvider } from './context/animations/switchAnimation.tsx';

// Páginas
const HomePage = lazy(() => import('./pages/homePage/home.tsx'));
const About = lazy(() => import('./pages/aboutMe/about.tsx'));
const Archive = lazy(() => import('./pages/archive/archive.tsx'));
const Proyect = lazy(() => import('./pages/proyects/proyects.tsx'));

// Componentes
import Menu from './components/flotante/menu.tsx';
import SocialFloat from './components/flotante/controles.tsx';
import Particle1 from './components/particulas/particle1.tsx';
import Particle2 from './components/particulas/particle2.tsx';
import Particle3 from './components/particulas/particle3.tsx';
import LineaCodigo from './components/particulas/lineCode.tsx';
import Loader from './components/flotante/LoadScreen.tsx';
import Sonido from './components/flotante/sonido.tsx';

// Types
import { type particle } from './types/particles/particle.ts';

import SonidoEspacial from './assets/Sounds/sonido_ambiental.mp3';
import SonidoJuego from './assets/Sounds/juego.wav';
import SNavidad from './assets/Sounds/navidad.mp3';
import SAmbiental from './assets/Sounds/musica_ambiente1.mp3';
import Scodigo from './assets/Sounds/Codigos.mp3';

// Layout que usa Outlet
function Layout() {
  const [particle, setParticle] = useState<particle[]>([
    {
      icon: 'fa-solid fa-ban',
      particle: <></>,
      isActive: true,
      sonido: SAmbiental,
    },
    {
      icon: 'fa-solid fa-circle',
      particle: <Particle1 />,
      isActive: false,
      sonido: SonidoJuego,
    },
    {
      icon: 'fa-solid fa-snowflake',
      particle: <Particle2 />,
      isActive: false,
      sonido: SNavidad,
    },
    {
      icon: 'fa-solid fa-code',
      particle: <LineaCodigo />,
      isActive: false,
      sonido: Scodigo,
    },
    {
      icon: 'fa-brands fa-space-awesome',
      particle: <Particle3 />,
      isActive: false,
      sonido: SonidoEspacial,
    }
  ]);

  const particleSelect = particle.find(item => item.isActive);

  return (
    <>
      {/* Animar las partículas */}
      <AnimatePresence mode="wait">
        <motion.div
          key={particleSelect?.icon} // cambia cuando cambia la partícula activa
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
          }}
          className='fixed top-0 left-0 w-full
                h-full overflow-hidden z-70 rounded-2xl pointer-events-none! bg-white/0'
        >
          {particleSelect?.particle}
        </motion.div>
      </AnimatePresence>

      <Menu>
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Outlet />
          </div>
        </AnimatePresence>
      </Menu>
      <div className='w-full fixed top-2 h-max flex items-center justify-between z-90 p-3'>
        <SocialFloat setParticle={setParticle} particleSelect={particleSelect} particle={particle} />
        <Sonido particleSelect={particleSelect}></Sonido>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MenuProvider>
        <SwitchAnimationProvider>
          <AnimatePresence mode='wait'>
            <Routes>
              <Route element={
                <Suspense fallback={<Loader />}>
                  <Layout />
                </Suspense>
              }>
                <Route path='/' element={<HomePage />} />
                <Route path='/sobreMi' element={<About />} />
                <Route path='/archivo' element={<Archive />} />
                <Route path='/proyectos' element={<Proyect />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </SwitchAnimationProvider>
      </MenuProvider>
    </BrowserRouter>
  );
}

export default App;