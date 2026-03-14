"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SVG Icon Components ───────────────────────────────────────────────────────

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function GlobalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function WalletIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
      <path d="M16 3l-4-2-4 2" />
      <circle cx="17" cy="14" r="1" />
    </svg>
  );
}

function BankIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7 12 2" />
    </svg>
  );
}

function CreditUnionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

function WireIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function UserCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function LayoutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function AlertCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  {
    icon: ClockIcon,
    title: "Years of Operation",
    value: "6+ Years",
    description: "Supporting digital financial infrastructure and operational networks.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: GlobalIcon,
    title: "Global Operational Network",
    value: "1,200+",
    description: "Remote operational assistants and infrastructure partners worldwide.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: ChartIcon,
    title: "Transaction Processing",
    value: "$480M+",
    description: "Coordinated through supported financial infrastructure.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: GlobalIcon,
    title: "Supported Regions",
    value: "40+ Countries",
    description: "Operational participants across North America, Europe, Asia, and Africa.",
    color: "from-cyan-500 to-blue-500",
  },
];

const infrastructure = [
  { icon: WalletIcon, text: "Digital asset wallets supported by Trust Wallet infrastructure" },
  { icon: BankIcon, text: "Traditional banking systems" },
  { icon: CreditUnionIcon, text: "Credit union financial networks" },
  { icon: WireIcon, text: "Wire-enabled banking infrastructure" },
  { icon: LockIcon, text: "Secure online banking platforms" },
];

const onboardingSteps = [
  {
    number: "01",
    icon: UserCheckIcon,
    title: "Apply",
    description: "Complete the short verification process confirming identity and financial infrastructure.",
    color: "from-blue-500 to-blue-700",
  },
  {
    number: "02",
    icon: SearchIcon,
    title: "Verification Review",
    description: "Our team reviews your application and confirms eligibility.",
    color: "from-indigo-500 to-blue-700",
  },
  {
    number: "03",
    icon: LayoutIcon,
    title: "Dashboard Activation",
    description: "Approved applicants receive secure access to the CorbixMarket operational dashboard.",
    color: "from-blue-600 to-indigo-700",
  },
  {
    number: "04",
    icon: ZapIcon,
    title: "Begin Operations",
    description: "Participate in operational workflows based on verified capabilities.",
    color: "from-blue-700 to-indigo-800",
  },
];

const securityItems = [
  "Government identity verification",
  "Address verification",
  "Banking ownership confirmation",
  "Operational readiness verification",
  "Agreement confirmation",
];

const roleItems = [
  "Transaction confirmation workflows",
  "Financial infrastructure verification",
  "Operational coordination tasks",
  "Transaction settlement confirmations",
];

const requirements = [
  "Must control the financial account used for operations",
  "Must be able to follow written operational instructions",
  "Must complete identity verification",
  "Must accept the operational agreement",
];

const faqs = [
  {
    q: "How long does the verification process take?",
    a: "The verification process typically takes between 5–10 minutes.",
  },
  {
    q: "What happens after I submit my application?",
    a: "Applications are reviewed manually. Approved applicants receive instructions to activate their operational dashboard access.",
  },
  {
    q: "Do I need prior experience?",
    a: "Prior experience with financial transactions is helpful but not required.",
  },
  {
    q: "Is identity verification required?",
    a: "Yes. All participants must complete identity and financial infrastructure verification before activation.",
  },
  {
    q: "How will I know if I am approved?",
    a: "Approved applicants will receive instructions for accessing the operational dashboard.",
  },
];

// ─── Reusable Components ───────────────────────────────────────────────────────

function SectionBadge({ label, dark = false }: { label: string; dark?: boolean }) {
  if (dark) {
    return (
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 inline-block" />
        {label}
      </div>
    );
  }
  return (
    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
      {label}
    </div>
  );
}

