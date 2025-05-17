
import DashboardLayout from "@/layouts/DashboardLayout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Clock, Award } from "lucide-react";
import { useState } from "react";

const Quizzes = () => {
  const [quizzes] = useState([
    {
      id: 1,
      title: "Mathematics Fundamentals",
      description: "Test your knowledge of basic mathematical concepts",
      questions: 15,
      timeLimit: "20 minutes",
      completed: false,
      dueDate: "May 25, 2025"
    },
    {
      id: 2,
      title: "Introduction to Physics",
      description: "Physics principles and fundamental concepts",
      questions: 20,
      timeLimit: "30 minutes",
      completed: false,
      dueDate: "May 28, 2025"
    },
    {
      id: 3,
      title: "Programming Basics",
      description: "Test your knowledge of programming concepts",
      questions: 25,
      timeLimit: "40 minutes", 
      completed: true,
      dueDate: "Completed"
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Quiz Center | EduGenius</title>
      </Helmet>
      <DashboardLayout userType="student">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Quiz Center</h1>
            <p className="text-muted-foreground">
              Take quizzes to test your knowledge and track your progress
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((quiz) => (
              <Card key={quiz.id} className={quiz.completed ? "border-green-200 bg-green-50/30" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-edu-purple" />
                    {quiz.title}
                  </CardTitle>
                  <CardDescription>{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Questions:</span>
                      <span className="font-medium">{quiz.questions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Clock className="mr-1 h-3 w-3" /> Time Limit:
                      </span>
                      <span className="font-medium">{quiz.timeLimit}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Due:</span>
                      <span className={quiz.completed ? "font-medium text-green-600" : "font-medium"}>
                        {quiz.dueDate}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  {quiz.completed ? (
                    <Button className="w-full gap-2" variant="outline">
                      <Award className="h-4 w-4" /> View Results
                    </Button>
                  ) : (
                    <Button className="w-full">Take Quiz</Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Quizzes;
