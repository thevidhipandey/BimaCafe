import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, FileText, LifeBuoy, Mail, MapPin, Phone } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import aboutOffice from "@/assets/about-office.jpg";
import { products } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bima Cafe | Advisors & Claim Support" },
      {
        name: "description",
        content:
          "Reach the Bima Cafe advisory desk for quotes, policy servicing or claim assistance. Call +91 85868 79869 or send us your details for a callback.",
      },
      { property: "og:title", content: "Contact Bima Cafe" },
      {
        property: "og:description",
        content:
          "Talk to a licensed Bima Cafe advisor for a neutral quote comparison, policy servicing or end-to-end claim support.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 85868 79869",
    note: "Mon–Sat, 10:00 to 19:00 IST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@painsurancebrokers.in",
    note: "Replies within one working day",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "P&A Insurance Brokers Pvt. Ltd., Noida, Uttar Pradesh",
    note: "Visits by appointment",
  },
];

const claimSteps = [
  { n: "01", title: "Intimate", body: "Call or email us with the policy number and what happened." },
  { n: "02", title: "Document", body: "We list exactly what is needed and collect it from you." },
  { n: "03", title: "Follow up", body: "Your advisor chases the insurer and surveyor daily." },
  { n: "04", title: "Settle", body: "We review the settlement and contest any unfair deduction." },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="ink-panel">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div className="animate-rise">
            <div className="flex items-center gap-4">
              <span className="gold-rule w-16 shrink-0" />
              <span className="eyebrow text-gold">Contact us</span>
            </div>
            <h1 className="display-xl mt-9 text-[clamp(2.4rem,5vw,4.4rem)] text-ink-foreground">
              A real advisor, on the other end of the line.
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-foreground/70">
              Whether you need a fresh quote, help with a renewal or someone to run a claim for you —
              one named advisor picks it up and stays with it.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="tel:+918586879869"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-9 py-4 text-sm font-semibold text-brand-foreground transition-all hover:shadow-luxe"
              >
                <Phone className="size-4" /> Call now
              </a>
              <Link
                to="/contact"
                hash="claims"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-9 py-4 text-sm font-semibold text-ink-foreground/90 transition-colors hover:border-ink-foreground/60"
              >
                Claim assistance
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm shadow-luxe">
            <img
              src={aboutOffice}
              alt="A Bima Cafe advisor meeting a client at the office"
              className="h-[24rem] w-full object-cover lg:h-[32rem]"
            />
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="pearl-panel gold-top border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-px px-6 py-0 md:px-10 lg:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, note }) => (
            <div key={label} className="py-16 lg:border-l lg:border-border lg:pl-12 lg:first:border-l-0 lg:first:pl-0">
              <Icon className="size-7 text-brand" strokeWidth={1.4} />
              <p className="eyebrow mt-8 text-muted-foreground">{label}</p>
              <p className="mt-3 text-lg font-semibold leading-snug">{value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="mx-auto grid max-w-[1400px] gap-20 px-6 py-28 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:py-36">
        <div>
          <span className="eyebrow text-brand">Send an enquiry</span>
          <h2 className="display-xl mt-7 text-[clamp(2.2rem,4.2vw,3.6rem)]">
            Tell us what you need covered
          </h2>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Share a few details and a licensed advisor calls you within one working hour with a
            neutral comparison across 35+ insurers — no obligation, no spam.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <div className="hairline pt-6">
              <Clock className="size-6 text-gold" strokeWidth={1.5} />
              <p className="mt-4 text-sm text-muted-foreground">
                Callback inside one working hour, every working day.
              </p>
            </div>
            <div className="hairline pt-6">
              <FileText className="size-6 text-gold" strokeWidth={1.5} />
              <p className="mt-4 text-sm text-muted-foreground">
                Wordings, waiting periods and exclusions explained in plain language.
              </p>
            </div>
          </div>
        </div>

        <form className="bg-card p-10 shadow-card md:p-12" onSubmit={(e) => e.preventDefault()}>
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
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="border-b border-input bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Cover required
              <select className="border-b border-input bg-transparent pb-3 text-base outline-none focus:border-brand">
                {products.map((p) => (
                  <option key={p.slug}>{p.name}</option>
                ))}
                <option>Claim assistance</option>
                <option>POSP partnership</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Message
              <textarea
                rows={3}
                placeholder="Anything we should know?"
                className="resize-none border-b border-input bg-transparent pb-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-12 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-luxe"
          >
            Request a callback <ArrowUpRight className="size-4" />
          </button>
        </form>
      </section>

      {/* Claims */}
      <section id="claims" className="ink-panel gold-top">
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:py-36">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow text-gold">Claim support</span>
              <h2 className="display-xl mt-7 text-[clamp(2.2rem,4.2vw,3.6rem)] text-ink-foreground">
                We file the claim. You focus on what matters.
              </h2>
            </div>
            <a
              href="tel:+918586879869"
              className="inline-flex items-center gap-2 self-start rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground lg:self-auto"
            >
              <LifeBuoy className="size-4" /> Report a claim
            </a>
          </div>
          <div className="mt-20 grid gap-12 lg:grid-cols-4">
            {claimSteps.map((s) => (
              <div key={s.n} className="hairline pt-8">
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-gold">
                  {s.n}
                </p>
                <h3 className="mt-6 text-xl font-semibold text-ink-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross links */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {[
            { to: "/", label: "Explore all cover", note: "Ten lines of insurance, compared neutrally." },
            { to: "/about", label: "About Bima Cafe", note: "Seventeen years of steady, honest advice." },
            { to: "/posp", label: "Become a POSP", note: "Free certification and lifelong renewals." },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group bg-card p-10 transition-colors hover:bg-secondary"
            >
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                {c.label}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
