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
    filteredLinks: Link[];
    searchLinks: Link[];
    addLink: (link: string, title: string, tags: string) => void;
    deleteLink: (id: number) => void;
    updateLink: (id: number, updateData: Link) => void;
    filterLinks: (tag: string) => void;
    searchLink: (searchTerm: string) => void;

}



export const useLinkStore = create<LinkStore>()(
    persist(
        (set) => ({
            links: [],
            filteredLinks: [],
            searchLinks:[],
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
                    links: state.links.filter(link => link.id !== id),
                    searchLinks: state.searchLinks.filter(link => link.id !== id),
                }))
            },
            updateLink: (id: number, updateData: Link) => {
                set((state) => ({
                    links: state.links.map(link =>
                        link.id === id ? updateData : link
                    ),
                    searchLinks: state.searchLinks.map(link =>
                        link.id === id ? updateData : link
                    )
                }))
            },
            filterLinks: (foundTag: string) => {
                set((state) => ({
                    filteredLinks: state.links.filter(link =>
                        link.tags.split(",").map(tag => tag.trim()).includes(foundTag.trim())
                    )
                }))
            },

            searchLink: (searchTerm: string) => {
                if (!searchTerm || searchTerm.length < 2) set(() => ({searchLinks: []}));

                const lower = searchTerm.toLocaleLowerCase().trim()
                set((state) => ({
                    searchLinks: state.links.filter(searchLinkEl => 
                        searchLinkEl.title.toLowerCase().includes(lower)
                    )
                }))
            }
        }),
        {
            name: "link-store",
            partialize: (state: LinkStore) => ({ links: state.links }),
        }
    ))