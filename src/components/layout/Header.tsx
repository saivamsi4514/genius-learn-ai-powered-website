
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  Menu,
  X,
  LogIn,
  Book
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  isAuthenticated?: boolean;
}

const Header = ({ isAuthenticated = false }: HeaderProps) => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-edu-purple" />
          <span className="font-bold text-xl">EduGenius</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>

            {mobileMenuOpen && (
              <div className="fixed inset-0 top-16 bg-background z-40 animate-fade-in">
                <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                  <Link 
                    to="/about" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 hover:bg-secondary rounded-md"
                  >
                    About
                  </Link>
                  <Link 
                    to="/features" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 hover:bg-secondary rounded-md"
                  >
                    Features
                  </Link>
                  <div className="pt-4 border-t">
                    {isAuthenticated ? (
                      <Link to="/dashboard">
                        <Button className="w-full">
                          <Book className="mr-2 h-4 w-4" />
                          Dashboard
                        </Button>
                      </Link>
                    ) : (
                      <div className="flex flex-col space-y-2">
                        <Link to="/login">
                          <Button variant="outline" className="w-full">
                            <LogIn className="mr-2 h-4 w-4" />
                            Login
                          </Button>
                        </Link>
                        <Link to="/register">
                          <Button className="w-full">Sign Up</Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          <>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors">
                Features
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button>
                    <Book className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline">
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
