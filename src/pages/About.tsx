import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import heroImage from "@/assets/hero-home.jpg";

const About = () => {
  return (
    <>
      <Navigation />
      
      <Hero
        title="About BR Design & Architecture"
        subtitle="Building excellence through experience and dedication"
        imageSrc={heroImage}
        height="half"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 35 years of field experience, BR Design & Architecture has established itself 
              as a leading architectural firm in the Chicago area. Founded on the principles of 
              excellence, innovation, and client satisfaction, we have grown from a small practice 
              into an award-winning firm trusted by clients across residential, commercial, and 
              healthcare sectors.
            </p>

            <h3 className="text-3xl font-bold text-primary mb-4 mt-12">Our Philosophy</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We believe that great architecture is born from a deep understanding of our clients' 
              needs, the context of the site, and the careful balance of form and function. Every 
              project we undertake begins with listening—truly hearing what our clients envision—and 
              ends with a built environment that exceeds expectations.
            </p>

            <h3 className="text-3xl font-bold text-primary mb-4 mt-12">Experience & Expertise</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our extensive experience spans diverse project types and scales. From intimate residential 
              renovations to large-scale commercial developments and specialized healthcare facilities, 
              we bring the same level of dedication and expertise to every project. Our team stays at 
              the forefront of architectural innovation, incorporating sustainable design practices and 
              the latest building technologies.
            </p>

            <h3 className="text-3xl font-bold text-primary mb-4 mt-12">Why Choose Us</h3>
            <ul className="text-lg text-muted-foreground space-y-3">
              <li>• Over 35 years of proven track record</li>
              <li>• Award-winning designs recognized by industry leaders</li>
              <li>• Comprehensive services from concept to completion</li>
              <li>• Collaborative approach with clients and contractors</li>
              <li>• Commitment to sustainable and innovative design</li>
              <li>• Deep understanding of local building codes and regulations</li>
            </ul>
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

export default About;
