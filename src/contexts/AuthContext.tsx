
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

// Define user types
export type UserRole = "student" | "teacher" | "admin";

export interface User {
  id: string;
  full_name: string;
  email: string;
  role: UserRole;
}

// Define context types
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, redirectTo?: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Real database authentication using Supabase

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("edugenius_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string, redirectTo?: string) => {
    setLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('auth-login', {
        body: { email, password }
      });

      if (error) throw error;
      
      if (data.error) {
        throw new Error(data.error);
      }

      const userObj = {
        id: data.user.id,
        full_name: data.user.full_name,
        email: data.user.email,
        role: data.user.role.toLowerCase() as UserRole,
      };
      
      // Save user to state and localStorage
      setUser(userObj);
      localStorage.setItem("edugenius_user", JSON.stringify(userObj));
      
      toast.success("Successfully logged in!");
      
      // Redirect user to dashboard based on role
      navigate(redirectTo || `/dashboard/${userObj.role}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string, role: UserRole) => {
    setLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('auth-signup', {
        body: { 
          full_name: name,
          email, 
          password, 
          role: role === 'student' ? 'Student' : 'Teacher'
        }
      });

      if (error) throw error;
      
      if (data.error) {
        throw new Error(data.error);
      }

      const userObj = {
        id: data.user.id,
        full_name: data.user.full_name,
        email: data.user.email,
        role: data.user.role.toLowerCase() as UserRole,
      };
      
      // Save user to state and localStorage
      setUser(userObj);
      localStorage.setItem("edugenius_user", JSON.stringify(userObj));
      
      toast.success("Registration successful!");
      
      // Redirect user to dashboard based on role
      navigate(`/dashboard/${userObj.role}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("edugenius_user");
    toast.success("Successfully logged out");
    navigate("/");
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
