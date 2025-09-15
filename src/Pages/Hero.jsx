// Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const phrases = ["Upload Datasets", "Buy Datasets", "Annotate Datasets"];
const TYPING_SPEED = 100;
const PAUSE_TIME = 1500;

const placeholderImages = [
  "https://via.placeholder.com/200/FFB6C1/000000?text=Dataset1",
  "https://via.placeholder.com/200/87CEFA/000000?text=Dataset2",
  "https://via.placeholder.com/200/90EE90/000000?text=Dataset3",
];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      if (!isDeleting) {
        setCurrentText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), PAUSE_TIME);
        }
      } else {
        setCurrentText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    };
    const timer = setTimeout(handleTyping, TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  // Carousel image change
  useEffect(() => {
    const imgTimer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % placeholderImages.length);
    }, 3000);
    return () => clearInterval(imgTimer);
  }, []);

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    size: Math.random() * 8 + 4,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-r from-[#feac5e] via-[#c779d0] to-[#4bc0c8] text-white text-center overflow-hidden">
      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/30"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left }}
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 + Math.random() * 3, delay: p.delay }}
        />
      ))}

      {/* Sliding placeholder image behind text */}
      <motion.img
        src={placeholderImages[imageIndex]}
        alt="Dataset carousel"
        className="absolute w-48 h-48 object-cover rounded-lg opacity-30 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Text */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg z-10">
        Welcome to Dataset Marketplace
      </h1>
      <p className="text-3xl md:text-4xl font-semibold mb-6 h-14 z-10">
        {currentText}
        <span className="border-r-2 border-white animate-pulse ml-1"></span>
      </p>
      <p className="text-white/90 max-w-xl mb-8 z-10">
        Upload, buy, and annotate datasets — all in one unified interface.
      </p>
      <a
        href="/dashboard"
        className="bg-white/90 text-pink-500 font-semibold px-6 py-3 rounded shadow-lg hover:scale-105 transition transform z-10"
      >
        Go to Dashboard
      </a>


      <div className="absolute -z-10 flex w-[300%] gap-4 animate-slide-carousel top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
  {placeholderImages.map((img, idx) => (
    <img
      key={idx}
      src={img}
      alt={`Dataset ${idx}`}
      className="w-48 h-48 object-cover rounded-lg"
    />
  ))}
</div>

    </section>

    
  );
};

export default Hero;
