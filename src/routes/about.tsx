import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Compass,
  Globe2,
  HandHeart,
  Handshake,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wallet,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { insurers } from "@/lib/insurers";
import aboutOffice from "@/assets/about-office.jpg";
import aboutValues from "@/assets/about-values.jpg";
import aboutTeam from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bima Cafe | Advisory-First Insurance Brokers" },
      {
        name: "description",
        content:
          "Meet the people behind Bima Cafe — a P&A Insurance Brokers company simplifying health, life and commercial insurance for Indian families and businesses since 2009.",
      },
      { property: "og:title", content: "About Bima Cafe | Sampoorna Suraksha" },
      {
        property: "og:description",
        content:
          "Our values, mission and leadership — advisory-first insurance broking with claim support that never leaves you chasing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const pillars = [
  {
    key: "values",
    label: "Our Values",
    heading: "The standards we refuse to trade away",
    body: "Values are not a poster in our office — they decide which policies we recommend and which ones we quietly walk away from.",
    image: aboutValues,
    imageAlt: "A multi-generational Indian family together at golden hour",
    items: [
      { icon: HeartHandshake, title: "Customer focus", note: "Your need is briefed before any product is named." },
      { icon: ShieldCheck, title: "Integrity first", note: "Wordings, waiting periods and exclusions read out loud." },
      { icon: Lightbulb, title: "Innovation driven", note: "Digital issuance, tracked claims, transparent renewals." },
      { icon: Sparkles, title: "Excellence in everything", note: "Every file reviewed twice before it reaches you." },
      { icon: Handshake, title: "Trustworthy partnerships", note: "35+ insurer relationships, no exclusive loyalties." },
      { icon: BadgeCheck, title: "Reliability guaranteed", note: "One named advisor who answers, every single time." },
    ],
  },
  {
    key: "mission",
    label: "Our Mission",
    heading: "Insurance that a family can actually understand",
    body: "We exist to remove jargon, pressure and paperwork from a decision that protects everything you have built.",
    image: aboutOffice,
    imageAlt: "A Bima Cafe advisor explaining a policy to a client",
    items: [
      { icon: HandHeart, title: "Customer satisfaction", note: "Advice measured by renewals, not first-year commission." },
      { icon: Lightbulb, title: "Innovative solutions", note: "Cover structured around your actual risk, not a template." },
      { icon: Wallet, title: "Affordable coverage", note: "Neutral comparison across insurers on price and wording." },
      { icon: Handshake, title: "Trusted relationships", note: "Families who return with their parents and children." },
      { icon: Target, title: "Value-driven growth", note: "We grow only when clients stay protected and satisfied." },
      { icon: Users, title: "Community impact", note: "Insurance literacy sessions for first-time buyers." },
    ],
  },
  {
    key: "goals",
    label: "Company Goals",
    heading: "Where Bima Cafe is heading next",
    body: "A brokerage built to last: wider reach, sharper service and a team that grows with the clients it serves.",
    image: aboutTeam,
    imageAlt: "The Bima Cafe team reviewing performance together",
    items: [
      { icon: Users, title: "Customer empowerment", note: "Tools that let you compare and decide with confidence." },
      { icon: Leaf, title: "Sustainable growth", note: "Measured expansion, never at the cost of service quality." },
      { icon: Globe2, title: "Wider reach", note: "Serving clients across metros, tier-2 cities and NRI families." },
      { icon: Sparkles, title: "Brand recognition", note: "Sampoorna Suraksha as shorthand for honest advice." },
      { icon: HandHeart, title: "Community engagement", note: "POSP partners trained and supported year-round." },
      { icon: Compass, title: "Operational efficiency", note: "Faster issuance, faster claims, fewer follow-ups." },
    ],
  },
] as const;

const milestones = [
  { year: "2009", title: "The brokerage begins", body: "P&A Insurance Brokers opens with a single promise: advise, never push." },
  { year: "2016", title: "Commercial lines scale", body: "Marine, liability and employee benefit programmes for growing enterprises." },
  { year: "2020", title: "Bima Cafe is born", body: "A digital-first advisory brand for families who want plain answers." },
  { year: "2026", title: "18,400+ policies advised", body: "₹41 Cr in claims settled with a 98.2% assisted claim success rate." },
];

