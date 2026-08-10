import { Container } from '../common/Container';

interface TechStackProps {
    stack?: string[];
    index?: string;
}

export default function TechStack({
    stack = ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Figma'],
    index = '05 — STACK',
}: TechStackProps) {
    return (
        <section className="py-16 bg-white text-gray-900 font-sans border-t border-gray-200">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Index label */}
                    <div className="lg:col-span-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                            {index}
                        </span>
                    </div>

                    {/* Tech list */}
                    <div className="lg:col-span-9">
                        <ul className="flex flex-wrap gap-x-10 gap-y-4">
                            {stack.map((tech, i) => (
                                <li
                                    key={i}
                                    className="text-base sm:text-lg font-medium text-black"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
