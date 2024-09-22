// store/store.js
import create from 'zustand';

const useStore = create((set) => ({
    searchQuery: '',
    setSearchQuery: (query) => set({ searchQuery: query }),

    recentSearches: [],
    addRecentSearch: (search) => set((state) => ({
        recentSearches: [search, ...state.recentSearches.slice(0, 4)],
    })),

    favorites: [],
    toggleFavorite: (asset) => set((state) => {
        const isFavorited = state.favorites.includes(asset);
        return {
            favorites: isFavorited
                ? state.favorites.filter((item) => item !== asset)
                : [...state.favorites, asset],
        };
    }),
}));

export default useStore;
