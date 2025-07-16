import DashboardLayout from "@/layouts/DashboardLayout";
import { TeacherDashboardOverview } from "@/components/dashboard/teacher/TeacherDashboardOverview";
import { Helmet } from "react-helmet";
import { useAuth } from "@/contexts/AuthContext";

const TeacherDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>Teacher Dashboard | EduGenius</title>
      </Helmet>
      <DashboardLayout userType="teacher">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user?.full_name || 'Teacher'}</h1>
            <p className="text-muted-foreground">
              Here's an overview of your classes, student progress, and upcoming tasks.
            </p>
          </div>
          <TeacherDashboardOverview />
        </div>
      </DashboardLayout>
    </>
  );
};

export default TeacherDashboard;