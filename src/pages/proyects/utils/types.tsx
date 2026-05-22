export type OpenState = {
    isOpen: boolean;
    imagenes: string[];
    indexInicial: number;
    onClose: () => void;
};




export interface Proyecto {
    id: number;
    categoria: 'destacado' | 'regular';
    titulo: string;
    descripcion: string;
    imagenes: string[];
    enlace: string;
    tipoBoton: 'visualizar' | 'github' | 'imagen';
    logos: number[]; // IDs de tecnologías
    state?: boolean;
}

export interface ProjectGridProps {
    proyectos: typeof proyectosData;
    setOpen: (open: OpenState) => void;
    setElementRegular: React.Dispatch<React.SetStateAction<number | null>>;
}