// hooks
import { BrowserRouter, Routes, Route, Outlet } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { lazy, Suspense, useEffect } from 'react';

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
import Loader from './components/flotante/LoadScreen.tsx';
import AOS from "aos";

// Layout que usa Outlet
function Layout() {
  return (
    <>
      <Menu>
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Outlet />
          </div>
        </AnimatePresence>
      </Menu>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter basename='/Portafolio'>
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