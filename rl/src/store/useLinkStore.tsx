import { create } from "zustand";
import { persist } from "zustand/middleware";


// Интрерфейс для объекта Link
export interface Link {
    id: number;
    title: string;
    link: string;
    tags: string;
}


// Интерфейс для стора
interface LinkStore {
    links: Link[];
    addLink: (link: string, title: string, tags: string) => void;
    deleteLink: (id: number) => void;
    updateLink: (id: number, updateData: Link) => void;
    filterLinks: (tag: string) => void;
}



export const useLinkStore = create<LinkStore>()(
    persist(
        (set) => ({
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
            deleteLink: (id: number) => {
                set((state) => ({
                    links: state.links.filter(link => link.id !== id)
                }))
            },
            updateLink: (id: number, updateData: Link) => {
                set((state) => ({
                    links: state.links.map(link =>
                        link.id === id ? updateData : link
                    )
                }))
            },
            filterLinks: (tag: string) => { 
                return tag
            },
        }),
        {
            name: "link-store",
            partialize: (state: LinkStore) => ({ links: state.links }), // Сохраняем только links
        }
    ))