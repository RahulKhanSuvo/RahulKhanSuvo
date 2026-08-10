import { Container } from '../common/Container';
import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from '../ui/scroll-based-velocity';

interface TechStackProps {
    stack?: string[];
    index?: string;
}

export default function TechStack({
    stack = ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Figma', 'PostgreSQL', 'Prisma', 'Vercel'],
    index = '05 — STACK',
}: TechStackProps) {
    return (
        <section className="py-16 bg-white text-gray-900 font-sans border-t border-gray-200 overflow-hidden">

            <div className="relative w-full">
                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-linear-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-linear-to-l from-white to-transparent" />

                <ScrollVelocityContainer>
                    <ScrollVelocityRow
                        baseVelocity={6}
                        direction={1}
                        pauseOnHover
                        gap={48}
                    >
                        <div className="flex items-center gap-12">
                            {stack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="whitespace-nowrap text-2xl sm:text-3xl font-medium text-black flex items-center gap-12"
                                >
                                    {tech}
                                    <span className="text-gray-300 text-lg select-none">·</span>
                                </span>
                            ))}
                        </div>
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>
            </div>
        </section>
    );
}
