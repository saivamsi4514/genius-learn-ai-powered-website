
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, FileText, HeadphonesIcon, Video, LayoutDashboard, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4 gradient-heading">
                AI-Powered Features
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how EduGenius uses artificial intelligence to transform the learning experience
              </p>
            </div>
          </div>
        </section>

        {/* Feature 1: AI Tutoring */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center rounded-lg bg-secondary px-3 py-1 mb-4">
                  <MessageSquare className="mr-2 h-4 w-4 text-edu-purple" />
                  <span className="text-sm font-medium">AI Tutoring</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Your Personal AI Tutor, Available 24/7
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Get help with any subject at any time. Our AI tutor provides personalized assistance, answers questions, and explains concepts in a way that makes sense to you.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-edu-purple" />
                    <span>Instant answers to your academic questions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-edu-purple" />
                    <span>Step-by-step explanations for complex problems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-edu-purple" />
                    <span>Adapts to your learning style and pace</span>
                  </li>
                </ul>
                <Link to="/register">
                  <Button>Try AI Tutoring</Button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-lg border bg-white shadow-lg">
                  <Card className="absolute inset-0 bg-white border-0 shadow-none">
                    <CardHeader className="border-b pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <MessageSquare className="mr-2 h-5 w-5 text-edu-purple" />
                        Mathematics Tutor
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div className="flex max-w-[80%] items-start gap-3">
                          <div className="rounded-lg bg-secondary px-4 py-3">
                            <p className="text-sm">
                              I need help solving this quadratic equation: x² + 5x + 6 = 0
                            </p>
                          </div>
                        </div>
                        <div className="flex max-w-[80%] items-start gap-3 ml-auto flex-row-reverse">
                          <div className="rounded-lg bg-primary text-primary-foreground px-4 py-3">
                            <p className="text-sm">
                              To solve a quadratic equation in the form ax² + bx + c = 0, we can use factoring.
                              <br /><br />
                              For x² + 5x + 6 = 0:
                              <br />
                              Step 1: Find two numbers that multiply to give 6 and add up to 5.
                              <br />
                              These numbers are 2 and 3 (2 × 3 = 6 and 2 + 3 = 5)
                              <br /><br />
                              Step 2: Rewrite the middle term using these numbers.
                              <br />
                              x² + 2x + 3x + 6 = 0
                              <br /><br />
                              Step 3: Factor by grouping.
                              <br />
                              x(x + 2) + 3(x + 2) = 0
                              <br />
                              (x + 3)(x + 2) = 0
                              <br /><br />
                              Step 4: Set each factor equal to zero.
                              <br />
                              x + 3 = 0 or x + 2 = 0
                              <br />
                              x = -3 or x = -2
                              <br /><br />
                              Therefore, the solutions are x = -3 and x = -2.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Quiz Generator */}
        <section className="py-20 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video overflow-hidden rounded-lg border bg-white shadow-lg">
                  <Card className="absolute inset-0 bg-white border-0 shadow-none">
                    <CardHeader className="border-b pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <FileText className="mr-2 h-5 w-5 text-edu-purple" />
                        Generated Quiz: Introduction to Physics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">
                            1. Which of Newton's laws states that an object at rest stays at rest and an object in motion stays in motion unless acted upon by a net external force?
                          </h3>
                          <div className="space-y-2 pl-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">A.</span>
                              <span className="text-sm">Zeroth Law</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">B.</span>
                              <span className="text-sm font-medium text-green-600">First Law</span>
                              <span className="text-xs text-green-600">(Correct)</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">C.</span>
                              <span className="text-sm">Second Law</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">D.</span>
                              <span className="text-sm">Third Law</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center rounded-lg bg-white px-3 py-1 mb-4">
                  <FileText className="mr-2 h-4 w-4 text-edu-purple" />
                  <span className="text-sm font-medium">Quiz Generator</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  AI-Generated Quizzes with Smart Grading
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Create custom quizzes in seconds. Our AI generates relevant questions based on your specified topics and difficulty levels, then automatically grades responses and provides detailed feedback.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-edu-purple" />
                    <span>Create subject-specific quizzes instantly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-edu-purple" />
                    <span>Customize difficulty levels and question formats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-edu-purple" />
                    <span>Automatic grading with detailed explanations</span>
                  </li>
                </ul>
                <Link to="/register">
                  <Button>Generate Quizzes</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* More Features Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">More Amazing Features</h2>
              <p className="text-lg text-muted-foreground">
                Discover the full range of innovative tools designed to enhance your educational experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="mb-4 p-2 bg-secondary inline-block rounded-lg">
                    <HeadphonesIcon className="h-8 w-8 text-edu-purple" />
                  </div>
                  <CardTitle>Language Learning Assistant</CardTitle>
                  <CardDescription>
                    Practice speaking any language and receive instant pronunciation feedback from our AI coach.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                      <span>Real-time pronunciation feedback</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                      <span>Conversational practice with AI</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                      <span>Grammar and vocabulary improvement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 p-2 bg-secondary inline-block rounded-lg">
                    <Video className="h-8 w-8 text-edu-purple" />
                  </div>
                  <CardTitle>AR/VR Learning Hub</CardTitle>
                  <CardDescription>
                    Experience immersive learning through augmented and virtual reality modules that bring concepts to life.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                      <span>Interactive 3D learning environments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                      <span>Science and history visualization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                      <span>Virtual field trips and simulations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 p-2 bg-secondary inline-block rounded-lg">
                    <LayoutDashboard className="h-8 w-8 text-edu-purple" />
                  </div>
                  <CardTitle>Personalized Dashboard</CardTitle>
                  <CardDescription>
                    Track your progress and receive AI-recommended resources based on your learning patterns.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                      <span>Intelligent learning recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                      <span>Progress tracking and analytics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                      <span>Personalized learning paths</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-edu-purple to-edu-blue text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Zap className="h-12 w-12 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Experience the Power of AI in Education
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join EduGenius today and transform the way you learn with our AI-powered educational platform.
              </p>
              <Link to="/register">
                <Button variant="secondary" size="lg" className="gap-2 bg-white text-edu-purple hover:bg-white/90">
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
