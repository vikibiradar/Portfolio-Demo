import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users, Heart, TreePine } from "lucide-react";

const VolunteerExperience = () => {
  const volunteerWork = [
    {
      title: "National Service Scheme (NSS VIIT)",
      organization: "Unnat Bharat Abhiyaan Incharge",
      period: "Ongoing",
      description: "Leading initiatives for rural development and community service as part of the National Service Scheme.",
      activities: [
        "Managed and executed the Campus Placement drive with concerns regarding Placements",
        "Volunteered in managing drive for Campus placements",
        "Blood Donation Awareness Campaign coordination",
        "Tree Plantation Training and Placement Cell VIIT coordination",
        "Department Head coordination of AI and DS community initiatives"
      ],
      impact: "Contributing to rural development and community welfare through organized volunteer activities and student placement coordination.",
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Community Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to giving back to the community through volunteer work and social initiatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {volunteerWork.map((work, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <work.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                      {work.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary mb-2">{work.organization}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      {work.period}
                    </div>
                  </div>
                  <Badge className="bg-accent/20 text-accent border-accent/30 flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    Volunteer
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {work.description}
                </p>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-primary" />
                    Key Activities & Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {work.activities.map((activity, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-3">
                        <span className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                  <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-accent" />
                    Community Impact:
                  </h4>
                  <p className="text-muted-foreground">{work.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerExperience;