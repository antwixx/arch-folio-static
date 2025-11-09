import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  height?: "full" | "half";
  children?: ReactNode;
}

const Hero = ({ title, subtitle, imageSrc, height = "full", children }: HeroProps) => {
  return (
    <section
      className={`relative ${
        height === "full" ? "h-screen" : "h-[60vh]"
      } flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-primary-foreground max-w-3xl mx-auto text-shadow-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Hero;