const leaders = [
  {
    name: "Naresh Pandey",
    role: "Director & Principal Officer",
    body: "Leads Bima Cafe with a vision to make insurance simple, transparent and genuinely customer-first.",
    initials: "NP",
  },
  {
    name: "Bela Pandey",
    role: "Director",
    body: "Drives sustainable growth and innovation through steady, long-horizon strategic leadership.",
    initials: "BP",
  },
  {
    name: "Vibha Tripathi",
    role: "General Manager, Marketing",
    body: "Builds brand trust through clear communication and insurance education that respects the reader.",
    initials: "VT",
  },
];




function About() {
  const [active, setActive] = useState<(typeof pillars)[number]["key"]>("values");
  const pillar = pillars.find((p) => p.key === active)!;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero — editorial split */}
      <section className="ink-panel relative overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div className="animate-rise">
            <div className="flex items-center gap-4">
              <span className="gold-rule w-16 shrink-0" />
              <span className="eyebrow text-gold">About Bima Cafe</span>
            </div>
            <h1 className="display-xl mt-9 max-w-2xl text-[clamp(2.4rem,5.4vw,4.6rem)] text-ink-foreground">
              You can depend on us for advice, not a sales pitch.
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-foreground/70">
              Bima Cafe is the advisory brand of P&amp;A Insurance Brokers. We simplify insurance for
              families and businesses with tailored cover, competitive pricing and support that stays
              with you long after the policy is issued.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/"
                hash="quote"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-9 py-4 text-sm font-semibold text-brand-foreground transition-all hover:shadow-luxe"
              >
                Talk to an advisor
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/"
                hash="cover"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-9 py-4 text-sm font-semibold text-ink-foreground/90 transition-colors hover:border-ink-foreground/60"
              >
                Explore our cover
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-sm shadow-luxe">
              <img
                src={aboutTeam}
                alt="The Bima Cafe advisory team at work"
                width={1408}
                height={1600}
                className="h-[26rem] w-full object-cover lg:h-[34rem]"
              />
            </div>
            <div className="absolute -bottom-10 -left-6 hidden w-72 border-t-2 border-gold bg-card p-8 text-card-foreground shadow-card sm:block">
              <p className="eyebrow text-brand">Since 2009</p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold">17 yrs</p>
              <p className="mt-2 text-sm text-muted-foreground">
                of advising Indian families, founders and enterprises across 11 lines of cover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section className="pearl-panel gold-top border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-y-12 px-6 py-20 md:px-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: "18,400+", l: "Policies advised" },
            { v: "35+", l: "Insurer partnerships" },
            { v: "₹41 Cr", l: "Claims settled for clients" },
            { v: "98.2%", l: "Assisted claim success" },
          ].map((s) => (
            <div
              key={s.l}
              className="lg:border-l lg:border-border lg:pl-10 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-[-0.04em]">
                {s.v}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-[1400px] items-center gap-20 px-6 py-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div>
          <span className="eyebrow text-brand">Who we are</span>
          <h2 className="display-xl mt-7 text-[clamp(2.2rem,4.2vw,3.6rem)]">
            Trusted brokers for the things you cannot afford to lose
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            As licensed brokers we offer tailored solutions across health, life, motor, marine,
            property and liability — ensuring you receive the right coverage at competitive rates,
            explained in language you can act on.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our mission is to build lasting relationships by providing reliable guidance at every
            step — from the first question to the final claim settlement.
          </p>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
            {[
              { v: "1 hr", l: "Advisor callback" },
              { v: "11", l: "Lines of cover" },
              { v: "0", l: "Exclusive insurer ties" },
            ].map((s) => (
              <div key={s.l} className="bg-card p-8">
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-brand">
                  {s.v}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={aboutOffice}
            alt="A Bima Cafe advisor walking a client through policy documents"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-[26rem] w-full rounded-sm object-cover shadow-luxe lg:h-[32rem]"
          />
          <div className="absolute -bottom-8 -right-4 hidden w-64 border-t-2 border-gold bg-card p-7 shadow-card sm:block">
            <p className="eyebrow text-brand">Our promise</p>
            <p className="mt-4 text-base leading-relaxed text-card-foreground">
              We don&apos;t just offer insurance — we offer peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Values / Mission / Goals */}
      <section className="pearl-panel gold-top border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:py-32">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow text-brand">What guides us</span>
              <h2 className="display-xl mt-7 text-[clamp(2.2rem,4.4vw,3.8rem)]">{pillar.heading}</h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{pillar.body}</p>
            </div>
            <div className="flex flex-wrap gap-2 border border-border bg-card p-1.5">
              {pillars.map((p) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setActive(p.key)}
                  aria-pressed={active === p.key}
                  className={`px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${
                    active === p.key
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:bg-secondary"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-[0.8fr_1.2fr]">
            <img
              key={pillar.image}
              src={pillar.image}
              alt={pillar.imageAlt}
              width={1200}
              height={1504}
              loading="lazy"
              className="animate-rise h-72 w-full bg-card object-cover lg:h-full"
            />
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {pillar.items.map(({ icon: Icon, title, note }) => (
                <div key={title} className="bg-card p-9">
                  <Icon className="size-7 text-brand" strokeWidth={1.4} />
                  <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="ink-panel gold-top">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:py-32">
          <div>
            <span className="eyebrow text-gold">Our journey</span>
            <h2 className="display-xl mt-7 text-[clamp(2.2rem,4vw,3.4rem)] text-ink-foreground">
              Seventeen years of quiet, steady advice
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-ink-foreground/70">
              From a single-desk brokerage to a digital advisory brand — the same promise, at a
              larger scale.
            </p>
          </div>
          <ol className="space-y-10">
            {milestones.map((m) => (
              <li key={m.year} className="grid grid-cols-[auto_1fr] gap-8">
                <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-gold">
                  {m.year}
                </span>
                <div className="border-t border-ink-foreground/20 pt-2">
                  <h3 className="text-xl font-semibold text-ink-foreground">{m.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-foreground/65">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:py-32">
        <div className="max-w-3xl">
          <span className="eyebrow text-brand">Team members</span>
          <h2 className="display-xl mt-7 text-[clamp(2.2rem,4.4vw,3.8rem)]">
            Our expert team will assist you
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Experienced professionals who know that a team player is worth more than a top seller —
            and that your policy is only as good as the person standing behind it.
          </p>
        </div>
        <div className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-3">
          {leaders.map((l) => (
            <article key={l.name} className="flex flex-col bg-card p-11">
              <span className="flex size-16 items-center justify-center rounded-full bg-secondary font-[family-name:var(--font-display)] text-xl font-bold text-brand">
                {l.initials}
              </span>
              <h3 className="mt-10 text-2xl font-semibold">{l.name}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand">
                {l.role}
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{l.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="pearl-panel gold-top border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
          <span className="eyebrow text-brand">Insurer partners</span>
          <h2 className="display-xl mt-7 max-w-2xl text-[clamp(1.9rem,3.4vw,3rem)]">
            Thirty-five insurers compared, none of them our boss
          </h2>
          <div className="mt-14 grid gap-px border border-border bg-border grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {insurers.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center bg-card px-6 py-8"
              >
                <img
                  src={p.url}
                  alt={`${p.name} logo`}
                  width={340}
                  height={130}
                  loading="lazy"
                  className="h-12 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial + POSP */}
      <section id="join" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:py-32">
        <div className="grid gap-px border border-border bg-border lg:grid-cols-[1.1fr_0.9fr]">
          <figure className="flex flex-col justify-between bg-card p-12 lg:p-16">
            <Quote className="size-9 text-gold" strokeWidth={1.4} />
            <blockquote className="mt-10 text-2xl leading-relaxed">
              They explained the fine print before the premium. That single habit is why three
              generations of my family are insured through Bima Cafe.
            </blockquote>
            <figcaption className="mt-12 hairline pt-6">
              <p className="font-semibold">Meera Raghavan</p>
              <p className="mt-1 text-sm text-muted-foreground">Family cover, Lucknow</p>
            </figcaption>
          </figure>
          <div className="cherry-panel flex flex-col justify-between p-12 lg:p-16">
            <div>
              <span className="eyebrow text-gold-soft">Become a POSP</span>
              <h2 className="display-xl mt-7 text-[clamp(1.9rem,3.2vw,2.8rem)]">
                Build an advisory practice with us
              </h2>
              <p className="mt-8 leading-relaxed text-brand-foreground/85">
                Training, licensing support, a full product shelf and a back office that handles
                issuance and claims — so you can focus on the conversation.
              </p>
            </div>
            <Link
              to="/"
              hash="quote"
              className="mt-12 inline-flex items-center gap-2 self-start rounded-full bg-cream px-8 py-4 text-sm font-semibold text-primary transition-all hover:shadow-luxe"
            >
              Join the team <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Back to cover */}
      <section className="pearl-panel gold-top border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="display-xl max-w-2xl text-[clamp(1.7rem,3vw,2.6rem)]">
            Ready to see the cover we place for families like yours?
          </p>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-primary px-9 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-luxe md:self-auto"
          >
            Back to home
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
