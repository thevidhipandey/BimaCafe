import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Mail, Phone } from "lucide-react";

import paLogo from "@/assets/pa-logo.png.asset.json";
import bimacafeLogo from "@/assets/bimacafe-logo.png.asset.json";
import { products } from "@/lib/products";

const nav = [
  { label: "For Business", to: "/", hash: "cover" },
  { label: "Claims", to: "/contact", hash: "claims" },
  { label: "About", to: "/about", hash: undefined },
  { label: "POSP", to: "/posp", hash: undefined },
  { label: "Contact", to: "/contact", hash: undefined },
] as const;

export function SiteHeader() {
  return (
    <>
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
          <span className="eyebrow text-gold">IRDAI licensed broker · P&amp;A Insurance Brokers</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-5">
            <Link to="/" className="flex items-center gap-4">
              <img
                src={bimacafeLogo.url}
                alt="Bima Cafe — Sampoorna Suraksha"
                width={512}
                height={205}
                className="h-10 w-auto sm:h-12"
              />
            </Link>

            <span className="hidden h-10 w-px bg-border sm:block" />
            <span className="hidden items-center gap-2.5 sm:flex">
              <img
                src={paLogo.url}
                alt="P&A Insurance Brokers logo"
                width={258}
                height={102}
                loading="lazy"
                className="h-9 w-auto"
              />
              <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.18em] text-muted-foreground">
                A unit of
                <br />
                P&amp;A Insurance Brokers
              </span>
            </span>
          </div>

          <nav className="hidden items-center gap-10 text-sm font-medium lg:flex">
            {/* Insurance dropdown */}
            <div className="group relative">
              <Link
                to="/"
                hash="cover"
                className="inline-flex items-center gap-1.5 text-foreground/70 transition-colors hover:text-foreground group-hover:text-foreground"
              >
                Insurance
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-[30rem] -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="grid grid-cols-2 gap-px border border-border bg-border shadow-card">
                  {products.map(({ icon: Icon, name, note, slug }) => (
                    <Link
                      key={slug}
                      to="/"
                      hash={slug}
                      className="flex items-start gap-3 bg-card p-4 transition-colors hover:bg-secondary"
                    >
                      <Icon className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={1.5} />
                      <span>
                        <span className="block text-[13px] font-semibold leading-tight">{name}</span>
                        <span className="mt-1 block text-[11px] leading-snug text-muted-foreground">
                          {note}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                {...(item.hash ? { hash: item.hash } : {})}
                className="text-foreground/70 transition-colors hover:text-foreground"
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-brand" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-luxe"
          >
            Talk to an advisor
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </header>
    </>
  );
}
