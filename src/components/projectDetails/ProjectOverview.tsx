import { Container } from "../common/Container";
import ParallaxImage from "../ui/ParallaxImage";

interface ProjectOverviewProps {
  client?: string;
  overview?: string;
  year?: string;
  imageUrl?: string;
  liveLink?: string;
  githubLink?: string;
}

export default function ProjectOverview({
  client = "LUMEN",
  overview = "LUMEN is a contemporary art space built around a single curatorial principle — that the work should determine the conditions of its presentation, not the other way around. The identity project created a visual system disciplined enough to disappear when needed.",
  year = "2026",
  imageUrl = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600",
  liveLink = "#",
  githubLink,
}: ProjectOverviewProps) {
  return (
    <section className="mt-28">
      <Container>
        {/* Top Banner Image with parallax */}
        <div className="relative w-full aspect-[1.2/0.5] overflow-hidden mb-6 bg-gray-100">
          <ParallaxImage
            src={imageUrl}
            alt={`${client} project header`}
            priority
            speed={30}
            imgClassName="object-cover"
          />
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 pt-2 items-start">
          {/* Client */}
          <div className="lg:col-span-3 space-y-2">
            <span className="block text-xs uppercase tracking-wider text-gray-400 font-medium">
              Client
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black uppercase">
              {client}
            </h1>
          </div>

          {/* Overview + Live Link */}
          <div className="lg:col-span-7 space-y-4">
            <span className="block text-xs uppercase tracking-wider text-gray-400 font-medium">
              Overview
            </span>
            <p className="text-gray-900 leading-relaxed text-base md:text-lg lg:text-xl font-normal pr-2">
              {overview}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs uppercase tracking-widest font-semibold text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity duration-200"
              >
                See Project ↗
              </a>
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs uppercase tracking-widest font-semibold text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity duration-200"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>

          {/* Year */}
          <div className="lg:col-span-2 space-y-2 lg:text-right">
            <span className="block text-xs uppercase tracking-wider text-gray-400 font-medium">
              Year
            </span>
            <p className="text-sm font-medium text-black">{year}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
