import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl animate-float-slow animation-delay-2000"></div>
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Nayere Tech
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm a full-stack developer specializing in building performant, 
            scalable web applications with exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-8 rounded-lg font-medium transition-all 
              hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-95 group"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></span>
            </a>

            <a
              href="#contact"
              className="border-2 border-blue-500/30 text-blue-400 py-3 px-8 rounded-lg font-medium transition-all
              hover:bg-blue-500/10 hover:text-white hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="inline-flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="mb-1 text-sm">Explore more</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};