import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import React from 'react'

export const EventCard = ({
  image,
  title,
  date,
  location,
  description,
}: {
  image: any;
  title: any;
  date: any;
  location: any;
  description: any;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
    >
      <div className="relative h-56 md:h-64">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 text-sm bg-black/60 rounded-full px-3 py-1">
            <Calendar className="size-4" /> {date}
          </span>
          <span className="inline-flex items-center gap-2 text-sm bg-black/60 rounded-full px-3 py-1">
            <MapPin className="size-4" /> {location}
          </span>
        </div>
      </div>
      <div className="p-4 md:p-5">
        <h3 className="text-lg md:text-xl font-bold mb-1">{title}</h3>
        <p className="text-white/75 mb-4 text-sm md:text-base">{description}</p>
        <div className="flex gap-3">
          <a
            href="#"
            className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2"
          >
            Confirmar asistencia
          </a>
          <a
            href="#"
            className="rounded-xl border border-white/20 px-4 py-2 hover:border-white/40"
          >
            Detalles
          </a>
        </div>
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-white/10 transition" />
    </motion.article>
  );
};
