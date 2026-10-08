import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building2, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Software Developer",
      company: "TUV-SUD",
      location: "Pune",
      period: "Dec 2025 - Current",
      type: "Full-time",
      description: "Working on data analytics and AI solutions using PowerBI, Generative AI, and Agentic AI technologies with Python and React.",
      technologies: ["PowerBI", "Generative AI", "Agentic AI", "Python", "React"],
      highlights: [
        "Developed interactive dashboards using PowerBI for data visualization",
        "Implemented Generative AI and Agentic AI solutions for automation",
        "Built data processing pipelines using Python and React interfaces"
      ]
    },
    {
      title: "Intern",
      company: "TUV-SUD",
      location: "Remote",
      period: "Jun 2024 - Current",
      type: "Internship",
      description: "Working on data analytics and AI solutions using PowerBI, Generative AI, and Agentic AI technologies with Python and React.",
      technologies: ["PowerBI", "Generative AI", "Agentic AI", "Python", "React"],
      highlights: [
        "Developed interactive dashboards using PowerBI for data visualization",
        "Implemented Generative AI and Agentic AI solutions for automation",
        "Built data processing pipelines using Python and React interfaces"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Vishwakarma Institute of Information Technology, Pune",
      period: "Jan 2022 - May 2025",
      cgpa: "8.71/10.00",
      coursework: ["Data Structures and Algorithms", "Machine Learning", "Cloud Computing", "Statistics", "NLP", "DBMS"]
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Saint Mai Junior College, Pune",
      period: "July 2019 - April 2021",
      percentage: "89.1%"
    }
  ];

  const certifications = [
    {
      title: "Google Data Analytics",
      issuer: "Coursera",
      date: "Nov 2024"
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "May 2023"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-elegant">
                <img 
                  src="/lovable-uploads/2dfdb99c-07ab-4edb-b0a9-f57e572accd9.png" 
                  alt="Vikram Biradar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Professional journey and academic achievements in technology and AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Experience Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    </div>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="bg-secondary/20 text-secondary-foreground border-secondary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-card-foreground">{edu.degree}</h4>
                    <p className="text-primary font-semibold">{edu.institution}</p>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {edu.cgpa || edu.percentage}
                    </Badge>
                  </div>

                  {edu.coursework && (
                    <div>
                      <h5 className="font-semibold text-card-foreground mb-2">Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge 
                            key={course} 
                            variant="outline" 
                            className="bg-muted/20 text-muted-foreground border-muted/30"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-card-foreground mb-2">{cert.title}</h4>
                  <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <CalendarDays className="w-4 h-4" />
                    {cert.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
