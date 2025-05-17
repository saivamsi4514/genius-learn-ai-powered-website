
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  GraduationCap,
  Settings,
  LogOut,
  BookOpen,
  Video,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface SidebarProps {
  userType: 'student' | 'teacher' | 'admin';
}

export function DashboardSidebar({ userType }: SidebarProps) {
  const sidebarContext = useSidebar();
  // Access state directly instead of collapsed property
  const collapsed = sidebarContext.state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  // Items for student sidebar
  const studentItems = [
    { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard/student" },
    { title: "AI Tutor", icon: MessageSquare, path: "/dashboard/student/ai-tutor" },
    { title: "Quiz Center", icon: FileText, path: "/dashboard/student/quizzes" },
    { title: "My Courses", icon: BookOpen, path: "/dashboard/student/courses" },
    { title: "AR/VR Lessons", icon: Video, path: "/dashboard/student/ar-vr" }
  ];

  // Items for teacher sidebar
  const teacherItems = [
    { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard/teacher" },
    { title: "My Classes", icon: Users, path: "/dashboard/teacher/classes" },
    { title: "Create Quiz", icon: FileText, path: "/dashboard/teacher/create-quiz" },
    { title: "Course Materials", icon: BookOpen, path: "/dashboard/teacher/materials" },
    { title: "AR/VR Content", icon: Video, path: "/dashboard/teacher/ar-vr" }
  ];

  // Items for admin sidebar
  const adminItems = [
    { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard/admin" },
    { title: "Users", icon: Users, path: "/dashboard/admin/users" },
    { title: "Courses", icon: BookOpen, path: "/dashboard/admin/courses" },
    { title: "Content", icon: FileText, path: "/dashboard/admin/content" }
  ];

  // Determine which items to show based on user type
  let sidebarItems = studentItems;
  if (userType === 'teacher') sidebarItems = teacherItems;
  if (userType === 'admin') sidebarItems = adminItems;

  // Helper to check if a path is active
  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar
      className={cn(
        "min-h-screen border-r",
        collapsed ? "w-16" : "w-64",
        "transition-all duration-300"
      )}
      collapsible="icon"
    >
      <SidebarTrigger className="hidden md:flex m-2 self-end" />

      <div className="py-4 flex justify-center">
        {!collapsed ? (
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-edu-purple" />
            <span className="font-bold text-lg">EduGenius</span>
          </div>
        ) : (
          <GraduationCap className="h-6 w-6 text-edu-purple" />
        )}
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={cn(collapsed && "sr-only")}>
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center space-x-2 rounded-md px-3 py-2 text-sm transition-colors",
                        isActive(item.path)
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className={cn(collapsed && "sr-only")}>
            Settings
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to={`/dashboard/${userType}/settings`}
                    className={cn(
                      "flex items-center space-x-2 rounded-md px-3 py-2 text-sm transition-colors",
                      isActive(`/dashboard/${userType}/settings`)
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    )}
                  >
                    <Settings className="h-5 w-5" />
                    {!collapsed && <span>Settings</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/"
                    className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
                  >
                    <LogOut className="h-5 w-5" />
                    {!collapsed && <span>Logout</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
