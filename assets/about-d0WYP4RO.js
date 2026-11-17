import{r as V,M as Ha,a as tr,u as nr,j as f,l as rr,m as $,R as Pa,A as na,c as ir}from"./index-9-_I-LJl.js";import{a as zt,l as or}from"./loginTailwind-DdOCtThb.js";function sr({children:e,isValidProp:a,...t}){a&&rr(a);const n=V.useContext(Ha);t={...n,...t},t.transition=tr(t.transition,n.transition),t.isStatic=nr(()=>t.isStatic);const r=V.useMemo(()=>t,[JSON.stringify(t.transition),t.transformPagePoint,t.reducedMotion,t.skipAnimations]);return f.jsx(Ha.Provider,{value:r,children:e})}const lr="/Portafolio/assets/Mi%20foto-Bsp8kFzo.jpg",fr="/Portafolio/assets/Trofeo-Dcf2-xw1.png",cr="/Portafolio/assets/about-2-B1TZR0Xv.jpg",ur="/Portafolio/assets/cape-about-CEpLL8Pe.svg",dr="/Portafolio/assets/moon-DbmPZ6Iw.png";function mr({logro:e,index:a}){const[t,n]=V.useState(!1),r=()=>{n(!t)};return f.jsxs($.article,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5,delay:a*.1},onClick:r,className:`${e.gridSpan} relative border-4 sm:border-6 border-bPage rounded-2xl overflow-hidden
            cursor-pointer
            duration-200
            group/article
            h-87.5 bounceItem
            hover:shadow-2xl hover:shadow-blue-400/20
            ${t?"shadow-2xl shadow-blue-400/20":""}
            `,children:[f.jsx("img",{src:e.imagen,alt:e.titulo,className:`w-full h-full object-cover object-center
                group-hover/article:scale-110
                group-hover/article:blur-sm
                duration-200
                ${t?"blur-none! object-contain!":""}`}),f.jsxs("div",{className:`absolute -bottom-1 left-1/2 -translate-x-1/2 bg-bPage w-[90%] p-3 rounded-t-2xl text-center flex flex-col items-center justify-start overflow-hidden h-[40%]
                
                group-hover/article:w-full group-hover/article:h-full
                group-hover/article:bg-bPage/60 group-hover/article:rounded-sm
                backdrop-blur-sm group-hover/article:bottom-0 group-hover/article:justify-center
                
                ${t?"h-0! p-0!":""}

                duration-200 transition-all
                `,children:[f.jsx("h3",{className:`text-xl sm:text-2xl font-bold
                    group-hover/article:text-2xl sm:group-hover/article:text-4xl
                    ${t?"text-2xl sm:text-4xl":""}
                    duration-200
                    `,children:e.titulo}),f.jsx("p",{className:`text-sm sm:text-base 
                    group-hover/article:text-base sm:group-hover/article:text-lg 
                    ${t?"text-base sm:text-lg":""}
                    duration-200 mt-2
                    `,children:e.descripcion}),f.jsxs($.div,{initial:{opacity:0},animate:{opacity:t?0:1},className:"mt-3 text-blue-400 text-xs font-semibold opacity-0 group-hover/article:opacity-100 transition-opacity",children:[f.jsx("i",{className:"fas fa-hand-pointer mr-1"}),"Click para mantener"]})]}),t&&f.jsx($.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},className:"absolute top-3 right-3 bg-blue-600 text-white size-8 rounded-full flex items-center justify-center shadow-lg z-10",children:f.jsx("i",{className:"fas fa-check text-sm"})})]})}const gr="/Portafolio/assets/Logro1-CL6fq8uH.jpg",pr="/Portafolio/assets/Logro2-pEnPz7BZ.jpg",hr="/Portafolio/assets/Logro3-DYrCde5W.jpg",vr="/Portafolio/assets/Logro4-C_7YUpxj.jpg",br="/Portafolio/assets/Itla-BKAm5ZlF.png",Ft="/Portafolio/assets/graduacion-certificado-D5CT0kFy.jpg",Mt="/Portafolio/assets/BHDcarta-1We7APeo.jpeg",yr=[{id:0,titulo:"Certificado de Pasantía - BHD",descripcion:"Completé exitosamente todas las asignaciones con desempeño excelente en el desarrollo de soluciones con React y Python.",imagen:Mt,gridSpan:"sm:col-span-2 lg:col-span-3"},{id:1,titulo:"Certificado del ITLA",descripcion:"Cumplimiento de un curso de Frontend terminado satisfactoriamente.",imagen:br,gridSpan:"sm:col-span-2 lg:col-span-2"},{id:2,titulo:"Certificado de alto impacto",descripcion:"Un certificado de parte de la OGTIC de RD en donde me complace decir que fui uno de los más destacados.",imagen:Ft,gridSpan:"sm:col-span-2 lg:col-span-1"},{id:3,titulo:"Estudiante sobresaliente en:",descripcion:"Portales web, Base de datos, Análisis y Diseño de sistemas.",imagen:gr,gridSpan:"sm:col-span-2 lg:col-span-2"},{id:4,titulo:"Certificado",descripcion:"Desarrollo y Administración de Aplicaciones Informáticas.",imagen:pr,gridSpan:"sm:col-span-2 lg:col-span-1"},{id:5,titulo:"Certificado",descripcion:"De Ofimática por completar satisfactoriamente los requisitos curriculares correspondiente al programa del curso de ofimática 2021 - 2022.",imagen:hr,gridSpan:"sm:col-span-2 lg:col-span-1"},{id:6,titulo:"Medalla",descripcion:"Por ser bueno en el área.",imagen:vr,gridSpan:"sm:col-span-2 lg:col-span-2"}],xr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAB2VJREFUeJztm3+MVFcVxz/nzczutqwptlDolpn3ZhcVQmMFQfzBBgo11aYt1Ng0akpC3J1B0H/8p0ZNiv+oNcZE0wozAxSrJkCNqV210gVSkBapkGgNLYrMvPd2WcCCLAHKwsy84x+wZLOwOzPvvVl3Ez5/3nfuOed+97537z1zF25xi4nJOjXCcCNhOBlrWjJ9t8eM4isok1XIXm5s/PWpldMv+vE14QSY9uLJSU0Dl7uAB4Y0nxNlWwnjud50/B+1+JtQAkx9/j/Nt8cGukCXjGJ2SIWsd974Ze8345cq+ZwwArRmjt1RltifQD9ZZZd+UbZ7yk/d1eY7IxlNCAGsFwqTvaKxQ+ATProrsEuV7FTee/lQen5x6MNxL0BLpm9KjOJrCHNDcHcC0c0S1R/bq5L9AKEsJfWibf2/747JlV0hDR7gHlS+410x7htsiIbkOHSSufy0khfZCdxX0TgA41IA6/nCdE+NnQhz6h1r3L0CbZuPx72YsRfqP3gYZzOgNXMsUSqVdgu0jVXMijNgxvqee8ciETNnJ8sS3cMYDh5GEcDK9Cw0s05XJOI5VsZZF9bh46ax1hcsVHYBVr1ijMQN+4BE1pljCM+o8sWhz0XposFbObh+hkVrtvfDZcq7gTGZaQCqtLtpcx8MmQEtmb4piYyzVeBtVZ5gmDgqPKpFY7+Zs2eHlYiZs2eXKb/OGA5+ONcFiFKcJcKTjP5dmIXKW4mM80TQwGbOnn1t2t8T1FcQ/LzXzSJss7LOD9muET9Bkxvy96PsIdjgjwFnA/QH/O8DROFps9/Zlczlp9XS0dxoz/WMyE6QqT5jA/xeSyxA/38CXEMWexo5aGV6FlZjbWbseah0A1N8BiyL8j2nL7HcXWMGHjyEsxOcoeLtMTN2x2hG8Q3ufES6Ue7yGee0Cp+30+Y61onn08cNVBRAlCxwpYJZIyK5RNbZMPNnRxuHP0xknEWGobuBO33m+Ua5bHzM7TS7ffYfkYoCeAa/AV0BvF/JViBdbGp4M7kxbw62xXNuuwh/BD7gJ0FRss2TLyzt/Vr8uJ/+lajqLOCkrFfjOfdzhmoXcEcF83meFzmYyDpfinhyxVP9A9DsI7cLItJhpxLbfPStmqq/AT2diT+rsAw4XYX5FIFXPUN34G/w74h6C+zO+g4eavwIup3mIVGvHeitwjwKNNWekr4c0dKn7XTySO19a6fmVcBOJ48YRnmRwtGQcykpfMtJWY/n023nQvY9Ir6WwUJHqxORcjvo2yHlcRx0sZsynw3JX9X43gcUOltPaUmWIOwPloLukaI330lZbwbz449AGyF3jXm2ybj0EMjrvhyoft+ZbC6z1yZPBskjCIF3gpcHGieB52+DI8bs1rN5P6tEaAQSILkxb14tYMpH/XnQx8tED8Q3unUtfY+GbwGsTGGW50X2CXwoUAbCRwxP91s598lAfnziSwAzY89Tkb3AjJDyaFbVrVbGyczZfrghJJ9VUbMA8ZzbjsjugOf5m6JC6mJ/876hZ4l6U5MAZs5+2FDdQeXzAMB5hDO1JqSwwPMiB8yM/UBl6+BULYCVcVeg8lvgtsrW+i+FT4G2Ayd85DUNke56l+OhSgESOWelir4E3HDWH44oXRLThW7KPOx0Wu+KekuBPh+5RVR4xmxxf5f4ufNBH/2rorIAylpRtlD56FwW+LadSiwf+tuBnU4eEfWW4W8mADwiUd5Kbsjf77P/qFSuCMFyKl2kEM4YKg/bKfMHiOjwx3Y6eaTsGYup7hR5M2Z6RuQvlcpufgjj/fob6IJCOvHaaEa9q+NHDaO8CCj4jNOESM7MOi/O+ElPFd+h6ggmgPKrosY+43RaVQ2q0NHqRLS0hKs1fb88FZnkvZHY7LQG8HEdvwJcEZU1Ttp8qi/dUrFWOJR8us2NaGkpQUQQ5kqJvyIE3ov4EaAPT5fY6cR6v0Hz6TZXit4iYMTra1VwJz4LrUO5LsBt0Ut/F/gRo1R/VdhrSHmes9oKWAMAe23yJKoPAu8G9RWE6wL886uzztsp8+lYtMESeBYYGGooSnaq996Dhc7WU2EFd9LWiWi5uESgpuutYTLi8ta2+Xi8XCx9V4UvC/INO5XYUq8kZm4+MbVYKnaD1mWtH87Q+wEVL0paLxSa7FXJgUp2Qbn3ud67orFyd4h3AkfkphckRmIsBg9w/OszzkiDtxT0wFjEG2RcXZOzVyX7I1p+KHihtXrGlQAA+XTbuYHGxs/6LrTWyLgTAODUyukXB5oaHgF21zvWuBQAropQ1NijwM56xhm3AgD0pVveL18wHlMY9aBVA4cUUt5F49Bgw7j/fwGAOdsPN1zsb35J4TEf3QdE6PKUrJsyb5hNE0IAuCrChf5J20BWVNnliMIWzzByvR3x/45kNGEEAPh45mDsNHdvRfQLI5hcFuEVT8m6nYldNyvODGdCCQDAdo2Y/e4vgK8MNl37qX5TSWOb+tIt1VzguM7EEwBgnUatFneTpzQahrfB7rD2VPPXvsUtbnED/wMl0pn5/l/yowAAAABJRU5ErkJggg==";function wr(){const e=[{name:"CSS3",icon:"fa-brands fa-css3-alt",color:"group-hover:text-blue-500",border:"hover:border-blue-500/40",shadow:"hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"},{name:"Bootstrap",icon:"fa-brands fa-bootstrap",color:"group-hover:text-purple-500",border:"hover:border-purple-500/40",shadow:"hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"},{name:"HTML5",icon:"fa-brands fa-html5",color:"group-hover:text-orange-500",border:"hover:border-orange-500/40",shadow:"hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]"},{name:"JavaScript",icon:"fa-brands fa-js",color:"group-hover:text-yellow-400",border:"hover:border-yellow-400/40",shadow:"hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]"},{name:"Typescript",icon:"fa-brands fa-typescript",color:"group-hover:text-yellow-400",border:"hover:border-yellow-400/40",shadow:"hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]"},{name:"React",icon:"fa-brands fa-react",color:"group-hover:text-cyan-400",border:"hover:border-cyan-400/40",shadow:"hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},{name:"Tailwind",icon:"fa-solid fa-wind",color:"group-hover:text-sky-400",border:"hover:border-sky-400/40",shadow:"hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"}],a=[{name:"SQL Server",icon:"fa-solid fa-database",color:"group-hover:text-yellow-400",border:"hover:border-yellow-400/40",shadow:"hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]"},{name:"MySQL",icon:"fa-solid fa-database",color:"group-hover:text-cyan-400",border:"hover:border-cyan-400/40",shadow:"hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},{name:"XAMPP",icon:"fa-solid fa-server",color:"group-hover:text-orange-400",border:"hover:border-orange-400/40",shadow:"hover:shadow-[0_0_20px_rgba(251,146,60,0.25)]"},{name:"PHP",icon:"fa-brands fa-php",color:"group-hover:text-indigo-400",border:"hover:border-indigo-400/40",shadow:"hover:shadow-[0_0_20px_rgba(129,140,248,0.25)]"},{name:"AJAX (JS)",icon:"fa-solid fa-repeat",color:"group-hover:text-blue-300",border:"hover:border-blue-300/40",shadow:"hover:shadow-[0_0_20px_rgba(147,197,253,0.25)]"},{name:"Node JS",icon:"fa-brands fa-node-js",color:"group-hover:text-blue-300",border:"hover:border-blue-300/40",shadow:"hover:shadow-[0_0_20px_rgba(147,197,253,0.25)]"}],t=[{name:"Figma",icon:"fa-brands fa-figma",color:"group-hover:text-pink-400",border:"hover:border-pink-400/40",shadow:"hover:shadow-[0_0_20px_rgba(244,114,182,0.25)]"},{name:"Git",icon:"fa-brands fa-git-alt",color:"group-hover:text-orange-500",border:"hover:border-orange-500/40",shadow:"hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]"},{name:"Visual Studio Code",icon:"fa-regular fa-window-restore",color:"group-hover:text-white",border:"hover:border-white/40",shadow:"hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]",img:xr}];return f.jsx("section",{className:`relative block z-40 mb-20 p-10\r
        `,id:"skills",children:f.jsxs("div",{className:"container mx-auto px-6",children:[f.jsx("div",{className:"flex items-end justify-between mb-7 border-b border-gray-800 pb-4",children:f.jsxs("div",{children:[f.jsxs("h2",{className:"text-3xl font-bold text-white mb-1 mt-15 block bounceItem",children:[f.jsx("span",{className:"text-primary mr-2",children:"///"})," Habilidades"]}),f.jsx("p",{className:"text-xs font-mono text-gray-500 bounceItem",children:"Version 3.1"})]})}),f.jsxs("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12",children:[f.jsx(ra,{Skills:e,title:"Front - End"}),f.jsx(ra,{Skills:a,title:"Back - End"}),f.jsx(ra,{Skills:t,title:"Herramientas"})]})]})})}function ra({Skills:e,title:a}){return f.jsxs("div",{children:[f.jsx("h3",{className:"text-primary text-xl font-bold mb-6",children:a}),f.jsx("div",{className:"flex flex-wrap gap-4",children:e.map((t,n)=>f.jsx(zt,{reset:!1,perspective:500,glareEnable:!0,glareMaxOpacity:.45,scale:1.02,children:f.jsx(Sr,{icon:t.icon,title:t.name,color:t.color,border:t.border,shadow:t.shadow,img:t.img??""})},n))})]})}function Sr({icon:e,title:a,color:t,border:n,shadow:r,img:i}){return f.jsxs("article",{className:`group w-max relative p-5 py-6 grow flex flex-wrap justify-center text-center items-center gap-3 rounded-lg border border-white/5 bg-linear-to-br from-[#07121a] to-[#041018] transition-all duration-300 hover:-translate-y-1 bounceItem cursor-pointer! ${n} ${r}`,children:[f.jsx("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-500 group-hover:w-full"}),i?f.jsx("img",{src:i,alt:a,className:"w-8 aspect-square object-cover"}):f.jsx("i",{className:`${e} text-3xl text-gray-500 transition-all duration-300 ${t}`}),f.jsx("h4",{className:"text-xl font-bold transition-colors duration-300 group-hover:text-white break-all text-balance",children:a})]})}function ua(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,n=Array(a);t<a;t++)n[t]=e[t];return n}function Ar(e){if(Array.isArray(e))return e}function jr(e){if(Array.isArray(e))return ua(e)}function kr(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function Ir(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Ot(n.key),n)}}function Pr(e,a,t){return a&&Ir(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function We(e,a){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Na(e))||a){t&&(e=t);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(u){throw u},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var u=t.next();return o=u.done,u},e:function(u){l=!0,i=u},f:function(){try{o||t.return==null||t.return()}finally{if(l)throw i}}}}function b(e,a,t){return(a=Ot(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Nr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Er(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n,r,i,o,l=[],u=!0,m=!1;try{if(i=(t=t.call(e)).next,a===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(n=i.call(t)).done)&&(l.push(n.value),l.length!==a);u=!0);}catch(p){m=!0,r=p}finally{try{if(!u&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(m)throw r}}return l}}function Cr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xa(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Xa(Object(t),!0).forEach(function(n){b(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Xa(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Xe(e,a){return Ar(e)||Er(e,a)||Na(e,a)||Cr()}function ee(e){return jr(e)||Nr(e)||Na(e)||zr()}function Fr(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,a);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Ot(e){var a=Fr(e,"string");return typeof a=="symbol"?a:a+""}function Ue(e){"@babel/helpers - typeof";return Ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Ue(e)}function Na(e,a){if(e){if(typeof e=="string")return ua(e,a);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ua(e,a):void 0}}var Ga=function(){},Ea={},Tt={},_t=null,Rt={mark:Ga,measure:Ga};try{typeof window<"u"&&(Ea=window),typeof document<"u"&&(Tt=document),typeof MutationObserver<"u"&&(_t=MutationObserver),typeof performance<"u"&&(Rt=performance)}catch{}var Mr=Ea.navigator||{},qa=Mr.userAgent,Ja=qa===void 0?"":qa,se=Ea,_=Tt,Za=_t,Te=Rt;se.document;var oe=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",Lt=~Ja.indexOf("MSIE")||~Ja.indexOf("Trident/"),_e,Or=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Tr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Dt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},_r={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},$t=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],H="classic",ze="duotone",Wt="sharp",Yt="sharp-duotone",Bt="chisel",Ut="etch",Vt="graphite",Ht="jelly",Xt="jelly-duo",Gt="jelly-fill",qt="mosaic",Jt="notdog",Zt="notdog-duo",Kt="pixel",Qt="slab",en="slab-duo",an="slab-press",tn="slab-press-duo",nn="thumbprint",rn="utility",on="utility-duo",sn="utility-fill",ln="vellum",fn="whiteboard",Rr="Classic",Lr="Duotone",Dr="Sharp",$r="Sharp Duotone",Wr="Chisel",Yr="Etch",Br="Graphite",Ur="Jelly",Vr="Jelly Duo",Hr="Jelly Fill",Xr="Mosaic",Gr="Notdog",qr="Notdog Duo",Jr="Pixel",Zr="Slab",Kr="Slab Duo",Qr="Slab Press",ei="Slab Press Duo",ai="Thumbprint",ti="Utility",ni="Utility Duo",ri="Utility Fill",ii="Vellum",oi="Whiteboard",cn=[H,ze,Wt,Yt,Bt,Ut,Vt,Ht,Xt,Gt,qt,Jt,Zt,Kt,Qt,en,an,tn,nn,rn,on,sn,ln,fn];_e={},b(b(b(b(b(b(b(b(b(b(_e,H,Rr),ze,Lr),Wt,Dr),Yt,$r),Bt,Wr),Ut,Yr),Vt,Br),Ht,Ur),Xt,Vr),Gt,Hr),b(b(b(b(b(b(b(b(b(b(_e,qt,Xr),Jt,Gr),Zt,qr),Kt,Jr),Qt,Zr),en,Kr),an,Qr),tn,ei),nn,ai),rn,ti),b(b(b(b(_e,on,ni),sn,ri),ln,ii),fn,oi);var si={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},li={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},fi=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),ci={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},un=["fak","fa-kit","fakd","fa-kit-duotone"],Ka={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ui=["kit"],di="kit",mi="kit-duotone",gi="Kit",pi="Kit Duotone";b(b({},di,gi),mi,pi);var hi={kit:{"fa-kit":"fak"}},vi={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},bi={kit:{fak:"fa-kit"}},Qa={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Re,Le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yi=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],xi="classic",wi="duotone",Si="sharp",Ai="sharp-duotone",ji="chisel",ki="etch",Ii="graphite",Pi="jelly",Ni="jelly-duo",Ei="jelly-fill",Ci="mosaic",zi="notdog",Fi="notdog-duo",Mi="pixel",Oi="slab",Ti="slab-duo",_i="slab-press",Ri="slab-press-duo",Li="thumbprint",Di="utility",$i="utility-duo",Wi="utility-fill",Yi="vellum",Bi="whiteboard",Ui="Classic",Vi="Duotone",Hi="Sharp",Xi="Sharp Duotone",Gi="Chisel",qi="Etch",Ji="Graphite",Zi="Jelly",Ki="Jelly Duo",Qi="Jelly Fill",eo="Mosaic",ao="Notdog",to="Notdog Duo",no="Pixel",ro="Slab",io="Slab Duo",oo="Slab Press",so="Slab Press Duo",lo="Thumbprint",fo="Utility",co="Utility Duo",uo="Utility Fill",mo="Vellum",go="Whiteboard";Re={},b(b(b(b(b(b(b(b(b(b(Re,xi,Ui),wi,Vi),Si,Hi),Ai,Xi),ji,Gi),ki,qi),Ii,Ji),Pi,Zi),Ni,Ki),Ei,Qi),b(b(b(b(b(b(b(b(b(b(Re,Ci,eo),zi,ao),Fi,to),Mi,no),Oi,ro),Ti,io),_i,oo),Ri,so),Li,lo),Di,fo),b(b(b(b(Re,$i,co),Wi,uo),Yi,mo),Bi,go);var po="kit",ho="kit-duotone",vo="Kit",bo="Kit Duotone";b(b({},po,vo),ho,bo);var yo={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},xo={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},da={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},wo=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],dn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(yi,wo),So=["solid","regular","light","thin","duotone","brands","semibold"],mn=[1,2,3,4,5,6,7,8,9,10],Ao=mn.concat([11,12,13,14,15,16,17,18,19,20]),jo=["aw","fw","pull-left","pull-right"],ko=[].concat(ee(Object.keys(xo)),So,jo,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",Le.GROUP,Le.SWAP_OPACITY,Le.PRIMARY,Le.SECONDARY]).concat(mn.map(function(e){return"".concat(e,"x")})).concat(Ao.map(function(e){return"w-".concat(e)})),Io={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},re="___FONT_AWESOME___",ma=16,gn="fa",pn="svg-inline--fa",ge="data-fa-i2svg",ga="data-fa-pseudo-element",Po="data-fa-pseudo-element-pending",Ca="data-prefix",za="data-icon",et="fontawesome-i2svg",No="async",Eo=["HTML","HEAD","STYLE","SCRIPT"],hn=["::before","::after",":before",":after"],vn=(function(){try{return!0}catch{return!1}})();function Fe(e){return new Proxy(e,{get:function(t,n){return n in t?t[n]:t[H]}})}var bn=g({},Dt);bn[H]=g(g(g(g({},{"fa-duotone":"duotone"}),Dt[H]),Ka.kit),Ka["kit-duotone"]);var Co=Fe(bn),pa=g({},ci);pa[H]=g(g(g(g({},{duotone:"fad"}),pa[H]),Qa.kit),Qa["kit-duotone"]);var at=Fe(pa),ha=g({},da);ha[H]=g(g({},ha[H]),bi.kit);var Fa=Fe(ha),va=g({},yo);va[H]=g(g({},va[H]),hi.kit);Fe(va);var zo=Or,yn="fa-layers-text",Fo=Tr,Mo=g({},si);Fe(Mo);var Oo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ia=_r,To=[].concat(ee(ui),ee(ko)),Pe=se.FontAwesomeConfig||{};function _o(e){var a=_.querySelector("script["+e+"]");if(a)return a.getAttribute(e)}function Ro(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(_&&typeof _.querySelector=="function"){var Lo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Lo.forEach(function(e){var a=Xe(e,2),t=a[0],n=a[1],r=Ro(_o(t));r!=null&&(Pe[n]=r)})}var xn={styleDefault:"solid",familyDefault:H,cssPrefix:gn,replacementClass:pn,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pe.familyPrefix&&(Pe.cssPrefix=Pe.familyPrefix);var we=g(g({},xn),Pe);we.autoReplaceSvg||(we.observeMutations=!1);var v={};Object.keys(xn).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(t){we[e]=t,Ne.forEach(function(n){return n(v)})},get:function(){return we[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(a){we.cssPrefix=a,Ne.forEach(function(t){return t(v)})},get:function(){return we.cssPrefix}});se.FontAwesomeConfig=v;var Ne=[];function Do(e){return Ne.push(e),function(){Ne.splice(Ne.indexOf(e),1)}}var ve=ma,te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $o(e){if(!(!e||!oe)){var a=_.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=e;for(var t=_.head.childNodes,n=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return _.head.insertBefore(a,n),e}}var Wo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){for(var e=12,a="";e-- >0;)a+=Wo[Math.random()*62|0];return a}function Ae(e){for(var a=[],t=(e||[]).length>>>0;t--;)a[t]=e[t];return a}function Ma(e){return e.classList?Ae(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(a){return a})}function wn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yo(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,'="').concat(wn(e[t]),'" ')},"").trim()}function Ge(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,": ").concat(e[t].trim(),";")},"")}function Oa(e){return e.size!==te.size||e.x!==te.x||e.y!==te.y||e.rotate!==te.rotate||e.flipX||e.flipY}function Bo(e){var a=e.transform,t=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(l)},m={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:u,path:m}}function Uo(e){var a=e.transform,t=e.width,n=t===void 0?ma:t,r=e.height,i=r===void 0?ma:r,o="";return Lt?o+="translate(".concat(a.x/ve-n/2,"em, ").concat(a.y/ve-i/2,"em) "):o+="translate(calc(-50% + ".concat(a.x/ve,"em), calc(-50% + ").concat(a.y/ve,"em)) "),o+="scale(".concat(a.size/ve*(a.flipX?-1:1),", ").concat(a.size/ve*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var Vo=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Sn(){var e=gn,a=pn,t=v.cssPrefix,n=v.replacementClass,r=Vo;if(t!==e||n!==a){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(l,".".concat(n))}return r}var nt=!1;function oa(){v.autoAddCss&&!nt&&($o(Sn()),nt=!0)}var Ho={mixout:function(){return{dom:{css:Sn,insertCss:oa}}},hooks:function(){return{beforeDOMElementCreation:function(){oa()},beforeI2svg:function(){oa()}}}},ie=se||{};ie[re]||(ie[re]={});ie[re].styles||(ie[re].styles={});ie[re].hooks||(ie[re].hooks={});ie[re].shims||(ie[re].shims=[]);var Q=ie[re],An=[],jn=function(){_.removeEventListener("DOMContentLoaded",jn),Ve=1,An.map(function(a){return a()})},Ve=!1;oe&&(Ve=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),Ve||_.addEventListener("DOMContentLoaded",jn));function Xo(e){oe&&(Ve?setTimeout(e,0):An.push(e))}function Me(e){var a=e.tag,t=e.attributes,n=t===void 0?{}:t,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?wn(e):"<".concat(a," ").concat(Yo(n),">").concat(i.map(Me).join(""),"</").concat(a,">")}function rt(e,a,t){if(e&&e[a]&&e[a][t])return{prefix:a,iconName:t,icon:e[a][t]}}var sa=function(a,t,n,r){var i=Object.keys(a),o=i.length,l=t,u,m,p;for(n===void 0?(u=1,p=a[i[0]]):(u=0,p=n);u<o;u++)m=i[u],p=l(p,a[m],m,a);return p};function kn(e){return ee(e).length!==1?null:e.codePointAt(0).toString(16)}function it(e){return Object.keys(e).reduce(function(a,t){var n=e[t],r=!!n.icon;return r?a[n.iconName]=n.icon:a[t]=n,a},{})}function ba(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,r=n===void 0?!1:n,i=it(a);typeof Q.hooks.addPack=="function"&&!r?Q.hooks.addPack(e,it(a)):Q.styles[e]=g(g({},Q.styles[e]||{}),i),e==="fas"&&ba("fa",a)}var Ce=Q.styles,Go=Q.shims,In=Object.keys(Fa),qo=In.reduce(function(e,a){return e[a]=Object.keys(Fa[a]),e},{}),Ta=null,Pn={},Nn={},En={},Cn={},zn={};function Jo(e){return~To.indexOf(e)}function Zo(e,a){var t=a.split("-"),n=t[0],r=t.slice(1).join("-");return n===e&&r!==""&&!Jo(r)?r:null}var Fn=function(){var a=function(i){return sa(Ce,function(o,l,u){return o[u]=sa(l,i,{}),o},{})};Pn=a(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var l=i[2].filter(function(u){return typeof u=="number"});l.forEach(function(u){r[u.toString(16)]=o})}return r}),Nn=a(function(r,i,o){if(r[o]=o,i[2]){var l=i[2].filter(function(u){return typeof u=="string"});l.forEach(function(u){r[u]=o})}return r}),zn=a(function(r,i,o){var l=i[2];return r[o]=o,l.forEach(function(u){r[u]=o}),r});var t="far"in Ce||v.autoFetchSvg,n=sa(Go,function(r,i){var o=i[0],l=i[1],u=i[2];return l==="far"&&!t&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:u}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:u}),r},{names:{},unicodes:{}});En=n.names,Cn=n.unicodes,Ta=qe(v.styleDefault,{family:v.familyDefault})};Do(function(e){Ta=qe(e.styleDefault,{family:v.familyDefault})});Fn();function _a(e,a){return(Pn[e]||{})[a]}function Ko(e,a){return(Nn[e]||{})[a]}function me(e,a){return(zn[e]||{})[a]}function Mn(e){return En[e]||{prefix:null,iconName:null}}function Qo(e){var a=Cn[e],t=_a("fas",e);return a||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function le(){return Ta}var On=function(){return{prefix:null,iconName:null,rest:[]}};function es(e){var a=H,t=In.reduce(function(n,r){return n[r]="".concat(v.cssPrefix,"-").concat(r),n},{});return cn.forEach(function(n){(e.includes(t[n])||e.some(function(r){return qo[n].includes(r)}))&&(a=n)}),a}function qe(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.family,n=t===void 0?H:t,r=Co[n][e];if(n===ze&&!e)return"fad";var i=at[n][e]||at[n][r],o=e in Q.styles?e:null,l=i||o||null;return l}function as(e){var a=[],t=null;return e.forEach(function(n){var r=Zo(v.cssPrefix,n);r?t=r:n&&a.push(n)}),{iconName:t,rest:a}}function ot(e){return e.sort().filter(function(a,t,n){return n.indexOf(a)===t})}var st=dn.concat(un);function Je(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.skipLookups,n=t===void 0?!1:t,r=null,i=ot(e.filter(function(h){return st.includes(h)})),o=ot(e.filter(function(h){return!st.includes(h)})),l=i.filter(function(h){return r=h,!$t.includes(h)}),u=Xe(l,1),m=u[0],p=m===void 0?null:m,d=es(i),y=g(g({},as(o)),{},{prefix:qe(p,{family:d})});return g(g(g({},y),is({values:e,family:d,styles:Ce,config:v,canonical:y,givenPrefix:r})),ts(n,r,y))}function ts(e,a,t){var n=t.prefix,r=t.iconName;if(e||!n||!r)return{prefix:n,iconName:r};var i=a==="fa"?Mn(r):{},o=me(n,r);return r=i.iconName||o||r,n=i.prefix||n,n==="far"&&!Ce.far&&Ce.fas&&!v.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var ns=cn.filter(function(e){return e!==H||e!==ze}),rs=Object.keys(da).filter(function(e){return e!==H}).map(function(e){return Object.keys(da[e])}).flat();function is(e){var a=e.values,t=e.family,n=e.canonical,r=e.givenPrefix,i=r===void 0?"":r,o=e.styles,l=o===void 0?{}:o,u=e.config,m=u===void 0?{}:u,p=t===ze,d=a.includes("fa-duotone")||a.includes("fad"),y=m.familyDefault==="duotone",h=n.prefix==="fad"||n.prefix==="fa-duotone";if(!p&&(d||y||h)&&(n.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(n.prefix="fab"),!n.prefix&&ns.includes(t)){var C=Object.keys(l).find(function(S){return rs.includes(S)});if(C||m.autoFetchSvg){var P=fi.get(t).defaultShortPrefixId;n.prefix=P,n.iconName=me(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=le()||"fas"),n}var os=(function(){function e(){kr(this,e),this.definitions={}}return Pr(e,[{key:"add",value:function(){for(var t=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){t.definitions[l]=g(g({},t.definitions[l]||{}),o[l]),ba(l,o[l]);var u=Fa[H][l];u&&ba(u,o[l]),Fn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],l=o.prefix,u=o.iconName,m=o.icon,p=m[2];t[l]||(t[l]={}),p.length>0&&p.forEach(function(d){typeof d=="string"&&(t[l][d]=m)}),t[l][u]=m}),t}}])})(),lt=[],ye={},xe={},ss=Object.keys(xe);function ls(e,a){var t=a.mixoutsTo;return lt=e,ye={},Object.keys(xe).forEach(function(n){ss.indexOf(n)===-1&&delete xe[n]}),lt.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),Ue(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){t[o]||(t[o]={}),t[o][l]=r[o][l]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){ye[o]||(ye[o]=[]),ye[o].push(i[o])})}n.provides&&n.provides(xe)}),t}function ya(e,a){for(var t=arguments.length,n=new Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];var i=ye[e]||[];return i.forEach(function(o){a=o.apply(null,[a].concat(n))}),a}function pe(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];var r=ye[e]||[];r.forEach(function(i){i.apply(null,t)})}function fe(){var e=arguments[0],a=Array.prototype.slice.call(arguments,1);return xe[e]?xe[e].apply(null,a):void 0}function xa(e){e.prefix==="fa"&&(e.prefix="fas");var a=e.iconName,t=e.prefix||le();if(a)return a=me(t,a)||a,rt(Tn.definitions,t,a)||rt(Q.styles,t,a)}var Tn=new os,fs=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,pe("noAuto")},cs={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return oe?(pe("beforeI2svg",a),fe("pseudoElements2svg",a),fe("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Xo(function(){ds({autoReplaceSvgRoot:t}),pe("watch",a)})}},us={icon:function(a){if(a===null)return null;if(Ue(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:me(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var t=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],n=qe(a[0]);return{prefix:n,iconName:me(n,t)||t}}if(typeof a=="string"&&(a.indexOf("".concat(v.cssPrefix,"-"))>-1||a.match(zo))){var r=Je(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||le(),iconName:me(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=le();return{prefix:i,iconName:me(i,a)||a}}}},G={noAuto:fs,config:v,dom:cs,parse:us,library:Tn,findIconDefinition:xa,toHtml:Me},ds=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot,n=t===void 0?_:t;(Object.keys(Q.styles).length>0||v.autoFetchSvg)&&oe&&v.autoReplaceSvg&&G.dom.i2svg({node:n})};function Ze(e,a){return Object.defineProperty(e,"abstract",{get:a}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return Me(n)})}}),Object.defineProperty(e,"node",{get:function(){if(oe){var n=_.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function ms(e){var a=e.children,t=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Oa(o)&&t.found&&!n.found){var l=t.width,u=t.height,m={x:l/u/2,y:.5};r.style=Ge(g(g({},i),{},{"transform-origin":"".concat(m.x+o.x/16,"em ").concat(m.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function gs(e){var a=e.prefix,t=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(a,"-").concat(v.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},r),{},{id:o}),children:n}]}]}function ps(e){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(t){return t in e})}function Ra(e){var a=e.icons,t=a.main,n=a.mask,r=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,u=e.maskId,m=e.extra,p=e.watchable,d=p===void 0?!1:p,y=n.found?n:t,h=y.width,C=y.height,P=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(W){return m.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(m.classes).join(" "),S={children:[],attributes:g(g({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:P,role:m.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(C)})};!ps(m.attributes)&&!m.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),d&&(S.attributes[ge]="");var M=g(g({},S),{},{prefix:r,iconName:i,main:t,mask:n,maskId:u,transform:o,symbol:l,styles:g({},m.styles)}),R=n.found&&t.found?fe("generateAbstractMask",M)||{children:[],attributes:{}}:fe("generateAbstractIcon",M)||{children:[],attributes:{}},F=R.children,B=R.attributes;return M.children=F,M.attributes=B,l?gs(M):ms(M)}function ft(e){var a=e.content,t=e.width,n=e.height,r=e.transform,i=e.extra,o=e.watchable,l=o===void 0?!1:o,u=g(g({},i.attributes),{},{class:i.classes.join(" ")});l&&(u[ge]="");var m=g({},i.styles);Oa(r)&&(m.transform=Uo({transform:r,width:t,height:n}),m["-webkit-transform"]=m.transform);var p=Ge(m);p.length>0&&(u.style=p);var d=[];return d.push({tag:"span",attributes:u,children:[a]}),d}function hs(e){var a=e.content,t=e.extra,n=g(g({},t.attributes),{},{class:t.classes.join(" ")}),r=Ge(t.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[a]}),i}var la=Q.styles;function wa(e){var a=e[0],t=e[1],n=e.slice(4),r=Xe(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(ia.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ia.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ia.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:t,icon:o}}var vs={found:!1,width:512,height:512};function bs(e,a){!vn&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(a,'" is missing.'))}function Sa(e,a){var t=a;return a==="fa"&&v.styleDefault!==null&&(a=le()),new Promise(function(n,r){if(t==="fa"){var i=Mn(e)||{};e=i.iconName||e,a=i.prefix||a}if(e&&a&&la[a]&&la[a][e]){var o=la[a][e];return n(wa(o))}bs(e,a),n(g(g({},vs),{},{icon:v.showMissingIcons&&e?fe("missingIconAbstract")||{}:{}}))})}var ct=function(){},Aa=v.measurePerformance&&Te&&Te.mark&&Te.measure?Te:{mark:ct,measure:ct},ke='FA "7.3.1"',ys=function(a){return Aa.mark("".concat(ke," ").concat(a," begins")),function(){return _n(a)}},_n=function(a){Aa.mark("".concat(ke," ").concat(a," ends")),Aa.measure("".concat(ke," ").concat(a),"".concat(ke," ").concat(a," begins"),"".concat(ke," ").concat(a," ends"))},La={begin:ys,end:_n},Ye=function(){};function ut(e){var a=e.getAttribute?e.getAttribute(ge):null;return typeof a=="string"}function xs(e){var a=e.getAttribute?e.getAttribute(Ca):null,t=e.getAttribute?e.getAttribute(za):null;return a&&t}function ws(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Ss(){if(v.autoReplaceSvg===!0)return Be.replace;var e=Be[v.autoReplaceSvg];return e||Be.replace}function As(e){return _.createElementNS("http://www.w3.org/2000/svg",e)}function js(e){return _.createElement(e)}function Rn(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.ceFn,n=t===void 0?e.tag==="svg"?As:js:t;if(typeof e=="string")return _.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Rn(o,{ceFn:n}))}),r}function ks(e){var a=" ".concat(e.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var Be={replace:function(a){var t=a[0];if(t.parentNode)if(a[1].forEach(function(r){t.parentNode.insertBefore(Rn(r),t)}),t.getAttribute(ge)===null&&v.keepOriginalSource){var n=_.createComment(ks(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(a){var t=a[0],n=a[1];if(~Ma(t).indexOf(v.replacementClass))return Be.replace(a);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(l,u){return u===v.replacementClass||u.match(r)?l.toSvg.push(u):l.toNode.push(u),l},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(l){return Me(l)}).join(`
`);t.setAttribute(ge,""),t.innerHTML=o}};function dt(e){e()}function Ln(e,a){var t=typeof a=="function"?a:Ye;if(e.length===0)t();else{var n=dt;v.mutateApproach===No&&(n=se.requestAnimationFrame||dt),n(function(){var r=Ss(),i=La.begin("mutate");e.map(r),i(),t()})}}var Da=!1;function Dn(){Da=!0}function ja(){Da=!1}var He=null;function mt(e){if(Za&&v.observeMutations){var a=e.treeCallback,t=a===void 0?Ye:a,n=e.nodeCallback,r=n===void 0?Ye:n,i=e.pseudoElementsCallback,o=i===void 0?Ye:i,l=e.observeMutationsRoot,u=l===void 0?_:l;He=new Za(function(m){if(!Da){var p=le();Ae(m).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ut(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&ut(d.target)&&~Oo.indexOf(d.attributeName))if(d.attributeName==="class"&&xs(d.target)){var y=Je(Ma(d.target)),h=y.prefix,C=y.iconName;d.target.setAttribute(Ca,h||p),C&&d.target.setAttribute(za,C)}else ws(d.target)&&r(d.target)})}}),oe&&He.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Is(){He&&He.disconnect()}function Ps(e){var a=e.getAttribute("style"),t=[];return a&&(t=a.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(n[o]=l.join(":").trim()),n},{})),t}function Ns(e){var a=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=Je(Ma(e));return r.prefix||(r.prefix=le()),a&&t&&(r.prefix=a,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Ko(r.prefix,e.innerText)||_a(r.prefix,kn(e.innerText))),!r.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Es(e){var a=Ae(e.attributes).reduce(function(t,n){return t.name!=="class"&&t.name!=="style"&&(t[n.name]=n.value),t},{});return a}function Cs(){return{iconName:null,prefix:null,transform:te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gt(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Ns(e),n=t.iconName,r=t.prefix,i=t.rest,o=Es(e),l=ya("parseNodeAttributes",{},e),u=a.styleParser?Ps(e):[];return g({iconName:n,prefix:r,transform:te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:u,attributes:o}},l)}var zs=Q.styles;function $n(e){var a=v.autoReplaceSvg==="nest"?gt(e,{styleParser:!1}):gt(e);return~a.extra.classes.indexOf(yn)?fe("generateLayersText",e,a):fe("generateSvgReplacementMutation",e,a)}function Fs(){return[].concat(ee(un),ee(dn))}function pt(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!oe)return Promise.resolve();var t=_.documentElement.classList,n=function(d){return t.add("".concat(et,"-").concat(d))},r=function(d){return t.remove("".concat(et,"-").concat(d))},i=v.autoFetchSvg?Fs():$t.concat(Object.keys(zs));i.includes("fa")||i.push("fa");var o=[".".concat(yn,":not([").concat(ge,"])")].concat(i.map(function(p){return".".concat(p,":not([").concat(ge,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Ae(e.querySelectorAll(o))}catch{}if(l.length>0)n("pending"),r("complete");else return Promise.resolve();var u=La.begin("onTree"),m=l.reduce(function(p,d){try{var y=$n(d);y&&p.push(y)}catch(h){vn||h.name==="MissingIcon"&&console.error(h)}return p},[]);return new Promise(function(p,d){Promise.all(m).then(function(y){Ln(y,function(){n("active"),n("complete"),r("pending"),typeof a=="function"&&a(),u(),p()})}).catch(function(y){u(),d(y)})})}function Ms(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$n(e).then(function(t){t&&Ln([t],a)})}function Os(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(a||{}).icon?a:xa(a||{}),r=t.mask;return r&&(r=(r||{}).icon?r:xa(r||{})),e(n,g(g({},t),{},{mask:r}))}}var Ts=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?te:n,i=t.symbol,o=i===void 0?!1:i,l=t.mask,u=l===void 0?null:l,m=t.maskId,p=m===void 0?null:m,d=t.classes,y=d===void 0?[]:d,h=t.attributes,C=h===void 0?{}:h,P=t.styles,S=P===void 0?{}:P;if(a){var M=a.prefix,R=a.iconName,F=a.icon;return Ze(g({type:"icon"},a),function(){return pe("beforeDOMElementCreation",{iconDefinition:a,params:t}),Ra({icons:{main:wa(F),mask:u?wa(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:R,transform:g(g({},te),r),symbol:o,maskId:p,extra:{attributes:C,styles:S,classes:y}})})}},_s={mixout:function(){return{icon:Os(Ts)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=pt,t.nodeCallback=Ms,t}}},provides:function(a){a.i2svg=function(t){var n=t.node,r=n===void 0?_:n,i=t.callback,o=i===void 0?function(){}:i;return pt(r,o)},a.generateSvgReplacementMutation=function(t,n){var r=n.iconName,i=n.prefix,o=n.transform,l=n.symbol,u=n.mask,m=n.maskId,p=n.extra;return new Promise(function(d,y){Promise.all([Sa(r,i),u.iconName?Sa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var C=Xe(h,2),P=C[0],S=C[1];d([t,Ra({icons:{main:P,mask:S},prefix:i,iconName:r,transform:o,symbol:l,maskId:m,extra:p,watchable:!0})])}).catch(y)})},a.generateAbstractIcon=function(t){var n=t.children,r=t.attributes,i=t.main,o=t.transform,l=t.styles,u=Ge(l);u.length>0&&(r.style=u);var m;return Oa(o)&&(m=fe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(m||i.icon),{children:n,attributes:r}}}},Rs={mixout:function(){return{layer:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return Ze({type:"layer"},function(){pe("beforeDOMElementCreation",{assembler:t,params:n});var o=[];return t(function(l){Array.isArray(l)?l.map(function(u){o=o.concat(u.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(ee(i)).join(" ")},children:o}]})}}}},Ls={mixout:function(){return{counter:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,i=r===void 0?[]:r,o=n.attributes,l=o===void 0?{}:o,u=n.styles,m=u===void 0?{}:u;return Ze({type:"counter",content:t},function(){return pe("beforeDOMElementCreation",{content:t,params:n}),hs({content:t.toString(),extra:{attributes:l,styles:m,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(ee(i))}})})}}}},Ds={mixout:function(){return{text:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?te:r,o=n.classes,l=o===void 0?[]:o,u=n.attributes,m=u===void 0?{}:u,p=n.styles,d=p===void 0?{}:p;return Ze({type:"text",content:t},function(){return pe("beforeDOMElementCreation",{content:t,params:n}),ft({content:t,transform:g(g({},te),i),extra:{attributes:m,styles:d,classes:["".concat(v.cssPrefix,"-layers-text")].concat(ee(l))}})})}}},provides:function(a){a.generateLayersText=function(t,n){var r=n.transform,i=n.extra,o=null,l=null;if(Lt){var u=parseInt(getComputedStyle(t).fontSize,10),m=t.getBoundingClientRect();o=m.width/u,l=m.height/u}return Promise.resolve([t,ft({content:t.innerHTML,width:o,height:l,transform:r,extra:i,watchable:!0})])}}},Wn=new RegExp('"',"ug"),ht=[1105920,1112319],vt=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),li),Io),vi),ka=Object.keys(vt).reduce(function(e,a){return e[a.toLowerCase()]=vt[a],e},{}),$s=Object.keys(ka).reduce(function(e,a){var t=ka[a];return e[a]=t[900]||ee(Object.entries(t))[0][1],e},{});function Ws(e){var a=e.replace(Wn,"");return kn(ee(a)[0]||"")}function Ys(e){var a=e.getPropertyValue("font-feature-settings").includes("ss01"),t=e.getPropertyValue("content"),n=t.replace(Wn,""),r=n.codePointAt(0),i=r>=ht[0]&&r<=ht[1],o=n.length===2?n[0]===n[1]:!1;return i||o||a}function Bs(e,a){var t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(a),r=isNaN(n)?"normal":n;return(ka[t]||{})[r]||$s[t]}function bt(e,a){var t="".concat(Po).concat(a.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(t)!==null)return n();var i=Ae(e.children),o=i.filter(function(q){return q.getAttribute(ga)===a})[0],l=se.getComputedStyle(e,a),u=l.getPropertyValue("font-family"),m=u.match(Fo),p=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(o&&!m)return e.removeChild(o),n();if(m&&d!=="none"&&d!==""){var y=l.getPropertyValue("content"),h=Bs(u,p),C=Ws(y),P=m[0].startsWith("FontAwesome"),S=Ys(l),M=_a(h,C),R=M;if(P){var F=Qo(C);F.iconName&&F.prefix&&(M=F.iconName,h=F.prefix)}if(M&&!S&&(!o||o.getAttribute(Ca)!==h||o.getAttribute(za)!==R)){e.setAttribute(t,R),o&&e.removeChild(o);var B=Cs(),W=B.extra;W.attributes[ga]=a,Sa(M,h).then(function(q){var ce=Ra(g(g({},B),{},{icons:{main:q,mask:On()},prefix:h,iconName:R,extra:W,watchable:!0})),ue=_.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?e.insertBefore(ue,e.firstChild):e.appendChild(ue),ue.outerHTML=ce.map(function(je){return Me(je)}).join(`
`),e.removeAttribute(t),n()}).catch(r)}else n()}else n()})}function Us(e){return Promise.all([bt(e,"::before"),bt(e,"::after")])}function Vs(e){return e.parentNode!==document.head&&!~Eo.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ga)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Hs=function(a){return!!a&&hn.some(function(t){return a.includes(t)})},Xs=function(a){if(!a)return[];var t=new Set,n=a.split(/,(?![^()]*\))/).map(function(u){return u.trim()});n=n.flatMap(function(u){return u.includes("(")?u:u.split(",").map(function(m){return m.trim()})});var r=We(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(Hs(o)){var l=hn.reduce(function(u,m){return u.replace(m,"")},o);l!==""&&l!=="*"&&t.add(l)}}}catch(u){r.e(u)}finally{r.f()}return t};function yt(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(oe){var t;if(a)t=e;else if(v.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var n=new Set,r=We(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var l=We(o.cssRules),u;try{for(l.s();!(u=l.n()).done;){var m=u.value,p=Xs(m.selectorText),d=We(p),y;try{for(d.s();!(y=d.n()).done;){var h=y.value;n.add(h)}}catch(P){d.e(P)}finally{d.f()}}}catch(P){l.e(P)}finally{l.f()}}catch(P){v.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(P.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(P){r.e(P)}finally{r.f()}if(!n.size)return;var C=Array.from(n).join(", ");try{t=e.querySelectorAll(C)}catch{}}return new Promise(function(P,S){var M=Ae(t).filter(Vs).map(Us),R=La.begin("searchPseudoElements");Dn(),Promise.all(M).then(function(){R(),ja(),P()}).catch(function(){R(),ja(),S()})})}}var Gs={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=yt,t}}},provides:function(a){a.pseudoElements2svg=function(t){var n=t.node,r=n===void 0?_:n;v.searchPseudoElements&&yt(r)}}},xt=!1,qs={mixout:function(){return{dom:{unwatch:function(){Dn(),xt=!0}}}},hooks:function(){return{bootstrap:function(){mt(ya("mutationObserverCallbacks",{}))},noAuto:function(){Is()},watch:function(t){var n=t.observeMutationsRoot;xt?ja():mt(ya("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},wt=function(a){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return n.flipX=!0,n;if(o&&l==="v")return n.flipY=!0,n;if(l=parseFloat(l),isNaN(l))return n;switch(o){case"grow":n.size=n.size+l;break;case"shrink":n.size=n.size-l;break;case"left":n.x=n.x-l;break;case"right":n.x=n.x+l;break;case"up":n.y=n.y-l;break;case"down":n.y=n.y+l;break;case"rotate":n.rotate=n.rotate+l;break}return n},t)},Js={mixout:function(){return{parse:{transform:function(t){return wt(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-transform");return r&&(t.transform=wt(r)),t}}},provides:function(a){a.generateAbstractTransformGrouping=function(t){var n=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,l={transform:"translate(".concat(i/2," 256)")},u="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),p="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(u," ").concat(m," ").concat(p)},y={transform:"translate(".concat(o/2*-1," -256)")},h={outer:l,inner:d,path:y};return{tag:"g",attributes:g({},h.outer),children:[{tag:"g",attributes:g({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:g(g({},n.icon.attributes),h.path)}]}]}}}},fa={x:0,y:0,width:"100%",height:"100%"};function St(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||a)&&(e.attributes.fill="black"),e}function Zs(e){return e.tag==="g"?e.children:[e]}var Ks={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-mask"),i=r?Je(r.split(" ").map(function(o){return o.trim()})):On();return i.prefix||(i.prefix=le()),t.mask=i,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides:function(a){a.generateAbstractMask=function(t){var n=t.children,r=t.attributes,i=t.main,o=t.mask,l=t.maskId,u=t.transform,m=i.width,p=i.icon,d=o.width,y=o.icon,h=Bo({transform:u,containerWidth:d,iconWidth:m}),C={tag:"rect",attributes:g(g({},fa),{},{fill:"white"})},P=p.children?{children:p.children.map(St)}:{},S={tag:"g",attributes:g({},h.inner),children:[St(g({tag:p.tag,attributes:g(g({},p.attributes),h.path)},P))]},M={tag:"g",attributes:g({},h.outer),children:[S]},R="mask-".concat(l||tt()),F="clip-".concat(l||tt()),B={tag:"mask",attributes:g(g({},fa),{},{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,M]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Zs(y)},B]};return n.push(W,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(R,")")},fa)}),{children:n,attributes:r}}}},Qs={provides:function(a){var t=!1;se.matchMedia&&(t=se.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(g({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=g(g({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:g(g({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||l.children.push({tag:"animate",attributes:g(g({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(l),n.push({tag:"path",attributes:g(g({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:g(g({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:g(g({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},el={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},al=[Ho,_s,Rs,Ls,Ds,Gs,qs,Js,Ks,Qs,el];ls(al,{mixoutsTo:G});G.noAuto;var Se=G.config;G.library;G.dom;var Yn=G.parse;G.findIconDefinition;G.toHtml;var tl=G.icon;G.layer;G.text;G.counter;function nl(e){return e=e-0,e===e}function Bn(e){return nl(e)?e:(e=e.replace(/[_-]+(.)?/g,(a,t)=>t?t.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}var rl=(e,a)=>Pa.createElement("stop",{key:`${a}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function il(e){return e.charAt(0).toUpperCase()+e.slice(1)}var be=new Map,ol=1e3;function sl(e){if(be.has(e))return be.get(e);const a={};let t=0;const n=e.length;for(;t<n;){const r=e.indexOf(";",t),i=r===-1?n:r,o=e.slice(t,i).trim();if(o){const l=o.indexOf(":");if(l>0){const u=o.slice(0,l).trim(),m=o.slice(l+1).trim();if(u&&m){const p=Bn(u);a[p.startsWith("webkit")?il(p):p]=m}}}t=i+1}if(be.size===ol){const r=be.keys().next().value;r&&be.delete(r)}return be.set(e,a),a}function Un(e,a,t={}){if(typeof a=="string")return a;const n=(a.children||[]).map(d=>{let y=d;return("fill"in t||t.gradientFill)&&d.tag==="path"&&"fill"in d.attributes&&(y={...d,attributes:{...d.attributes,fill:void 0}}),Un(e,y)}),r=a.attributes||{},i={};for(const[d,y]of Object.entries(r))switch(!0){case d==="class":{i.className=y;break}case d==="style":{i.style=sl(String(y));break}case d.startsWith("aria-"):case d.startsWith("data-"):{i[d.toLowerCase()]=y;break}default:i[Bn(d)]=y}const{style:o,role:l,"aria-label":u,gradientFill:m,...p}=t;if(o&&(i.style=i.style?{...i.style,...o}:o),l&&(i.role=l),u&&(i["aria-label"]=u,i["aria-hidden"]="false"),m){i.fill=`url(#${m.id})`;const{type:d,stops:y=[],...h}=m;n.unshift(e(d==="linear"?"linearGradient":"radialGradient",{...h,id:m.id},y.map(rl)))}return e(a.tag,{...i,...p},...n)}var ll=Un.bind(null,Pa.createElement),At=(e,a)=>{const t=V.useId();return e||(a?t:void 0)},fl=class{constructor(e="react-fontawesome"){this.enabled=!1;let a=!1;try{a=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=a}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},cl="searchPseudoElementsFullScan"in Se&&typeof Se.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",ul=Number.parseInt(cl)>=7,dl=()=>ul,Ee="fa",Y={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},ml={left:"fa-pull-left",right:"fa-pull-right"},gl={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},pl={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},K={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function hl(e){const a=Se.cssPrefix||Se.familyPrefix||Ee;return a===Ee?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Ee}-`,"g"),`${a}-`)}function vl(e){const{beat:a,fade:t,beatFade:n,bounce:r,shake:i,spin:o,spinPulse:l,spinReverse:u,pulse:m,fixedWidth:p,inverse:d,border:y,flip:h,size:C,rotation:P,pull:S,swapOpacity:M,rotateBy:R,widthAuto:F,canvasSquare:B,canvasRoomy:W,flip360:q,buzz:ce,float:ue,jello:je,spinSnap:Ke,spinSnap4:Qe,spinSnap8:ea,swing:aa,wag:Oe,className:he}=e,j=[];return he&&j.push(...he.split(" ")),a&&j.push(Y.beat),t&&j.push(Y.fade),n&&j.push(Y.beatFade),r&&j.push(Y.bounce),i&&j.push(Y.shake),o&&j.push(Y.spin),u&&j.push(Y.spinReverse),l&&j.push(Y.spinPulse),m&&j.push(Y.pulse),p&&j.push(K.fixedWidth),d&&j.push(K.inverse),y&&j.push(K.border),h===!0&&j.push(K.flip),(h==="horizontal"||h==="both")&&j.push(K.flipHorizontal),(h==="vertical"||h==="both")&&j.push(K.flipVertical),C!=null&&j.push(pl[C]),P!=null&&P!==0&&j.push(gl[P]),S!=null&&j.push(ml[S]),M&&j.push(K.swapOpacity),dl()?(R&&j.push(K.rotateBy),F&&j.push(K.widthAuto),B&&j.push(K.canvasSquare),W&&j.push(K.canvasRoomy),q&&j.push(Y.flip360),ce&&j.push(Y.buzz),ue&&j.push(Y.float),je&&j.push(Y.jello),Ke&&j.push(Y.spinSnap),Qe&&j.push(Y.spinSnap4),ea&&j.push(Y.spinSnap8),aa&&j.push(Y.swing),Oe&&j.push(Y.wag),(Se.cssPrefix||Se.familyPrefix||Ee)===Ee?j:j.map(hl)):j}var bl=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function jt(e){if(e)return bl(e)?e:Yn.icon(e)}function yl(e){return Object.keys(e)}var kt=new fl("FontAwesomeIcon"),Vn={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},xl=new Set(Object.keys(Vn)),Ie=Pa.forwardRef((e,a)=>{const t={...Vn,...e},{icon:n,mask:r,symbol:i,title:o,titleId:l,maskId:u,transform:m}=t,p=At(u,!!r),d=At(l,!!o),y=jt(n);if(!y)return kt.error("Icon lookup is undefined",n),null;const h=vl(t),C=typeof m=="string"?Yn.transform(m):m,P=jt(r),S=tl(y,{...h.length>0&&{classes:h},...C&&{transform:C},...P&&{mask:P},symbol:i,title:o,titleId:d,maskId:p});if(!S)return kt.error("Could not find icon",y),null;const{abstract:M}=S,R={ref:a};for(const F of yl(t))xl.has(F)||(R[F]=t[F]);return ll(M[0],R)});Ie.displayName="FontAwesomeIcon";var It={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Pt={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};const wl="/Portafolio/assets/graduacion-CFaZUA_J.jpg",Sl="/Portafolio/assets/tablilla-CcNzdsju.png",Al="/Portafolio/assets/certificado-D20gsWA5.png",jl="/Portafolio/assets/yo2-DVi7V8oo.png",kl="/Portafolio/assets/tailwind-jarsjB_x.jpg",De=[{id:10,fecha:"2025-04-02",imagenes:[Sl,Al,jl],descripcion:"🌟 ¡Un logro que marca el inicio de grandes cosas! 🌟 La informática no es solo código y pantallas, es creatividad, lógica y la capacidad de hacer que las ideas cobren vida. Hoy, sostengo con orgullo este certificado que representa esfuerzo, dedicación y una pasión inquebrantable por la tecnología. <br> Recibir este reconocimiento como el más destacado en el área de informática en mi escuela politécnica no solo es un honor, sino una prueba de que con disciplina y amor por lo que hacemos, podemos llegar lejos. 🚀 <br> A cada persona que sueña con crear, innovar y transformar el mundo a través de la tecnología: nunca dejes de aprender, nunca dejes de soñar. 💻✨",titulo:"TÉCNICO EN DESARROLLO Y ADMINISTRACIÓN DE APLICACIONES INFORMÁTICAS"},{id:8,fecha:"2025-05-08",imagenes:[wl,Ft],descripcion:"✨✨¡Con mucha emoción! Después de seis meses de arduo trabajo, hoy puedo decir con orgullo que he completado un curso muy importante en mi vida. Me llena el corazón de alegría haber sido reconocido como uno de los estudiantes más destacados. Agradezco de todo corazón a quienes confiaron y creyeron en mí. ¡Todo es posible si le pones ganas! ¡Vamos allá! Estoy listo para un nuevo trabajo y nuevos retos.",titulo:"CERTIFICACIÓN PROGRAMACIÓN DE ALTO IMPACTO"},{id:11,fecha:"2025-06-14",imagenes:[kl],descripcion:"¡Aprendí Tailwind y estoy emocionado por todo lo que puedo crear con él! 🚀",titulo:"Aprendí Tailwind"},{id:12,fecha:"2025-06-14",imagenes:[or],descripcion:"¡Estoy súper emocionado! Logré hacer una interfaz de login completa sin ayuda de inteligencia artificial, usando Tailwind CSS. Ver el resultado final y saber que lo hice por mi cuenta es una gran satisfacción. ¡Vamos por más! 💻✨",titulo:"Primer aplicación con tailwind"},{id:13,fecha:"2025-11-11 - 2026-2-11",imagenes:[Mt],descripcion:"Completé exitosamente mi pasantía en BHD cumpliendo todas las asignaciones con desempeño excelente. Participé en el desarrollo de un chat inteligente para gestión de tarjetas de crédito, trabajando principalmente con React en el Front-End y colaborando en el Back-End con Python y Google ADK, fortaleciendo mis habilidades técnicas y de trabajo en equipo en un entorno profesional.",titulo:"Pasantía en el Bando BHD."}],ca=[.22,1,.36,1],Nt={type:"spring",stiffness:220,damping:28},Il=4,Pl={enter:e=>({opacity:0,x:e*60,scale:.9,filter:"blur(8px)"}),show:{opacity:1,x:0,scale:1,filter:"blur(0px)"},exit:e=>({opacity:0,x:e*-60,scale:.9,filter:"blur(8px)"})},Nl={enter:e=>({opacity:0,y:e*24}),show:{opacity:1,y:0},exit:e=>({opacity:0,y:e*-24})},El=["","","max-sm:hidden","max-lg:hidden"];function Cl(){const[[e,a],t]=V.useState([0,1]),[n,r]=V.useState(0),i=De.length,o=De[e],l=Array.from({length:Math.min(Il,i)},(p,d)=>De[(e+d)%i]),u=(p,d)=>{t([(p+i)%i,d]),r(0)},m=p=>r(d=>(d+p+o.imagenes.length)%o.imagenes.length);return f.jsx(sr,{reducedMotion:"user",children:f.jsxs("section",{className:"relative z-10 mx-auto mt-2 grid w-full max-w-7xl grid-cols-1 gap-6 bg-bgPage p-4 sm:p-7 lg:grid-cols-[auto_minmax(0,400px)_minmax(0,1fr)] lg:gap-10",children:[f.jsx("nav",{className:"order-2 min-w-0 lg:order-none",children:f.jsxs("ul",{className:"relative flex items-center justify-between gap-2 overflow-x-auto p-2 lg:h-full lg:flex-col lg:overflow-visible lg:px-4 lg:py-0",children:[f.jsx("span",{className:"absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/15 lg:left-1/2 lg:top-0 lg:h-full lg:w-px lg:-translate-x-1/2 lg:translate-y-0"}),De.map((p,d)=>f.jsx("li",{className:"relative z-10 shrink-0",children:f.jsxs("button",{type:"button","aria-label":`Ir a ${p.titulo}`,"aria-current":d===e,onClick:()=>u(d,d>e?1:-1),className:`relative grid h-9 w-9 cursor-pointer place-items-center rounded-full text-sm font-semibold transition-colors
                                    ${d===e?"text-black":"bg-neutral-800 text-white/60 hover:text-white"}`,children:[d===e&&f.jsx($.span,{layoutId:"rail-pill",transition:Nt,className:"absolute inset-0 rounded-full bg-green-500"}),f.jsx("span",{className:"relative",children:d+1})]})},p.id))]})}),f.jsxs("article",{className:"order-3 flex min-h-48 flex-col lg:order-none",children:[f.jsx(na,{mode:"wait",custom:a,initial:!1,children:f.jsxs($.div,{custom:a,variants:Nl,initial:"enter",animate:"show",exit:"exit",transition:{duration:.35,ease:ca},className:"max-h-100 h-auto overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-green-600",children:[f.jsx("h3",{className:"text-balance font-bold leading-tight sm:text-2xl lg:text-3xl",children:o.titulo}),f.jsx("p",{className:"mt-4 text-base leading-relaxed text-white/75 sm:text-lg",children:o.descripcion})]},o.id)}),f.jsxs("div",{className:"mt-auto flex gap-3 pt-6",children:[f.jsxs("button",{type:"button",onClick:()=>u(e-1,-1),className:"flex cursor-pointer items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-semibold text-white transition hover:bg-white/10 active:scale-95",children:[f.jsx(Ie,{icon:Pt})," Anterior"]}),f.jsxs("button",{type:"button",onClick:()=>u(e+1,1),className:"flex cursor-pointer items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400 active:scale-95",children:["Siguiente ",f.jsx(Ie,{icon:It})]})]})]}),f.jsx("div",{className:"relative order-1 flex h-72 min-w-0 items-center gap-3 sm:h-[420px] lg:order-none lg:h-[480px]",children:f.jsx(na,{mode:"popLayout",custom:a,initial:!1,children:l.map((p,d)=>f.jsxs($.div,{layout:!0,custom:a,variants:Pl,initial:"enter",animate:"show",exit:"exit",transition:{layout:Nt,default:{duration:.5,ease:ca}},style:{flex:d===0?3.2:1,height:`${100-d*16}%`,borderRadius:24},className:`relative min-w-0 overflow-hidden bg-neutral-800 ${El[d]}`,children:[f.jsx($.img,{layout:!0,src:String(p.imagenes[0]),alt:d===0?p.titulo:"",className:"absolute inset-0 h-full w-full object-cover"}),d===0?f.jsxs(f.Fragment,{children:[f.jsx(na,{initial:!1,children:n>0&&f.jsx($.img,{src:String(p.imagenes[n]),alt:"",className:"absolute inset-0 h-full w-full object-cover",initial:{opacity:0,scale:1.04},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.35,ease:ca}},n)}),p.imagenes.length>1&&f.jsxs($.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:.3},className:"absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/50 p-1 backdrop-blur-md",children:[f.jsx("button",{type:"button","aria-label":"Imagen anterior",onClick:()=>m(-1),className:"grid h-8 w-8 cursor-pointer place-items-center rounded-full text-white transition hover:bg-white/20 active:scale-90",children:f.jsx(Ie,{icon:Pt})}),f.jsx("span",{className:"flex items-center gap-1.5",children:p.imagenes.map((y,h)=>f.jsx("span",{className:`h-1.5 rounded-full transition-all ${h===n?"w-4 bg-white":"w-1.5 bg-white/50"}`},h))}),f.jsx("button",{type:"button","aria-label":"Imagen siguiente",onClick:()=>m(1),className:"grid h-8 w-8 cursor-pointer place-items-center rounded-full text-white transition hover:bg-white/20 active:scale-90",children:f.jsx(Ie,{icon:It})})]})]}):f.jsx("button",{type:"button","aria-label":`Ir a ${p.titulo}`,onClick:()=>u((e+d)%i,1),className:"absolute inset-0 cursor-pointer bg-black/35 transition-colors duration-300 hover:bg-black/10"})]},p.id))})})]})})}var Ia=new Map,$e=new WeakMap,Et=0,zl;function Fl(e){return e?($e.has(e)||(Et+=1,$e.set(e,Et.toString())),$e.get(e)):"0"}function Ml(e){return Object.keys(e).sort().filter(a=>e[a]!==void 0).map(a=>`${a}_${a==="root"?Fl(e.root):e[a]}`).toString()}function Ol(e){const a=Ml(e);let t=Ia.get(a);if(!t){const n=new Map;let r;const i=new IntersectionObserver(o=>{o.forEach(l=>{var u;const m=l.isIntersecting&&r.some(p=>l.intersectionRatio>=p);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=m),[...(u=n.get(l.target))!=null?u:[]].forEach(p=>{p(m,l)})})},e);r=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:a,observer:i,elements:n},Ia.set(a,t)}return t}function Tl(e,a,t={},n=zl){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const u=e.getBoundingClientRect();return a(n,{isIntersecting:n,target:e,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:r,observer:i,elements:o}=Ol(t),l=o.get(e)||[];return o.has(e)||o.set(e,l),l.push(a),i.observe(e),function(){l.splice(l.indexOf(a),1),l.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),Ia.delete(r))}}function _l({threshold:e,delay:a,trackVisibility:t,rootMargin:n,root:r,triggerOnce:i,skip:o,initialInView:l,fallbackInView:u,onChange:m}={}){var p;const[d,y]=V.useState(null),h=V.useRef(m),C=V.useRef(l),[P,S]=V.useState({inView:!!l,entry:void 0});h.current=m,V.useEffect(()=>{if(C.current===void 0&&(C.current=l),o||!d)return;let B;return B=Tl(d,(W,q)=>{const ce=C.current;C.current=W,!(ce===void 0&&!W)&&(S({inView:W,entry:q}),h.current&&h.current(W,q),q.isIntersecting&&i&&B&&(B(),B=void 0))},{root:r,rootMargin:n,threshold:e,trackVisibility:t,delay:a},u),()=>{B&&B()}},[Array.isArray(e)?e.toString():e,d,r,n,i,o,t,u,a]);const M=(p=P.entry)==null?void 0:p.target,R=V.useRef(void 0);!d&&M&&!i&&!o&&R.current!==M&&(R.current=M,S({inView:!!l,entry:void 0}),C.current=l);const F=[y,P.inView,P.entry];return F.ref=F[0],F.inView=F[1],F.entry=F[2],F}var $a={};(function e(a,t,n,r){var i=!!(a.Worker&&a.Blob&&a.Promise&&a.OffscreenCanvas&&a.OffscreenCanvasRenderingContext2D&&a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype.transferControlToOffscreen&&a.URL&&a.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",l=(function(){if(!a.OffscreenCanvas)return!1;try{var c=new OffscreenCanvas(1,1),s=c.getContext("2d");s.fillRect(0,0,1,1);var x=c.transferToImageBitmap();s.createPattern(x,"no-repeat")}catch{return!1}return!0})();function u(){}function m(c){var s=t.exports.Promise,x=s!==void 0?s:a.Promise;return typeof x=="function"?new x(c):(c(u,u),null)}var p=(function(c,s){return{transform:function(x){if(c)return x;if(s.has(x))return s.get(x);var A=new OffscreenCanvas(x.width,x.height),k=A.getContext("2d");return k.drawImage(x,0,0),s.set(x,A),A},clear:function(){s.clear()}}})(l,new Map),d=(function(){var c=Math.floor(16.666666666666668),s,x,A={},k=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(s=function(I){var N=Math.random();return A[N]=requestAnimationFrame(function w(E){k===E||k+c-1<E?(k=E,delete A[N],I()):A[N]=requestAnimationFrame(w)}),N},x=function(I){A[I]&&cancelAnimationFrame(A[I])}):(s=function(I){return setTimeout(I,c)},x=function(I){return clearTimeout(I)}),{frame:s,cancel:x}})(),y=(function(){var c,s,x={};function A(k){function I(N,w){k.postMessage({options:N||{},callback:w})}k.init=function(w){var E=w.transferControlToOffscreen();k.postMessage({canvas:E},[E])},k.fire=function(w,E,O){if(s)return I(w,null),s;var L=Math.random().toString(36).slice(2);return s=m(function(T){function D(U){U.data.callback===L&&(delete x[L],k.removeEventListener("message",D),s=null,p.clear(),O(),T())}k.addEventListener("message",D),I(w,L),x[L]=D.bind(null,{data:{callback:L}})}),s},k.reset=function(){k.postMessage({reset:!0});for(var w in x)x[w](),delete x[w]}}return function(){if(c)return c;if(!n&&i){var k=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{c=new Worker(URL.createObjectURL(new Blob([k])))}catch(I){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",I),null}A(c)}return c}})(),h={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function C(c,s){return s?s(c):c}function P(c){return c!=null}function S(c,s,x){return C(c&&P(c[s])?c[s]:h[s],x)}function M(c){return c<0?0:Math.floor(c)}function R(c,s){return Math.floor(Math.random()*(s-c))+c}function F(c){return parseInt(c,16)}function B(c){return c.map(W)}function W(c){var s=String(c).replace(/[^0-9a-f]/gi,"");return s.length<6&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]),{r:F(s.substring(0,2)),g:F(s.substring(2,4)),b:F(s.substring(4,6))}}function q(c){var s=S(c,"origin",Object);return s.x=S(s,"x",Number),s.y=S(s,"y",Number),s}function ce(c){c.width=document.documentElement.clientWidth,c.height=document.documentElement.clientHeight}function ue(c){var s=c.getBoundingClientRect();c.width=s.width,c.height=s.height}function je(c){var s=document.createElement("canvas");return s.style.position="fixed",s.style.top="0px",s.style.left="0px",s.style.pointerEvents="none",s.style.zIndex=c,s}function Ke(c,s,x,A,k,I,N,w,E){c.save(),c.translate(s,x),c.rotate(I),c.scale(A,k),c.arc(0,0,1,N,w,E),c.restore()}function Qe(c){var s=c.angle*(Math.PI/180),x=c.spread*(Math.PI/180);return{x:c.x,y:c.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:c.startVelocity*.5+Math.random()*c.startVelocity,angle2D:-s+(.5*x-Math.random()*x),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:c.color,shape:c.shape,tick:0,totalTicks:c.ticks,decay:c.decay,drift:c.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:c.gravity*3,ovalScalar:.6,scalar:c.scalar,flat:c.flat}}function ea(c,s){s.x+=Math.cos(s.angle2D)*s.velocity+s.drift,s.y+=Math.sin(s.angle2D)*s.velocity+s.gravity,s.velocity*=s.decay,s.flat?(s.wobble=0,s.wobbleX=s.x+10*s.scalar,s.wobbleY=s.y+10*s.scalar,s.tiltSin=0,s.tiltCos=0,s.random=1):(s.wobble+=s.wobbleSpeed,s.wobbleX=s.x+10*s.scalar*Math.cos(s.wobble),s.wobbleY=s.y+10*s.scalar*Math.sin(s.wobble),s.tiltAngle+=.1,s.tiltSin=Math.sin(s.tiltAngle),s.tiltCos=Math.cos(s.tiltAngle),s.random=Math.random()+2);var x=s.tick++/s.totalTicks,A=s.x+s.random*s.tiltCos,k=s.y+s.random*s.tiltSin,I=s.wobbleX+s.random*s.tiltCos,N=s.wobbleY+s.random*s.tiltSin;if(c.fillStyle="rgba("+s.color.r+", "+s.color.g+", "+s.color.b+", "+(1-x)+")",c.beginPath(),o&&s.shape.type==="path"&&typeof s.shape.path=="string"&&Array.isArray(s.shape.matrix))c.fill(Wa(s.shape.path,s.shape.matrix,s.x,s.y,Math.abs(I-A)*.1,Math.abs(N-k)*.1,Math.PI/10*s.wobble));else if(s.shape.type==="bitmap"){var w=Math.PI/10*s.wobble,E=Math.abs(I-A)*.1,O=Math.abs(N-k)*.1,L=s.shape.bitmap.width*s.scalar,T=s.shape.bitmap.height*s.scalar,D=new DOMMatrix([Math.cos(w)*E,Math.sin(w)*E,-Math.sin(w)*O,Math.cos(w)*O,s.x,s.y]);D.multiplySelf(new DOMMatrix(s.shape.matrix));var U=c.createPattern(p.transform(s.shape.bitmap),"no-repeat");U.setTransform(D),c.globalAlpha=1-x,c.fillStyle=U,c.fillRect(s.x-L/2,s.y-T/2,L,T),c.globalAlpha=1}else if(s.shape==="circle")c.ellipse?c.ellipse(s.x,s.y,Math.abs(I-A)*s.ovalScalar,Math.abs(N-k)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI):Ke(c,s.x,s.y,Math.abs(I-A)*s.ovalScalar,Math.abs(N-k)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI);else if(s.shape==="star")for(var z=Math.PI/2*3,X=4*s.scalar,J=8*s.scalar,Z=s.x,ne=s.y,de=5,ae=Math.PI/de;de--;)Z=s.x+Math.cos(z)*J,ne=s.y+Math.sin(z)*J,c.lineTo(Z,ne),z+=ae,Z=s.x+Math.cos(z)*X,ne=s.y+Math.sin(z)*X,c.lineTo(Z,ne),z+=ae;else c.moveTo(Math.floor(s.x),Math.floor(s.y)),c.lineTo(Math.floor(s.wobbleX),Math.floor(k)),c.lineTo(Math.floor(I),Math.floor(N)),c.lineTo(Math.floor(A),Math.floor(s.wobbleY));return c.closePath(),c.fill(),s.tick<s.totalTicks}function aa(c,s,x,A,k){var I=s.slice(),N=c.getContext("2d"),w,E,O=m(function(L){function T(){w=E=null,N.clearRect(0,0,A.width,A.height),p.clear(),k(),L()}function D(){n&&!(A.width===r.width&&A.height===r.height)&&(A.width=c.width=r.width,A.height=c.height=r.height),!A.width&&!A.height&&(x(c),A.width=c.width,A.height=c.height),N.clearRect(0,0,A.width,A.height),I=I.filter(function(U){return ea(N,U)}),I.length?w=d.frame(D):T()}w=d.frame(D),E=T});return{addFettis:function(L){return I=I.concat(L),O},canvas:c,promise:O,reset:function(){w&&d.cancel(w),E&&E()}}}function Oe(c,s){var x=!c,A=!!S(s||{},"resize"),k=!1,I=S(s,"disableForReducedMotion",Boolean),N=i&&!!S(s||{},"useWorker"),w=N?y():null,E=x?ce:ue,O=c&&w?!!c.__confetti_initialized:!1,L=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,T;function D(z,X,J){for(var Z=S(z,"particleCount",M),ne=S(z,"angle",Number),de=S(z,"spread",Number),ae=S(z,"startVelocity",Number),Gn=S(z,"decay",Number),qn=S(z,"gravity",Number),Jn=S(z,"drift",Number),Ya=S(z,"colors",B),Zn=S(z,"ticks",Number),Ba=S(z,"shapes"),Kn=S(z,"scalar"),Qn=!!S(z,"flat"),Ua=q(z),Va=Z,ta=[],er=c.width*Ua.x,ar=c.height*Ua.y;Va--;)ta.push(Qe({x:er,y:ar,angle:ne,spread:de,startVelocity:ae,color:Ya[Va%Ya.length],shape:Ba[R(0,Ba.length)],ticks:Zn,decay:Gn,gravity:qn,drift:Jn,scalar:Kn,flat:Qn}));return T?T.addFettis(ta):(T=aa(c,ta,E,X,J),T.promise)}function U(z){var X=I||S(z,"disableForReducedMotion",Boolean),J=S(z,"zIndex",Number);if(X&&L)return m(function(ae){ae()});x&&T?c=T.canvas:x&&!c&&(c=je(J),document.body.appendChild(c)),A&&!O&&E(c);var Z={width:c.width,height:c.height};w&&!O&&w.init(c),O=!0,w&&(c.__confetti_initialized=!0);function ne(){if(w){var ae={getBoundingClientRect:function(){if(!x)return c.getBoundingClientRect()}};E(ae),w.postMessage({resize:{width:ae.width,height:ae.height}});return}Z.width=Z.height=null}function de(){T=null,A&&(k=!1,a.removeEventListener("resize",ne)),x&&c&&(document.body.contains(c)&&document.body.removeChild(c),c=null,O=!1)}return A&&!k&&(k=!0,a.addEventListener("resize",ne,!1)),w?w.fire(z,Z,de):D(z,Z,de)}return U.reset=function(){w&&w.reset(),T&&T.reset()},U}var he;function j(){return he||(he=Oe(null,{useWorker:!0,resize:!0})),he}function Wa(c,s,x,A,k,I,N){var w=new Path2D(c),E=new Path2D;E.addPath(w,new DOMMatrix(s));var O=new Path2D;return O.addPath(E,new DOMMatrix([Math.cos(N)*k,Math.sin(N)*k,-Math.sin(N)*I,Math.cos(N)*I,x,A])),O}function Hn(c){if(!o)throw new Error("path confetti are not supported in this browser");var s,x;typeof c=="string"?s=c:(s=c.path,x=c.matrix);var A=new Path2D(s),k=document.createElement("canvas"),I=k.getContext("2d");if(!x){for(var N=1e3,w=N,E=N,O=0,L=0,T,D,U=0;U<N;U+=2)for(var z=0;z<N;z+=2)I.isPointInPath(A,U,z,"nonzero")&&(w=Math.min(w,U),E=Math.min(E,z),O=Math.max(O,U),L=Math.max(L,z));T=O-w,D=L-E;var X=10,J=Math.min(X/T,X/D);x=[J,0,0,J,-Math.round(T/2+w)*J,-Math.round(D/2+E)*J]}return{type:"path",path:s,matrix:x}}function Xn(c){var s,x=1,A="#000000",k='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof c=="string"?s=c:(s=c.text,x="scalar"in c?c.scalar:x,k="fontFamily"in c?c.fontFamily:k,A="color"in c?c.color:A);var I=10*x,N=""+I+"px "+k,w=new OffscreenCanvas(I,I),E=w.getContext("2d");E.font=N;var O=E.measureText(s),L=Math.ceil(O.actualBoundingBoxRight+O.actualBoundingBoxLeft),T=Math.ceil(O.actualBoundingBoxAscent+O.actualBoundingBoxDescent),D=2,U=O.actualBoundingBoxLeft+D,z=O.actualBoundingBoxAscent+D;L+=D+D,T+=D+D,w=new OffscreenCanvas(L,T),E=w.getContext("2d"),E.font=N,E.fillStyle=A,E.fillText(s,U,z);var X=1/x;return{type:"bitmap",bitmap:w.transferToImageBitmap(),matrix:[X,0,0,X,-L*X/2,-T*X/2]}}t.exports=function(){return j().apply(this,arguments)},t.exports.reset=function(){j().reset()},t.exports.create=Oe,t.exports.shapeFromPath=Hn,t.exports.shapeFromText=Xn})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),$a,!1);const Rl=$a.exports;$a.exports.create;function Vl(){const{animations:e}=ir(),a=e.find(n=>n.active),t=a?a.animation:void 0;return f.jsxs($.section,{className:"w-full h-auto text-white bg-bgPage",initial:"hidden",animate:"visible",exit:"exit",variants:t,transition:{duration:.4},children:[f.jsx(Ll,{}),f.jsx(Dl,{}),f.jsxs("div",{className:"bg-bgPage relative z-30",children:[f.jsx(wr,{}),f.jsx($l,{}),f.jsx(Wl,{}),f.jsx(Yl,{})]})]},"about")}function Ct({title:e}){return f.jsx("span",{className:`p-2 px-3 sm:p-2.5 sm:px-4 md:p-3 md:px-5 bg-bPage z-10 block w-max rounded-lg\r
                            relative font-semibold text-xs sm:text-sm md:text-base\r
\r
                            after:-bottom-1.5 sm:after:-bottom-2 after:-left-1.5 sm:after:-left-2 after:absolute after:w-full after:h-full after:bg-blue-400/10 after:rounded-lg after:-z-10\r
                            bounceItem `,children:e})}function Ll(){const e=V.useRef(null),a=V.useRef(null),t=V.useRef(null),n=V.useRef(null),r={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.2,staggerChildren:.15}}},i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:15}}},o=()=>{e.current&&(e.current.style.transform=`translateY(${window.scrollY*.5}px) rotate(${window.scrollY*.2}deg)`,e.current.style.scale=`${Math.max(window.scrollY*.008,1)}`),a.current&&t.current&&(a.current.style.transform=`translateY(-${window.scrollY*.8}px)`,t.current.style.transform=`translateY(-${window.scrollY*.8}px)`),n.current&&(n.current.style.transform=`scale(${Math.max(1+window.scrollY*5e-4,1)}) translateY(-${window.scrollY*.2}px)`)};return V.useEffect(()=>(window.addEventListener("scroll",()=>{o()}),()=>window.removeEventListener("scroll",()=>{o()})),[]),f.jsx("div",{className:"w-full h-auto min-h-[80vh] relative",children:f.jsxs("header",{className:"w-full h-auto min-h-screen relative z-20 bg-transparent overflow-hidden",children:[f.jsx("img",{src:cr,className:"absolute top-0 left-0 w-full -z-20 h-full object-cover",ref:n}),f.jsx("img",{src:ur,className:"absolute h-full object-cover w-full bottom-0 left-0 block z-80",ref:a}),f.jsx("span",{className:"w-full bottom-[-80%] absolute block h-screen bg-[#0B1530] z-80",ref:t}),f.jsx($.img,{src:dr,className:"absolute top-[-10%] left-[-10%] w-[35%] -z-20 aspect-square object-cover max-md:w-[50%]",ref:e,initial:{scale:0,translateY:-100,filter:"blur(10px)"},animate:{scale:1,translateY:0,filter:"blur(0px)"}}),f.jsxs($.div,{className:"w-full h-screen flex flex-col items-center justify-center text-center -mt-15",variants:r,initial:"hidden",animate:"visible",children:[f.jsx("div",{children:f.jsxs("div",{className:"flex flex-row-reverse items-center gap-3 sm:gap-5 md:gap-6 flex-wrap justify-center w-max",children:[f.jsxs("span",{className:"text-center order-2 md:order-1",children:[f.jsxs($.h2,{className:"flex items-center flex-wrap max-md:justify-end justify-center gap-2 sm:gap-3 text-3xl md:text-5xl font-bold bounceItem",variants:i,children:[f.jsx("i",{className:"fa-solid fa-code text-orange-700 text-2xl sm:text-3xl md:text-4xl"}),"Soy Andelson"]}),f.jsx($.h3,{className:"text-4xl md:text-6xl text-green-600 font-bold mt-1 bounceItem max-md:text-right",variants:i,children:"Dev. Software"})]}),f.jsx($.img,{src:lr,alt:"imagen de perfil",className:"w-35 max-md:w-25 aspect-square object-cover rounded-full shadow-2xl order-1 md:order-2 bounceItem",variants:i})]})}),f.jsxs($.div,{className:"flex items-center md:justify-end justify-center gap-2 sm:gap-3 md:gap-3.5 flex-wrap mt-4 sm:mt-5 md:mt-9",variants:i,children:[f.jsx(Ct,{title:"+ 3 años de exp"}),f.jsx(Ct,{title:"+ 15 proyectos realizados"})]})]})]})})}function Dl(){return f.jsx("section",{className:`w-full min-h-[70vh] text-center relative\r
        bg-linear-to-t from-bgPage to-[#0B1530] flex items-start p-4 justify-center\r
        z-30`,children:f.jsxs($.div,{className:"max-w-3xl mx-auto px-6 relative z-20",initial:{y:80,opacity:0,scale:1},whileInView:{y:0,opacity:1,scale:1},viewport:{amount:.5},transition:{duration:.5},children:[f.jsx($.h2,{className:"text-6xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter bounceItem",children:"¿Quién soy?"}),f.jsxs("p",{className:"mt-6 text-center text-xl md:text-2xl text-white leading-relaxed font-medium text-shadow-2xs/80 bounceItem",children:[f.jsx("span",{className:"text-emerald-300 font-bold",children:"Desarrollador Frontend"})," con experiencia en construir interfaces escalables, rentables y con posibilidad de integrar el ",f.jsx("span",{className:"text-emerald-300 font-bold",children:"Backend"})," para entregar soluciones full-stack completas. Aporto una mirada analítica orientada a la ",f.jsx("span",{className:"text-emerald-100 font-semibold",children:"confianza del usuario"})," en una aplicación y indiscutiblemente siempre trabajando en equipo."]})]})})}function $l(){return f.jsxs(f.Fragment,{children:[f.jsx("section",{className:"w-full h-90 bg-bPage flex items-center justify-center text-center p-4 relative z-10",children:f.jsx("h2",{className:"text-8xl sm:text-8xl md:text-9xl lg:text-9xl font-bold bounceItem",style:{color:"#0f2525",textShadow:`
                            1px 1px 2px rgba(255, 255, 255, 0.30),
                            -1px -1px 1px rgba(0, 0, 0, 20)
                        `},children:"Mi historia"})}),f.jsx(Cl,{})]})}function Wl(){const{ref:e,inView:a}=_l({triggerOnce:!0});return a&&Rl({particleCount:800,spread:800,origin:{y:.6}}),f.jsxs("div",{className:"w-full p-4 max-w-7xl mx-auto",ref:e,children:[f.jsxs("section",{className:"w-full flex items-center gap-2 flex-wrap justify-center text-center mb-10 mt-20 z-2 relative min-h-125 sm:min-h-100",children:[f.jsx(zt,{scale:1.15,transitionSpeed:2500,reset:!1,children:f.jsx($.img,{src:fr,alt:"Trofeo",className:"w-87.5 object-fill bounceItem cursor-pointer!",drag:!0,dragConstraints:{left:0,right:0,top:0,bottom:0},dragElastic:.15,dragTransition:{bounceStiffness:600,bounceDamping:15},whileTap:{scale:.95,cursor:"grabbing"}})}),f.jsx("span",{className:`p-4 sm:p-7 bg-bPage rounded-2xl font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl block relative\r
                \r
                after:absolute after:-top-4 sm:after:-top-7 after:left-2 sm:after:left-4 after:content-['+_5'] after:text-3xl sm:after:text-5xl after:block after:z-10 after:text-white bounceItem\r
                `,children:f.jsx("h2",{children:"Logros"})})]}),f.jsx("section",{className:"w-full h-auto relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center",children:yr.map((t,n)=>f.jsx(mr,{logro:t,index:n},t.id))})]})}function Yl(){return f.jsxs("div",{className:"min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950/30 flex items-center justify-center mt-10 p-4 sm:p-6 lg:p-8 bounceItem",children:[f.jsx("style",{children:`
        .input-glow:focus-within {
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        
        .social-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-btn:hover {
          transform: translateY(-4px);
        }
      `}),f.jsxs("div",{className:"w-full max-w-2xl",children:[f.jsxs("div",{className:"text-center mb-8 sm:mb-12",children:[f.jsx("div",{className:"inline-block mb-4",children:f.jsx("div",{className:"text-6xl sm:text-7xl lg:text-8xl",children:"👋"})}),f.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[f.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white",style:{fontFamily:"'Syne', sans-serif"},children:"¿Hablamos?"}),f.jsx("i",{className:"fas fa-sparkles text-emerald-400 text-xl sm:text-2xl"})]}),f.jsx("p",{className:"text-slate-400 text-sm sm:text-base max-w-md mx-auto",children:"Estoy buscando nuevas oportunidades profesionales. Si crees que mi perfil encaja en tu equipo, me encantaría conversar."})]}),f.jsxs("div",{className:"relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-500/10 shadow-2xl overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"}),f.jsx("div",{className:"absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"}),f.jsxs("div",{className:"relative z-10",children:[f.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-white mb-2",children:"Ponte en contacto"}),f.jsx("p",{className:"text-slate-400 text-xs sm:text-sm",children:"Abierto a nuevas vacantes y desafíos técnicos"})]}),f.jsx("div",{className:"w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg",children:f.jsx("i",{className:"fas fa-envelope text-slate-900 text-xl sm:text-2xl"})})]}),f.jsxs("form",{className:"space-y-6",action:"https://formspree.io/f/xyyrwzae",method:"POST",children:[f.jsxs("div",{className:"group",children:[f.jsx("label",{htmlFor:"email",className:"block text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-emerald-400 transition-colors mb-2 ml-1",children:"Tu Correo Institucional / Personal"}),f.jsx("div",{className:"input-glow rounded-xl transition-all duration-300",children:f.jsx("input",{type:"email",id:"email",name:"email",placeholder:"nombre@empresa.com",className:"w-full px-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:border-emerald-500/50 outline-none transition-all text-white placeholder:text-slate-600 font-medium"})})]}),f.jsxs("div",{className:"group",children:[f.jsx("label",{htmlFor:"message",className:"block text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-emerald-400 transition-colors mb-2 ml-1",style:{fontFamily:"'Space Grotesk', sans-serif"},children:"Mensaje o Propuesta"}),f.jsx("div",{className:"input-glow rounded-xl transition-all duration-300",children:f.jsx("textarea",{id:"message",name:"message",placeholder:"Cuéntame sobre la vacante o el equipo...",rows:4,className:"w-full px-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:border-emerald-500/50 outline-none transition-all text-white placeholder:text-slate-600 resize-none font-medium",style:{fontFamily:"'Space Grotesk', sans-serif"}})})]}),f.jsxs("button",{type:"submit",className:"w-full py-4 sm:py-5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-900 font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all transform active:scale-[0.98] flex justify-center items-center gap-3 group",style:{fontFamily:"'Space Grotesk', sans-serif"},children:[f.jsx("span",{children:"Enviar Propuesta"}),f.jsx("i",{className:"fas fa-paper-plane text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"})]})]})]})]})]})]})}export{Vl as default};
