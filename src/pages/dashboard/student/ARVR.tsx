
import DashboardLayout from "@/layouts/DashboardLayout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ARVR = () => {
  const arvrLessons = [
    {
      id: 1,
      title: "Solar System Exploration",
      description: "Explore the planets and moons of our solar system in virtual reality",
      duration: "45 minutes",
      type: "VR",
      difficulty: "Beginner",
      requirements: "VR Headset Recommended",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Human Anatomy",
      description: "Interactive 3D model of human anatomy with augmented reality",
      duration: "60 minutes",
      type: "AR",
      difficulty: "Intermediate",
      requirements: "Tablet or Smartphone",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Chemical Reactions Lab",
      description: "Virtual chemistry lab with safe experimentation",
      duration: "30 minutes",
      type: "VR",
      difficulty: "Advanced",
      requirements: "VR Headset Required",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=300&auto=format&fit=crop"
    },
  ];

  return (
    <>
      <Helmet>
        <title>AR/VR Lessons | EduGenius</title>
      </Helmet>
      <DashboardLayout userType="student">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">AR/VR Learning Experiences</h1>
            <p className="text-muted-foreground">
              Immersive augmented and virtual reality lessons for enhanced learning
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {arvrLessons.map((lesson) => (
              <Card key={lesson.id} className="overflow-hidden flex flex-col">
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={lesson.image} 
                    alt={lesson.title} 
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    className="absolute top-2 right-2" 
                    variant={lesson.type === "AR" ? "outline" : "default"}
                  >
                    {lesson.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Video className="mr-2 h-5 w-5 text-edu-purple" />
                    {lesson.title}
                  </CardTitle>
                  <CardDescription>{lesson.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Clock className="mr-1 h-3 w-3" /> Duration:
                      </span>
                      <span className="font-medium">{lesson.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Difficulty:</span>
                      <span className="font-medium">{lesson.difficulty}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Requirements:</span>
                      <span className="font-medium">{lesson.requirements}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> Start Experience
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

export default ARVR;
