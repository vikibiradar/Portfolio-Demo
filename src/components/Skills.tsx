import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Brain, Users, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "SQL", "Java", "JavaScript", "TypeScript"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Machine Learning", "Deep Learning", "CNN", "Generative AI", "Agentic AI", "NLP", "OOPS", "DBMS"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Data Analytics & Visualization",
      icon: Database,
      skills: ["PowerBI", "Python", "React", "Data Analysis", "Dashboard Development"],
      color: "bg-secondary/20 text-secondary-foreground border-secondary/30"
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      skills: ["LangChain", "Scikit-learn", "TensorFlow", "Keras", "Streamlit", "Flask", "Spring Boot", "Angular", "Next.js"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: ["AWS SDK", "OpenAI API", "Git", "VS Code", "Google Colab", "Jupyter Notebooks"],
      color: "bg-muted/20 text-muted-foreground border-muted/30"
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: ["MySQL", "MongoDB", "RESTful APIs", "FastAPI", "PyTorch"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Decision-making", "Leadership", "Multitasking", "Team Collaboration"],
      color: "bg-secondary/20 text-secondary-foreground border-secondary/30"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className={`${category.color} hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;