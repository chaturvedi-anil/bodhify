import { useState } from "react";
import {
  FiStar,
  FiUsers,
  FiClock,
  FiPlay,
  FiChevronDown,
  FiChevronUp,
  FiCheck,
  FiArrowRight,
  FiMonitor,
  FiCode,
  FiCpu,
  FiGlobe,
  FiBarChart2,
  FiAward,
  FiBriefcase,
  FiMessageSquare,
  FiBookOpen,
  FiZap,
  FiLock,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiSolana,
  SiTypescript,
  SiPostgresql,
  SiPython,
  SiTensorflow,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */

const TAGS = [
  "Web3 Fundamentals",
  "Cloud Computing",
  "React & Node.js",
  "Full Stack Development",
];

const TRACKS = [
  {
    id: 1,
    label: "Web dev",
    schedule: "Every Friday",
    icon: <FiMonitor size={18} />,
    topics: [
      "React 19 & Next.js 15",
      "Node.js & Express",
      "PostgreSQL & Prisma",
      "TypeScript in depth",
      "Authentication & Payments",
    ],
  },
  {
    id: 2,
    label: "DevOps",
    schedule: "Every Friday",
    icon: <FiCode size={18} />,
    topics: [
      "Docker & Compose",
      "Kubernetes & Helm",
      "AWS / GCP",
      "CI/CD Pipelines",
      "Monitoring & Alerting",
    ],
  },
  {
    id: 3,
    label: "Machine Learning and AI",
    schedule: "Every Saturday",
    icon: <FiCpu size={18} />,
    topics: [
      "Python & PyTorch",
      "LLMs & Transformers",
      "RAG Pipelines",
      "Model Deployment",
      "Prompt Engineering",
    ],
  },
  {
    id: 4,
    label: "Web3",
    schedule: "Every Sunday",
    icon: <FiGlobe size={18} />,
    topics: [
      "Solana Architecture",
      "Rust Smart Contracts",
      "dApp Development",
      "DeFi Protocols",
      "NFT & Token Standards",
    ],
  },
  {
    id: 5,
    label: "DSA",
    schedule: "Every Thursday",
    icon: <FiBarChart2 size={18} />,
    topics: [
      "Arrays, Trees & Graphs",
      "Dynamic Programming",
      "System Design HLD/LLD",
      "Mock Interviews",
      "Competitive Programming",
    ],
  },
];

const TECH_STACK = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiSolana />, name: "Solana" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
];

const WHO_FOR = [
  {
    title: "Beginners in Tech",
    desc: "Those who want to start a career in software development with strong fundamentals.",
    icon: <FiBookOpen size={28} />,
  },
  {
    title: "Self-taught Developers",
    desc: "People who already know the basics but need a structured roadmap and real projects to become job-ready.",
    icon: <FiCode size={28} />,
  },
  {
    title: "Working Professionals",
    desc: "Anyone looking to upgrade skills in Full-Stack + DevOps and grow into better roles in tech.",
    icon: <FiBriefcase size={28} />,
  },
];

const OUTCOMES = [
  {
    icon: <FiCode size={22} />,
    title: "Real-World Projects",
    desc: "Build production-grade apps you can showcase — payment systems, SaaS platforms, DeFi protocols. Not toy examples.",
  },
  {
    icon: <FiAward size={22} />,
    title: "Portfolio Development",
    desc: "Walk away with a GitHub full of shipped projects that make hiring managers stop scrolling and reach out.",
  },
  {
    icon: <FiMessageSquare size={22} />,
    title: "Interview Preparation",
    desc: "Live mock interviews, DSA problem-solving sessions, and system design reviews with real feedback.",
  },
  {
    icon: <FiBarChart2 size={22} />,
    title: "Career Growth",
    desc: "Structured progression from fundamentals to senior-level concepts. No guessing what to learn next.",
  },
  {
    icon: <FiUsers size={22} />,
    title: "Industry Mentorship",
    desc: "Direct access to engineers who've shipped at scale and built teams at top tech companies.",
  },
  {
    icon: <FiZap size={22} />,
    title: "Community Access",
    desc: "Collaborate, build, and grow with 55,000+ passionate learners in our Discord — referrals, study groups, job leads.",
  },
];

const INCLUDES = [
  "200+ live weekend sessions across 5 tracks",
  "1-year access to all session recordings",
  "Lifetime access to assignments & notes",
  "Verifiable completion certificate",
  "Private Discord with 55,000+ members",
  "Mock interviews + resume reviews",
  "500+ company hiring partner network",
  "All future cohort updates included",
];

/* ─── COMPONENTS ────────────────────────────────────────────────────────────── */

function Tag({ label }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
      bg-white/8 border border-white/15 text-white/75
      hover:border-(--bodhify-teal-light/50 hover:text-[--bodhify-teal-light]
      transition-all duration-200"
    >
      {label}
    </span>
  );
}

