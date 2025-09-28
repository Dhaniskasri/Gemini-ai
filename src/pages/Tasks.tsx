import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Star, Trophy, Target, Zap, Brain, Rocket } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Complete AI Fundamentals Course",
    description: "Learn the basics of artificial intelligence and machine learning concepts.",
    difficulty: "Beginner",
    points: 50,
    status: "completed",
    icon: Brain,
    category: "Learning"
  },
  {
    id: 2,
    title: "Build Your First ML Model",
    description: "Create and train a simple machine learning model using Python and scikit-learn.",
    difficulty: "Intermediate",
    points: 100,
    status: "in-progress",
    icon: Target,
    category: "Project"
  },
  {
    id: 3,
    title: "Write AI Ethics Essay",
    description: "Research and write about ethical considerations in AI development and deployment.",
    difficulty: "Intermediate",
    points: 75,
    status: "pending",
    icon: Star,
    category: "Research"
  },
  {
    id: 4,
    title: "Participate in Hackathon",
    description: "Join an AI-focused hackathon and build an innovative solution.",
    difficulty: "Advanced",
    points: 150,
    status: "pending",
    icon: Trophy,
    category: "Competition"
  },
  {
    id: 5,
    title: "Create Tutorial Video",
    description: "Produce an educational video explaining a complex AI concept in simple terms.",
    difficulty: "Intermediate",
    points: 80,
    status: "pending",
    icon: Zap,
    category: "Content"
  },
  {
    id: 6,
    title: "Deploy AI Application",
    description: "Deploy your machine learning model as a web application using cloud services.",
    difficulty: "Advanced",
    points: 120,
    status: "pending",
    icon: Rocket,
    category: "Development"
  },
  {
    id: 7,
    title: "Mentor Junior Students",
    description: "Guide and mentor 3 junior students in their AI learning journey.",
    difficulty: "Advanced",
    points: 100,
    status: "pending",
    icon: Star,
    category: "Mentorship"
  },
  {
    id: 8,
    title: "Research Paper Review",
    description: "Read and summarize 5 recent AI research papers and present findings.",
    difficulty: "Advanced",
    points: 90,
    status: "pending",
    icon: Brain,
    category: "Research"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 border-green-200";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Advanced":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "in-progress":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "pending":
      return "bg-gray-100 text-gray-800 border-gray-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="w-4 h-4" />;
    case "in-progress":
      return <Clock className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

const Tasks = () => {
  const completedTasks = tasks.filter(task => task.status === "completed").length;
  const totalPoints = tasks.reduce((sum, task) => task.status === "completed" ? sum + task.points : sum, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 hero-text">Ambassador Tasks</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete these tasks to unlock achievements and advance your AI knowledge.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{completedTasks}/8</div>
                <div className="text-sm text-muted-foreground">Tasks Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{totalPoints}</div>
                <div className="text-sm text-muted-foreground">Points Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{Math.round((completedTasks / 8) * 100)}%</div>
                <div className="text-sm text-muted-foreground">Progress</div>
              </div>
            </div>
          </div>

          {/* Tasks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {tasks.map((task) => {
              const IconComponent = task.icon;
              return (
                <Card key={task.id} className="gradient-card border shadow-md hover:shadow-lg transition-smooth">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{task.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className={getDifficultyColor(task.difficulty)}>
                              {task.difficulty}
                            </Badge>
                            <Badge variant="outline">
                              {task.points} pts
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className={`${getStatusColor(task.status)} flex items-center gap-1`}>
                        {getStatusIcon(task.status)}
                        {task.status === "in-progress" ? "In Progress" : task.status === "completed" ? "Completed" : "Pending"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm mb-4">
                      {task.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">
                        {task.category}
                      </Badge>
                      <Button 
                        variant={task.status === "completed" ? "secondary" : "gradient"} 
                        size="sm"
                        disabled={task.status === "completed"}
                      >
                        {task.status === "completed" ? "Completed" : task.status === "in-progress" ? "Continue" : "Start Task"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Achievement Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-md mx-auto gradient-card shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Next Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete {8 - completedTasks} more tasks to earn the "AI Pioneer" badge!
                </p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary rounded-full h-2 transition-smooth" 
                    style={{ width: `${(completedTasks / 8) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;