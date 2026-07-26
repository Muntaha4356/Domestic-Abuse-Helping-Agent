import { Phone, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { Resource } from "@/lib/mockData";

type Props = {
  resource: Resource;
  onOfferHandoff?: (resource: Resource) => void;
};

export function ResourceCard({ resource, onOfferHandoff }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full max-w-md rounded-3xl border border-border/60 bg-card p-5 shadow-sm shadow-primary/5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            <span>Santa Cruz</span>
            {resource.tag && (
              <span className="rounded-full bg-sage-soft px-2 py-0.5 text-[10px] font-semibold text-foreground/70">
                {resource.tag}
              </span>
            )}
          </div>
          <h3 className="mt-1.5 truncate font-serif text-lg text-foreground">{resource.name}</h3>
        </div>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{resource.description}</p>

      <div className="mt-4 space-y-2">
        <a
          href={resource.phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-sage-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Phone className="h-4 w-4" aria-hidden />
          {resource.phone}
        </a>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          <span>{resource.hours}</span>
        </div>
      </div>

      {onOfferHandoff && (
        <button
          type="button"
          onClick={() => onOfferHandoff(resource)}
          className="mt-4 w-full rounded-2xl border border-border/70 bg-background/60 px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Prepare a message for {resource.name.split(" ")[0]}
        </button>
      )}
    </motion.article>
  );
}
