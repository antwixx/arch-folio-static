import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/commercial-project.jpg";

const Projects = () => {
  return (
    <>
      <Navigation />
      
      <Hero
        title="Our Projects"
        subtitle="Explore our portfolio of architectural excellence"
        imageSrc={heroImage}
        height="half"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Project Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our diverse portfolio spanning residential, commercial, and healthcare projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link
              to="/projects/residential"
              className="group relative h-96 overflow-hidden hover-scale"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(/src/assets/residential-project.jpg)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                <h3 className="text-3xl font-bold mb-2">Residential</h3>
                <p className="text-sm">Custom homes and renovations</p>
              </div>
            </Link>

            <Link
              to="/projects/commercial"
              className="group relative h-96 overflow-hidden hover-scale"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(/src/assets/commercial-project.jpg)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                <h3 className="text-3xl font-bold mb-2">Commercial</h3>
                <p className="text-sm">Office and retail spaces</p>
              </div>
            </Link>

            <Link
              to="/projects/healthcare"
              className="group relative h-96 overflow-hidden hover-scale"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(/src/assets/healthcare-project.jpg)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                <h3 className="text-3xl font-bold mb-2">Healthcare</h3>
                <p className="text-sm">Medical facilities and clinics</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm">© 2024 BR Design & Architecture. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Projects;
