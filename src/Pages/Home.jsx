// Home.jsx
import React from "react";
import Hero from "./Hero";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="bg-gradient-to-r from-[#feac5e] via-[#c779d0] to-[#4bc0c8]">
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-white text-center animate-slide-in-top">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white/20 rounded p-6 text-center backdrop-blur-md hover:scale-105 transform transition">
            <h3 className="font-bold text-xl text-white mb-2">Upload Datasets</h3>
            <p className="text-white/90">
              Easily upload your research datasets for others to find and use.
            </p>
          </div>
          <div className="bg-white/20 rounded p-6 text-center backdrop-blur-md hover:scale-105 transform transition">
            <h3 className="font-bold text-xl text-white mb-2">Find & Buy</h3>
            <p className="text-white/90">
              Discover datasets you need, filter by domain, type, and price.
            </p>
          </div>
          <div className="bg-white/20 rounded p-6 text-center backdrop-blur-md hover:scale-105 transform transition">
            <h3 className="font-bold text-xl text-white mb-2">Annotate</h3>
            <p className="text-white/90">
              Request annotation for raw datasets and contribute to AI projects.
            </p>
          </div>
        </div>
      </section>

      {/* Stats / Achievements Section */}
      <section
        ref={ref}
        className="py-20 px-4 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-12">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/20 rounded p-6 backdrop-blur-md hover:scale-105 transform transition">
            <h3 className="text-3xl font-bold text-pink-500 mb-2">
              {inView && <CountUp end={500} duration={2} />}+
            </h3>
            <p className="text-white/90">Datasets Uploaded</p>
          </div>
          <div className="bg-white/20 rounded p-6 backdrop-blur-md hover:scale-105 transform transition">
            <h3 className="text-3xl font-bold text-pink-500 mb-2">
              {inView && <CountUp end={200} duration={2} />}+
            </h3>
            <p className="text-white/90">Active Users</p>
          </div>
          <div className="bg-white/20 rounded p-6 backdrop-blur-md hover:scale-105 transform transition">
            <h3 className="text-3xl font-bold text-pink-500 mb-2">
              {inView && <CountUp end={50} duration={2} />}+
            </h3>
            <p className="text-white/90">Annotations Completed</p>
          </div>
        </div>
      </section>

      {/* About / Info Section */}
      <section className="py-20 px-4 bg-white/10 backdrop-blur-md text-center animate-slide-in-bottom">
        <h2 className="text-4xl font-bold text-white mb-4">About Dataset Marketplace</h2>
        <p className="text-white/90 max-w-2xl mx-auto">
          A beginner-friendly platform to manage research datasets. Switch roles easily: upload, buy, and annotate, all in one unified dashboard.
        </p>
      </section>
    </div>
  );
};

export default Home;
