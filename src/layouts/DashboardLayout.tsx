
import { ReactNode } from "react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SidebarProvider } from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: 'student' | 'teacher' | 'admin';
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  // Get user name from props or context in a real app
  const userName = userType === 'student' 
    ? 'John Doe' 
    : userType === 'teacher' 
      ? 'Professor Smith' 
      : 'Admin User';

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex w-full">
        <DashboardSidebar userType={userType} />
        <div className="flex-1 flex flex-col">
          <DashboardHeader userType={userType} userName={userName} />
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
