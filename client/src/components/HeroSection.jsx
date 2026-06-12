import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen pt-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #00DDB3, transparent)" }}
      />
      <div
        className="absolute bottom-20 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #a46bf5, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00DDB3] animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Join 100,000+ enrolled students today
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-poppins leading-tight mb-6">
              Master Full Stack
              <br />
              <span className="gradient-text">Development</span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              Master Full Stack Development through hands-on open source
              projects. Join a community of developers transforming their
              careers with practical, real-world programming skills.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#001c52] font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg">
                <Play className="w-4 h-4 fill-current" />
                Learn more
              </button>
              <Link
                href="#courses"
                className="flex items-center gap-2 px-6 py-3 bg-[#00DDB3] text-[#001c52] font-bold rounded-xl hover:bg-[#00c9a2] transition-all duration-200 shadow-lg"
              >
                Explore Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-[#00DDB3]/30 transform rotate-3" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                  alt="Developer coding on laptop in a modern workspace"
                  className="w-full h-80 lg:h-96 object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001c52]/60 to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00DDB3] flex items-center justify-center shrink-0">
                      <span className="text-[#001c52] font-black text-sm">
                        B
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Bodhify Live Session
                      </p>
                      <p className="text-white/70 text-xs">
                        Full Stack Bootcamp — Live Now
                      </p>
                    </div>
                    <div className="ml-auto w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
