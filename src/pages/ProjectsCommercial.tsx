import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import commercialImage from "@/assets/commercial-project.jpg";

const ProjectsCommercial = () => {
  const projects = [
    {
      title: "Corporate Office Tower",
      location: "Downtown Chicago, Illinois",
      imageSrc: commercialImage,
    },
    {
      title: "Retail Shopping Center",
      location: "Schaumburg, Illinois",
      imageSrc: commercialImage,
    },
    {
      title: "Restaurant & Bar",
      location: "River North, Chicago",
      imageSrc: commercialImage,
    },
    {
      title: "Mixed-Use Development",
      location: "Oak Park, Illinois",
      imageSrc: commercialImage,
    },
    {
      title: "Industrial Warehouse",
      location: "Joliet, Illinois",
      imageSrc: commercialImage,
    },
    {
      title: "Boutique Hotel",
      location: "Naperville, Illinois",
      imageSrc: commercialImage,
    },
  ];

  return (
    <>
      <Navigation />
      
      <Hero
        title="Commercial Projects"
        subtitle="Innovative spaces that drive business success"
        imageSrc={commercialImage}
        height="half"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Commercial Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating functional, inspiring commercial environments that enhance brand identity 
              and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category="Commercial"
                imageSrc={project.imageSrc}
                location={project.location}
              />
            ))}
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

export default ProjectsCommercial;
