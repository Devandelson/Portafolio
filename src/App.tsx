// hooks
import { BrowserRouter, Routes, Route, Outlet } from 'react-router';
import { AnimatePresence } from 'motion/react';

// Contextos
import { MenuProvider } from './context/menu/switchMenu.tsx';
import { SwitchAnimationProvider } from './context/animations/switchAnimation.tsx';

// Páginas
import HomePage from './pages/homePage/home.tsx';
import About from './pages/aboutMe/about.tsx';
import Archive from './pages/archive/archive.tsx';
import Proyect from './pages/proyects/proyects.tsx';

// Componentes
import Menu from './components/flotante/menu.tsx';
import SocialFloat from './components/flotante/controles.tsx';
import Musica from './components/flotante/musica.tsx';

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
      <SocialFloat />
      <Musica />
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
              <Route element={<Layout />}>
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