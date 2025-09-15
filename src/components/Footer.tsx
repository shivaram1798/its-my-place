import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Alex Developer</h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Passionate about creating beautiful digital experiences and solving complex problems through code.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:hello@alexdeveloper.com"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
            >
              <Mail size={24} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
              © 2024 Alex Developer. Made with <Heart size={16} className="text-red-400" /> and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;