import { ChevronRight, Newspaper } from "lucide-react";

export const NewsCard =({
  image,
  tag,
  title,
  blurb,
  date,
}: {
  image:any;
  tag:any;
  title:any;
  blurb:any;
  date:any;
}) => {
  return (
    <article className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
      <div className="relative h-44 md:h-52">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-sm">
          <Newspaper className="size-4" /> {tag}
        </div>
      </div>
      <div className="p-4 md:p-5">
        <div className="text-xs text-white/60 mb-1">{date}</div>
        <h3 className="text-lg md:text-xl font-bold mb-1">{title}</h3>
        <p className="text-white/75 mb-3 text-sm md:text-base">{blurb}</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
        >
          Leer más <ChevronRight className="size-4" />
        </a>
      </div>
    </article>
  );
}
