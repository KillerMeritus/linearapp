import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, users } from '@/data/users';

interface CurrentUserState {
   currentUser: User;
   setCurrentUser: (user: User) => void;
}

export const useCurrentUserStore = create<CurrentUserState>()(
   persist(
      (set) => ({
         // Default to first user (vivek)
         currentUser: users[0],
         setCurrentUser: (user: User) => set({ currentUser: user }),
      }),
      {
         name: 'current-user-storage',
      }
   )
);
