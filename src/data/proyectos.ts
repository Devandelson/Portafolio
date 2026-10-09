// Importar todas las imágenes
import rutafit1 from '../assets/rutafit1.png';

// import clasroom1 from '../assets/f1_clasroom.png';
// import clasroom2 from '../assets/f2_clasroom.png';
// import clasroom3 from '../assets/f3_clasroom.png';
// import clasroom4 from '../assets/f4_clasroom.png';
// import clasroom5 from '../assets/f5_clasroom.png';

import ponse from '../assets/imgPonse.png';
import appNotas from '../assets/fondo_app_nota.jpg';
import claroClon from '../assets/claroClon.jpg';
import wordly from '../assets/wordly.png';
import loginTailwind from '../assets/loginTailwind.png';
import reactFirst from '../assets/react_firts.jpg';
import tictactoe2 from '../assets/Tictactoe2.png';
import tictactoe1 from '../assets/fondo_tic_tac.png';
import juegoMano from '../assets/juego-mano2.png';
import adivinanzas from '../assets/adivinansas.png';
import farmaciaFactura from '../assets/F_factura.png';
import farmaciaInicio from '../assets/F_inicio.png';
import farmaciaRegistro from '../assets/F_registro.png';
import rhControl from '../assets/R_control.png';
import rhInicio from '../assets/R_inicio.png';
import rhRegistro from '../assets/R_registro.png';
import escolarCalificacion from '../assets/I_calificacion.png';
import escolarEstudiante from '../assets/I_estudiante.png';
import escolarNL from '../assets/I_NL.png';
import appSimulacion from '../assets/app_simulacion1.png';
import store from '../assets/store1.jpg';
import transacciones from '../assets/transacciones.png';
import zypher from '../assets/Screenshot 2025-09-16 110502.png';
import ordenix from '../assets/ordenix.png';

import L_F from '../assets/L_F1.png';
import L_F2 from '../assets/L_F2.png';
import L_Fo3 from '../assets/L_F3.png';
import L_Fo4 from '../assets/L_F4.png';
import L_Fo5 from '../assets/L_F5.png';
import L_Fo6 from '../assets/L_F6.png';
import L_Fo7 from '../assets/L_F7.png';
import L_Fo8 from '../assets/L_F8.png';
import L_Fo9 from '../assets/L_F9.png';

import chat1 from '../assets/chat1.png';
import chat2 from '../assets/chat2.png';

import recipe1 from '../assets/recipe1.png'

import imgPrt from '../assets/prt.png';

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

