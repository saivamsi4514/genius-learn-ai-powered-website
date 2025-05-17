
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Zap, BookOpen } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="gradient-heading">AI-Powered</span> Education <br />for Everyone
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Personalized learning, AI tutoring, custom quizzes, and more. 
              Transform your educational experience with EduGenius.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="gap-2">
                  Explore Features
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-edu-purple" />
                <span className="text-sm">1000+ Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-edu-purple" />
                <span className="text-sm">AI-Powered Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-edu-purple" />
                <span className="text-sm">Smart Tutoring</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[540px]">
            <div className="relative h-full w-full rounded-lg overflow-hidden bg-gradient-to-br from-edu-purple/10 to-edu-blue/10 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-edu-purple/10 to-edu-blue/10 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Student using EduGenius platform"
                className="rounded-lg w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:bottom-6 md:right-6 bg-background p-4 rounded-lg shadow-lg border w-64 animate-scale-in">
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-edu-purple/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-edu-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">AI Tutor</h3>
                  <p className="text-xs text-muted-foreground">Always available to help</p>
                </div>
              </div>
              <p className="text-sm bg-secondary p-2 rounded">
                "How can I help with your Python assignment today?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
