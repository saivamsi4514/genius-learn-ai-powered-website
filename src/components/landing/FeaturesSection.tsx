
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, FileText, HeadphonesIcon, Video, Monitor } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-edu-purple" />,
    title: "AI Tutoring Assistant",
    description: "Chat with an intelligent tutor that provides personalized help on any subject, 24/7."
  },
  {
    icon: <FileText className="h-8 w-8 text-edu-purple" />,
    title: "AI-Generated Quizzes",
    description: "Automatically generate and grade quizzes tailored to specific topics and difficulty levels."
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8 text-edu-purple" />,
    title: "Language Learning Assistant",
    description: "Practice speaking and receive instant feedback on pronunciation from our AI language coach."
  },
  {
    icon: <Video className="h-8 w-8 text-edu-purple" />,
    title: "AR/VR Learning Hub",
    description: "Access immersive learning experiences that bring abstract concepts to life."
  },
  {
    icon: <Monitor className="h-8 w-8 text-edu-purple" />,
    title: "Personalized Dashboard",
    description: "Track progress and get AI-recommended resources based on your learning patterns."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary" id="features">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Powered by Artificial Intelligence</h2>
          <p className="text-xl text-muted-foreground">
            EduGenius leverages cutting-edge AI technology to revolutionize how you learn and teach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 p-2 bg-secondary inline-block rounded-lg">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
