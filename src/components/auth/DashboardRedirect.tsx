import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const DashboardRedirect = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect based on user role
  if (user.role === "teacher") {
    return <Navigate to="/dashboard/teacher" replace />;
  } else if (user.role === "student") {
    return <Navigate to="/dashboard/student" replace />;
  } else {
    // Default fallback for unknown roles
    return <Navigate to="/" replace />;
  }
};

export default DashboardRedirect;