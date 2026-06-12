import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Bodhify Combined Bootcamp",
    description:
      "Web dev (Every Friday) Devops (Every Friday) Machine Learning and AI (Every Saturday) Web3 (Every Sunday) DSA (Every Thursday)",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    imageAlt:
      "Combined bootcamp course thumbnail showing code on multiple screens",
    price: "\u20b95,999",
    originalPrice: "\u20b98,999",
    discount: "34% off",
    tags: ["Web Dev", "DevOps", "ML & AI", "Web3", "DSA"],
  },
  {
    id: 2,
    title: "Web Dev + DevOps Bootcamp",
    description: "Web dev, DevOps",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    imageAlt:
      "Web development and DevOps bootcamp course thumbnail with code editor",
    price: "\u20b93,999",
    originalPrice: "\u20b95,999",
    discount: "34% off",
    tags: ["Web Dev", "DevOps"],
  },
  {
    id: 3,
    title: "Web3 Bootcamp",
    description: "Complete Solana and Web3 Bootcamp",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
    imageAlt:
      "Web3 and blockchain bootcamp course thumbnail with blockchain visualization",
    price: "\u20b93,999",
    originalPrice: "\u20b95,999",
    discount: "34% off",
    tags: ["Solana", "Web3", "Blockchain"],
  },
  {
    id: 4,
    title: "AI and ML Bootcamp",
    description: "AI and ML Syllabus",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    imageAlt:
      "AI and Machine Learning bootcamp course thumbnail with neural network visualization",
    price: "\u20b93,999",
    originalPrice: "\u20b95,999",
    discount: "34% off",
    tags: ["AI", "Machine Learning", "Python"],
  },
];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black font-poppins text-[#001c52] mb-2">
              Featured Cohorts
            </h2>
            <p className="text-gray-500">
              Join our most popular bootcamps and transform your career
            </p>
          </div>
          <Link
            href="#courses"
            className="hidden sm:flex items-center gap-2 text-[#00a892] font-semibold hover:gap-3 transition-all"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Course Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.imageAlt}
                  className="w-full h-full object-cover"
                />

                {/* Discount badge */}
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {course.discount}
                </div>
                {/* Bodhify badge */}
                <div className="absolute top-3 left-3 bg-[#001c52] text-white text-xs font-bold px-2 py-1 rounded-full">
                  Bootcamp
                </div>
              </div>

              {/* Course Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[#001c52] font-poppins mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2 flex-1">
                  {course.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: "rgba(0,168,146,0.1)",
                        color: "#00a892",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-black text-[#001c52] font-poppins">
                    {course.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {course.originalPrice}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href={`#course-${course.id}`}
                  className="w-full py-2.5 bg-[#001c52] text-white text-sm font-bold rounded-xl text-center hover:bg-[#020A3F] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
