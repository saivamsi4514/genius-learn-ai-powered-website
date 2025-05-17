
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { MessageSquare, Send, Bot, User } from "lucide-react";

type Message = {
  id: string;
  type: "user" | "bot";
  text: string;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: "welcome",
    type: "bot",
    text: "Hi there! I'm your AI Career Guide. How can I help with your career questions today? You can ask about different career paths, skills needed for specific roles, or get advice on job searching.",
    timestamp: new Date(),
  },
];

interface CareerChatbotProps {
  selectedIndustry: string | null;
}

export function CareerChatbot({ selectedIndustry }: CareerChatbotProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle industry selection from the sidebar
  useEffect(() => {
    if (selectedIndustry) {
      const industryMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        text: `Let's talk about careers in ${selectedIndustry}. What specific questions do you have about this field?`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, industryMessage]);
    }
  }, [selectedIndustry]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: input,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate API response (in a real app, this would call an AI service)
    setTimeout(() => {
      const botResponses: Record<string, string> = {
        "software": "Software engineering is an excellent career path with strong demand. I recommend focusing on learning fundamental programming concepts, a couple of programming languages like JavaScript and Python, and understanding data structures and algorithms.",
        "data": "Data science roles require strong analytical skills and knowledge of statistics. Learning SQL, Python, and data visualization tools like Tableau would be a great start.",
        "marketing": "Digital marketing is evolving rapidly with new channels and technologies. I suggest building skills in content creation, SEO, social media strategy, and analytics tools.",
        "resume": "For resume improvement, focus on quantifiable achievements, use action verbs, tailor it to each job, and keep the format clean and professional.",
        "interview": "To prepare for interviews, research the company thoroughly, practice common questions, prepare stories about your experiences, and have good questions ready for the interviewer.",
        "salary": "When negotiating salary, research market rates for your role and location, highlight your unique value, and consider the entire compensation package, not just the base salary."
      };
      
      // Simple keyword matching for demo purposes
      let botReply = "I'd be happy to help with that. Could you provide more details about your specific situation or question?";
      
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (input.toLowerCase().includes(keyword)) {
          botReply = response;
          break;
        }
      }
      
      const botMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        text: botReply,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border h-[600px] flex flex-col">
      <div className="bg-primary p-4 flex items-center gap-3">
        <Bot className="h-6 w-6 text-primary-foreground" />
        <h3 className="font-medium text-primary-foreground">Career Guide AI</h3>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4" ref={scrollAreaRef}>
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`flex gap-3 max-w-[80%] ${
                  message.type === "user" 
                    ? "flex-row-reverse" 
                    : "flex-row"
                }`}
              >
                <Avatar className="h-8 w-8 border">
                  {message.type === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </Avatar>
                <div
                  className={`rounded-lg px-4 py-2 ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8 border">
                  <Bot className="h-4 w-4" />
                </Avatar>
                <div className="bg-secondary rounded-lg px-4 py-2">
                  <div className="flex gap-1 items-center">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex gap-2"
        >
          <Input
            placeholder="Ask about career paths, skills, interview tips..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
