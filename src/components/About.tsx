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
              Data Engineer & Software Developer
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 4 years of experience in software development and data engineering, 
              I specialize in building scalable systems, optimizing performance, and implementing 
              machine learning solutions. Currently pursuing my Master's in Computer Systems at 
              Riga Technical University, focusing on ML and Swarm Intelligence.
            </p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My journey spans from developing real-time reconciliation frameworks that improved 
              performance by 38% to migrating large-scale databases from Teradata to BigData, 
              reducing management risks by 85%. I'm passionate about leveraging technology to 
              solve complex problems and drive business impact.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Data Engineering
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                System Optimization
              </span>
            </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 shadow-soft transition-smooth hover:shadow-medium">
                <h4 className="font-semibold text-primary mb-2">Education</h4>
                <p className="text-muted-foreground">MS Computer Systems, Riga Technical University</p>
                <p className="text-sm text-muted-foreground">Sep 2023 - Jun 2025 • 7/10</p>
                <p className="text-sm text-muted-foreground mt-1">BTech CSE, Anurag Engineering College</p>
                <p className="text-sm text-muted-foreground">Aug 2016 - Jun 2020 • 8.02/10</p>
              </Card>
              
              <Card className="p-6 shadow-soft transition-smooth hover:shadow-medium">
                <h4 className="font-semibold text-primary mb-2">Experience</h4>
                <p className="text-muted-foreground">4+ years in software development</p>
                <p className="text-sm text-muted-foreground">Data Engineering • Full-Stack • ML</p>
              </Card>
              
              <Card className="p-6 shadow-soft transition-smooth hover:shadow-medium">
                <h4 className="font-semibold text-primary mb-2">Specialization</h4>
                <p className="text-muted-foreground">ML-driven system optimization</p>
                <p className="text-sm text-muted-foreground">Performance • Scalability • Innovation</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;