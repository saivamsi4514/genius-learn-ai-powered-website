
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MessageSquare, FileText, BookOpen, Video, ArrowRight } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample data for the progress chart
const progressData = [
  { day: "Mon", score: 65 },
  { day: "Tue", score: 60 },
  { day: "Wed", score: 85 },
  { day: "Thu", score: 90 },
  { day: "Fri", score: 75 },
  { day: "Sat", score: 80 },
  { day: "Sun", score: 95 },
];

// Sample recommendation data
const recommendedResources = [
  {
    title: "Introduction to Machine Learning",
    type: "Course",
    icon: <BookOpen className="h-5 w-5 text-edu-purple" />,
    match: "98% match",
  },
  {
    title: "Python for Data Science Quiz",
    type: "Quiz",
    icon: <FileText className="h-5 w-5 text-edu-purple" />,
    match: "95% match",
  },
  {
    title: "AR Experience: Solar System",
    type: "AR/VR",
    icon: <Video className="h-5 w-5 text-edu-purple" />,
    match: "92% match",
  },
];

// Sample recent activity data
const recentActivity = [
  {
    title: "Completed Quiz: JavaScript Basics",
    time: "2 hours ago",
    score: "85%",
  },
  {
    title: "AI Tutor Session: Algebra Help",
    time: "Yesterday",
    duration: "45 minutes",
  },
  {
    title: "Watched: Introduction to React",
    time: "2 days ago",
    duration: "1 hour 20 minutes",
  },
];

export function StudentDashboardOverview() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <Progress className="mt-2" value={78} />
            <p className="mt-2 text-xs text-muted-foreground">
              +12% from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="mt-2 text-xs text-muted-foreground">
              3 quizzes this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Hours Studied</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28.5</div>
            <p className="mt-2 text-xs text-muted-foreground">
              +5.2 hours from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">AI Tutor Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="mt-2 text-xs text-muted-foreground">
              2 sessions today
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>Your learning activity over the past week</CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={progressData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="#8B5CF6"
                    fill="#D6BCFA"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Recommendations</CardTitle>
            <CardDescription>
              Personalized resources based on your learning patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedResources.map((resource, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 rounded-lg border p-3 hover:bg-secondary transition-colors cursor-pointer"
                >
                  {resource.icon}
                  <div className="space-y-1">
                    <p className="font-medium leading-none">{resource.title}</p>
                    <p className="text-sm text-muted-foreground">{resource.type}</p>
                    <p className="text-xs text-edu-purple font-medium">{resource.match}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              View All Recommendations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div className="space-y-1">
                    <p className="font-medium leading-none">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                  <div>
                    {activity.score && (
                      <span className="text-sm font-medium text-green-600">{activity.score}</span>
                    )}
                    {activity.duration && (
                      <span className="text-sm text-muted-foreground">{activity.duration}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/dashboard/student/ai-tutor">
                <Button className="w-full flex items-center gap-2 h-auto py-4">
                  <MessageSquare className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">AI Tutor</p>
                    <p className="text-xs text-primary-foreground/70">Get help with subjects</p>
                  </div>
                </Button>
              </Link>
              <Link to="/dashboard/student/quizzes">
                <Button className="w-full flex items-center gap-2 h-auto py-4">
                  <FileText className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">Take Quiz</p>
                    <p className="text-xs text-primary-foreground/70">Practice your knowledge</p>
                  </div>
                </Button>
              </Link>
              <Link to="/dashboard/student/courses">
                <Button className="w-full flex items-center gap-2 h-auto py-4" variant="outline">
                  <BookOpen className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">My Courses</p>
                    <p className="text-xs text-muted-foreground">Continue learning</p>
                  </div>
                </Button>
              </Link>
              <Link to="/dashboard/student/ar-vr">
                <Button className="w-full flex items-center gap-2 h-auto py-4" variant="outline">
                  <Video className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">AR/VR Lessons</p>
                    <p className="text-xs text-muted-foreground">Immersive experiences</p>
                  </div>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
