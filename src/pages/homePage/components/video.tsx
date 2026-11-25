import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import homeAnimation from '../../../assets/homeVideo.mp4';
import { motion } from "motion/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Ref } from 'react';

export default function HomeVideo({setVideo, videoRef}: {setVideo: React.Dispatch<React.SetStateAction<boolean>>, videoRef:  Ref<HTMLVideoElement | null>}) {
    return (
        <motion.div className="fixed inset-0 w-full h-full z-200 pointer-events-none bg-black"
            exit={{
                opacity: 0,
                filter: 'blur(10px)'
            }}
            transition={{
                duration: 0.500
            }}
        >
            <video
                src={homeAnimation}
                className="w-full h-full object-cover"
                playsInline
                disablePictureInPicture
                muted
                onEnded={() => {
                    setVideo(false);
                }}
                onLoadedMetadata={(e) => {
                    e.currentTarget.playbackRate = 1.32;
                }}
                onError={(e) => console.error("Error de video:", e.currentTarget.error)}
                ref={videoRef}
            />
            <button className='p-2 px-3 text-white text-lg rounded-lg bg-black hover:scale-105 active:scale-95 transition-all cursor-pointer fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-250 pointer-events-auto' onClick={() => { setVideo(false) }}><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> Saltar la animación</button>
        </motion.div>
    )
}