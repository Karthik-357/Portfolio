import { RevealOnScroll } from "../RevealOnScroll";
import { Typewriter } from 'react-simple-typewriter';
import Lottie from "lottie-react";
import heroAnimation from "../../assets/hero-animation.json";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black text-white px-6 md:px-16"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Karthik
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              <Typewriter
                words={[
                  'Back End Developer',
                  ' Enthusiast',
                  'Tech Explorer'
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              I’m a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
  href="#projects"
  className="bg-gradient-to-r from-emerald-500 to-cyan-400 text-black text-xl py-3 px-6 rounded font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
>
  View Projects
</a>

              <a
                href="#contact"
                className="bg-gradient-to-r from-emerald-500 to-cyan-400 text-transparent bg-clip-text text-xl py-3 px-6 rounded font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side - Animation */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-72 md:w-96">
              <Lottie animationData={heroAnimation} loop={true} />
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