function TrackCard({ track, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`rounded-2xl border bg-card transition-all duration-300 overflow-hidden
        ${open ? "border-[--bodhify-teal]/40 shadow-sm" : "border-border hover:border-[--bodhify-teal]/25"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
          style={{
            background:
              "linear-gradient(135deg, var(--bodhify-teal), var(--bodhify-accent)",
          }}
        >
          {track.icon}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-card-foreground">
            {track.label}
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <FiClock size={11} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {track.schedule}
            </span>
          </div>
        </div>

        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors
          ${open ? "bg-[--bodhify-teal]/15 text-[--bodhify-teal]" : "bg-muted text-muted-foreground"}`}
        >
          {open ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
        </div>
      </button>

      {open && (
        <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-border pt-4">
          {track.topics.map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <FiCheck
                size={13}
                className="text-[var(--bodhify-teal)] flex-shrink-0"
              />
              {t}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PricingCard() {
  return (
    <div className="sticky top-6 rounded-2xl border border-border bg-card overflow-hidden shadow-xl shadow-black/5">
      {/* Course thumbnail */}
      <div className="relative h-44 hero-gradient overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--bodhify-teal), var(--bodhify-accent))",
              }}
            >
              <FiPlay size={26} className="text-white ml-1" />
            </div>
            <p className="text-white/60 text-xs font-medium">
              Preview available
            </p>
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Price */}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-black text-card-foreground font-poppins">
            ₹5,999
          </span>
          <span className="text-lg text-muted-foreground line-through">
            ₹8,999
          </span>
          <span className="text-sm font-semibold text-(--bodhify-teal) bg-(--bodhify-teal)/10 border border-(--bodhify-teal)/20 px-2 py-0.5 rounded-full">
            34% off
          </span>
        </div>
        <p className="text-xs text-muted-foreground mb-5">
          One-time payment · Lifetime access
        </p>

        {/* CTA */}
        <a
          href="#"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl
            bodhify-brand-gradient hover:opacity-90
            text-white font-bold text-sm transition-all duration-200 active:scale-[0.98]
            shadow-lg shadow-black/10"
        >
          Buy Now <FiArrowRight size={16} />
        </a>

        <p className="text-center text-xs text-muted-foreground mt-3">
          7-day money-back guarantee
        </p>

        <div className="border-t border-border mt-5 pt-4 space-y-2.5">
          {INCLUDES.map((item) => (
            <div key={item} className="flex items-start gap-2.5">
              <FiCheck
                size={13}
                className="text-[--bodhify-teal] shrink-0 mt-0.5"
              />
              <span className="text-xs text-muted-foreground leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div
          className="mt-5 pt-4 border-t border-border flex items-center gap-2.5
          bg-muted/40 -mx-5 -mb-5 px-5 py-3"
        >
          <FiLock size={13} className="text-muted-foreground" />
          <span className="text-[11px] text-muted-foreground">
            Secure checkout · SSL encrypted
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────────────────────────────────── */

export default function CourseDetailPage() {
  const [showAllTracks, setShowAllTracks] = useState(false);

  const visibleTracks = showAllTracks ? TRACKS : TRACKS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground font-lato">
      {/* ── HERO BAND ─────────────────────────────────────────────────────── */}
      <div className="hero-gradient text-white pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-start">
            {/* LEFT */}
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {TAGS.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-5 font-poppins">
                <span className="gradient-text">100xSchool</span>{" "}
                <span className="text-white">Combined Bootcamp</span>
              </h1>

              {/* Sub */}
              <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Master real-world engineering skills from zero to production.
                Build scalable web apps, deploy on cloud infrastructure, and
                create blockchain applications with hands-on mentorship.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-5 mb-8">
                {[
                  {
                    icon: (
                      <FiStar className="text-[--bodhify-yellow] fill-[--bodhify-yellow]" />
                    ),
                    text: "4.9 rating",
                    sub: "(12,400+ reviews)",
                  },
                  {
                    icon: <FiUsers className="text-[--bodhify-accent]" />,
                    text: "1,20,000+",
                    sub: "enrolled",
                  },
                  {
                    icon: <FiClock className="text-[--bodhify-teal-light]" />,
                    text: "200+ sessions",
                    sub: "live + recorded",
                  },
                ].map(({ icon, text, sub }) => (
                  <div key={text} className="flex items-center gap-2">
                    <span className="text-base">{icon}</span>
                    <span className="text-sm font-semibold text-white">
                      {text}
                    </span>
                    <span className="text-sm text-white/45">{sub}</span>
                  </div>
                ))}
              </div>

              {/* Instructor */}
              <div
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full
                bg-white/8 border border-white/15 hover:border-white/25 transition-colors"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, --bodhify-teal), --bodhify-accent)",
                  }}
                >
                  HS
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-none">
                    Harkirat Singh
                  </p>
                  <p className="text-xs text-white/45 mt-0.5">
                    Senior Engineer & Mentor
                  </p>
                </div>
              </div>

              {/* Tech stack strip */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-3 font-medium font-poppins">
                  Tech you'll learn
                </p>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map(({ icon, name }) => (
                    <div
                      key={name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                      bg-white/8 border border-white/10 text-white/60 hover:text-white
                      hover:border-white/25 transition-all text-sm"
                    >
                      <span className="text-base">{icon}</span>
                      <span className="text-xs font-medium">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Pricing card (desktop) */}
            <div className="hidden lg:block">
              <PricingCard />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* ── MOBILE PRICING ────────────────────────────────────────────────── */}
        <div className="lg:hidden mt-10">
          <PricingCard />
        </div>

        {/* ── WHAT YOU'LL LEARN ─────────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="mb-8 animate-fade-in-up">
            <span className="text-xs font-semibold text-[--bodhify-teal] tracking-widest uppercase font-poppins">
              Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1.5 font-poppins">
              What You'll Learn
            </h2>
            <p className="text-muted-foreground text-sm mt-1.5 max-w-lg">
              Five dedicated tracks, each running on a fixed weekly schedule so
              you stay in a rhythm without overwhelm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {visibleTracks.map((track, i) => (
              <TrackCard key={track.id} track={track} defaultOpen={i === 0} />
            ))}
          </div>

          {!showAllTracks && (
            <button
              onClick={() => setShowAllTracks(true)}
              className="mt-4 flex items-center gap-2 text-sm text-[--bodhify-teal]
                hover:text-[--bodhify-accent] transition-colors font-medium mx-auto"
            >
              Show {TRACKS.length - 3} more tracks <FiChevronDown size={16} />
            </button>
          )}
        </section>

        {/* ── WHO IS THIS FOR ───────────────────────────────────────────────── */}
        <section className="section-padding border-t border-border">
          <div className="mb-8">
            <span className="text-xs font-semibold text-[--bodhify-teal] tracking-widest uppercase font-poppins">
              Audience
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1.5 font-poppins">
              Who is This For?
            </h2>
            <p className="text-muted-foreground text-sm mt-1.5">
              Whether you're starting fresh or leveling up, this cohort is
              designed for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {WHO_FOR.map((item) => (
              <div
                key={item.title}
                className="why-card rounded-2xl border border-border bg-card p-6"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, --bodhify-teal, --bodhify-accent)",
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-card-foreground mb-2 font-poppins">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Harkirat quote */}
          <div
            className="mt-8 rounded-2xl border border-[--bodhify-accent]/20 bg-card p-6 sm:p-8
            flex flex-col sm:flex-row gap-6 items-start"
          >
            <div className="shrink-0">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-black text-white shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, --bodhify-teal, --bodhify-accent)",
                }}
              >
                HS
              </div>
            </div>
            <div>
              <div className="text-3xl text-[--bodhify-accent]/50 font-serif leading-none mb-3">
                "
              </div>
              <p className="text-base sm:text-lg text-card-foreground/80 leading-relaxed italic">
                No matter where you're starting from, our structured approach
                and personalized mentorship will guide you to become a
                confident, production-ready engineer.
              </p>
              <p className="mt-4 text-sm font-semibold text-[--bodhify-accent] font-poppins">
                — Harkirat Singh
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Founder, 100xDevs · Senior Engineer & Mentor
              </p>
            </div>
          </div>
        </section>

        {/* ── CAREER OUTCOMES ───────────────────────────────────────────────── */}
        <section className="section-padding border-t border-border">
          <div className="mb-8">
            <span className="text-xs font-semibold text-[--bodhify-teal] tracking-widest uppercase font-poppins">
              Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1.5 font-poppins">
              Career Outcomes
            </h2>
            <p className="text-muted-foreground text-sm mt-1.5">
              Everything you need to launch or accelerate your tech career.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OUTCOMES.map((item) => (
              <div
                key={item.title}
                className="course-card group rounded-2xl border border-border bg-card p-5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4
                    text-[--bodhify-teal] bg-[--bodhify-teal]/10
                    group-hover:scale-110 transition-transform duration-200"
                >
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-card-foreground mb-2 font-poppins">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
        <section className="section-padding border-t border-border">
          <div className="rounded-3xl overflow-hidden hero-gradient p-8 sm:p-12 text-center relative text-white">
            <div className="relative z-10">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={18}
                    className="text-(--bodhify-yellow) fill-(--bodhify-yellow)"
                  />
                ))}
              </div>
              <p className="text-white/45 text-xs mb-4 tracking-wide">
                Rated 4.9/5 across 12,000+ reviews
              </p>
              <h2 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight font-poppins">
                Ready to go <span className="gradient-text">100x</span>?
              </h2>
              <p className="text-white/60 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                Join the cohort. Ship real projects. Get hired. New batch
                starting soon — limited seats.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                    bodhify-brand-gradient hover:opacity-90
                    text-white font-bold text-sm transition-all duration-200 active:scale-[0.98]
                    shadow-lg shadow-black/20"
                >
                  Enroll Now — ₹5,999 <FiArrowRight size={16} />
                </a>
                <button
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                  border border-white/20 hover:bg-white/8 text-sm font-medium transition-all text-white"
                >
                  <FiPlay size={14} className="text-[--bodhify-teal-light]" />{" "}
                  Watch free preview
                </button>
              </div>
              <p className="text-white/35 text-xs mt-4">
                7-day money-back guarantee · No questions asked
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
