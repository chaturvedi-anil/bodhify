import { CheckCircle2 } from "lucide-react";

const communityFeatures = [
  "Active Discord with 24/7 community support",
  "Collaborate on open source and build together",
  "Weekly study groups and peer code reviews",
  "Job referrals and opportunity sharing",
];

const communityImages = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    alt: "Bodhify community meetup event with developers networking",
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
    alt: "Students collaborating on coding projects at a hackathon",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    alt: "Group of developers celebrating project completion together",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    alt: "Team of developers working together at a tech conference",
  },
];

const CommunitySection = () => {
  return (
    <section
      id="community"
      className="section-padding"
      style={{
        background: "linear-gradient(135deg, #001c52 0%, #020A3F 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
          {/* Left content */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-black font-poppins text-white mb-6">
              A Community That Has Your Back
            </h2>
            <ul className="space-y-4">
              {communityFeatures?.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00DDB3] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 px-6 py-3 bg-[#00DDB3] text-[#001c52] font-bold rounded-xl hover:bg-[#00c9a2] transition-colors">
              Join the Community
            </button>
          </div>

          {/* Right - Community collage */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                alt="Bodhify community members collage showing diverse group of developers"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
              />

              {/* Floating stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-xl">
                <div className="text-2xl font-black text-[#001c52] font-poppins">
                  50K+
                </div>
                <div className="text-xs text-gray-500">Active Members</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#00DDB3] rounded-xl p-3 shadow-xl">
                <div className="text-2xl font-black text-[#001c52] font-poppins">
                  4.9★
                </div>
                <div className="text-xs text-[#001c52]/70">
                  Community Rating
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row - Community event images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {communityImages?.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden h-40 group">
              <img
                src={img?.src}
                alt={img?.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
