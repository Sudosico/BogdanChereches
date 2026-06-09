import { cn } from "@/lib/utils";

interface OrganicDividerProps {
  variant?: "wave" | "curve" | "peak";
  flip?: boolean;
  className?: string;
  fill?: string;
}

export function OrganicDivider({
  variant = "wave",
  flip = false,
  className,
  fill = "fill-ivory",
}: OrganicDividerProps) {
  const paths = {
    wave: "M0,64 C320,120 480,0 720,48 C960,96 1200,20 1440,64 L1440,128 L0,128 Z",
    curve:
      "M0,96 C240,32 480,96 720,64 C960,32 1200,80 1440,48 L1440,128 L0,128 Z",
    peak: "M0,80 C180,120 360,20 540,60 C720,100 900,30 1080,70 C1260,110 1380,50 1440,80 L1440,128 L0,128 Z",
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden leading-[0] -mt-px",
        flip && "rotate-180",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className={cn("block w-full h-16 md:h-24", fill)}
      >
        <path d={paths[variant]} />
      </svg>
    </div>
  );
}
