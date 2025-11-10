import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SearchState {
   searchQuery: string;
   recentSearches: string[];
   isSearchOpen: boolean;

   setSearchQuery: (query: string) => void;
   setIsSearchOpen: (isOpen: boolean) => void;
   addRecentSearch: (query: string) => void;
   clearRecentSearches: () => void;
   resetSearch: () => void;
}

export const useSearchStore = create<SearchState>()(
   persist(
      (set) => ({
         searchQuery: '',
         recentSearches: [],
         isSearchOpen: false,

         setSearchQuery: (query: string) => set({ searchQuery: query }),
         setIsSearchOpen: (isOpen: boolean) => set({ isSearchOpen: isOpen }),
         addRecentSearch: (query: string) =>
            set((state) => {
               if (!query.trim() || state.recentSearches.includes(query)) {
                  return state;
               }
               const newSearches = [query, ...state.recentSearches].slice(0, 5);
               return { recentSearches: newSearches };
            }),
         clearRecentSearches: () => set({ recentSearches: [] }),
         resetSearch: () => set({ searchQuery: '', isSearchOpen: false }),
      }),
      {
         name: 'search-storage',
         partialize: (state) => ({ recentSearches: state.recentSearches }),
      }
   )
);
