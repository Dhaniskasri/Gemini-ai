import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Star, Trophy, Target, Zap, Brain, Rocket } from "lucide-react";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    title: "About your personality",
    description: "five short simple,multiple choice question about your personality.",
    status: "in-progress",
    icon: Brain,
    category: "personality"
  },
  {
    id: 2,
    title: "Suggest a small Plan.",
    description: "Suggest a simple menu,a music playlist theme,and one fun game we can play.",
    status: "in-progress",
    icon: Target,
    category: "Plan"
  },
  {
    id: 3,
    title: "Pick a popular historical movies.",
    description: "pick a popular historical movies and point out three major inaccuracies in a fun,myth,busting way.",
    status: "pending",
    icon: Star,
    category: "Movies"
  },
  {
    id: 4,
    title: "Suggest a location for my weekend trip.",
    description: "suggest a location were i can go with my friends for a weekend get away.",
    status: "pending",
    icon: Trophy,
    category: "Trip"
  },
  {
    id: 5,
    title: "Suggest a 5 creative ideas to decorate my home.",
    description: "The festive season is here,Suggest a 5 creative ideas to decorate my home.",
    status: "pending",
    icon: Zap,
    category: "Creative idea"
  },
  {
    id: 6,
    title: "Deploy AI Application",
    description: "Deploy your machine learning model as a web application using cloud services.",
    status: "pending",
    icon: Rocket,
    category: "Development"
  },
  {
    id: 7,
    title: "Mentor Junior Students",
    description: "Guide and mentor 3 junior students in their AI learning journey.",
    status: "pending",
    icon: Star,
    category: "Mentorship"
  },
  {
    id: 8,
    title: "Research Paper Review",
    description: "Read and summarize 5 recent AI research papers and present findings.",
    status: "pending",
    icon: Brain,
    category: "Research"
  }
];

 

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
  const [task1Completed, setTask1Completed] = useState(false);
  const [task2Completed, setTask2Completed] = useState(false);
  const [task3Completed, setTask3Completed] = useState(false);
  const [task4Completed, setTask4Completed] = useState(false);
  const [task5Completed, setTask5Completed] = useState(false);
  const [task6Completed, setTask6Completed] = useState(false);
  const [task7Completed, setTask7Completed] = useState(false);
  const [task8Completed, setTask8Completed] = useState(false);
  const completedTasks =
    tasks.filter(task => task.status === "completed").length +
    (task1Completed ? 1 : 0) +
    (task2Completed ? 1 : 0) +
    (task3Completed ? 1 : 0) +
    (task4Completed ? 1 : 0) +
    (task5Completed ? 1 : 0) +
    (task6Completed ? 1 : 0) +
    (task7Completed ? 1 : 0) +
    (task8Completed ? 1 : 0);
  

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
                          
                        </div>
                      </div>
                      <Badge variant="outline" className={`${getStatusColor(
                        task.id === 1 ? (task1Completed ? "completed" : task.status)
                        : task.id === 2 ? (task2Completed ? "completed" : task.status)
                        : task.id === 3 ? (task3Completed ? "completed" : task.status)
                        : task.id === 4 ? (task4Completed ? "completed" : task.status)
                        : task.id === 5 ? (task5Completed ? "completed" : task.status)
                        : task.id === 6 ? (task6Completed ? "completed" : task.status)
                        : task.id === 7 ? (task7Completed ? "completed" : task.status)
                        : task.id === 8 ? (task8Completed ? "completed" : task.status)
                        : task.status
                      )} flex items-center gap-1`}>
                        {getStatusIcon(
                          task.id === 1 ? (task1Completed ? "completed" : task.status)
                          : task.id === 2 ? (task2Completed ? "completed" : task.status)
                          : task.id === 3 ? (task3Completed ? "completed" : task.status)
                          : task.id === 4 ? (task4Completed ? "completed" : task.status)
                          : task.id === 5 ? (task5Completed ? "completed" : task.status)
                          : task.id === 6 ? (task6Completed ? "completed" : task.status)
                          : task.id === 7 ? (task7Completed ? "completed" : task.status)
                          : task.id === 8 ? (task8Completed ? "completed" : task.status)
                          : task.status
                        )}
                        {task.id === 1
                          ? (task1Completed ? "Completed" : (task.status === "in-progress" ? "In Progress" : "Pending"))
                          : task.id === 2
                            ? (task2Completed ? "Completed" : "In Progress")
                          : task.id === 3
                            ? (task3Completed ? "Completed" : (task.status === "in-progress" ? "In Progress" : "Pending"))
                            : task.id === 4
                              ? (task4Completed ? "Completed" : (task.status === "in-progress" ? "In Progress" : "Pending"))
                              : task.id === 5
                                ? (task5Completed ? "Completed" : (task.status === "in-progress" ? "In Progress" : "Pending"))
                                : task.id === 6
                                  ? (task6Completed ? "Completed" : (task.status === "in-progress" ? "In Progress" : "Pending"))
                                  : task.id === 7
                                    ? (task7Completed ? "Completed" : (task.status === "in-progress" ? "In Progress" : "Pending"))
                                    : task.id === 8
                                      ? (task8Completed ? "Completed" : (task.status === "in-progress" ? "In Progress" : "Pending"))
                                : (task.status === "in-progress" ? "In Progress" : task.status === "completed" ? "Completed" : "Pending")}
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
                      {task.id === 1 ? (
                        task1Completed ? (
                          <Button 
                            variant="secondary" 
                            size="sm"
                            disabled
                          >
                            Completed
                          </Button>
                        ) : (
                          <a 
                            href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=17" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setTask1Completed(true)}
                          >
                            <Button 
                              variant="gradient" 
                              size="sm"
                            >
                              Start Task
                            </Button>
                          </a>
                        )
                      ) : task.id === 2 ? (
                        task2Completed ? (
                          <Button 
                            variant="secondary" 
                            size="sm"
                            disabled
                          >
                            Completed
                          </Button>
                        ) : (
                          <a 
                            href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=16" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setTask2Completed(true)}
                          >
                            <Button 
                              variant="gradient" 
                              size="sm"
                            >
                              Start Task
                            </Button>
                          </a>
                        )
                      ) : task.id === 3 ? (
                        task3Completed ? (
                          <Button 
                            variant="secondary" 
                            size="sm"
                            disabled
                          >
                            Completed
                          </Button>
                        ) : (
                          <a 
                            href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=15" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setTask3Completed(true)}
                          >
                            <Button 
                              variant="gradient" 
                              size="sm"
                            >
                              Start Task
                            </Button>
                          </a>
                        )
                      ) : task.id === 3 ? (
                        task3Completed ? (
                          <Button 
                            variant="secondary" 
                            size="sm"
                            disabled
                          >
                            Completed
                          </Button>
                        ) : (
                          <a 
                            href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=15" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setTask3Completed(true)}
                          >
                            <Button 
                              variant="gradient" 
                              size="sm"
                            >
                              Start Task
                            </Button>
                          </a>
                        )
                      ) : task.id === 4 ? (
                        task4Completed ? (
                          <Button 
                            variant="secondary" 
                            size="sm"
                            disabled
                          >
                            Completed
                          </Button>
                        ) : (
                          <a 
                            href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=14" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setTask4Completed(true)}
                          >
                            <Button 
                              variant="gradient" 
                              size="sm"
                            >
                              Start Task
                            </Button>
                          </a>
                        )
                      ) : task.id === 4 ? (
                        task4Completed ? (
                          <Button 
                            variant="secondary" 
                            size="sm"
                            disabled
                          >
                            Completed
                          </Button>
                        ) : (
                          <a 
                            href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=14" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setTask4Completed(true)}
                          >
                            <Button 
                              variant="gradient" 
                              size="sm"
                            >
                              Start Task
                            </Button>
                          </a>
                        )
                      ) : task.id === 5 ? (
                        task5Completed ? (
                          <Button 
                            variant="secondary" 
                            size="sm"
                            disabled
                          >
                            Completed
                          </Button>
                        ) : (
                          <a 
                            href="https://aiskillshouse.com/student/qr-mediator.html?uid=2988&promptId=13" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setTask5Completed(true)}
                          >
                            <Button 
                              variant="gradient" 
                              size="sm"
                            >
                              Start Task
                            </Button>
                          </a>
                        )
                      ) : task.id === 6 ? (
                        task6Completed ? (
                          <Button 
                            variant="secondary" 
                            size="sm"
                            disabled
                          >
                            Completed
                          </Button>
                        ) : (
                          <a 
                            href="https://aiskillshouse.com/student/qr-mediator.html?uid=3916&promptId=16" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setTask6Completed(true)}
                          >
                            <Button 
                              variant="gradient" 
                              size="sm"
                            >
                              Start Task
                            </Button>
                          </a>
                        )
                      ) : task.id === 7 ? (
                        task7Completed ? (
                          <Button 
                            variant="secondary" 
                            size="sm"
                            disabled
                          >
                            Completed
                          </Button>
                        ) : (
                          <a 
                            href="https://aiskillshouse.com/student/qr-mediator.html?uid=3916&promptId=15" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setTask7Completed(true)}
                          >
                            <Button 
                              variant="gradient" 
                              size="sm"
                            >
                              Start Task
                            </Button>
                          </a>
                        )
                      ) : task.id === 8 ? (
                        task8Completed ? (
                          <Button 
                            variant="secondary" 
                            size="sm"
                            disabled
                          >
                            Completed
                          </Button>
                        ) : (
                          <a 
                            href="https://aiskillshouse.com/student/qr-mediator.html?uid=3916&promptId=14" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setTask8Completed(true)}
                          >
                            <Button 
                              variant="gradient" 
                              size="sm"
                            >
                              Start Task
                            </Button>
                          </a>
                        )
                      ) : (
                        <Button 
                          variant={task.status === "completed" ? "secondary" : "gradient"} 
                          size="sm"
                          disabled={task.status === "completed"}
                        >
                          {task.status === "completed" ? "Completed" : task.status === "in-progress" ? "Continue" : "Start Task"}
                        </Button>
                      )}
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
                  Complete 8 task to get a  lap stickers!
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
