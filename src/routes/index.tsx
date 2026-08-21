import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  HeartPulse,
  ShieldCheck,
  TrendingUp,
  Car,
  HardHat,
  Scale,
  Ship,
  Users,
  Home,
  Umbrella,
  Phone,
  Mail,
  Quote,
} from "lucide-react";

import heroFamily from "@/assets/hero-family.jpg";
import businessTower from "@/assets/business-tower.jpg";
import advisor from "@/assets/advisor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bima Cafe | Insurance Broking for Families & Enterprises" },
      {
        name: "description",
        content:
          "Compare and buy health, term, motor, marine, liability and employee benefit cover with Bima Cafe's licensed advisors and end-to-end claim support.",
      },
      { property: "og:title", content: "Bima Cafe | Sampoorna Suraksha" },
      {
        property: "og:description",
        content:
          "Licensed insurance advisory for Indian families and businesses — 11 lines of cover, one dedicated advisor, claims handled for you.",
      },
    ],
  }),
  component: Index,
});

const products = [
  { icon: HeartPulse, name: "Health Insurance", note: "Cashless at 12,000+ hospitals" },
  { icon: ShieldCheck, name: "Term Insurance", note: "Up to ₹5 Cr cover" },
  { icon: TrendingUp, name: "Investment Plans", note: "Guaranteed & market-linked" },
  { icon: Car, name: "Motor Insurance", note: "Instant policy, 60-second quote" },
  { icon: HardHat, name: "Workmen Compensation", note: "Statutory cover for your crew" },
  { icon: Scale, name: "Liability Insurance", note: "Directors, products, public" },
  { icon: Ship, name: "Marine Insurance", note: "Cargo, transit & hull" },
  { icon: Users, name: "Employee Benefits", note: "Group health & GPA" },
  { icon: Home, name: "Property Insurance", note: "Home, plant & stock" },
  { icon: Umbrella, name: "Other Insurance", note: "Travel, pet, event, cyber" },
];

const stats = [
  { value: "18,400+", label: "Policies advised" },
  { value: "₹41 Cr", label: "Claims settled for clients" },
  { value: "35+", label: "Insurer partnerships" },
  { value: "98.2%", label: "Claim assistance success" },
];

const steps = [
  {
    n: "01",
    title: "A conversation, not a form",
    body: "We map your family, assets and liabilities before naming a single product.",
  },
  {
    n: "02",
    title: "Neutral comparison",
    body: "Quotes from 35+ insurers placed side by side — wordings, waiting periods, exclusions.",
  },
  {
    n: "03",
    title: "Placed and reviewed",
    body: "We issue the policy and revisit it each renewal as your life changes.",
  },
  {
    n: "04",
    title: "Claims handled for you",
    body: "One advisor owns your claim from intimation to settlement. You never chase.",
  },
];

