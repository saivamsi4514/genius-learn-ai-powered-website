
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MessageSquare, FileText } from "lucide-react";

export function CareerServices() {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-edu-purple" />,
      title: "Career Path Analysis",
      description: "Our AI analyzes your skills, experience, and interests to recommend optimal career paths."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-edu-purple" />,
      title: "Resume & CV Review",
      description: "Get AI-powered feedback on your resume with specific improvement suggestions."
    },
    {
      icon: <FileText className="h-8 w-8 text-edu-purple" />,
      title: "Interview Preparation",
      description: "Practice with our AI interviewer and receive real-time feedback to improve your skills."
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Career Consulting Services</h2>
          <p className="text-xl text-muted-foreground">
            Leverage the power of AI to enhance your professional development and career prospects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 p-2 bg-secondary inline-block rounded-lg">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
