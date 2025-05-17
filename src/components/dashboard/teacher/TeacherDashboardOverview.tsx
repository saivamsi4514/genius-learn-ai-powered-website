
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Users, FileText, BookOpen, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for the quiz completion chart
const classQuizData = [
  { name: "Quiz 1", completed: 95, pending: 5 },
  { name: "Quiz 2", completed: 88, pending: 12 },
  { name: "Quiz 3", completed: 76, pending: 24 },
  { name: "Quiz 4", completed: 90, pending: 10 },
];

// Sample student performance data
const studentPerformanceData = [
  { name: "Class A", average: 82, highest: 98, lowest: 65 },
  { name: "Class B", average: 78, highest: 95, lowest: 60 },
  { name: "Class C", average: 85, highest: 100, lowest: 72 },
];

// Sample class data
const classes = [
  { id: 1, name: "Mathematics 101", students: 28, progress: 78 },
  { id: 2, name: "Computer Science Basics", students: 32, progress: 65 },
  { id: 3, name: "English Literature", students: 25, progress: 82 },
];

// Sample upcoming tasks
const upcomingTasks = [
  {
    id: 1,
    title: "Grade Mathematics Quiz",
    dueDate: "Today",
    status: "Urgent",
  },
  {
    id: 2,
    title: "Prepare Computer Science Lesson",
    dueDate: "Tomorrow",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Review Student Submissions",
    dueDate: "May 20",
    status: "Upcoming",
  },
];

export function TeacherDashboardOverview() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="mt-2 text-xs text-muted-foreground">
              3 active this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">126</div>
            <p className="mt-2 text-xs text-muted-foreground">
              +12 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Quizzes Created</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16</div>
            <p className="mt-2 text-xs text-muted-foreground">
              4 this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="mt-2 text-xs text-muted-foreground">
              +5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Quiz Completion Rates</CardTitle>
            <CardDescription>
              Student completion status for recent quizzes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={classQuizData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" name="Completed" stackId="a" fill="#8B5CF6" />
                  <Bar dataKey="pending" name="Pending" stackId="a" fill="#E5DEFF" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-start space-x-3 rounded-lg border p-3 hover:bg-secondary transition-colors cursor-pointer"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium leading-none">{task.title}</p>
                    <div className="flex items-center text-sm">
                      <span className="text-muted-foreground">Due: {task.dueDate}</span>
                      <span className="mx-2 text-muted-foreground">•</span>
                      <span className={
                        task.status === "Urgent" ? "text-red-500" : 
                        task.status === "In Progress" ? "text-amber-500" : 
                        "text-blue-500"
                      }>
                        {task.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              View All Tasks
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Your Classes</CardTitle>
            <CardDescription>
              Current active classes and their progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {classes.map((classItem) => (
                <div key={classItem.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{classItem.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {classItem.students} students
                    </span>
                  </div>
                  <Progress value={classItem.progress} />
                  <p className="text-sm text-muted-foreground">
                    {classItem.progress}% overall progress
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/teacher/classes">
              <Button variant="outline" size="sm">
                Manage Classes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/dashboard/teacher/create-quiz">
                <Button className="w-full flex items-center gap-2 h-auto py-4">
                  <FileText className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">Create Quiz</p>
                    <p className="text-xs text-primary-foreground/70">AI-generated assessments</p>
                  </div>
                </Button>
              </Link>
              <Link to="/dashboard/teacher/classes">
                <Button className="w-full flex items-center gap-2 h-auto py-4">
                  <Users className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">Manage Classes</p>
                    <p className="text-xs text-primary-foreground/70">View student progress</p>
                  </div>
                </Button>
              </Link>
              <Link to="/dashboard/teacher/materials">
                <Button className="w-full flex items-center gap-2 h-auto py-4" variant="outline">
                  <BookOpen className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">Course Materials</p>
                    <p className="text-xs text-muted-foreground">Upload and organize</p>
                  </div>
                </Button>
              </Link>
              <Link to="/dashboard/teacher/settings">
                <Button className="w-full flex items-center gap-2 h-auto py-4" variant="outline">
                  <Settings className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">Settings</p>
                    <p className="text-xs text-muted-foreground">Configure your account</p>
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
