// Determinar el icono y texto del botón
interface ButtonContent {
    text: string;
    icon: string;
    action: () => void;
}


// types ==================================
import { type Proyecto } from '../../../data/proyectos.ts';
type OpenState = {
    isOpen: boolean;
    imagenes: string[];
    indexInicial: number;
    onClose: () => void;
};

export const getButtonContent = (
    proyecto: Proyecto,
    setOpen: (state: OpenState) => void   // pass it in as a parameter
): ButtonContent | null => {
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
                action: () => setOpen({
                    isOpen: true,
                    imagenes: proyecto.imagenes,
                    indexInicial: 0,
                    onClose: () => setOpen({
                        isOpen: false,
                        imagenes: [],
                        indexInicial: 0,
                        onClose: () => {}
                    })
                })
            };
        default:
            return null;
    }
};