const testimonials = [
  {
    name: "Ankit Joshi",
    role: "Health claim, Noida",
    quote:
      "Filing a claim can be stressful, but the Bima Cafe team handled everything for me. I am so thankful for their support during a difficult time.",
  },
  {
    name: "Savi Gupta",
    role: "Travel cover, Delhi",
    quote:
      "The platform is effortless and the service is outstanding. I found a travel plan in minutes and left for my trip without a worry.",
  },
  {
    name: "Rajesh Kumar",
    role: "Term plan, Gurugram",
    quote:
      "They guided me through every step and placed a policy that suited my family precisely. Nothing was oversold.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Utility bar */}
      <div className="ink-panel hidden md:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-3 text-xs tracking-wide">
          <div className="flex items-center gap-8 opacity-80">
            <span className="inline-flex items-center gap-2">
              <Phone className="size-3.5" /> +91 85868 79869
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="size-3.5" /> support@painsurancebrokers.in
            </span>
          </div>
          <span className="eyebrow text-gold-gradient">IRDAI licensed broker · P&amp;A Insurance Brokers</span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-5">
            <a href="/" className="flex flex-col leading-none">
              <span className="wordmark text-[1.65rem] sm:text-[2rem]">
                <span className="text-brand-deep">BIMA</span>
                <span className="text-brand">CAFE</span>
              </span>
              <span className="mt-2 flex items-center gap-3">
                <span className="gold-rule w-8 shrink-0" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                  Sampoorna Suraksha
                </span>
              </span>
            </a>
            <span className="hidden h-10 w-px bg-border sm:block" />
            <a
              href="#quote"
              className="hidden items-center gap-2.5 sm:flex"
              aria-label="P&A Insurance Brokers"
            >
              <img
                src={paLogo}
                alt="P&A Insurance Brokers logo"
                width={816}
                height={816}
                loading="lazy"
                className="size-9"
              />
              <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.18em] text-muted-foreground">
                A unit of
                <br />
                P&amp;A Insurance Brokers
              </span>
            </a>
          </div>
          <nav className="hidden items-center gap-10 text-sm font-medium lg:flex">
            {["Insurance", "For Business", "Claims", "About", "POSP"].map((item) => (
              <a
                key={item}
                href="#cover"
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-luxe"
          >
            Talk to an advisor
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="ink-panel relative overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-36">
          <div className="animate-rise">
            <div className="flex items-center gap-4">
              <span className="gold-rule w-16 shrink-0" />
              <span className="eyebrow text-gold-gradient">Since 2009 · 35 insurer partners</span>
            </div>
            <h1 className="display-xl mt-8 text-[clamp(3rem,7.4vw,6.5rem)] text-ink-foreground">
              Protection worthy
              <br />
              of a lifetime&apos;s
              <br />
              <span className="text-gold-gradient">work.</span>
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-foreground/70">
              Bima Cafe is an advisory-first insurance broker. Eleven lines of cover, thirty-five
              insurers, one dedicated advisor who stays with you through every renewal and every
              claim.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-9 py-4 text-sm font-semibold text-brand-foreground transition-all hover:shadow-luxe"
              >
                Get a tailored quote <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#cover"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-9 py-4 text-sm font-semibold text-ink-foreground/90 transition-colors hover:border-ink-foreground/60"
              >
                Explore our cover
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-sm shadow-luxe">
              <img
                src={heroFamily}
                alt="An Indian family looking towards the city skyline at sunset"
                width={1408}
                height={1600}
                className="h-[34rem] w-full object-cover lg:h-[42rem]"
              />
            </div>
            <div className="absolute -bottom-10 -left-6 hidden w-72 border-t-2 border-gold bg-card p-8 text-card-foreground shadow-card sm:block">
              <p className="eyebrow text-brand">Claim promise</p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold">
                98.2%
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                of assisted claims settled — we file, follow up and negotiate on your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pearl-panel gold-top border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-y-12 px-6 py-20 md:px-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="lg:border-l lg:border-border lg:pl-10 lg:first:border-l-0 lg:first:pl-0">
              <p className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-[-0.04em]">
                {s.value}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cover */}
      <section id="cover" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:py-40">
        <div className="max-w-3xl">
          <span className="eyebrow text-brand">Our cover</span>
          <h2 className="display-xl mt-7 text-[clamp(2.5rem,4.6vw,4.25rem)]">
            Tailored coverage for every aspect of your life
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Personal lines for your family. Commercial lines for the business you built. Every
            placement reviewed by a licensed advisor before it reaches you.
          </p>
        </div>

        <div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ icon: Icon, name, note }) => (
            <a
              key={name}
              href="#quote"
              className="group flex flex-col justify-between bg-card p-10 transition-colors duration-500 hover:bg-secondary"
            >
              <Icon className="size-8 text-brand" strokeWidth={1.4} />
              <div className="mt-16">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{note}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                  Get a quote
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Advisory band */}
      <section className="ink-panel gold-top">
        <div className="mx-auto grid max-w-[1400px] items-center gap-20 px-6 py-28 md:px-10 lg:grid-cols-2 lg:py-40">
          <div className="grid gap-6">
            <img
              src={advisor}
              alt="A senior couple reviewing a policy document with a Bima Cafe advisor"
              width={1200}
              height={912}
              loading="lazy"
              className="h-80 w-full rounded-sm object-cover shadow-luxe"
            />
            <img
              src={businessTower}
              alt="A glass corporate tower at dusk"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-56 w-full rounded-sm object-cover shadow-luxe"
            />
          </div>
          <div>
            <span className="eyebrow text-gold-gradient">Why Bima Cafe</span>
            <h2 className="display-xl mt-7 text-[clamp(2.4rem,4.4vw,4rem)] text-ink-foreground">
              We are paid to advise, not to sell.
            </h2>
            <div className="mt-14 space-y-12">
              {steps.map((s) => (
                <div key={s.n} className="grid grid-cols-[auto_1fr] gap-8">
                  <span className="font-[family-name:var(--font-display)] text-lg text-gold-gradient">
                    {s.n}
                  </span>
                  <div className="border-t border-ink-foreground/15 pt-1">
                    <h3 className="text-xl font-semibold text-ink-foreground">{s.title}</h3>
                    <p className="mt-3 text-ink-foreground/65">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:py-40">
        <span className="eyebrow text-brand">Client voices</span>
        <h2 className="display-xl mt-7 max-w-2xl text-[clamp(2.4rem,4.4vw,4rem)]">
          Trusted at the moment it matters most
        </h2>
        <div className="mt-20 grid gap-px border border-border bg-border lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col justify-between bg-card p-12">
              <Quote className="size-8 text-gold" strokeWidth={1.4} />
              <blockquote className="mt-10 text-xl leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-12 hairline pt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Quote CTA */}
      <section id="quote" className="pearl-panel gold-top border-t border-border">
        <div className="mx-auto grid max-w-[1400px] gap-20 px-6 py-28 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:py-36">
          <div>
            <span className="eyebrow text-brand">Let us help you</span>
            <h2 className="display-xl mt-7 text-[clamp(2.4rem,4.6vw,4.25rem)]">
              Speak with an advisor today
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Share a few details and a licensed advisor will call you within one working hour with
              a neutral comparison — no obligation, no spam.
            </p>
            <div className="mt-12 flex flex-col gap-3 text-sm">
              <span className="inline-flex items-center gap-3">
                <Phone className="size-4 text-brand" /> +91 85868 79869
              </span>
              <span className="inline-flex items-center gap-3">
                <Mail className="size-4 text-brand" /> support@painsurancebrokers.in
              </span>
            </div>
          </div>

          <form
            className="bg-card p-10 shadow-card md:p-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6">
              <label className="grid gap-2 text-sm font-medium">
                Full name
                <input
                  type="text"
                  placeholder="Your name"
                  className="border-b border-input bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Mobile
                <input
                  type="tel"
                  placeholder="+91"
                  className="border-b border-input bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Cover required
                <select className="border-b border-input bg-transparent pb-3 text-base outline-none focus:border-brand">
                  {products.map((p) => (
                      <option key={p.name}>{p.name}</option>
                  ))}
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="mt-12 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-luxe"
            >
              Request my comparison <ArrowUpRight className="size-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="ink-panel gold-top">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
          <div className="flex flex-col gap-10 border-b border-ink-foreground/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
            <p className="display-xl max-w-2xl text-[clamp(2rem,3.4vw,3rem)] text-ink-foreground">
              Sampoorna Suraksha — complete protection, honestly advised.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 self-start rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground lg:self-auto"
            >
              Get a quote <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-col gap-4 text-xs text-ink-foreground/55 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Bima Cafe · P&amp;A Insurance Brokers Pvt. Ltd.</p>
            <p>Insurance is the subject matter of solicitation. IRDAI licensed broker.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
