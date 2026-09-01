import vsCode from '../../assets/vscode.png'
import Tilt from 'react-parallax-tilt';

export default function Skills() {
    // -- info
    // ---- FrontEnd
    const skillsFront = [
        { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "group-hover:text-blue-500", border: "hover:border-blue-500/40", shadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]" },
        { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "group-hover:text-purple-500", border: "hover:border-purple-500/40", shadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]" },
        { name: "HTML5", icon: "fa-brands fa-html5", color: "group-hover:text-orange-500", border: "hover:border-orange-500/40", shadow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]" },
        { name: "JavaScript", icon: "fa-brands fa-js", color: "group-hover:text-yellow-400", border: "hover:border-yellow-400/40", shadow: "hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]" },
        { name: "React", icon: "fa-brands fa-react", color: "group-hover:text-cyan-400", border: "hover:border-cyan-400/40", shadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]" },
        { name: "Tailwind", icon: "fa-solid fa-wind", color: "group-hover:text-sky-400", border: "hover:border-sky-400/40", shadow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]" },
    ];

    // ---- BackEnd
    const skillsBack = [
        { name: "SQL Server", icon: "fa-solid fa-database", color: "group-hover:text-yellow-400", border: "hover:border-yellow-400/40", shadow: "hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]" },
        { name: "MySQL", icon: "fa-solid fa-database", color: "group-hover:text-cyan-400", border: "hover:border-cyan-400/40", shadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]" },
        { name: "XAMPP", icon: "fa-solid fa-server", color: "group-hover:text-orange-400", border: "hover:border-orange-400/40", shadow: "hover:shadow-[0_0_20px_rgba(251,146,60,0.25)]" },
        { name: "PHP", icon: "fa-brands fa-php", color: "group-hover:text-indigo-400", border: "hover:border-indigo-400/40", shadow: "hover:shadow-[0_0_20px_rgba(129,140,248,0.25)]" },
        { name: "AJAX (JS)", icon: "fa-solid fa-repeat", color: "group-hover:text-blue-300", border: "hover:border-blue-300/40", shadow: "hover:shadow-[0_0_20px_rgba(147,197,253,0.25)]" },
        { name: "Node JS", icon: "fa-brands fa-node-js", color: "group-hover:text-blue-300", border: "hover:border-blue-300/40", shadow: "hover:shadow-[0_0_20px_rgba(147,197,253,0.25)]" },
    ];

    // ---- Herramientas
    const skillsTools = [
        { name: "Figma", icon: "fa-brands fa-figma", color: "group-hover:text-pink-400", border: "hover:border-pink-400/40", shadow: "hover:shadow-[0_0_20px_rgba(244,114,182,0.25)]" },
        { name: "Git", icon: "fa-brands fa-git-alt", color: "group-hover:text-orange-500", border: "hover:border-orange-500/40", shadow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]" },
        { name: "Visual Studio Code", icon: "fa-regular fa-window-restore", color: "group-hover:text-white", border: "hover:border-white/40", shadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]", img: vsCode },
    ];

    return (
        <section className="relative block z-40 mb-20 p-10
        " id="skills">
            <div className="container mx-auto px-6">
                {/* HEADER */}
                <div className="flex items-end justify-between mb-7 border-b border-gray-800 pb-4">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-1 mt-15 block bounceItem">
                            <span className="text-primary mr-2">///</span> Habilidades
                        </h2>
                        <p className="text-xs font-mono text-gray-500 bounceItem">
                            Version 3.1
                        </p>
                    </div>
                </div>

                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12">
                    {/* FRONTEND */}
                    <ContainerCategorySkills Skills={skillsFront} title="Front - End" />

                    {/* BACKEND */}
                    <ContainerCategorySkills Skills={skillsBack} title="Back - End" />

                    {/* HERRAMIENTAS */}
                    <ContainerCategorySkills Skills={skillsTools} title="Herramientas" />
                </div>
            </div>
        </section>
    )
}

function ContainerCategorySkills({ Skills, title }: {
    Skills: { name: string, icon: string, color: string, border: string, shadow: string, img?: string }[]
    title: string
}) {
    return (
        <div>
            <h3 className="text-primary text-xl font-bold mb-6">
                {title}
            </h3>

            <div className="flex flex-wrap gap-4">
                {Skills.map((skill, i) => (
                    <Tilt key={i} reset={false}
                        perspective={500}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        scale={1.02}
                    >
                        <SkillCard
                            icon={skill.icon}
                            title={skill.name}
                            color={skill.color}
                            border={skill.border}
                            shadow={skill.shadow}
                            img={skill.img ?? ''}
                        />
                    </Tilt>
                ))}
            </div>
        </div>
    )
}

function SkillCard({ icon, title, color, border, shadow, img }: { icon: string, title: string, color: string, border: string, shadow: string, img?: string }) {
    return (
        <article className={`group w-max relative p-5 py-6 grow flex flex-wrap justify-center text-center items-center gap-3 rounded-lg border border-white/5 bg-linear-to-br from-[#07121a] to-[#041018] transition-all duration-300 hover:-translate-y-1 bounceItem cursor-pointer! ${border} ${shadow}`}>

            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-500 group-hover:w-full"></span>

            {img ? (
                <img src={img} alt={title} className="w-8 aspect-square object-cover" />
            ) : (
                <i className={`${icon} text-3xl text-gray-500 transition-all duration-300 ${color}`}></i>
            )}

            <h4 className="text-xl font-bold transition-colors duration-300 group-hover:text-white break-all text-balance">{title}</h4>
        </article>
    )
}
