import Image from 'next/image';
import { Container } from '../common/Container';

interface ProjectOverviewProps {
    client?: string;
    overview?: string;
    services?: string[];
    year?: string;
    imageUrl?: string;
}

export default function ProjectOverview({
    client = "LUMEN",
    overview = "LUMEN is a contemporary art space built around a single curatorial principle — that the work should determine the conditions of its presentation, not the other way around. The identity project created a visual system disciplined enough to disappear when needed.",
    services = ["Brand Identity", "Spatial Design", "Art Direction"],
    year = "2026",
    imageUrl = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600",
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

                    {/* Overview */}
                    <div className="lg:col-span-5 space-y-2">
                        <span className="block text-xs uppercase tracking-wider text-gray-400 font-medium">
                            Overview
                        </span>
                        <p className="text-gray-900 leading-relaxed text-sm sm:text-base font-normal pr-2">
                            {overview}
                        </p>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2 space-y-2">
                        <span className="block text-xs uppercase tracking-wider text-gray-400 font-medium">
                            Services
                        </span>
                        <ul className="space-y-1 text-sm font-medium text-black">
                            {services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
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