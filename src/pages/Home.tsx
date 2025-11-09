import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";
import residentialProject from "@/assets/residential-project.jpg";
import commercialProject from "@/assets/commercial-project.jpg";
import healthcareProject from "@/assets/healthcare-project.jpg";

const Home = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <Hero
        title="BR Design & Architecture"
        subtitle="Over 35 years of field experience. We're with you from concept to concrete."
        imageSrc={heroImage}
      >
        <div className="flex gap-4 justify-center mt-8">
          <Link to="/projects">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View Our Work
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm">
              Get In Touch
            </Button>
          </Link>
        </div>
      </Hero>

      {/* About Section */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-up">
              Award-Winning Design Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BR Design and Architecture is an award-winning company with a reputation for experienced 
              design coupled with honest advice. With over 35 years in the field, we bring unparalleled 
              expertise to every project, from residential masterpieces to commercial landmarks and 
              healthcare facilities that prioritize both function and beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Recent Projects</h2>
            <p className="text-lg text-muted-foreground">
              Discover our latest architectural achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ProjectCard
              title="Modern Residential Estate"
              category="Residential"
              imageSrc={residentialProject}
              location="Chicago, Illinois"
              link="/projects/residential"
            />
            <ProjectCard
              title="Corporate Headquarters"
              category="Commercial"
              imageSrc={commercialProject}
              location="Downtown Chicago"
              link="/projects/commercial"
            />
            <ProjectCard
              title="Medical Center Expansion"
              category="Healthcare"
              imageSrc={healthcareProject}
              location="Suburban Chicago"
              link="/projects/healthcare"
            />
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" variant="outline">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Residential</h3>
              <p className="text-muted-foreground">
                Custom homes and renovations that reflect your unique lifestyle and vision
              </p>
            </div>
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Commercial</h3>
              <p className="text-muted-foreground">
                Innovative commercial spaces designed for functionality and impact
              </p>
            </div>
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Healthcare</h3>
              <p className="text-muted-foreground">
                Healing environments that prioritize patient care and operational efficiency
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">
                Learn More About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm">© 2024 BR Design & Architecture. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
