import { useState } from "react";
import { Send, Globe } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", query: "" });
  };

  return (
    <section
      className="section-padding "
      style={{
        background: "linear-gradient(135deg, #010C39 0%, #1C1E53 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Globe illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div
                className="w-64 h-64 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,221,179,0.2) 0%, rgba(0,28,82,0.8) 70%)",
                }}
              >
                <Globe className="w-32 h-32 text-[#00DDB3]/40" />
              </div>
              {/* Orbit rings */}
              <div className="absolute inset-0 rounded-full border border-[#00DDB3]/20" />
              <div className="absolute -inset-8 rounded-full border border-[#00DDB3]/10" />
              <div className="absolute -inset-16 rounded-full border border-[#00DDB3]/5" />
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="flex-1 w-full">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-black font-poppins text-white mb-3">
                Having doubts? Let&apos;s get in touch!
              </h2>
              <p className="text-white/70">
                Send us your queries and we&apos;ll get back to you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00DDB3] transition-colors"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00DDB3] transition-colors"
              />
              <input
                type="tel"
                placeholder="Your contact number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00DDB3] transition-colors"
              />
              <textarea
                placeholder="Type your query here..."
                value={form.query}
                onChange={(e) => setForm({ ...form, query: e.target.value })}
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00DDB3] transition-colors resize-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 bg-[#00DDB3] text-[#001c52] font-bold rounded-xl hover:bg-[#00c9a2] transition-colors shadow-lg"
              >
                {submitted ? "Sent!" : "Submit"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
