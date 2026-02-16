import type { Variants } from "motion";
import { createContext, useContext } from "react";
import { useState } from "react";

interface AnimationType {
    name: string,
    active: boolean,
    animation: Variants
}

interface AnimationContextType {
    animations: AnimationType[],
    setAnimation: (name: string) => void
}

const SwitchAnimationContext = createContext<AnimationContextType | null>(null);

export function SwitchAnimationProvider({ children }: { children: React.ReactNode }) {
    const ani1: Variants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        }
    };

    const [animations, setAnimations] = useState<AnimationType[]>([
        {  name: "ani1", active: true, animation: ani1 },
    ]);

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