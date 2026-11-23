import type React from "react";

export type particle = {
    icon: string,
    isActive: boolean,
    container: (children: React.ReactNode) => React.ReactNode,
}