export const proyectosData: Proyecto[] = [
    {
        id: 1,
        categoria: 'destacado',
        titulo: 'RutaFit optimizador de rutas.',
        descripcion: 'Un proyecto innovador que calcula rutas automáticamente mediante una API y cuenta con una excelente automatización. Fue desarrollado en el curso de la OGTIC (Semillero Digital Intro) para la institución FITMOVIT, dedicada a fideos y comiso, donde tuve el honor de liderar el equipo.',
        imagenes: [rutafit1],
        enlace: 'https://github.com/Devandelson/PublicFit',
        tipoBoton: 'github',
        logos: [2, 5, 6, 12, 13, 15, 16, 17, 18],
        state: false
    },
    {
        id: 3,
        categoria: 'regular',
        titulo: 'Periódico escolar',
        descripcion: 'Desarrollado en colaboración, este proyecto soluciona las brechas de comunicación de nuestra institución con el entorno global. Te invito a visitar el portafolio de mi colega en <a style="color: #ffffff; font-weight: bold;" href="https://ariscortico.github.io/portafolio/">ariscortico.com</a>.',
        imagenes: [ponse],
        enlace: 'https://ponse.free.nf/index.php',
        tipoBoton: 'visualizar',
        logos: [2, 5, 6, 12, 13]
    },
    {
        id: 4,
        categoria: 'regular',
        titulo: 'App de notas',
        descripcion: 'Desarrollado durante el programa Semillero Digital Intro de la OGTIC.Diseñé y construí desde cero una solución integral y eficiente para la creación, organización y búsqueda de información. A diferencia de las aplicaciones de notas convencionales, este sistema permite a cualquier usuario estructurar datos de manera flexible mediante formularios dinámicos, ofreciendo una experiencia similar a una hoja de cálculo (Excel) pero con interfaz intuitiva y sin necesidad de escribir código.',
        imagenes: [appNotas],
        enlace: 'https://flexo.infinityfreeapp.com/index.php',
        tipoBoton: 'visualizar',
        logos: [2, 5, 6, 12, 13, 15, 16]
    },
    {
        id: 5,
        categoria: 'destacado',
        titulo: 'Clon pagina claro',
        descripcion: 'landing page interactiva estilo Claro Negocios (<a href="https://www.claro.com.do/negocios/" title="link pagina del clon de claro" target="_blank">Link pagina</a>). Ha sido un reto técnico emocionante, especialmente al recrear la experiencia visual y de navegación de una página de alto nivel corporativo como la de Claro.',
        imagenes: [claroClon],
        enlace: 'https://devandelson.github.io/plantilla-de-claro/',
        tipoBoton: 'visualizar',
        logos: [7, 17, 18]
    },
    {
        id: 6,
        categoria: 'regular',
        titulo: 'Wordly',
        descripcion: '🎮 Wordly te desafía a adivinar la palabra oculta en solo unos intentos! 🧠 Cada pista de letra y posición pone a prueba tu ingenio y vocabulario. Para darle vida, desarrollé una API REST local que elige dinámicamente la palabra secreta, logrando una experiencia ágil y 100% personalizable. 🚀',
        imagenes: [wordly],
        enlace: 'https://devandelson.github.io/wordly/',
        tipoBoton: 'visualizar',
        logos: [7, 9, 17, 18]
    },
    {
        id: 7,
        categoria: 'regular',
        titulo: 'Login con tailwind',
        descripcion: '¡Increíble! Hice un login con Tailwind sin ayuda de AI y quedó genial. 🚀',
        imagenes: [loginTailwind],
        enlace: 'https://devandelson.github.io/LoginTailwind/',
        tipoBoton: 'visualizar',
        logos: [7, 9, 17, 18, 16],
        state: false
    },
    {
        id: 8,
        categoria: 'regular',
        titulo: 'Primera página hecha con React',
        descripcion: 'Esta página está dedicada a proporcionar una descripción emocionante de League of Legends, el juego de batalla en línea multijugador.',
        imagenes: [reactFirst],
        enlace: 'https://devandelson.github.io/firts-proyect-react/',
        tipoBoton: 'visualizar',
        logos: [7, 17, 18]
    },
    {
        id: 9,
        categoria: 'regular',
        titulo: 'TIC TAC TOE 2',
        descripcion: 'Tic-Tac-Toe un juego clásico desarrollado con React. Mejorado 🎯🎮🚀.',
        imagenes: [tictactoe2],
        enlace: 'https://devandelson.github.io/Tictatoe2/',
        tipoBoton: 'visualizar',
        logos: [7, 17, 18]
    },
    {
        id: 10,
        categoria: 'regular',
        titulo: 'TIC TAC TOE 1',
        descripcion: 'Tic-Tac-Toe un juego clásico desarrollado con React. Cuenta con una interfaz sencilla y dinámica, pensada para ofrecer una experiencia rápida y entretenida. Ideal para practicar mi lógica, mejorar habilidades en desarrollo frontend y divertirse un rato.',
        imagenes: [tictactoe1],
        enlace: 'https://github.com/Devandelson/TIC-TAC-TOE',
        tipoBoton: 'github',
        logos: [7]
    },
    {
        id: 11,
        categoria: 'regular',
        titulo: 'Piedra, Papel o Tijera en JS',
        descripcion: 'Juega al clásico Piedra, Papel o Tijera contra la computadora, creado en JavaScript durante el curso Semillero Digital Intro (OGTIC). ¡Desafía tus reflejos!',
        imagenes: [juegoMano],
        enlace: 'https://devandelson.github.io/Portafolio/uploadPages/Juego%20de%20manos/index.html',
        tipoBoton: 'visualizar',
        logos: [5, 2, 6, 17, 18]
    },
    {
        id: 12,
        categoria: 'regular',
        titulo: 'Juego de adivinanzas',
        descripcion: 'Creado durante un curso en el ITLA, con un tiempo limite para la realización del mismo para acercarnos a lo que es un entorno real en la creación de aplicaciones web.',
        imagenes: [adivinanzas],
        enlace: 'https://devandelson.github.io/Portafolio/uploadPages/Juego%20de%20adivinansas/index.html',
        tipoBoton: 'visualizar',
        logos: [5, 6, 2]
    },
    {
        id: 13,
        categoria: 'regular',
        titulo: 'Sistema de farmacia',
        descripcion: 'Desarrollé este segundo sistema en el "Politecnico Nuestra Señora De La Esperanza" como parte de un trabajo final y el sistema se trato de una farmacia en donde se queria gestionar el inventario, ventas y otras operaciones relevantes en farmacias.',
        imagenes: [farmaciaFactura, farmaciaInicio, farmaciaRegistro],
        enlace: '',
        tipoBoton: 'imagen',
        logos: [10]
    },
    {
        id: 14,
        categoria: 'regular',
        titulo: 'Sistema de recursos humanos',
        descripcion: 'Durante mis años en una escuela tecnica, desarrolle este primer sistema para una competencia de desarrollo de software en donde me centre en optimizar la gestión de empleados, renumeración y otras operaciones de recursos humanos para al final establecer una mejor relación del empleado y la empresa.',
        imagenes: [rhControl, rhInicio, rhRegistro],
        enlace: '',
        tipoBoton: 'imagen',
        logos: [10]
    },
    {
        id: 15,
        categoria: 'regular',
        titulo: 'Sistema Escolar',
        descripcion: 'Desarrollé este sistema para optimizar la gestión de estudiantes, calificaciones, profesores, méritos y otras operaciones escolares. Además de la programación, me encargué de planificar y gestionar todas las tareas del desarrollo. Al ser mi primer proyecto para un cliente real, representó un gran reto, pero me dejó la valiosa lección de que cualquier desafío técnico se puede superar con esfuerzo y organización.',
        imagenes: [escolarCalificacion, escolarEstudiante, escolarNL],
        enlace: '',
        tipoBoton: 'imagen',
        logos: [10]
    },
    {
        id: 16,
        categoria: 'regular',
        titulo: 'APP Web simulación',
        descripcion: 'Desarrollé este sistema optimizar la gestión de estudiantes, calificaciones, profesores, mérito y otras operaciones escolares.',
        imagenes: [appSimulacion],
        enlace: 'uploadPages/app web simulacion/index.html',
        tipoBoton: 'visualizar',
        logos: [5, 2, 6],
        state: false
    },
    {
        id: 17,
        categoria: 'regular',
        titulo: 'Tienda de celulares',
        descripcion: 'Este fue unos de mis primeros desafío en la web, donde utilicé HTML, CSS y JS para dar vida a una tienda funcional. Me enfoqué en que cada interacción fuera fluida y atractiva para el usuario.',
        imagenes: [store],
        enlace: 'uploadPages/Tienda celulares Anderson/index.html',
        tipoBoton: 'visualizar',
        logos: [5, 2, 6],
        state: false
    },
    {
        id: 18,
        categoria: 'regular',
        titulo: 'Página de transacciones',
        descripcion: 'Simulación de una página de transacciones inspirada por un youtuber, desarrollada completamente por mí. ¡Descubre mi trabajo de principio a fin!',
        imagenes: [transacciones],
        enlace: 'uploadPages/Transacciones/index.html',
        tipoBoton: 'visualizar',
        logos: [5, 2, 6],
        state: false
    },
    {
        id: 19,
        categoria: 'regular',
        titulo: 'Zypher',
        descripcion: '🚀 ¡Otro proyecto publicado! 🎯 He desarrollado un CRUD completo en React que consume una API y permite gestionar imágenes de usuario. Entre sus funcionalidades principales destacan la visualización, creación y edición de datos en tiempo real, junto con un diseño responsivo y limpio. 🛠️ Para construirlo, utilicé React, Fetch API, Hooks, TailwindCSS y Framer Motion. 🔍 Este proyecto ha sido clave para reforzar mis conocimientos en el manejo de estados, formularios controlados, comunicación cliente-servidor y reutilización de componentes. 📁 El código está abierto para quienes deseen revisarlo o colaborar 🙌. Enlace: https://github.com/Devandelson/Crud-React',
        imagenes: [zypher],
        enlace: 'https://devandelson.github.io/Crud-React/',
        tipoBoton: 'visualizar',
        logos: [7, 9]
    },
    {
        id: 20,
        categoria: 'regular',
        titulo: 'Ordenix',
        descripcion: 'Ordenix, crud de practica completo en donde puedes controlar tus ventas con estilo y eficiencia: desde la creación de pedidos hasta el seguimiento de ganancias diarias, todo está al alcance de un clic. Su diseño claro y moderno te permite ver productos, pagos y estados de entrega en segundos, haciendo que la gestión de tu negocio sea tan fluida como tus mejores días de ventas.',
        imagenes: [ordenix],
        enlace: 'https://devandelson.github.io/ordenix/',
        tipoBoton: 'visualizar',
        logos: [9, 7, 17, 18]
    },
    {
        id: 21,
        categoria: 'destacado',
        titulo: 'Learnify - Plataforma Educativa',
        descripcion: 'Plataforma de gestión educativa (LMS) desarrollada a la medida en PHP, diseñada en colaboración con el cliente para automatizar la operación académica de su academia. Centraliza la administración de asignaturas, unidades y publicaciones (tareas, exámenes con control de intentos, anuncios y enlaces a grabaciones), e integra seguimiento de calificaciones, asistencia, chat global y notificaciones, respaldado por un panel de estadísticas para auditar el rendimiento general.\n\nCredenciales de acceso (demo): Email-a@gmail.com | Contraseña-1212',
        imagenes: [L_F, L_F2, L_Fo3, L_Fo4, L_Fo5, L_Fo6, L_Fo7, L_Fo8, L_Fo9],
        enlace: 'https://learnifyclass.infinityfree.me/index.php',
        tipoBoton: 'visualizar',
        logos: [2, 5, 6, 12, 13, 15, 16, 17, 18]
    },
    {
        id: 22,
        categoria: 'regular',
        titulo: 'Chat online',
        descripcion: 'Aplicación de chat en tiempo real. Ha sido un reto técnico emocionante y una de las primeras aplicaciones que he creado implementando comunicación en tiempo real, enfocándome en la fluidez de los mensajes y la sincronización instantánea de los usuarios.',
        imagenes: [chat1, chat2],
        enlace: 'https://front-chat-71nt.onrender.com/',
        tipoBoton: 'visualizar',
        logos: [7, 17, 18, 9]
    },
    {
        id: 23,
        categoria: 'destacado',
        titulo: 'Recipe Doc',
        descripcion: 'Developed my first app in english that is an advanced React CRUD that implements complex state management, data validation, real-time UI updates and also for a plus I include an scroll infinity for better the performance.',
        imagenes: [recipe1],
        enlace: 'https://devandelson.github.io/recipe-docs/',
        tipoBoton: 'visualizar',
        logos: [7, 17, 18, 9]
    },
    {
        id: 24,
        categoria: 'destacado',
        titulo: 'Plataforma de votación y registro',
        descripcion: 'Aplicación web de votación hecha a la medida de un cliente, pensada para que cualquier persona pueda votar y compartir de forma intuitiva, sin tantas explicaciones, con una paginación clara y bien resuelta. Surgió para solucionar un problema real del cliente en la gestión de sus votos, e incluye un panel administrativo donde se puede ver desde qué lugar votó cada participante. Lo más destacable es el FrontEnd, donde puse la mayor parte del esfuerzo: interfaz limpia, formularios claros y una experiencia fluida. En el BackEnd implementé protección contra inyección SQL mediante consultas parametrizadas y almacenamiento seguro de contraseñas con hash.',
        imagenes: [imgPrt],
        enlace: 'https://votacionprt.infinityfreeapp.com/',
        tipoBoton: 'visualizar',
        logos: [2, 5, 6, 12]
    },
];