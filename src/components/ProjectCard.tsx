import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  location?: string;
  link?: string;
}

const ProjectCard = ({ title, category, imageSrc, location, link }: ProjectCardProps) => {
  const content = (
    <div className="group relative overflow-hidden bg-card hover-scale cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-warm-accent font-semibold mb-2">{category}</p>
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        {location && <p className="text-steel">{location}</p>}
      </div>
    </div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
};

export default ProjectCard;
