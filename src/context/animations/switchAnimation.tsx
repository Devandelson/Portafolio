import type { Variants } from "motion";
import { createContext, useContext } from "react";
import { useState } from "react";


interface AnimationType {
    name: string,
    active: boolean,
    animation: Variants,
    label: string,
    badge: string | null,
    icon: string
}

interface AnimationContextType {
    animations: AnimationType[],
    setAnimation: (name: string) => void
}

const SwitchAnimationContext = createContext<AnimationContextType | null>(null);

export function SwitchAnimationProvider({ children }: { children: React.ReactNode }) {
    const ani1: Variants = { // Smooth (default)
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }
    }

    const ani2: Variants = { // Fast
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.15, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1, ease: "easeIn" } }
    }

    const ani3: Variants = { // Relaxed
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
        exit: { opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.7, 0, 0.84, 0] } }
    }

    const ani4: Variants = { // Organic
        hidden: { opacity: 0, scale: 0.92, rotate: -2 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
        exit: { opacity: 0, scale: 0.92, rotate: 2, transition: { duration: 0.4, ease: "easeIn" } }
    }

    const ani5: Variants = { // Flip
        hidden: { opacity: 0, rotateX: 90, scale: 0.8 },
        visible: { opacity: 1, rotateX: 0, scale: 1, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
        exit: { opacity: 0, rotateX: -90, scale: 0.8, transition: { duration: 0.4, ease: "easeIn" } }
    }

    const ani6: Variants = { // Glitch
        hidden: { opacity: 0, x: -8, skewX: 10 },
        visible: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], bounce: 0.4 } },
        exit: { opacity: 0, x: 8, skewX: -10, transition: { duration: 0.3, ease: "easeIn" } }
    }

    const ani7: Variants = { // Zoom Burst
        hidden: { opacity: 0, scale: 1.3, filter: "blur(12px)" },
        visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
        exit: { opacity: 0, scale: 0.8, filter: "blur(8px)", transition: { duration: 0.4, ease: "easeIn" } }
    }

    const ani8: Variants = { // Swing
        hidden: { opacity: 0, rotate: -6, y: -30, transformOrigin: "top center" },
        visible: { opacity: 1, rotate: 0, y: 0, transformOrigin: "top center", transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] } },
        exit: { opacity: 0, rotate: 6, y: -20, transformOrigin: "top center", transition: { duration: 0.4, ease: "easeIn" } }
    }

    const ani9: Variants = { // Slide Horizontal
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
        exit: { opacity: 0, x: 60, transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45] } }
    }

    const ani10: Variants = { // None
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 1, transition: { duration: 0 } }
    }

    const [animations, setAnimations] = useState<AnimationType[]>([
        { name: "smooth", active: true, animation: ani1, label: "Smooth", badge: "Default", icon: "fa-solid fa-wand-magic-sparkles" },
        { name: "fast", active: false, animation: ani2, label: "Fast", badge: null, icon: "fa-solid fa-bolt" },
        { name: "relaxed", active: false, animation: ani3, label: "Relaxed", badge: null, icon: "fa-solid fa-hourglass" },
        { name: "organic", active: false, animation: ani4, label: "Organic", badge: null, icon: "fa-solid fa-leaf" },
        { name: "flip", active: false, animation: ani5, label: "Flip", badge: null, icon: "fa-solid fa-rotate" },
        { name: "glitch", active: false, animation: ani6, label: "Glitch", badge: null, icon: "fa-solid fa-ghost" },
        { name: "zoomburst", active: false, animation: ani7, label: "Zoom Burst", badge: null, icon: "fa-solid fa-expand" },
        { name: "swing", active: false, animation: ani8, label: "Swing", badge: null, icon: "fa-solid fa-guitar" },
        { name: "slide", active: false, animation: ani9, label: "Slide", badge: null, icon: "fa-solid fa-arrow-right" },
        { name: "none", active: false, animation: ani10, label: "None", badge: null, icon: "fa-solid fa-ban" },
    ])

    const setAnimation = (name: string) => {
        setAnimations((prev) => {
            const copyAnimations = [...prev];
            return copyAnimations.map(animation => {
                if (animation.name === name) {
                    return { ...animation, active: true };
                } else {
                    return { ...animation, active: false };
                }
            });
        });
    };

    return (
        <SwitchAnimationContext.Provider value={{ animations, setAnimation }}>
            {children}
        </SwitchAnimationContext.Provider>
    );
}

export function useSwitchAnimation() {
    const context = useContext(SwitchAnimationContext);
    if (context === null) {
        throw new Error("useSwitchAnimation must be used within a SwitchAnimationProvider");
    }
    return context;
}