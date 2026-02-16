// -- assets
import graduacion from '../assets/graduacion.jpg';
import graduacion_certificado from '../assets/graduacion-certificado.jpg';
import tablilla from '../assets/tablilla.png';
import certificado from '../assets/certificado.png';
import yo from '../assets/yo2.png';
import tailwind from '../assets/tailwind.jpg';
import loginTailwind from '../assets/loginTailwind.png';

export interface HistoriaItem {
    id: number;
    fecha: string;
    imagenes: string[];
    descripcion: string;
}

export const historiaData: HistoriaItem[] = [
    {
        id: 8,
        fecha: '2025-05-08',
        imagenes: [
            graduacion,
            graduacion_certificado
        ],
        descripcion: '✨✨¡Con mucha emoción! Después de seis meses de arduo trabajo, hoy puedo decir con orgullo que he completado un curso muy importante en mi vida. Me llena el corazón de alegría haber sido reconocido como uno de los estudiantes más destacados. Agradezco de todo corazón a quienes confiaron y creyeron en mí. ¡Todo es posible si le pones ganas! ¡Vamos allá! Estoy listo para un nuevo trabajo y nuevos retos.'
    },
    {
        id: 10,
        fecha: '2025-04-02',
        imagenes: [
            tablilla,
            certificado,
            yo
        ],
        descripcion: '🌟 ¡Un logro que marca el inicio de grandes cosas! 🌟 <br> La informática no es solo código y pantallas, es creatividad, lógica y la capacidad de hacer que las ideas cobren vida. Hoy, sostengo con orgullo este certificado que representa esfuerzo, dedicación y una pasión inquebrantable por la tecnología. <br> Recibir este reconocimiento como el más destacado en el área de informática en mi escuela politécnica no solo es un honor, sino una prueba de que con disciplina y amor por lo que hacemos, podemos llegar lejos. 🚀 <br> A cada persona que sueña con crear, innovar y transformar el mundo a través de la tecnología: nunca dejes de aprender, nunca dejes de soñar. 💻✨'
    },
    {
        id: 11,
        fecha: '2025-06-14',
        imagenes: [
            tailwind
        ],
        descripcion: '¡Aprendí Tailwind y estoy emocionado por todo lo que puedo crear con él! 🚀'
    },
    {
        id: 12,
        fecha: '2025-06-14',
        imagenes: [
            loginTailwind
        ],
        descripcion: '¡Estoy súper emocionado! Logré hacer una interfaz de login completa sin ayuda de inteligencia artificial, usando Tailwind CSS. Ver el resultado final y saber que lo hice por mi cuenta es una gran satisfacción. ¡Vamos por más! 💻✨'
    }
];