
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "EduGenius completely transformed how I study. The AI tutor is like having a personal teacher available whenever I need help.",
    author: "Sarah Johnson",
    role: "University Student",
    avatar: "SJ"
  },
  {
    quote: "As an educator, the quiz generation feature saves me countless hours of work while providing my students with high-quality practice materials.",
    author: "Professor Williams",
    role: "High School Teacher",
    avatar: "PW"
  },
  {
    quote: "Learning Spanish became so much easier with the pronunciation feedback. I can practice anytime and know exactly where I need to improve.",
    author: "Michael Chen",
    role: "Language Learner",
    avatar: "MC"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground">
            Hear from students and educators who've experienced the EduGenius difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/50">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <p className="italic text-foreground/80">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4 pt-4">
                    <Avatar>
                      <AvatarFallback className="bg-edu-purple text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
