import { create } from "zustand";


// Интрерфейс для объекта Link
interface Link {
    id: number;
    title: string;
    link: string;
    tags: any;
}


// Интерфейс для стора
interface LinkStore {
    links: Link[];
    addLink: (link: string, title: string, tags: string) => void;
    deleteLink: (id: number) => void;
    updateLink: (id: number) => void;
    filterLinks: (tag: string) => object;
}



export const useLinkStore = create<LinkStore>()((set) => ({
    links: [],
    addLink: (link: string, title: string, tags: string) => {
        const newLink: Link = {
            id: Number(Date.now()),
            title,
            link,
            tags,
        }

        set((state) => ({
            links: [...state.links, newLink],
        }))
    },
    deleteLink: (id: number) => {},
    updateLink: (id: number) => {},
    filterLinks: (tag: string) => {},
}))