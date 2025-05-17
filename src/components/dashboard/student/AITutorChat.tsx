
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GraduationCap, SendIcon, User, BookOpen, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const subjects = [
  { id: "math", name: "Mathematics", icon: <div className="font-bold">π</div> },
  { id: "science", name: "Science", icon: <div className="font-bold">⚗️</div> },
  { id: "english", name: "English", icon: <div className="font-bold">📚</div> },
  { id: "history", name: "History", icon: <div className="font-bold">🏛️</div> },
  { id: "cs", name: "Computer Science", icon: <div className="font-bold">💻</div> },
];

export function AITutorChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI tutor. What would you like help with today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [currentSubject, setCurrentSubject] = useState("math");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response based on the subject
    setTimeout(() => {
      let aiResponse = "";

      switch (currentSubject) {
        case "math":
          aiResponse = `That's a great question about mathematics! ${generateMathResponse(inputValue)}`;
          break;
        case "science":
          aiResponse = `Interesting science question! ${generateScienceResponse(inputValue)}`;
          break;
        case "english":
          aiResponse = `Regarding your English question: ${generateEnglishResponse(inputValue)}`;
          break;
        case "history":
          aiResponse = `From a historical perspective: ${generateHistoryResponse(inputValue)}`;
          break;
        case "cs":
          aiResponse = `In computer science: ${generateComputerScienceResponse(inputValue)}`;
          break;
        default:
          aiResponse = "I'm not sure about that subject. Can you provide more details?";
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Helper functions to generate subject-specific responses
  const generateMathResponse = (question: string) => {
    if (question.toLowerCase().includes("derivative") || question.toLowerCase().includes("calculus")) {
      return "When calculating derivatives, remember the power rule: if f(x) = x^n, then f'(x) = n*x^(n-1). For example, the derivative of x^2 is 2x. Would you like me to help you solve a specific derivative problem?";
    } else if (question.toLowerCase().includes("algebra") || question.toLowerCase().includes("equation")) {
      return "Algebraic equations can be solved by isolating the variable. Remember to perform the same operation on both sides to maintain equality. What equation are you trying to solve?";
    } else {
      return "Mathematics is all about patterns and logical relationships. I can help with algebra, calculus, geometry, statistics, and more. Could you provide a specific problem you'd like me to help with?";
    }
  };

  const generateScienceResponse = (question: string) => {
    if (question.toLowerCase().includes("physics") || question.toLowerCase().includes("force")) {
      return "In physics, force equals mass times acceleration (F=ma), which is Newton's Second Law of Motion. This fundamental principle helps us understand how objects move when forces are applied to them. What specific physics concept are you studying?";
    } else if (question.toLowerCase().includes("chemistry") || question.toLowerCase().includes("element")) {
      return "Chemistry studies the properties, composition, and structure of matter. The periodic table organizes elements by atomic number and chemical properties. Are you working on a specific chemistry problem?";
    } else {
      return "Science covers a vast range of topics from biology to physics to chemistry. I'd be happy to discuss any specific scientific concept you're curious about!";
    }
  };

  const generateEnglishResponse = (question: string) => {
    if (question.toLowerCase().includes("grammar") || question.toLowerCase().includes("sentence")) {
      return "Good grammar is essential for clear communication. A complete sentence needs a subject and a predicate. Common grammar issues include comma splices, run-on sentences, and subject-verb disagreement. Would you like me to review a specific sentence?";
    } else if (question.toLowerCase().includes("essay") || question.toLowerCase().includes("writing")) {
      return "When writing an essay, start with a clear thesis statement, support it with evidence in body paragraphs, and conclude by restating your main point. I can help you outline or review your writing if you'd like!";
    } else {
      return "English language arts encompasses reading, writing, speaking, and listening. Whether you need help with literature analysis, grammar, or essay writing, I'm here to assist. What specific aspect are you working on?";
    }
  };

  const generateHistoryResponse = (question: string) => {
    if (question.toLowerCase().includes("world war") || question.toLowerCase().includes("wwii")) {
      return "World War II (1939-1945) was a global conflict that pitted the Allies (including the US, UK, and USSR) against the Axis powers (Nazi Germany, Italy, and Japan). It was the deadliest conflict in human history. What specific aspect of WWII are you studying?";
    } else if (question.toLowerCase().includes("revolution") || question.toLowerCase().includes("civil war")) {
      return "Revolutions and civil wars have shaped nations throughout history. They often occur when social, economic, or political tensions reach a breaking point. Which specific revolution or civil war are you learning about?";
    } else {
      return "History helps us understand our past and how it shapes our present. I can help with ancient civilizations, medieval history, modern conflicts, or any historical period you're interested in. What time period are you focusing on?";
    }
  };

  const generateComputerScienceResponse = (question: string) => {
    if (question.toLowerCase().includes("algorithm") || question.toLowerCase().includes("complexity")) {
      return "Algorithms are step-by-step procedures for calculations or problem-solving. When analyzing them, we consider time complexity (how runtime scales with input size) and space complexity (memory usage). Big O notation helps us express these efficiencies. What algorithm are you working with?";
    } else if (question.toLowerCase().includes("python") || question.toLowerCase().includes("java") || question.toLowerCase().includes("code")) {
      return "Programming languages like Python and Java help us communicate instructions to computers. Each language has its syntax, paradigms, and best practices. I'd be happy to help debug code or explain programming concepts!";
    } else {
      return "Computer science encompasses algorithms, data structures, programming languages, system architecture, and more. These concepts help us solve problems efficiently using computers. What specific CS topic would you like to explore?";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[calc(100vh-12rem)]">
      <div className="md:col-span-1 space-y-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <GraduationCap className="mr-2 h-5 w-5 text-edu-purple" />
              AI Tutor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Select a subject to get specialized help from your AI tutor.
            </p>
            <div className="space-y-2">
              {subjects.map((subject) => (
                <Button
                  key={subject.id}
                  variant={currentSubject === subject.id ? "default" : "outline"}
                  className={cn(
                    "w-full justify-start",
                    currentSubject === subject.id ? "bg-edu-purple text-white" : ""
                  )}
                  onClick={() => setCurrentSubject(subject.id)}
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    {subject.icon}
                  </div>
                  {subject.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Study Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <BookOpen className="mr-2 h-5 w-5" />
              Related Lessons
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-5 w-5" />
              Practice Quizzes
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-3 flex flex-col h-full">
        <Card className="flex-1 flex flex-col">
          <CardHeader className="border-b pb-3">
            <CardTitle className="text-lg">
              {subjects.find(s => s.id === currentSubject)?.name} Tutor
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "flex max-w-[80%] items-start gap-3",
                      message.role === "user" && "flex-row-reverse"
                    )}
                  >
                    <Avatar className={message.role === "assistant" ? "bg-edu-purple" : "bg-secondary"}>
                      {message.role === "assistant" ? (
                        <AvatarFallback className="bg-edu-purple text-white">AI</AvatarFallback>
                      ) : (
                        <AvatarFallback className="bg-secondary">
                          <User className="h-5 w-5" />
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div
                      className={cn(
                        "rounded-lg px-4 py-3",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="mt-1 text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex max-w-[80%] items-start gap-3">
                    <Avatar className="bg-edu-purple">
                      <AvatarFallback className="bg-edu-purple text-white">AI</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg bg-muted px-4 py-3">
                      <p className="text-sm">
                        <span className="inline-block animate-pulse">...</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <div className="border-t p-4">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                placeholder="Ask your question here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">
                <SendIcon className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
