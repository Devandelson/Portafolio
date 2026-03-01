import { useEffect, useState, useRef } from "react"
import type { particle } from "../../types/particles/particle"

function Sonido({ particleSelect }: { particleSelect: particle | undefined }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Small delay for mount animation
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.pause();
        audio.load();
        audio.play().catch(err => console.warn("Autoplay bloqueado:", err));
        setPlaying(true);
    }, [particleSelect?.sonido]);

    useEffect(() => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [playing]);

    if (!particleSelect?.sonido) return null;

    return (
        <section
            className="max-md:bottom-[inherit] max-md:top-23 fixed bottom-5 right-5 z-40 transition-[transform,opacity] duration-400"
            style={{
                transform: visible ? "translateY(0)" : "translateY(20px)",
                opacity: visible ? 1 : 0,
                transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease",
            }}
        >
            <audio ref={audioRef} loop>
                <source src={particleSelect.sonido} type="audio/mp3" />
            </audio>

            {/* Pill card */}
            <div
            className="w-max p-2.5"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "28px",
                    background: "rgba(30, 32, 36, 0.92)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    borderRadius: "999px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.04) inset",
                    border: "1px solid rgba(255,255,255,0.06)",
                }}
            >
                {/* Text section */}
                <div className="flex
                max-md:hidden
                 ml-2
                " style={{ flexDirection: "column", gap: "2px" }}>
                    <span
                        style={{
                            color: "#fff",
                            fontFamily: "'Inter', 'SF Pro Display', sans-serif",
                            fontWeight: 600,
                            fontSize: "14px",
                            letterSpacing: "-0.01em",
                            lineHeight: 1.2,
                        }}
                    >
                        Música portafolio
                    </span>
                    <span
                        style={{
                            color: "#4ade80",
                            fontFamily: "'Inter', 'SF Pro Display', sans-serif",
                            fontWeight: 700,
                            fontSize: "10px",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                        }}
                    >
                        {playing ? "NOW PLAYING" : "PAUSED"}
                    </span>
                </div>

                {/* Play/Pause button */}
                <button
                    onClick={() => setPlaying(prev => !prev)}
                    style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: playing
                            ? "rgba(255,255,255,0.12)"
                            : "rgba(255,255,255,0.08)",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "15px",
                        transition: "background 0.2s ease, transform 0.15s ease, color 0.2s ease",
                        flexShrink: 0,
                        position: "relative",
                        overflow: "hidden",
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.18)";
                        (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = playing
                            ? "rgba(255,255,255,0.12)"
                            : "rgba(255,255,255,0.08)";
                        (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
                        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                    }}
                    aria-label={playing ? "Pause music" : "Play music"}
                >
                    {/* Pulse ring when playing */}
                    {playing && (
                        <span
                            style={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: "50%",
                                border: "2px solid rgba(74,222,128,0.35)",
                                animation: "pulse-ring 2s ease-out infinite",
                            }}
                        />
                    )}
                    <i className={playing ? "fa-solid fa-pause" : "fa-solid fa-music"} />
                </button>
            </div>

            <style>{`
                @keyframes pulse-ring {
                    0%   { transform: scale(1);    opacity: 0.8; }
                    100% { transform: scale(1.55); opacity: 0;   }
                }
            `}</style>
        </section>
    );
}

export default Sonido;