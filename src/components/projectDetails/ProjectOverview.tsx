import Image from 'next/image';
import { Container } from '../common/Container';

interface ProjectOverviewProps {
    client?: string;
    overview?: string;
    year?: string;
    imageUrl?: string;
    liveLink?: string;
    techStack?: string[];
}

export default function ProjectOverview({
    client = "LUMEN",
    overview = "LUMEN is a contemporary art space built around a single curatorial principle — that the work should determine the conditions of its presentation, not the other way around. The identity project created a visual system disciplined enough to disappear when needed.",
    year = "2026",
    imageUrl = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600",
    liveLink = "#",
    techStack = ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Figma"],
}: ProjectOverviewProps) {
    return (
        <section className='mt-28'>
            <Container>
                {/* Top Banner Image */}
                <div className="relative w-full aspect-[1.2/0.4] overflow-hidden mb-6 bg-gray-100">
                    <Image
                        src={imageUrl}
                        alt={`${client} project header`}
                        fill
                        priority
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="object-cover grayscale"
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
                        <p className="text-gray-900 leading-relaxed text-lg md:text-xl lg:text-2xl font-normal pr-2">
                            {overview}
                        </p>
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-xs uppercase tracking-widest font-semibold text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity duration-200"
                        >
                            See Project ↗
                        </a>
                    </div>

                    {/* Year */}
                    <div className="lg:col-span-2 space-y-2 lg:text-right">
                        <span className="block text-xs uppercase tracking-wider text-gray-400 font-medium">
                            Year
                        </span>
                        <p className="text-sm font-medium text-black">{year}</p>
                    </div>
                </div>

                {/* Tech Stack Strip */}
                {techStack && techStack.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-gray-200">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs uppercase tracking-wider text-gray-400 font-medium mr-2">
                                Stack
                            </span>
                            {techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="font-mono text-xs text-gray-700 border border-gray-300 rounded-full px-3 py-1 hover:border-gray-600 hover:text-black transition-colors duration-150"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
}