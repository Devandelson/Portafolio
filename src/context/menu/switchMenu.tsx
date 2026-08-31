import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router';

// 1. Define el tipo de los datos del contexto
interface listMenu {
    name: string,
    path: string,
    icon: string
    state: boolean
}

export interface MenuContextType {
    listMenu: listMenu[];
    setTMenu: (name: string) => void;
}

// 2. Crea el contexto con valor inicial undefined
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// 3. Define las props del Provider
interface MenuProviderProps {
    children: ReactNode;
}

// 4. Crea el Provider
export function MenuProvider({ children }: MenuProviderProps) {
    const navigate = useNavigate();

    const [listMenu, setListMenu] = useState<listMenu[]>([
        { name: "Home", path: "/", icon: "fa-solid fa-house", state: true },
        { name: "Sobre mí", path: "/sobreMi", icon: "fa-solid fa-graduation-cap", state: false },
        { name: "Proyectos", path: "/proyectos", icon: "fa-solid fa-pager", state: false },
        { name: "Archivos", path: "/archivo", icon: "fa-solid fa-box-archive", state: false }
    ]);

    const setTMenu = (name: string) => {
        setListMenu((prev) => {
            const copyListMenu = [...prev];
            return copyListMenu.map(menu => {
                if (menu.name === name) {
                    return { ...menu, state: true };
                } else {
                    return { ...menu, state: false };
                }
            });
        });
    }

    useEffect(() => {
        const activeMenu = listMenu.find(menu => menu.state);
        if (activeMenu) {
            navigate(activeMenu.path);
        }
    }, [listMenu]);

    const value: MenuContextType = {
        listMenu,
        setTMenu
    };

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
}

// 5. Crea un hook personalizado para usar el contexto
export function useMenu() {
    const context = useContext(MenuContext);

    if (context === undefined) {
        throw new Error('useMenu debe ser usado dentro de MenuProvider');
    }

    return context;
}