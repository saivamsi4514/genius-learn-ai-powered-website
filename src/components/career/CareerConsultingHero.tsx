
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, MessageSquare } from "lucide-react";

export function CareerConsultingHero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-edu-purple/10 to-edu-blue/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Career Consulting
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Get personalized career guidance powered by cutting-edge AI. Our system analyzes your skills, interests, and goals to provide tailored advice for your professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link to="#book-consultation">
                  <GraduationCap className="w-5 h-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link to="/career-guide">
                  <MessageSquare className="w-5 h-5" />
                  Try Our AI Career Chatbot
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Career consultation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border w-64 md:w-80">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-edu-purple/20 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-edu-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Career Analysis</h3>
                  <p className="text-sm text-muted-foreground">AI-powered insights</p>
                </div>
              </div>
              <p className="text-sm bg-secondary p-3 rounded-md">
                "Based on your profile, here are 3 career paths that match your skills and interests..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
