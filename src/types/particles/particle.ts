import type React from "react";

export type particle = {
    icon: string,
    particle: React.ReactNode,
    isActive: boolean,
    sonido?: string,
    event?: () => void
}

