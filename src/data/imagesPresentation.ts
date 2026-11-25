import homeP from '../assets/homeP.png';
import proyectP from '../assets/proyectP.png';
import fileP from '../assets/fileP.png';
import aboutP from '../assets/aboutP.png';

// const [listMenu, setListMenu] = useState<listMenu[]>([
//         { name: "Home", path: "/", icon: "fa-solid fa-house", state: true },
//         { name: "Sobre mí", path: "/sobreMi", icon: "fa-solid fa-graduation-cap", state: false },
//         { name: "Proyectos", path: "/proyectos", icon: "fa-solid fa-pager", state: false },
//         { name: "Archivos", path: "/archivo", icon: "fa-solid fa-box-archive", state: false }
//     ]);

export default function ExtractPresentationImg(name: string) {
    switch (name) {
        case 'Home':
            return homeP;
        case 'Proyectos':
            return proyectP;
        case 'Archivos':
            return fileP;
        case 'Sobre mí':
            return aboutP;
    }
}