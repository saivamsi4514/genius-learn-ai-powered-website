
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Quiz title must be at least 5 characters.",
  }),
  subject: z.string().min(1, {
    message: "Please select a subject.",
  }),
  topic: z.string().min(3, {
    message: "Topic must be at least 3 characters.",
  }),
  difficulty: z.number().min(1).max(5),
  questionCount: z.number().min(1).max(20),
  additionalInstructions: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function QuizGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [quizGenerated, setQuizGenerated] = useState(false);
  
  // Sample generated quiz for demonstration
  const [generatedQuiz, setGeneratedQuiz] = useState({
    title: "",
    questions: [] as {
      id: number;
      question: string;
      options: string[];
      correctAnswer: string;
    }[],
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subject: "",
      topic: "",
      difficulty: 3,
      questionCount: 10,
      additionalInstructions: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsGenerating(true);
    console.log("Form data:", data);
    
    // Simulate API call to generate quiz
    setTimeout(() => {
      // Sample generated quiz based on form data
      const questions = generateSampleQuestions(data.subject, data.topic, data.questionCount);
      
      setGeneratedQuiz({
        title: data.title,
        questions,
      });
      
      setIsGenerating(false);
      setQuizGenerated(true);
      toast.success("Quiz generated successfully!");
    }, 2000);
  };

  // Function to generate sample questions for demo purposes
  const generateSampleQuestions = (subject: string, topic: string, count: number) => {
    const sampleQuestions = [];
    
    // Generate placeholder questions based on subject and topic
    for (let i = 1; i <= count; i++) {
      sampleQuestions.push({
        id: i,
        question: `Sample ${subject} question ${i} about ${topic}?`,
        options: [
          "Sample option A",
          "Sample option B",
          "Sample option C",
          "Sample option D"
        ],
        correctAnswer: "Sample option B"
      });
    }
    
    return sampleQuestions;
  };

  const handleSaveQuiz = () => {
    toast.success("Quiz saved successfully!");
    // Here you would typically save the quiz to your backend
    console.log("Saving quiz:", generatedQuiz);
    // Reset form and state after saving
    setQuizGenerated(false);
    form.reset();
  };

  const handleRegenerateQuiz = () => {
    setQuizGenerated(false);
    onSubmit(form.getValues());
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">AI Quiz Generator</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quiz Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter quiz title" {...field} />
                        </FormControl>
                        <FormDescription>
                          A descriptive title for your quiz
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="mathematics">Mathematics</SelectItem>
                              <SelectItem value="science">Science</SelectItem>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="history">History</SelectItem>
                              <SelectItem value="computerScience">Computer Science</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="topic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Topic</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Algebra, Photosynthesis" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="difficulty"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Difficulty Level: {field.value}</FormLabel>
                        <FormControl>
                          <Slider
                            min={1}
                            max={5}
                            step={1}
                            defaultValue={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="py-4"
                          />
                        </FormControl>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Beginner</span>
                          <span>Intermediate</span>
                          <span>Advanced</span>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="questionCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Questions: {field.value}</FormLabel>
                        <FormControl>
                          <Slider
                            min={1}
                            max={20}
                            step={1}
                            defaultValue={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="py-4"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="additionalInstructions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Instructions (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any specific requirements or focus areas for the quiz"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Add any specific instructions to customize your quiz
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isGenerating || quizGenerated}
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Quiz...
                      </>
                    ) : (
                      <>
                        <FileText className="mr-2 h-4 w-4" />
                        Generate Quiz
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div>
          {quizGenerated ? (
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="flex items-center justify-between">
                  <span>Generated Quiz: {generatedQuiz.title}</span>
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 max-h-[500px] overflow-y-auto">
                <div className="space-y-6">
                  {generatedQuiz.questions.map((question) => (
                    <div key={question.id} className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">
                        {question.id}. {question.question}
                      </h3>
                      <div className="space-y-2 pl-4">
                        {question.options.map((option, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <span className="text-sm font-medium">
                              {String.fromCharCode(65 + index)}. 
                            </span>
                            <span className={`text-sm ${option === question.correctAnswer ? "font-medium text-green-600" : ""}`}>
                              {option}
                            </span>
                            {option === question.correctAnswer && (
                              <span className="text-xs text-green-600">(Correct)</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t p-4">
                <Button variant="outline" onClick={handleRegenerateQuiz}>
                  Regenerate Quiz
                </Button>
                <Button onClick={handleSaveQuiz}>
                  Save Quiz
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="bg-muted rounded-full p-6 mx-auto w-fit">
                  <FileText className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No Quiz Generated Yet</h3>
                <p className="text-muted-foreground max-w-md">
                  Fill out the form on the left and generate your first AI-powered quiz.
                  Once generated, your quiz will appear here ready for review.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
