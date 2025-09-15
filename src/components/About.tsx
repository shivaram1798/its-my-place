import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Passionate Developer & Creative Problem Solver
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                beautiful, functional, and user-centered digital experiences. My journey began 
                with a curiosity for how things work and evolved into a passion for building 
                solutions that make a difference.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I believe in the power of clean code, thoughtful design, and continuous learning. 
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Continuous Learner
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 shadow-soft transition-smooth hover:shadow-medium">
                <h4 className="font-semibold text-primary mb-2">Education</h4>
                <p className="text-muted-foreground">Computer Science, University Name</p>
                <p className="text-sm text-muted-foreground">Bachelor's Degree • 2018</p>
              </Card>
              
              <Card className="p-6 shadow-soft transition-smooth hover:shadow-medium">
                <h4 className="font-semibold text-primary mb-2">Experience</h4>
                <p className="text-muted-foreground">5+ years in web development</p>
                <p className="text-sm text-muted-foreground">Frontend • Backend • Full-Stack</p>
              </Card>
              
              <Card className="p-6 shadow-soft transition-smooth hover:shadow-medium">
                <h4 className="font-semibold text-primary mb-2">Passion</h4>
                <p className="text-muted-foreground">Creating impactful digital experiences</p>
                <p className="text-sm text-muted-foreground">User-centered design • Clean code</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;