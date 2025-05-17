
import DashboardLayout from "@/layouts/DashboardLayout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      description: "Learn the fundamentals of machine learning algorithms",
      instructor: "Dr. Sarah Johnson",
      progress: 68,
      totalLessons: 12,
      completedLessons: 8,
      image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      description: "Master HTML, CSS, and JavaScript with practical projects",
      instructor: "Prof. Michael Chen",
      progress: 45,
      totalLessons: 20,
      completedLessons: 9,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Advanced Mathematics",
      description: "Calculus, linear algebra, and differential equations",
      instructor: "Prof. Emily Rodriguez",
      progress: 92,
      totalLessons: 15,
      completedLessons: 14,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=300&auto=format&fit=crop"
    },
  ];

  return (
    <>
      <Helmet>
        <title>My Courses | EduGenius</title>
      </Helmet>
      <DashboardLayout userType="student">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">My Courses</h1>
            <p className="text-muted-foreground">
              Continue your learning journey with these enrolled courses
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden flex flex-col">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Instructor:</span>{" "}
                      <span className="font-medium">{course.instructor}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress:</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                      <div className="text-xs text-muted-foreground">
                        {course.completedLessons} of {course.totalLessons} lessons completed
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> Continue Learning
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Courses;
