
import DashboardLayout from "@/src/layouts/DashboardLayout";
import { AITutorChat } from "@/components/dashboard/student/AITutorChat";
import { Helmet } from "react-helmet";

const AITutor = () => {
  return (
    <>
      <Helmet>
        <title>AI Tutor | EduGenius</title>
      </Helmet>
      <DashboardLayout userType="student">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">AI Tutor</h1>
            <p className="text-muted-foreground">
              Get personalized help with any subject from your AI learning assistant.
            </p>
          </div>
          <AITutorChat />
        </div>
      </DashboardLayout>
    </>
  );
};

export default AITutor;
