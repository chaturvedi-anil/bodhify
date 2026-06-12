import { CheckCircle2 } from "lucide-react";

const skillsLeft = [
  "Full Stack Development",
  "Real-World Projects",
  "Open Source Contributions",
  "Production Ready",
  "DevOps & Deployment",
  "Job Ready Portfolio",
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Job Ready Skills Card */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                alt="Developer working on multiple screens with code visible"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001c52]/80" />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-[#001c52] font-poppins mb-2">
                Job ready skills that matter
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Master development through real-world applications, not
                tutorials
              </p>
              <div className="grid grid-cols-2 gap-2">
                {skillsLeft?.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00a892] flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mentoring Card */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                alt="Mentor teaching a group of students in a modern classroom"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001c52]/80" />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-[#001c52] font-poppins mb-2">
                Personally mentoring India&apos;s next 100x engineers
              </h3>
              <p className="text-gray-500 text-sm">
                Taking you from 1x to 100x through practical projects and
                real-world open source. Our expert mentors guide you every step
                of the way with live sessions, code reviews, and career support.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4]?.map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                    >
                      <img
                        src={`https://images.unsplash.com/photo-${i === 1 ? "1507003211169-0a1dd7228f2d" : i === 2 ? "1494790108377-be9c29b29330" : i === 3 ? "1500648767791-00dcc994a43e" : "1438761681033-6461ffad8d80"}?w=100&q=80`}
                        alt={`Student ${i} profile photo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  +50,000 students enrolled
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
