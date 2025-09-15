import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Server, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "C#", level: 85 },
        { name: "Java", level: 80 },
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend & Data Engineering",
      skills: [
        { name: "ASP.NET Core", level: 90 },
        { name: "Node.js/Express.js", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "Apache Kafka", level: 85 },
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Frontend & Web",
      skills: [
        { name: "React", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "TailwindCSS", level: 85 },
        { name: "RESTful APIs", level: 95 },
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker/Kubernetes", level: 80 },
        { name: "AWS/Azure", level: 75 },
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Skills & Expertise
          </h2>
          
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A diverse skill set built through years of hands-on experience and continuous learning
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 shadow-soft transition-smooth hover:shadow-medium">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;