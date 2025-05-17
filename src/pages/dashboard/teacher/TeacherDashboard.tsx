
import DashboardLayout from "@/src/layouts/DashboardLayout";
import { TeacherDashboardOverview } from "@/components/dashboard/teacher/TeacherDashboardOverview";
import { Helmet } from "react-helmet";

const TeacherDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Teacher Dashboard | EduGenius</title>
      </Helmet>
      <DashboardLayout userType="teacher">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Welcome, Professor Smith</h1>
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
