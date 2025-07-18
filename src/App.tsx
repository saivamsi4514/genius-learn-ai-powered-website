
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardRedirect from "@/components/auth/DashboardRedirect";

// Landing Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CareerConsulting from "./pages/CareerConsulting";
import CareerGuide from "./pages/CareerGuide";
import Scholarships from "./pages/Scholarships";
import Payment from "./pages/Payment";

// Student Dashboard Pages
import StudentDashboard from "./pages/dashboard/student/StudentDashboard";
import AITutor from "./pages/dashboard/student/AITutor";
import Quizzes from "./pages/dashboard/student/Quizzes";
import Courses from "./pages/dashboard/student/Courses";
import ARVR from "./pages/dashboard/student/ARVR";

// Teacher Dashboard Pages
import TeacherDashboard from "./pages/dashboard/teacher/TeacherDashboard";
import CreateQuiz from "./pages/dashboard/teacher/CreateQuiz";

// Misc
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/career-consulting" element={<CareerConsulting />} />
              <Route path="/career-guide" element={<CareerGuide />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/payment" element={<Payment />} />

              {/* General Dashboard Route - Redirects based on user role */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <DashboardRedirect />
                  </ProtectedRoute>
                } 
              />

              {/* Student Dashboard Routes - Protected */}
              <Route 
                path="/dashboard/student" 
                element={
                  <ProtectedRoute requiredRole="student">
                    <StudentDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard/student/ai-tutor" 
                element={
                  <ProtectedRoute requiredRole="student">
                    <AITutor />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard/student/quizzes" 
                element={
                  <ProtectedRoute requiredRole="student">
                    <Quizzes />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard/student/courses" 
                element={
                  <ProtectedRoute requiredRole="student">
                    <Courses />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard/student/ar-vr" 
                element={
                  <ProtectedRoute requiredRole="student">
                    <ARVR />
                  </ProtectedRoute>
                } 
              />

              {/* Teacher Dashboard Routes - Protected */}
              <Route 
                path="/dashboard/teacher" 
                element={
                  <ProtectedRoute requiredRole="teacher">
                    <TeacherDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard/teacher/create-quiz" 
                element={
                  <ProtectedRoute requiredRole="teacher">
                    <CreateQuiz />
                  </ProtectedRoute>
                } 
              />
              
              {/* 404 Catch-all Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
