import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import residentialImage from "@/assets/residential-project.jpg";

const ProjectsResidential = () => {
  const projects = [
    {
      title: "Modern Lakefront Estate",
      location: "Lake Forest, Illinois",
      imageSrc: residentialImage,
    },
    {
      title: "Contemporary Urban Residence",
      location: "Chicago, Illinois",
      imageSrc: residentialImage,
    },
    {
      title: "Craftsman Home Renovation",
      location: "Oak Park, Illinois",
      imageSrc: residentialImage,
    },
    {
      title: "Suburban Family Home",
      location: "Naperville, Illinois",
      imageSrc: residentialImage,
    },
    {
      title: "Historic Home Restoration",
      location: "Evanston, Illinois",
      imageSrc: residentialImage,
    },
    {
      title: "Luxury Custom Build",
      location: "Winnetka, Illinois",
      imageSrc: residentialImage,
    },
  ];

  return (
    <>
      <Navigation />
      
      <Hero
        title="Residential Projects"
        subtitle="Custom homes and renovations that inspire"
        imageSrc={residentialImage}
        height="half"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Residential Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From contemporary masterpieces to timeless renovations, each project reflects our 
              commitment to exceptional residential design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category="Residential"
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

export default ProjectsResidential;
