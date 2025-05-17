
import DashboardLayout from "@/layouts/DashboardLayout";
import { QuizGenerator } from "@/components/dashboard/teacher/QuizGenerator";
import { Helmet } from "react-helmet";

const CreateQuiz = () => {
  return (
    <>
      <Helmet>
        <title>Create Quiz | EduGenius</title>
      </Helmet>
      <DashboardLayout userType="teacher">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Create Quiz</h1>
            <p className="text-muted-foreground">
              Generate AI-powered quizzes for your classes with customizable settings.
            </p>
          </div>
          <QuizGenerator />
        </div>
      </DashboardLayout>
    </>
  );
};

export default CreateQuiz;
