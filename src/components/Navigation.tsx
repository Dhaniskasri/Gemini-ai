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
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img 
                src="/gemini-logos.jpg" 
                alt="Gemini Logo" 
                className="w-full h-full object-cover"
              />
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
            <a 
              href="#about" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              About
            </a>
            <a 
              href="#ambassador" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              Ambassador
            </a>
            
          </div>

          <Button variant="gradient" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
