'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@/data/users';

interface AuthContextType {
   user: User | null;
   loading: boolean;
   signIn: (email: string, password: string) => Promise<void>;
   signUp: (email: string, password: string, name: string) => Promise<void>;
   signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users stored in localStorage (frontend only)
const STORAGE_KEY_USERS = 'linear_users';
const STORAGE_KEY_CURRENT_USER = 'linear_current_user';
const STORAGE_KEY_SESSION = 'linear_session';

// Initialize with demo user if no users exist
function initializeMockUsers() {
   if (typeof window === 'undefined') return;
   
   const existingUsers = localStorage.getItem(STORAGE_KEY_USERS);
   if (!existingUsers) {
      const demoUsers = [
         {
            email: 'demo@linearclone.dev',
            password: 'demo1234',
            name: 'Demo Admin',
            id: 'demo-admin',
            avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=demo',
            status: 'online' as const,
            role: 'Admin' as const,
            joinedDate: new Date().toISOString(),
            teamIds: [],
         },
      ];
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(demoUsers));
   }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
   const [user, setUser] = useState<User | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      initializeMockUsers();
      checkSession();
   }, []);

   const checkSession = () => {
      try {
         const sessionData = localStorage.getItem(STORAGE_KEY_SESSION);
         const userData = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
         
         if (sessionData && userData) {
            const session = JSON.parse(sessionData);
            // Check if session is still valid (7 days)
            if (session.expiresAt && session.expiresAt > Date.now()) {
               const user = JSON.parse(userData);
               setUser(user);
            } else {
               // Session expired, clear it
               localStorage.removeItem(STORAGE_KEY_SESSION);
               localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
            }
         }
      } catch (error) {
         console.error('Session check failed:', error);
         localStorage.removeItem(STORAGE_KEY_SESSION);
         localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
      } finally {
         setLoading(false);
      }
   };

   const signIn = async (email: string, password: string) => {
      // Trim whitespace from inputs
      const trimmedEmail = email.trim().toLowerCase();
      const trimmedPassword = password.trim();

      if (!trimmedEmail || !trimmedPassword) {
         throw new Error('Email and password are required');
      }

      // Get stored users
      const usersStr = localStorage.getItem(STORAGE_KEY_USERS);
      if (!usersStr) {
         throw new Error('No users found. Please sign up first.');
      }

      const users = JSON.parse(usersStr);
      const foundUser = users.find(
         (u: any) => u.email.toLowerCase() === trimmedEmail && u.password === trimmedPassword
      );

      if (!foundUser) {
         throw new Error('Invalid email or password');
      }

      // Create session (valid for 7 days)
      const session = {
         token: `mock_token_${Date.now()}`,
         expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
      };

      // Create user object (without password)
      const userData: User = {
         id: foundUser.id,
         name: foundUser.name,
         email: foundUser.email,
         avatarUrl: foundUser.avatarUrl,
         status: foundUser.status || 'online',
         role: foundUser.role || 'Member',
         joinedDate: foundUser.joinedDate || new Date().toISOString(),
         teamIds: foundUser.teamIds || [],
      };

      // Store session and user
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
      localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(userData));
      setUser(userData);
   };

   const signUp = async (email: string, password: string, name: string) => {
      const trimmedEmail = email.trim().toLowerCase();
      const trimmedPassword = password.trim();
      const trimmedName = name.trim();

      if (!trimmedEmail || !trimmedPassword || !trimmedName) {
         throw new Error('All fields are required');
      }

      if (trimmedPassword.length < 8) {
         throw new Error('Password must be at least 8 characters');
      }

      // Get existing users
      const usersStr = localStorage.getItem(STORAGE_KEY_USERS);
      const users = usersStr ? JSON.parse(usersStr) : [];

      // Check if user already exists
      if (users.some((u: any) => u.email.toLowerCase() === trimmedEmail)) {
         throw new Error('User with this email already exists');
      }

      // Create new user
      const newUser = {
         email: trimmedEmail,
         password: trimmedPassword,
         name: trimmedName,
         id: `user_${Date.now()}`,
         avatarUrl: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(trimmedName)}`,
         status: 'online' as const,
         role: 'Member' as const,
         joinedDate: new Date().toISOString(),
         teamIds: [],
      };

      // Add to users list
      users.push(newUser);
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));

      // Auto sign in
      const session = {
         token: `mock_token_${Date.now()}`,
         expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
      };

      const userData: User = {
         id: newUser.id,
         name: newUser.name,
         email: newUser.email,
         avatarUrl: newUser.avatarUrl,
         status: newUser.status,
         role: newUser.role,
         joinedDate: newUser.joinedDate,
         teamIds: newUser.teamIds,
      };

      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
      localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(userData));
      setUser(userData);
   };

   const signOut = () => {
      localStorage.removeItem(STORAGE_KEY_SESSION);
      localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
      setUser(null);
   };

   return (
      <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
         {children}
      </AuthContext.Provider>
   );
}

export const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context) throw new Error('useAuth must be used within AuthProvider');
   return context;
};
