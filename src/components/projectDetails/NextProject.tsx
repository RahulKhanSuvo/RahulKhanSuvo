import Image from "next/image";
import { Container } from "../common/Container";
import TransitionLink from "../shared/TransitionLink";

interface NextProjectProps {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export default function NextProject({
  title,
  description,
  slug,
  imageUrl,
}: NextProjectProps) {
  return (
    <section className="py-16 bg-white border-t border-neutral-200">
      <Container>
        <TransitionLink href={`/project/${slug}`} className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="block text-xs uppercase tracking-widest text-gray-400 mb-4">
                Next Project
              </span>
              <h2 className="font-heading text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.9] tracking-tight text-black mb-6">
                {title}
              </h2>
              <p className="text-xl leading-relaxed text-gray-600 max-w-md">
                {description}
              </p>
            </div>
          </div>
        </TransitionLink>
      </Container>
    </section>
  );
}
