import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display text-2xl tracking-tight text-foreground",
        className,
      )}
    >
      <span>updraf</span>
      <span className="relative">
        t
        <span className="absolute -top-1 -right-1.5 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent-glow)]" />
      </span>
    </span>
  );
}
