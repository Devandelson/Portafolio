// data/logrosData.ts
import logro1 from '../assets/Logro1.jpg';
import logro2 from '../assets/Logro2.jpg';
import logro3 from '../assets/Logro3.jpg';
import logro4 from '../assets/Logro4.jpg';
import logro5 from '../assets/Itla.png';
import logro6 from '../assets/graduacion-certificado.jpg';
import logro7 from '../assets/BHDcarta.jpeg';

export interface Logro {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    gridSpan: string;
}

export const logrosData: Logro[] = [
    {
        id: 0,
        titulo: 'Certificado de Pasantía - BHD',
        descripcion: 'Completé exitosamente todas las asignaciones con desempeño excelente en el desarrollo de soluciones con React y Python.',
        imagen: logro7,
        gridSpan: 'sm:col-span-2 lg:col-span-3'
    },
    {
        id: 1,
        titulo: 'Certificado del ITLA',
        descripcion: 'Cumplimiento de un curso de Frontend terminado satisfactoriamente.',
        imagen: logro5,
        gridSpan: 'sm:col-span-2 lg:col-span-2'
    },
    {
        id: 2,
        titulo: 'Certificado de alto impacto',
        descripcion: 'Un certificado de parte de la OGTIC de RD en donde me complace decir que fui uno de los más destacados.',
        imagen: logro6,
        gridSpan: 'sm:col-span-2 lg:col-span-1'
    },
    {
        id: 3,
        titulo: 'Estudiante sobresaliente en:',
        descripcion: 'Portales web, Base de datos, Análisis y Diseño de sistemas.',
        imagen: logro1,
        gridSpan: 'sm:col-span-2 lg:col-span-2'
    },
    {
        id: 4,
        titulo: 'Certificado',
        descripcion: 'Desarrollo y Administración de Aplicaciones Informáticas.',
        imagen: logro2,
        gridSpan: 'sm:col-span-2 lg:col-span-1'
    },
    {
        id: 5,
        titulo: 'Certificado',
        descripcion: 'De Ofimática por completar satisfactoriamente los requisitos curriculares correspondiente al programa del curso de ofimática 2021 - 2022.',
        imagen: logro3,
        gridSpan: 'sm:col-span-2 lg:col-span-1'
    },
    {
        id: 6,
        titulo: 'Medalla',
        descripcion: 'Por ser bueno en el área.',
        imagen: logro4,
        gridSpan: 'sm:col-span-2 lg:col-span-2'
    },
];