import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Vikram Biradar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              AI & Data Science Student
            </p>
            <p className="text-lg text-accent font-medium">
              Data Analyst Intern @ TUV-SUD
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-8 bg-card/50 backdrop-blur-sm border border-primary/20 shadow-elegant animate-slide-up">
            <p className="text-lg text-card-foreground leading-relaxed mb-8">
              Passionate about leveraging theoretical concepts in practical applications, 
              aspiring to be a valuable part of organizations focused on professional growth-oriented environments.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                <a href="mailto:vikrambiradar08@gmail.com">
                  <Mail className="w-4 h-4" />
                  vikrambiradar08@gmail.com
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 9080970418
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Pune, India
              </Button>
            </div>

            <div className="flex justify-center gap-4">
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <a href="https://github.com/vikibiradar" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="https://www.linkedin.com/in/vikrambiradar/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;