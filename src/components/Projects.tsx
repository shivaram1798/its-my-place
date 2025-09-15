import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-time Reconciliation Framework",
      description: "Built a high-performance reconciliation system using webhooks and Apache Kafka, achieving 38% performance improvement and 8.5% revenue boost for 1300+ customers at Unavo.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Apache Kafka", "Webhooks", "C#", "ASP.NET Core", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Chatbot for Robocalls",
      description: "Developed an intelligent robocall answering system using LLMs including OpenAI, Hugging Face, and Llama APIs with rule-based mappings for automated call handling.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      technologies: ["Python", "OpenAI API", "Llama API", "Pandas", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Plant Seedlings Classification",
      description: "Created a deep learning CNN model for plant seedling classification with an interactive Flask web interface, processing large image datasets for accurate plant identification.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Keras", "Flask", "CNN", "OpenCV"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Database Migration System",
      description: "Led migration from Teradata to BigData (Hadoop) at TCS, reducing database management risks by 85% and developing automation framework for 1000+ test cases.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      technologies: ["Hadoop", "Teradata", "Big Data", "Python", "Automation Testing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Featured Projects
          </h2>
          
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden shadow-soft transition-smooth hover:shadow-medium ${
                  project.featured ? 'md:grid md:grid-cols-2' : ''
                }`}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent/90 text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;