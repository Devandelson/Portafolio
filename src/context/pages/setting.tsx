import { create } from 'zustand'

// Resource
import img1 from '../../assets/fondo1_portafolio.jpeg';
import img2 from '../../assets/fondo2_portafolio.jpeg';
import img3 from '../../assets/fondo3_portafolio.jpg';
import img4 from '../../assets/fondo4_portafolio.jpg';
import img5 from '../../assets/fondo6_portafolio.jpg';
import img6 from '../../assets/fondo7_portafolio.jpg';

// Data
const WALLPAPER_THUMBS_default = [
    { id: 1, selected: false, src: img1 },
    { id: 2, selected: true, src: img2 },
    { id: 3, selected: false, src: img3 },
    { id: 4, selected: false, src: img4 },
    { id: 5, selected: false, src: img5 },
    { id: 6, selected: false, src: img6 },
]

const useWallpaper = create((set) => ({
    wallpapers: WALLPAPER_THUMBS_default,
    setWallpapers: (newsWallpapers) => set({ wallpapers: newsWallpapers })
}))

export default useWallpaper;