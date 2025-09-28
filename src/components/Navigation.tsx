import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="white"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">Gemini AI Ambassador</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-smooth ${
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/#about" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              About
            </Link>
            <Link 
              to="/tasks" 
              className={`text-sm font-medium transition-smooth ${
                isActive("/tasks") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Tasks
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-smooth ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          <Button variant="gradient" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};