import { useEffect, useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faPause } from "@fortawesome/free-solid-svg-icons";

import homeSound from '../../assets/Sounds/musica_ambiente1.mp3';

function Sonido() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);
    useEffect(() => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [playing]);

    return (
        <section
            className="absolute z-10 bottom-4.75 right-3"
        >
            <audio ref={audioRef} loop>
                <source src={homeSound} type="audio/mp3" />
            </audio>

            {/* Play/Pause button */}
            <button
                onClick={() => setPlaying(prev => !prev)}
                aria-label={playing ? "Pause music" : "Play music"}
                className="py-2 px-2.5 rounded-full bg-bgPage/50
                 text-white/90 border cursor-pointer border-gray-50/20 hover:shadow-lg hover:bg-green-400 hover:shadow-green-500/50 transition-all duration-100 hover:scale-105 active:scale-95"
            >
                <FontAwesomeIcon icon={playing ? faPause : faMusic} className="text-white"></FontAwesomeIcon>
            </button>

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