import DashboardLayout from "@/layouts/DashboardLayout";
import { StudentDashboardOverview } from "@/components/dashboard/student/StudentDashboardOverview";
import { Helmet } from "react-helmet";
import { useAuth } from "@/contexts/AuthContext";

const StudentDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>Student Dashboard | EduGenius</title>
      </Helmet>
      <DashboardLayout userType="student">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user?.full_name || 'Student'}!</h1>
            <p className="text-muted-foreground">
              Here's an overview of your learning progress and recommended activities.
            </p>
          </div>
          <StudentDashboardOverview />
        </div>
      </DashboardLayout>
    </>
  );
};

export default StudentDashboard;