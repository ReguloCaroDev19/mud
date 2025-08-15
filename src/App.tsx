import {
  Calendar,
  MapPin,
  Megaphone,
  ChevronRight,
  Newspaper,
} from "lucide-react";
import { motion } from "framer-motion";
import { EventCard } from "./components/EventCard";
import { NewsCard } from "./NewsCar";

// Landing page para "MUD - Motociclistas Unidos"
// Single-file React + Tailwind. 100% responsivo.

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Fondo con imagen y overlay oscuro */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start gap-6"
            >
              {/* Logo simple */}
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur px-4 py-2 border border-white/15 shadow-xl">
                <span className="text-2xl font-black tracking-wider">MUD</span>
                <span className="text-sm text-white/80">
                  Motociclistas Unidos
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Rutas, eventos y noticias
                <br />
                <span className="text-white/80 font-semibold">
                  para la comunidad biker
                </span>
              </h1>

              <p className="max-w-2xl text-white/80 text-lg">
                Descubre lo que viene, comparte tu próximo evento y ponte al día
                con lo más reciente del mundo motociclista.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#eventos"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 transition-shadow shadow-[0_8px_24px_rgba(16,185,129,.45)]"
                >
                  Ver eventos
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#noticias"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 hover:border-white/40 px-5 py-3"
                >
                  Últimas noticias
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Publicar Evento */}
      {/*<section className="relative -mt-10 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black p-5 md:p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Megaphone className="size-6" />
              <p className="font-semibold">
                ¿Tienes un evento? Publícalo para que toda la banda se entere.
              </p>
            </div>
            <a
              href="#publicar"
              className="rounded-xl bg-black text-white px-4 py-2 font-semibold hover:bg-black/80"
            >
              Publicar evento
            </a>
          </div>
        </div>
      </section>*/}

      {/* EVENTOS */}
      <section id="eventos" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Próximos eventos
              </h2>
              <p className="text-white/70">
                Encuentros, rodadas y festivales que vienen.
              </p>
            </div>
            <a href="#" className="text-sm text-white/70 hover:text-white">
              Ver todos
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Evento 1 */}
            <EventCard
              image="https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=2070&auto=format&fit=crop"
              title="Rodada Sierra Nocturna"
              date="Sáb, 23 Ago 2025"
              location="Santiago, N.L."
              description="Ruta panorámica con paradas para fotos y café. Obligatorio chaleco reflejante."
            />

            {/* Evento 2 */}
            <EventCard
              image="https://images.unsplash.com/photo-1493236312926-4b95b05b0e36?q=80&w=2070&auto=format&fit=crop"
              title="Festival Biker del Norte"
              date="Dom, 14 Sep 2025"
              location="Monterrey, N.L."
              description="Conciertos, zona de comida, stands y concurso de personalización."
            />
          </div>
        </div>
      </section>

      {/* NOTICIAS */}
      <section id="noticias" className="py-6 md:py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Noticias</h2>
              <p className="text-white/70">
                Lo más reciente en seguridad, equipo y comunidad.
              </p>
            </div>
            <a href="#" className="text-sm text-white/70 hover:text-white">
              Ver todas
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsCard
              image="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2070&auto=format&fit=crop"
              tag="Seguridad"
              title="Nuevas recomendaciones para rodadas nocturnas"
              blurb="Autoridades y clubes sugieren mejoras en iluminación y formación en grupo para reducir riesgos."
              date="15 Ago 2025"
            />

            <NewsCard
              image="https://images.unsplash.com/photo-1558981001-5dcf159eb1ba?q=80&w=2069&auto=format&fit=crop"
              tag="Equipo"
              title="Cascos modulares: ¿vale la pena el cambio?"
              blurb="Probamos 5 modelos populares y comparamos peso, ventilación y comodidad en viajes largos."
              date="12 Ago 2025"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-white/10 flex items-center justify-center font-black">
              M
            </div>
            <div>
              <p className="font-semibold">MUD — Motociclistas Unidos</p>
              <p className="text-sm text-white/60">Unidos por la ruta.</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-white/70">
            <a className="hover:text-white" href="#eventos">
              Eventos
            </a>
            <a className="hover:text-white" href="#noticias">
              Noticias
            </a>
            <a className="hover:text-white" href="#">
              Términos
            </a>
            <a className="hover:text-white" href="#">
              Privacidad
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
