
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

// Teacher Dashboard Pages
import TeacherDashboard from "./pages/dashboard/teacher/TeacherDashboard";
import CreateQuiz from "./pages/dashboard/teacher/CreateQuiz";

// Misc
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>EduGenius - AI-Powered Learning Platform</title>
        <meta name="description" content="AI-powered educational platform for personalized learning" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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

          {/* Student Dashboard Routes */}
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/student/ai-tutor" element={<AITutor />} />

          {/* Teacher Dashboard Routes */}
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/teacher/create-quiz" element={<CreateQuiz />} />
          
          {/* 404 Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
