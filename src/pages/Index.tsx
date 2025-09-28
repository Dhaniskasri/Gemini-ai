import { Navigation } from "@/components/Navigation";
import { GoogleIcon } from "@/components/GoogleIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Zap, Globe, Rocket, Star, ArrowRight, Brain, Target, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import ambassadorProfile from "@/assets/ambassador-profile.jpg";
import aiIllustration from "@/assets/ai-illustration.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <GoogleIcon size={12} className="mr-1" />
                  Google Gemini AI Program
                </Badge>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Welcome to <span className="hero-text">Gemini AI</span><br />
                Ambassador Program
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We are passionate students selected as Google Gemini AI Ambassadors. 
                Our mission is to explore, innovate, and inspire through the power of Artificial Intelligence.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="gradient" className="transition-bounce">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:border-primary">
                  View Tasks
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <img 
                  src={aiIllustration} 
                  alt="AI Illustration" 
                  className="w-full rounded-2xl shadow-elegant floating-animation"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg pulse-glow">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-text">About Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a team of Google Gemini AI Ambassador Students, passionate about Artificial Intelligence 
              and its power to transform the world. Our goal is to learn, explore, and share knowledge about 
              AI with the community while building projects that inspire innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="gradient-card shadow-md hover:shadow-lg transition-smooth text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Empowering Students</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Empowering students with the knowledge of AI & ML through hands-on learning and practical projects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-md hover:shadow-lg transition-smooth text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Global Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connecting communities through AI-driven innovation and collaborative problem-solving.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-md hover:shadow-lg transition-smooth text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Real Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Creating impactful projects that solve real-world problems using cutting-edge AI technology.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ambassador Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 hero-text">Meet Our Ambassador</h2>
            <p className="text-xl text-muted-foreground">
              Leading the way in AI innovation and education
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="gradient-card shadow-lg hover:shadow-xl transition-smooth">
              <CardHeader className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img 
                    src={ambassadorProfile} 
                    alt="Ambassador Profile" 
                    className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <CardTitle className="text-xl">AI Ambassador</CardTitle>
                <CardDescription className="text-base">
                  Leading AI research and student mentorship
                </CardDescription>
                <div className="flex justify-center gap-2 mt-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Brain className="w-3 h-3 mr-1" />
                    AI Expert
                  </Badge>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    <Users className="w-3 h-3 mr-1" />
                    Mentor
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Passionate about advancing AI education and building innovative solutions. 
                  Currently working on machine learning projects and mentoring the next generation of AI enthusiasts.
                </p>
                <Link to="/tasks">
                  <Button className="w-full" variant="gradient">
                    <Target className="w-4 h-4 mr-2" />
                    View Tasks
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <Card className="max-w-2xl mx-auto gradient-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl hero-text">Ready to Join the AI Revolution?</CardTitle>
              <CardDescription className="text-lg">
                Connect with us and be part of the future of artificial intelligence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="gradient">
                    Get In Touch
                  </Button>
                </Link>
                <Link to="/tasks">
                  <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:border-primary">
                    Explore Tasks
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Gemini AI Ambassador Program. Empowering the future through artificial intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;