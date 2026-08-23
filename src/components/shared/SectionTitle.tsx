import { cn } from "@/lib/utils";
import { HyperText } from "../ui/hyper-text";

export const SectionTitle = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <HyperText
      startOnView
      animateOnHover
      className={cn(
        "uppercase text-black text-6xl md:text-[6rem] font-bold font-heading leading-none",
        className,
      )}
    >
      {children}
    </HyperText>
  );
};
