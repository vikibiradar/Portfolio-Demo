import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Brain, MessageSquare, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Alzheimer's Disease Detection using CNN",
      description: "Built and maintained full-stack web applications using Java Spring Boot and Angular. Developed RESTful APIs, implemented MySQL database solutions and resolved migration issues across the stack.",
      technologies: ["Python", "CNN", "TensorFlow", "VGG19", "MRI"],
      icon: Brain,
      github: "https://github.com/vikrambiradar",
      live: "#",
      accuracy: "92%",
      features: [
        "Deep learning pipeline for MRI preprocessing",
        "Data augmentation and classification",
        "Custom CNN achieved 92% accuracy using VGG19 83%"
      ]
    },
    {
      title: "Multimodal PDF Chat Application",
      description: "Developed a chat application with PDF upload and AI-powered responses using the OpenAI API. Used Langchain and React for frontend development, incorporating Tailwind CSS for design.",
      technologies: ["Gemini AI", "LangChain", "AWS SDK", "OpenAI API", "Next.js", "React", "TypeScript"],
      icon: MessageSquare,
      github: "https://github.com/vikrambiradar",
      live: "#",
      features: [
        "PDF upload and AI-powered responses",
        "Pinecone for vector embeddings",
        "Optimized AI responses using OpenAI Edge"
      ]
    },
    {
      title: "Natural Language to SQL Query Application",
      description: "Developed a natural language to SQL query application that allows users to interact with databases. Integrated Groq API with multiple LLM models for enhanced query processing.",
      technologies: ["Python", "Streamlit", "Groq API", "SQLite", "LangChain", "Pandas"],
      icon: Database,
      github: "https://github.com/vikrambiradar",
      live: "#",
      features: [
        "Natural language database interaction",
        "Multiple LLM models integration",
        "Groq API for enhanced processing"
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card/60 backdrop-blur-sm border border-primary/20 hover:shadow-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {project.accuracy && (
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {project.accuracy} Accuracy
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;