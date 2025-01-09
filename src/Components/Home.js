import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  Facebook,
  Linkedin,
  Instagram,
  Github,
  ChevronDown,
} from "lucide-react";

function Home() {
  const el = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Based in Canada. Full Time Developer. I eat, sleep and breathe React.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      card.style.transition = "transform 0.5s ease";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-cover bg-center bg-fixed flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1539721972319-f0e80a00d424?q=80&w=2070&auto=format&fit=crop")',
      }}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            I'm <span className="text-blue-400">Jaspreet Singh</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed">
            <span ref={el}></span>
          </p>

          <div className="flex items-center justify-center gap-6 mt-8">
            <SocialLink
              href="https://www.facebook.com/profile.php?id=100066188760462"
              icon={<Facebook />}
              label="Facebook"
            />
            <SocialLink
              href="https://www.linkedin.com/in/jaspreet-singh-chopra-b63bb518a/"
              icon={<Linkedin />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://www.instagram.com/official_pb_39/"
              icon={<Instagram />}
              label="Instagram"
            />
            <SocialLink
              href="https://github.com/Jaspreet39"
              icon={<Github />}
              label="GitHub"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-blue-500 transition-colors duration-300 group"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-6 h-6 text-white animate-bounce" />
      </a>
    </section>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 group"
      aria-label={label}
    >
      <div className="w-6 h-6 text-white">{icon}</div>
    </a>
  );
}

export default Home;
