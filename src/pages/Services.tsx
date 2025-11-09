import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/commercial-project.jpg";

const Services = () => {
  return (
    <>
      <Navigation />
      
      <Hero
        title="Our Services"
        subtitle="Comprehensive architectural solutions for every need"
        imageSrc={heroImage}
        height="half"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Residential Services */}
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Residential Architecture</CardTitle>
                <CardDescription className="text-lg">
                  Creating homes that inspire and endure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We design custom homes that reflect your unique lifestyle, from contemporary 
                  masterpieces to traditional family homes. Our residential services include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom home design</li>
                  <li>• Home renovations and additions</li>
                  <li>• Interior space planning</li>
                  <li>• Sustainable residential design</li>
                  <li>• Historic home restoration</li>
                  <li>• Landscape integration</li>
                </ul>
              </CardContent>
            </Card>

            {/* Commercial Services */}
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Commercial Architecture</CardTitle>
                <CardDescription className="text-lg">
                  Spaces that drive business success
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  From office buildings to retail spaces, we create commercial environments that 
                  enhance productivity and brand identity. Our services include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Office building design</li>
                  <li>• Retail and restaurant spaces</li>
                  <li>• Mixed-use developments</li>
                  <li>• Tenant improvements</li>
                  <li>• Corporate headquarters</li>
                  <li>• Industrial facilities</li>
                </ul>
              </CardContent>
            </Card>

            {/* Healthcare Services */}
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Healthcare Architecture</CardTitle>
                <CardDescription className="text-lg">
                  Healing environments built with care
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We specialize in healthcare facilities that prioritize patient comfort, staff 
                  efficiency, and regulatory compliance. Our healthcare services include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Medical office buildings</li>
                  <li>• Dental and specialty clinics</li>
                  <li>• Outpatient care centers</li>
                  <li>• Hospital expansions</li>
                  <li>• Senior living facilities</li>
                  <li>• Medical equipment planning</li>
                </ul>
              </CardContent>
            </Card>

            {/* Additional Services */}
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Comprehensive Services</CardTitle>
                <CardDescription className="text-lg">
                  Full project support from start to finish
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Beyond design, we offer complete architectural services to ensure project success:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Site analysis and feasibility studies</li>
                  <li>• 3D visualization and rendering</li>
                  <li>• Construction administration</li>
                  <li>• Building code consultation</li>
                  <li>• Sustainable design consulting</li>
                  <li>• Project budgeting and scheduling</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-secondary p-12 text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life. Contact us today for a 
              consultation and discover the BR Design & Architecture difference.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Contact Us
            </a>
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

export default Services;
