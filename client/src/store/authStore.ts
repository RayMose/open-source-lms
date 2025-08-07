import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role?: 'diplomat' | 'lecturer' | 'hr' | 'management' | 'admin';
  department?: string;
  level?: string;
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
  isLecturer: () => boolean;
  isHR: () => boolean;
  isManagement: () => boolean;
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
          
          // FSA Demo Users
          const demoUsers = [
            {
              email: 'admin@fsa.go.ke',
              password: 'admin123',
              user: {
                id: 'admin1',
                email: 'admin@fsa.go.ke',
                name: 'System Administrator',
                role: 'admin' as const,
                department: 'IT Administration'
              }
            },
            {
              email: 'diplomat@fsa.go.ke',
              password: 'diplomat123',
              user: {
                id: 'diplomat1',
                email: 'diplomat@fsa.go.ke',
                name: 'James Mwangi',
                role: 'diplomat' as const,
                department: 'Foreign Service',
                level: 'Third Secretary'
              }
            },
            {
              email: 'lecturer@fsa.go.ke',
              password: 'lecturer123',
              user: {
                id: 'lecturer1',
                email: 'lecturer@fsa.go.ke',
                name: 'Ambassador Dr. Maria Wanjiku',
                role: 'lecturer' as const,
                department: 'Environmental Diplomacy',
                level: 'Lead Instructor'
              }
            },
            {
              email: 'hr@fsa.go.ke',
              password: 'hr123',
              user: {
                id: 'hr1',
                email: 'hr@fsa.go.ke',
                name: 'Grace Kimani',
                role: 'hr' as const,
                department: 'Human Resources',
                level: 'HR Manager'
              }
            },
            {
              email: 'management@fsa.go.ke',
              password: 'management123',
              user: {
                id: 'mgmt1',
                email: 'management@fsa.go.ke',
                name: 'Ambassador Paul K. Ndung\'u',
                role: 'management' as const,
                department: 'Academy Leadership',
                level: 'Acting Director General'
              }
            }
          ];

          const authenticatedUser = demoUsers.find(u => u.email === email && u.password === password);
          
          if (authenticatedUser) {
            set({
              user: authenticatedUser.user,
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            set({
              error: 'Invalid FSA credentials. Please check your email and password.',
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

      isLecturer: () => {
        const user = get().user;
        return user?.role === 'lecturer';
      },

      isHR: () => {
        const user = get().user;
        return user?.role === 'hr';
      },

      isManagement: () => {
        const user = get().user;
        return user?.role === 'management';
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
