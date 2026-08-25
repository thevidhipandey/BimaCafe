import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Coins,
  GraduationCap,
  IdCard,
  LineChart,
  Users,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import advisor from "@/assets/advisor.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import { products } from "@/lib/products";

export const Route = createFileRoute("/posp")({
  head: () => ({
    meta: [
      { title: "Become a POSP Insurance Advisor | Bima Cafe" },
      {
        name: "description",
        content:
          "Join Bima Cafe as a POSP insurance advisor — free IRDAI-approved training, 35+ insurer products, lifelong renewal payouts and full claim support.",
      },
      { property: "og:title", content: "Become a POSP Advisor with Bima Cafe" },
      {
        property: "og:description",
        content:
          "Earn on your own terms as a certified POSP partner. Free training, instant certification and a full product shelf across 35+ insurers.",
      },
    ],
  }),
  component: PospPage,
});

const benefits = [
  {
    icon: Coins,
    title: "Payouts on every policy",
    body: "Competitive commission on new business plus renewal income that keeps paying year after year.",
  },
  {
    icon: BookOpen,
    title: "Free IRDAI training",
    body: "15 hours of guided training, mock tests and a certification exam — at zero cost to you.",
  },
  {
    icon: LineChart,
    title: "Full product shelf",
    body: "Health, term, motor, marine, liability and employee benefits from 35+ Indian insurers.",
  },
  {
    icon: Users,
    title: "A real support desk",
    body: "Underwriting help, quote comparisons and claim follow-ups handled by our in-house team.",
  },
];

const steps = [
  { n: "01", title: "Register", body: "Share your name, PAN, Aadhaar and a 10th-pass certificate." },
  { n: "02", title: "Train", body: "Complete 15 hours of IRDAI-mandated training on your phone." },
  { n: "03", title: "Certify", body: "Clear the online exam and receive your POSP certificate." },
  { n: "04", title: "Start earning", body: "Get your advisor login, quote instantly and earn from day one." },
];

const eligibility = [
  "18 years or older",
  "Passed class 10 (or higher)",
  "Valid PAN and Aadhaar",
  "An active bank account",
  "A smartphone and internet",
  "No prior insurance experience needed",
];

function PospPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="ink-panel relative overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-36">
          <div className="animate-rise">
            <div className="flex items-center gap-4">
              <span className="gold-rule w-16 shrink-0" />
              <span className="eyebrow text-gold">POSP Partner Programme</span>
            </div>
            <h1 className="display-xl mt-9 text-[clamp(2.4rem,5.2vw,4.5rem)] text-ink-foreground">
              Build an insurance practice of your own.
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-foreground/70">
              As a Point of Sales Person with Bima Cafe you sell products from 35+ insurers under our
              IRDAI broking licence — with free certification, transparent payouts and a team that
              handles the paperwork behind you.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/posp"
                hash="join"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-9 py-4 text-sm font-semibold text-brand-foreground transition-all hover:shadow-luxe"
              >
                Apply to join <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-9 py-4 text-sm font-semibold text-ink-foreground/90 transition-colors hover:border-ink-foreground/60"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-sm shadow-luxe">
              <img
                src={advisor}
                alt="A Bima Cafe advisor guiding a client through policy options"
                className="h-[26rem] w-full object-cover lg:h-[34rem]"
              />
            </div>
            <div className="absolute -bottom-10 -left-6 hidden w-72 border-t-2 border-gold bg-card p-8 text-card-foreground shadow-card sm:block">
              <p className="eyebrow text-brand">Zero cost</p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold">15 hrs</p>
              <p className="mt-2 text-sm text-muted-foreground">
                of IRDAI-approved training, fully sponsored by Bima Cafe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:py-36">
        <div className="max-w-3xl">
          <span className="eyebrow text-brand">Why partner with us</span>
          <h2 className="display-xl mt-7 text-[clamp(2.3rem,4.4vw,3.9rem)]">
            Everything you need, nothing you must pay for
          </h2>
        </div>
        <div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card p-10">
              <Icon className="size-8 text-brand" strokeWidth={1.4} />
              <h3 className="mt-14 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="pearl-panel gold-top border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:py-36">
          <span className="eyebrow text-brand">How it works</span>
          <h2 className="display-xl mt-7 max-w-2xl text-[clamp(2.2rem,4.2vw,3.6rem)]">
            Certified in four steps
          </h2>
          <div className="mt-20 grid gap-12 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="hairline pt-8">
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-brand">
                  {s.n}
                </p>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + products */}
      <section className="mx-auto grid max-w-[1400px] gap-20 px-6 py-28 md:px-10 lg:grid-cols-2 lg:py-36">
        <div>
          <span className="eyebrow text-brand">Eligibility</span>
          <h2 className="display-xl mt-7 text-[clamp(2.1rem,3.8vw,3.2rem)]">
            The bar is simple and honest
          </h2>
          <ul className="mt-12 grid gap-5">
            {eligibility.map((e) => (
              <li key={e} className="flex items-start gap-4 text-base">
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.6} />
                {e}
              </li>
            ))}
          </ul>
          <div className="mt-14 overflow-hidden rounded-sm">
            <img
              src={aboutTeam}
              alt="The Bima Cafe advisory team at work"
              className="h-64 w-full object-cover shadow-luxe"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <span className="eyebrow text-brand">What you can sell</span>
          <h2 className="display-xl mt-7 text-[clamp(2.1rem,3.8vw,3.2rem)]">
            Ten lines of cover from day one
          </h2>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
            {products.map(({ icon: Icon, name, slug }) => (
              <Link
                key={slug}
                to="/"
                hash={slug}
                className="group flex items-center gap-4 bg-card p-6 transition-colors hover:bg-secondary"
              >
                <Icon className="size-5 shrink-0 text-brand" strokeWidth={1.5} />
                <span className="text-sm font-semibold">{name}</span>
                <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="join" className="ink-panel gold-top">
        <div className="mx-auto grid max-w-[1400px] gap-20 px-6 py-28 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:py-36">
          <div>
            <span className="eyebrow text-gold">Apply now</span>
            <h2 className="display-xl mt-7 text-[clamp(2.2rem,4.4vw,3.8rem)] text-ink-foreground">
              Start earning as a certified advisor
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-foreground/70">
              Fill in your details and our partner team will call you within one working day to begin
              onboarding and training.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="hairline pt-6">
                <GraduationCap className="size-6 text-gold" strokeWidth={1.5} />
                <p className="mt-4 text-sm text-ink-foreground/75">
                  Training and exam fully sponsored — no joining fee, ever.
                </p>
              </div>
              <div className="hairline pt-6">
                <IdCard className="size-6 text-gold" strokeWidth={1.5} />
                <p className="mt-4 text-sm text-ink-foreground/75">
                  Certification issued under our IRDAI direct broking licence.
                </p>
              </div>
            </div>
          </div>

          <form className="bg-card p-10 text-card-foreground shadow-card md:p-12" onSubmit={(e) => e.preventDefault()}>
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
                City
                <input
                  type="text"
                  placeholder="Where are you based?"
                  className="border-b border-input bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Current occupation
                <select className="border-b border-input bg-transparent pb-3 text-base outline-none focus:border-brand">
                  <option>Student</option>
                  <option>Salaried professional</option>
                  <option>Self-employed / business</option>
                  <option>Insurance agent</option>
                  <option>Retired</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="mt-12 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-luxe"
            >
              Submit my application <ArrowUpRight className="size-4" />
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
