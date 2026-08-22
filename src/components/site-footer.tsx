import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import paLogo from "@/assets/pa-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="ink-panel gold-top">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="flex flex-col gap-10 border-b border-ink-foreground/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <p className="display-xl max-w-2xl text-[clamp(2rem,3.4vw,3rem)] text-ink-foreground">
            Sampoorna Suraksha — complete protection, honestly advised.
          </p>
          <Link
            to="/"
            hash="quote"
            className="inline-flex items-center gap-2 self-start rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground lg:self-auto"
          >
            Get a quote <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="wordmark text-3xl text-ink-foreground">
              BIMA<span className="text-gold">CAFE</span>
            </p>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-ink-foreground/55">
              Sampoorna Suraksha
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="rounded-sm bg-cream px-3 py-2">
              <img
                src={paLogo.url}
                alt="P&A Insurance Brokers logo"
                width={258}
                height={102}
                loading="lazy"
                className="h-11 w-auto shrink-0"
              />
            </span>

            <p className="text-xs leading-relaxed text-ink-foreground/90">
              A brand of{" "}
              <span className="font-semibold text-ink-foreground">
                P&amp;A Insurance Brokers Pvt. Ltd.
              </span>
              <br />
              IRDAI licensed direct broker
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 hairline pt-8 text-xs text-ink-foreground/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Bima Cafe · P&amp;A Insurance Brokers Pvt. Ltd.</p>
          <p>Insurance is the subject matter of solicitation. IRDAI licensed broker.</p>
        </div>
      </div>
    </footer>
  );
}
