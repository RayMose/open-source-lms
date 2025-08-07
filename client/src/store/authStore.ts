import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role?: 'user' | 'admin';
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isAdmin: () => boolean;
};

// This is a mock implementation for demo purposes
// In a real app, you would connect to a backend service
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock validation for admin
          if (email === 'admin@example.com' && password === 'admin123') {
            set({
              user: {
                id: 'admin1',
                email,
                name: 'Admin User',
                role: 'admin',
              },
              isAuthenticated: true,
              isLoading: false,
            });
            return;
          }
          
          // Mock validation for regular user
          if (email === 'user@example.com' && password === 'password') {
            set({
              user: {
                id: '1',
                email,
                name: 'Demo User',
                role: 'user',
              },
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            set({
              error: 'Invalid credentials',
              isLoading: false,
            });
          }
        } catch (error) {
          set({
            error: 'An error occurred during login',
            isLoading: false,
          });
        }
      },
      
      register: async (email, password, name) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock registration (always succeeds in this demo)
          set({
            user: {
              id: '1',
              email,
              name,
            },
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: 'An error occurred during registration',
            isLoading: false,
          });
        }
      },
      
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        });
      },

      isAdmin: () => {
        const user = get().user;
        return user?.role === 'admin';
      },
    }),
    {
      name: 'auth-storage',
      // Only persist user and isAuthenticated
      partialize: (state) => ({ 
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
