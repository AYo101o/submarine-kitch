"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  ChevronDown,
  Instagram,
  Music2,
} from "lucide-react";
import Head from "next/head";

export default function SubmarineKitchen() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Find Us", href: "#contact" },
  ];

  // Simple fade/slide presets
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" },
  } as const;

  return (
    <>
      {" "}
      <Head>
        <title>Submarine Kitchen | Fine Dining Experience</title>
        <meta
          name="description"
          content="Submarine Kitchen is a premium fine dining restaurant serving exquisite dishes with a modern twist. Order online or dine in today!"
        />
        <meta
          name="keywords"
          content="Submarine Kitchen, fine dining, restaurant, luxury food, order online"
        />
        <meta name="author" content="Submarine Kitchen" />
        <meta property="og:title" content="Submarine Kitchen" />
        <meta
          property="og:description"
          content="Premium fine dining restaurant experience. Reserve your table or order online."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://submarinekitchen.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
        {/* NAVBAR */}
        <header
          className={`fixed inset-x-0 top-0 z-50 transition-all ${
            scrolled
              ? "backdrop-blur bg-black/50 border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="#home" className="font-semibold tracking-widest text-xl">
                SUBMARINE KITCHEN
              </a>
              <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm uppercase tracking-widest text-zinc-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href="tel:+1234567890"
                className="hidden md:inline-block rounded-2xl border border-white/20 px-4 py-2 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition"
              >
                Order by Phone
              </a>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section
          id="home"
          className="relative flex items-center justify-center pt-28 pb-20"
        >
          {/* Luxury texture backdrop */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.05)_40%,transparent_80%)]" />
            <div
              className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1960&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Submarine Kitchen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto"
            >
              Elevated comfort classics. Minimalist design. Maximum flavor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#menu"
                className="rounded-2xl bg-white text-black px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition"
              >
                View Menu
              </a>
              <a
                href="tel:+1234567890"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm tracking-wider uppercase hover:bg-white hover:text-black transition"
              >
                Order by Phone
              </a>
            </motion.div>

            <div className="mt-16 flex justify-center">
              <a
                href="#about"
                className="group inline-flex flex-col items-center text-zinc-400"
              >
                <span className="text-xs tracking-widest uppercase">
                  Scroll
                </span>
                <ChevronDown className="mt-1 animate-bounce" />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                About
              </h2>
              <p className="mt-4 text-zinc-300 max-w-3xl">
                At Submarine Kitchen, we serve refined comfort food in a
                monochrome setting—black, white, and everything elevated. Our
                chefs craft seasonal menus with premium ingredients, bringing
                depth and balance to every plate.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                {...fadeUp}
                className="rounded-2xl border border-white/10 p-6 bg-white/[0.02]"
              >
                <h3 className="font-semibold tracking-wide uppercase text-sm text-zinc-300">
                  Philosophy
                </h3>
                <p className="mt-2 text-zinc-200">
                  Minimalism on the outside. Complexity on the inside. We obsess
                  over textures, temperatures, and timing.
                </p>
              </motion.div>
              <motion.div
                {...fadeUp}
                className="rounded-2xl border border-white/10 p-6 bg-white/[0.02]"
              >
                <h3 className="font-semibold tracking-wide uppercase text-sm text-zinc-300">
                  Ingredients
                </h3>
                <p className="mt-2 text-zinc-200">
                  Sourced from trusted partners. Seasonal produce, line-caught
                  seafood, and carefully selected cuts.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MENU PREVIEW */}
        <section id="menu" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Menu Highlights
              </h2>
              <p className="mt-3 text-zinc-300">
                A glimpse into the depths. Full menu available on-site.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Black Truffle Mac",
                  desc: "Aged cheddar, black truffle crumb, smoked salt.",
                  price: "$22",
                  img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1887&auto=format&fit=crop",
                },
                {
                  title: "Charcoal Burger",
                  desc: "Brioche, dry-aged beef, ash cheddar, house aioli.",
                  price: "$24",
                  img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1887&auto=format&fit=crop",
                },
                {
                  title: "Ink Pasta",
                  desc: "Squid ink tagliolini, garlic butter, chili, lemon.",
                  price: "$26",
                  img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1974&auto=format&fit=crop",
                },
              ].map((item, i) => (
                <motion.article
                  key={i}
                  {...fadeUp}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <span className="text-sm text-zinc-300">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-zinc-300">{item.desc}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              {...fadeUp}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="tel:+1234567890"
                className="rounded-2xl bg-white text-black px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition"
              >
                Call to Order
              </a>
              <p className="text-zinc-400 text-sm">
                Prefer pickup? Call ahead and we’ll have it ready.
              </p>
            </motion.div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Gallery
              </h2>
              <p className="mt-3 text-zinc-300">
                Monochrome ambiance, warm service.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1960&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1974&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1932&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1520206188245-3c1a2520dca9?q=80&w=1935&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1541542684-4a8a09df1f07?q=80&w=1974&auto=format&fit=crop",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
                >
                  <img
                    src={src}
                    alt="Submarine Kitchen"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / LOCATION */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Find Us
              </h2>
              <p className="mt-3 text-zinc-300">
                Visit the hull. Call ahead to order.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.02]">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1" />
                    <div>
                      <p className="font-medium">123 Deepwater Ave</p>
                      <p className="text-zinc-400">
                        Suite B, Oceanview District
                      </p>
                      <p className="text-zinc-400">Open Tue–Sun</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.02]">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1" />
                    <div>
                      <p className="font-medium">Call to Order</p>
                      <a
                        href="tel:+1234567890"
                        className="text-zinc-300 hover:text-white underline underline-offset-4"
                      >
                        +2348127824199
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.02]">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-zinc-400">Tue–Thu: 12pm – 9pm</p>
                      <p className="text-zinc-400">Fri–Sat: 12pm – 11pm</p>
                      <p className="text-zinc-400">Sun: 12pm – 8pm</p>
                      <p className="text-zinc-500 text-sm mt-2">
                        Closed on Mondays
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://www.instagram.com/submarine_kitchen?igsh=MXVkZ3hkMHVzazd3NQ=="
                    aria-label="Instagram"
                    className="rounded-full border border-white/15 p-2 hover:bg-white hover:text-black transition"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@submarinekitchen?is_from_webapp=1&sender_device=pc"
                    aria-label="Tiktok"
                    className="rounded-full border border-white/15 p-2 hover:bg-white hover:text-black transition"
                  >
                    <Music2 size={18} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                {/* Google Map Embed placeholder (replace `q=` with your address) */}
                <iframe
                  title="Submarine Kitchen Map"
                  width="100%"
                  height="420"
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086209401135!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1680800000000"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Submarine Kitchen. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-zinc-400">
              <a href="#menu" className="hover:text-white">
                Menu
              </a>
              <a href="#gallery" className="hover:text-white">
                Gallery
              </a>
              <a href="#contact" className="hover:text-white">
                Find Us
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
