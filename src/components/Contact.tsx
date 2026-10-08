import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Heart } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vikrambiradar08@gmail.com",
      href: "mailto:vikrambiradar08@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9080970418",
      href: "tel:+919080970418"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@vikibiradar",
      href: "https://github.com/vikibiradar"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "@vikrambiradar",
      href: "https://www.linkedin.com/in/vikrambiradar/"
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborations, and innovative projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Let's build something amazing together!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={contact.label} className="flex items-center gap-4 group">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <contact.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <a 
                          href={contact.href}
                          className="text-card-foreground font-medium hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground flex items-center gap-2">
                  <Github className="w-6 h-6 text-primary" />
                  Follow My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Check out my latest projects, professional updates, and connect with me on social platforms.
                </p>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
                        <social.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-card-foreground font-medium">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-secondary border border-primary/20 animate-fade-in">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm currently open to new opportunities and exciting projects. 
                Let's discuss how we can create something remarkable together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  Start a Conversation
                </Button>
                <Button size="lg" variant="outline">
                  <Github className="w-5 h-5 mr-2" />
                  View My Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-primary/20">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500" /> by Vikram Biradar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;