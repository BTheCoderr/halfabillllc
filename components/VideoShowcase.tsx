interface VideoShowcaseProps {
  src: string;
  title: string;
  label?: string;
  className?: string;
  autoPlay?: boolean;
}

export function VideoShowcase({
  src,
  title,
  label,
  className = "",
  autoPlay = false,
}: VideoShowcaseProps) {
  return (
    <div className={`w-full max-w-lg ${className}`}>
      {label && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          {label}
        </p>
      )}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal shadow-2xl shadow-black/50">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange" />
        <video
          className="aspect-[9/16] w-full object-cover sm:aspect-video"
          controls
          preload="metadata"
          playsInline
          muted={autoPlay}
          autoPlay={autoPlay}
          loop={autoPlay}
          aria-label={title}
        >
          <source src={src} type="video/quicktime" />
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