function SectionTitle({ children, center = false, light = false }: { children: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${center ? "text-center" : ""} ${light ? "text-white" : "text-slate-900"}`}>
      {children}
    </h2>
  );
}

function CtaButton({ id, label = "Start Verification", variant = "primary" }: { id: string; label?: string; variant?: "primary" | "white" }) {
  const base = "btn-primary group inline-flex items-center gap-3 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 text-base";
  const styles = variant === "white"
    ? `${base} bg-white text-blue-800 hover:bg-blue-50`
    : `${base} bg-blue-700 hover:bg-blue-800 text-white`;
  return (
    <Link href="https://funding-interview.vercel.app/" id={id} className={styles}>
      {label}
      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
    </Link>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
        <svg className="w-3 h-3 text-blue-700" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-slate-600 leading-relaxed">{text}</span>
    </li>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 text-sm md:text-base leading-snug">{q}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${open ? "pb-5 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{a}</p>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = document.querySelectorAll(".reveal, .reveal-left");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-800 to-slate-900 flex items-center justify-center shadow-md overflow-hidden p-1">
              <Image src="/Platform Logo main.png" alt="CorbixMarket Logo" width={28} height={28} className="object-contain" priority />
            </div>
            <span className="text-slate-900 font-bold text-lg tracking-tight">
              Corbix<span className="text-blue-600">Market</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {[
              ["About", "#about"],
              ["How It Works", "#howitworks"],
              ["Security", "#security"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-slate-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
                {label}
              </a>
            ))}
          </div>

          <Link
            href="https://funding-interview.vercel.app/"
            id="nav-start-verification"
            className="btn-primary inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Start Verification
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative pt-16 min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 30%, #f0f9ff 60%, #ffffff 100%)" }}
      >
        <div className="blob w-[600px] h-[600px] bg-blue-400 -top-40 -right-40" style={{ position: "absolute" }} />
        <div className="blob w-[400px] h-[400px] bg-indigo-400 bottom-0 -left-20" style={{ position: "absolute" }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fadeInUp inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-5 py-2 mb-8 shadow-sm">
              <ShieldIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-800 text-xs font-semibold uppercase tracking-wider">Trust Wallet Infrastructure Partner</span>
            </div>

            <h1 className="animate-fadeInUp text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6" style={{ animationDelay: "0.1s" }}>
              CorbixMarket{" "}
              <span className="gradient-text block sm:inline">Operational Expansion</span>{" "}
              Program
            </h1>

            <p className="animate-fadeInUp text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4" style={{ animationDelay: "0.2s" }}>
              CorbixMarket is expanding its global financial operations network in collaboration with Trust Wallet infrastructure.
            </p>
            <p className="animate-fadeInUp text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10" style={{ animationDelay: "0.3s" }}>
              We are onboarding verified remote financial operations assistants to support transaction workflows and operational verification.
            </p>

            <div className="animate-fadeInUp flex flex-col items-center gap-3" style={{ animationDelay: "0.4s" }}>
              <CtaButton id="hero-start-verification" />
              <p className="text-slate-400 text-sm">Application process takes approximately 5–10 minutes.</p>
            </div>

            <div className="animate-fadeInUp mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto" style={{ animationDelay: "0.5s" }}>
              {[
                { label: "Years Active", value: "6+" },
                { label: "Participants", value: "1,200+" },
                { label: "Volume", value: "$480M+" },
                { label: "Countries", value: "40+" },
              ].map((item) => (
                <div key={item.label} className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-xl px-4 py-3 text-center shadow-sm">
                  <div className="text-2xl font-extrabold text-blue-700">{item.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-pulse-slow" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. ABOUT
      ══════════════════════════════════════════════════ */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <SectionBadge label="About CorbixMarket" />
              <SectionTitle>Digital Financial Infrastructure Platform</SectionTitle>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  CorbixMarket is a digital financial infrastructure platform supporting transaction settlement, operational verification, and liquidity coordination across supported blockchain ecosystems.
                </p>
                <p>
                  Through collaboration with Trust Wallet infrastructure, CorbixMarket continues to expand global operational capabilities while maintaining strict verification and compliance standards.
                </p>
                <p>
                  Our operational network includes remote financial assistants responsible for supporting transaction confirmations and infrastructure workflows.
                </p>
              </div>
              <div className="mt-8">
                <CtaButton id="about-start-verification" label="Apply Now" />
              </div>
            </div>

            <div className="reveal grid grid-cols-2 gap-4">
              {[
                { icon: ShieldIcon, title: "Verified Operations", desc: "All participants undergo strict KYC and operational verification." },
                { icon: GlobalIcon, title: "Global Network", desc: "Remote assistants operating across 40+ countries worldwide." },
                { icon: ChartIcon, title: "High Volume", desc: "$480M+ in coordinated transaction processing volume." },
                { icon: LockIcon, title: "Compliance First", desc: "Built on strict verification and regulatory compliance standards." },
              ].map((item) => (
                <div key={item.title} className="card-hover bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center mb-3 shadow-md">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. OPERATIONAL STATISTICS
      ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="blob w-96 h-96 bg-white top-0 right-0 opacity-5" style={{ position: "absolute" }} />
        <div className="blob w-64 h-64 bg-blue-300 bottom-0 left-0 opacity-10" style={{ position: "absolute" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <SectionBadge label="Operational Statistics" dark />
            <SectionTitle light center>Proven Scale. Global Reach.</SectionTitle>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {stats.map((stat, i) => (
              <div
                key={stat.title}
                className="reveal card-hover bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-lg"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-md`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 font-semibold text-sm mb-2">{stat.title}</div>
                <p className="text-blue-300 text-xs leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* CTA after stats */}
          <div className="reveal text-center">
            <CtaButton id="stats-start-verification" variant="white" />
            <p className="text-blue-300 text-sm mt-3">Application process takes approximately 5–10 minutes.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. SUPPORTED INFRASTRUCTURE
      ══════════════════════════════════════════════════ */}
      <section id="infrastructure" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <SectionBadge label="Supported Infrastructure" />
            <SectionTitle center>Supported Financial Infrastructure</SectionTitle>
            <p className="text-slate-500 leading-relaxed">
              CorbixMarket operations are supported by a combination of digital asset infrastructure and traditional financial systems.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {infrastructure.map((item, i) => (
              <div
                key={item.text}
                className={`reveal card-hover flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm ${
                  i === infrastructure.length - 1 && infrastructure.length % 2 !== 0
                    ? "sm:col-span-2 sm:max-w-sm sm:mx-auto w-full"
                    : ""
                }`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-blue-700 flex items-center justify-center shadow-md">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed text-sm pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. HOW THE ONBOARDING PROCESS WORKS  (NEW)
      ══════════════════════════════════════════════════ */}
      <section id="howitworks" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <SectionBadge label="How It Works" />
            <SectionTitle center>How the Onboarding Process Works</SectionTitle>
            <p className="text-slate-500 leading-relaxed">
              A simple, streamlined process designed for speed and clarity — from application to activation.
            </p>
          </div>

          {/* Desktop: horizontal cards connected by arrows */}
          <div className="hidden md:flex items-stretch gap-0 max-w-5xl mx-auto">
            {onboardingSteps.map((step, i) => (
              <div key={step.number} className="flex items-center flex-1">
                <div
                  className="reveal flex-1 flex flex-col items-center text-center card-hover bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mx-2 h-full"
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-md`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">{step.number}</div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
                </div>
                {i < onboardingSteps.length - 1 && (
                  <div className="flex-shrink-0 w-8 flex items-center justify-center">
                    <ArrowRightIcon className="w-5 h-5 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical stacked */}
          <div className="md:hidden space-y-4 max-w-sm mx-auto">
            {onboardingSteps.map((step, i) => (
              <div key={step.number} className="reveal flex gap-4 items-start" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  {i < onboardingSteps.length - 1 && (
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-blue-100 mt-2" />
                  )}
                </div>
                <div className="pt-1">
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-widest">{step.number}</div>
                  <div className="font-bold text-slate-900 leading-snug mb-1">{step.title}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{step.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after How It Works */}
          <div className="reveal text-center mt-14">
            <CtaButton id="howitworks-start-verification" />
            <p className="text-slate-400 text-sm mt-3">Application process takes approximately 5–10 minutes.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. SECURITY & VERIFICATION
      ══════════════════════════════════════════════════ */}
      <section id="security" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="reveal order-2 lg:order-1 relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 shadow-lg overflow-hidden">
                <div className="blob w-64 h-64 bg-blue-400 -top-16 -right-16 opacity-20" style={{ position: "absolute" }} />
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-blue-700 flex items-center justify-center mx-auto mb-6 shadow-xl animate-float">
                    <ShieldIcon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center mb-8">
                    <div className="text-2xl font-bold text-slate-900">100% Manual Review</div>
                    <div className="text-slate-500 text-sm mt-1">Every application personally reviewed</div>
                  </div>
                  <ul className="space-y-3">
                    {securityItems.map((item) => (
                      <li key={item} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-blue-50">
                        <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-700 font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal-left order-1 lg:order-2">
              <SectionBadge label="Security & Verification" />
              <SectionTitle>Security and Verification Standards</SectionTitle>
              <p className="text-slate-600 leading-relaxed mb-6">
                CorbixMarket maintains strict operational verification procedures to protect all participants and financial workflows.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                All applicants must complete each verification step before being granted access. Each application is manually reviewed before access to the operational dashboard is granted.
              </p>
              <CtaButton id="security-start-verification" label="Begin Verification" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. ROLE OVERVIEW + REQUIREMENTS
      ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Role */}
            <div className="reveal bg-white border border-slate-200 rounded-3xl p-8 shadow-sm card-hover">
              <SectionBadge label="Role Overview" />
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Remote Financial Operations Assistant</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Selected applicants assist with operational tasks. Assignments depend on each applicant&#39;s verified financial infrastructure.
              </p>
              <ul className="space-y-3">
                {roleItems.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="reveal bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-8 shadow-lg card-hover" style={{ transitionDelay: "0.15s" }}>
              <SectionBadge label="Applicant Requirements" dark />
              <h2 className="text-2xl font-bold text-white mb-3">Applicant Requirements</h2>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                Applicants who pass verification receive access to the CorbixMarket operational dashboard.
              </p>
              <ul className="space-y-4">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-blue-100 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. FAQ
      ══════════════════════════════════════════════════ */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <SectionBadge label="FAQ" />
            <SectionTitle center>Frequently Asked Questions</SectionTitle>
            <p className="text-slate-500 leading-relaxed">
              Everything you need to know about the CorbixMarket verification and onboarding process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 reveal">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. OPERATIONAL INTAKE STATUS
      ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 p-8 md:p-10 shadow-md">
            {/* Decorative corner blobs */}
            <div className="blob w-48 h-48 bg-blue-300 -top-10 -right-10 opacity-20" style={{ position: "absolute" }} />
            <div className="blob w-32 h-32 bg-indigo-300 bottom-0 left-0 opacity-15" style={{ position: "absolute" }} />

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Status indicator */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-blue-700 flex items-center justify-center shadow-lg">
                    <AlertCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white animate-pulse" />
                </div>
                <span className="text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                  Open
                </span>
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block animate-pulse" />
                  Operational Intake Status
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  Applications Are Currently Open
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-1">
                  Applications are currently open for the next operational onboarding cycle.
                </p>
                <p className="text-slate-500 text-sm">
                  Participant capacity is limited and applications are reviewed on a rolling basis.
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <CtaButton id="intake-start-verification" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          10. FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="blob w-[500px] h-[500px] bg-white top-0 right-0 opacity-5" style={{ position: "absolute" }} />
        <div className="blob w-64 h-64 bg-blue-300 bottom-0 left-10 opacity-10" style={{ position: "absolute" }} />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <SectionBadge label="Applications Open" dark />
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight mt-2">
            Begin Verification
          </h2>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Applicants who successfully complete verification will receive instructions to activate their operational dashboard access.
          </p>
          <CtaButton id="cta-start-verification" variant="white" label="Start Verification" />
          <p className="text-blue-300 text-sm mt-4">
            Application process takes approximately 5–10 minutes.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          13. FOOTER
      ══════════════════════════════════════════════════ */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-800 to-slate-900 flex items-center justify-center shadow-md overflow-hidden p-1">
                  <Image src="/Platform Logo main.png" alt="CorbixMarket Logo" width={28} height={28} className="object-contain" />
                </div>
                <span className="text-white font-bold text-lg tracking-tight">
                  Corbix<span className="text-blue-400">Market</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Digital financial infrastructure platform supporting global transaction operations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Legal</h4>
                <ul className="space-y-2">
                  {["Security Policy", "Privacy Policy", "Operational Compliance Notice"].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Application</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Start Verification", href: "https://funding-interview.vercel.app/" },
                    { label: "Requirements", href: "#security" },
                    { label: "Verification Process", href: "#howitworks" },
                    { label: "FAQ", href: "#faq" }
                  ].map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} CorbixMarket. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs text-center">
              Operational verification is required before dashboard access is granted.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
