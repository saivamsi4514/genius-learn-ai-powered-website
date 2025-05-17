
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GraduationCap, User, BookOpen, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl font-bold mb-4">About EduGenius</h1>
              <p className="text-xl text-muted-foreground">
                Revolutionizing education through AI-powered personalized learning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-lg">
                  At EduGenius, we believe that education should adapt to each student's unique needs.
                  Our mission is to democratize quality education by leveraging the power of artificial intelligence to provide personalized learning experiences for everyone, regardless of their background or learning style.
                </p>
                
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p className="text-lg">
                  We envision a world where every student has access to a personal AI tutor that understands their strengths, weaknesses, and learning preferences. By combining cutting-edge AI technology with educational expertise, we aim to make learning more engaging, effective, and accessible for students of all ages.
                </p>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Student using EduGenius platform"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Why Choose EduGenius?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-edu-purple/20 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-edu-purple" />
                </div>
                <h3 className="text-xl font-medium mb-2">AI-Powered Learning</h3>
                <p>Our advanced AI algorithms create a truly personalized learning experience tailored to your individual needs.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-edu-purple/20 flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-edu-purple" />
                </div>
                <h3 className="text-xl font-medium mb-2">Personalized Experience</h3>
                <p>Every student has unique learning needs. Our platform adapts to your strengths, weaknesses, and preferences.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-edu-purple/20 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-edu-purple" />
                </div>
                <h3 className="text-xl font-medium mb-2">Comprehensive Content</h3>
                <p>Access a vast library of educational materials covering diverse subjects and topics for all age groups.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-edu-purple/20 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-edu-purple" />
                </div>
                <h3 className="text-xl font-medium mb-2">Global Accessibility</h3>
                <p>Learn anytime, anywhere, on any device. Education should not be limited by geographic or technological barriers.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join the Educational Revolution</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a student, teacher, parent, or educational institution, EduGenius offers the tools and resources you need to succeed in the digital age of learning.
              </p>
              <div className="flex justify-center">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-edu-purple" />
                  <span className="text-lg font-medium">EduGenius</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
