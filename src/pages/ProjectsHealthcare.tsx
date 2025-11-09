import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import healthcareImage from "@/assets/healthcare-project.jpg";

const ProjectsHealthcare = () => {
  const projects = [
    {
      title: "Medical Office Building",
      location: "Arlington Heights, Illinois",
      imageSrc: healthcareImage,
    },
    {
      title: "Dental Specialty Center",
      location: "Naperville, Illinois",
      imageSrc: healthcareImage,
    },
    {
      title: "Outpatient Surgery Center",
      location: "Schaumburg, Illinois",
      imageSrc: healthcareImage,
    },
    {
      title: "Senior Living Facility",
      location: "Wheaton, Illinois",
      imageSrc: healthcareImage,
    },
    {
      title: "Hospital Wing Expansion",
      location: "Elmhurst, Illinois",
      imageSrc: healthcareImage,
    },
    {
      title: "Urgent Care Clinic",
      location: "Oak Brook, Illinois",
      imageSrc: healthcareImage,
    },
  ];

  return (
    <>
      <Navigation />
      
      <Hero
        title="Healthcare Projects"
        subtitle="Healing environments designed with care"
        imageSrc={healthcareImage}
        height="half"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Healthcare Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized healthcare facilities that prioritize patient comfort, staff efficiency, 
              and regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category="Healthcare"
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

export default ProjectsHealthcare;
