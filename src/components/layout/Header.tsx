
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Career Consulting", href: "/career-consulting" },
    { name: "Career Guide", href: "/career-guide" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "About", href: "/about" },
  ];
  
  const isActive = (path: string) => location.pathname === path;

  // Get first letter of first and last name for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="py-4 border-b bg-background/80 backdrop-blur-md sticky top-0 z-40">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-edu-purple" />
          <span className="font-bold text-lg hidden sm:inline-block">EduGenius</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                isActive(item.href)
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <Link to="/payment">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Plans & Pricing
            </Button>
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link to={`/dashboard/${user?.role}`}>
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm"
                className="gap-2"
                onClick={logout}
              >
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="bg-edu-purple text-white text-xs">
                    {user?.name ? getInitials(user.name) : "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Log In
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          )}
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden p-4 bg-background border-t">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive(item.href)
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/payment" className="px-3 py-2 text-sm rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground" onClick={() => setIsOpen(false)}>
              Plans & Pricing
            </Link>
            {isAuthenticated && (
              <>
                <Link 
                  to={`/dashboard/${user?.role}`}
                  className="px-3 py-2 text-sm rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Button 
                  variant="ghost" 
                  className="px-3 py-2 text-sm rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground justify-start"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  Logout
                </Button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
