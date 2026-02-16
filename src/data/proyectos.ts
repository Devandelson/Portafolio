// Importar todas las imágenes
import rutafit1 from '../assets/rutafit1.png';
import clasroom1 from '../assets/f1_clasroom.png';
import clasroom2 from '../assets/f2_clasroom.png';
import clasroom3 from '../assets/f3_clasroom.png';
import clasroom4 from '../assets/f4_clasroom.png';
import clasroom5 from '../assets/f5_clasroom.png';
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

export interface Proyecto {
    id: number;
    categoria: 'destacado' | 'regular';
    titulo: string;
    descripcion: string;
    imagenes: string[];
    enlace: string;
    tipoBoton: 'visualizar' | 'github' | 'imagen';
    logos: number[]; // IDs de tecnologías
}

export const proyectosData: Proyecto[] = [
    {
        id: 1,
        categoria: 'destacado',
        titulo: 'RutaFit optimizador de rutas.',
        descripcion: 'Un proyecto innovador que calcula rutas automáticamente mediante una API y cuenta con una excelente automatización. Fue desarrollado en el curso de la OGTIC (Semillero Digital Intro) para la institución FITMOVIT, dedicada a fideos y comiso, donde tuve el honor de liderar el equipo.',
        imagenes: [rutafit1],
        enlace: 'https://rutafit.free.nf/',
        tipoBoton: 'visualizar',
        logos: [2, 5, 6, 12, 13, 15, 16, 17, 18]
    },
    {
        id: 2,
        categoria: 'destacado',
        titulo: 'Duplicado de Classroom',
        descripcion: '¡Explora este increíble proyecto inspirado en Classroom! Una plataforma donde los estudiantes se conectan, comparten y crean asignaciones de forma interactiva. ¡Desliza para ver cómo la educación cobra vida con cada funcionalidad!',
        imagenes: [clasroom1, clasroom2, clasroom3, clasroom4, clasroom5],
        enlace: '',
        tipoBoton: 'imagen',
        logos: [2, 5, 6, 12, 13, 15, 16, 17, 18]
    },
    {
        id: 3,
        categoria: 'destacado',
        titulo: 'Periódico escolar',
        descripcion: 'Desarrollado por mí y un amigo, este proyecto fue creado para solucionar el problema de comunicación que existía en nuestra escuela al interactuar con el resto del mundo. Además, te invito a visitar el portafolio de mi amigo en <a style="color: rgb(255, 255, 255);" href="https://ariscortico.github.io/portafolio/">ariscortico.com</a>.',
        imagenes: [ponse],
        enlace: 'https://ponse1001.free.nf/',
        tipoBoton: 'visualizar',
        logos: [2, 5, 6, 12, 13]
    },
    {
        id: 4,
        categoria: 'destacado',
        titulo: 'App de notas',
        descripcion: 'Una app de notas personalizable y eficiente, desarrollada mientras curso Semillero Digital Intro de OGTIC, diseñada para crear, organizar y buscar notas de manera flexible y efectiva.',
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
        logos: [7, 9, 17, 18, 16]
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
        enlace: 'https://devandelson.github.io/portafolio.github.io/Paginas/Juego%20de%20manos/index.html',
        tipoBoton: 'visualizar',
        logos: [5, 2, 6, 17, 18]
    },
    {
        id: 12,
        categoria: 'regular',
        titulo: 'Juego de adivinanzas',
        descripcion: 'Creado durante un curso en el ITLA.',
        imagenes: [adivinanzas],
        enlace: '../../uploadPages/Juego de adivinansas/index.html',
        tipoBoton: 'visualizar',
        logos: [5, 6, 2]
    },
    {
        id: 13,
        categoria: 'regular',
        titulo: 'Sistema de farmacia',
        descripcion: 'Desarrollé este sistema optimizar la gestión de inventario, ventas y otras operaciones en farmacias. Si deseas conocer más detalles, ¡no dudes en contactarme!.',
        imagenes: [farmaciaFactura, farmaciaInicio, farmaciaRegistro],
        enlace: '',
        tipoBoton: 'imagen',
        logos: [10]
    },
    {
        id: 14,
        categoria: 'regular',
        titulo: 'Sistema de recursos humanos',
        descripcion: 'Desarrollé este sistema optimizar la gestión de empleados, renumeración y otras operaciones de recursos humanos. Si deseas conocer más detalles, ¡no dudes en contactarme!',
        imagenes: [rhControl, rhInicio, rhRegistro],
        enlace: '',
        tipoBoton: 'imagen',
        logos: [10]
    },
    {
        id: 15,
        categoria: 'regular',
        titulo: 'Sistema Escolar',
        descripcion: 'Desarrollé este sistema optimizar la gestión de estudiantes, calificaciones, profesores, mérito y otras operaciones escolares.',
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
        enlace: '../../uploadPages/app web simulacion/index.html',
        tipoBoton: 'visualizar',
        logos: [5, 2, 6]
    },
    {
        id: 17,
        categoria: 'regular',
        titulo: 'Tienda de celulares',
        descripcion: 'Hecho a través de HTML, CSS y JS. Donde cada detalle ofrece una experiencia de compra intuitiva y emocionante.',
        imagenes: [store],
        enlace: '../../uploadPages/Tienda celulares Anderson/index.html',
        tipoBoton: 'visualizar',
        logos: [5, 2, 6]
    },
    {
        id: 18,
        categoria: 'regular',
        titulo: 'Página de transacciones',
        descripcion: 'Simulación de una página de transacciones inspirada por un youtuber, desarrollada completamente por mí. ¡Descubre mi trabajo de principio a fin!',
        imagenes: [transacciones],
        enlace: '../../uploadPages/Transacciones/index.html',
        tipoBoton: 'visualizar',
        logos: [5, 2, 6]
    },
    {
        id: 19,
        categoria: 'regular',
        titulo: 'Zypher',
        descripcion: '🚀 ¡Otro proyecto publicado! <br> 🎯 He desarrollado un CRUD completo en React que consume una API y permite trabajar con imágenes de usuario. <br> 🧩 Funcionalidades principales: <br> ✅ Visualización de usuarios desde API <br> ✅ Creación y edición de datos en tiempo real <br> ✅ Subida de imágenes <br> ✅ Diseño responsivo con estilo limpio <br> 🛠️ Tecnologías utilizadas: <br> React | Fetch API | Hooks | TailwindCSS | Frame motion <br> 🔍 Este proyecto me ayudó a reforzar conceptos clave como: <br> - Manejo de estado y formularios controlados <br> - Comunicación cliente-servidor <br> - Subida y renderizado de imágenes <br> - Reutilización de componentes <br> 📁 Código disponible si deseas revisarlo o colaborar 🙌 <br> (<a target="_blank" href="https://github.com/Devandelson/Crud-React">LINK</a>)',
        imagenes: [zypher],
        enlace: 'https://devandelson.github.io/Crud-React/',
        tipoBoton: 'visualizar',
        logos: [7, 9]
    },
    {
        id: 20,
        categoria: 'regular',
        titulo: 'Ordenix',
        descripcion: 'Ordenix es la app perfecta para quienes buscan controlar sus ventas con estilo y eficiencia: desde la creación de pedidos hasta el seguimiento de ganancias diarias, todo está al alcance de un clic. Su diseño claro y moderno te permite ver productos, pagos y estados de entrega en segundos, haciendo que la gestión de tu negocio sea tan fluida como tus mejores días de ventas.',
        imagenes: [ordenix],
        enlace: 'https://devandelson.github.io/ordenix/',
        tipoBoton: 'visualizar',
        logos: [9, 7, 17, 18]
    }
];