import { useState } from "react";
import { ArrowUpRight, Puzzle, RotateCcw } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import bimacafeLogo from "@/assets/bimacafe-logo.png.asset.json";
import heroFamily from "@/assets/hero-family.jpg";
import aboutOffice from "@/assets/about-office.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import businessTower from "@/assets/business-tower.jpg";

const puzzlePieces = [
  { image: heroFamily, alt: "An Indian family looking towards a city skyline", label: "Family" },
  { image: aboutOffice, alt: "A Bima Cafe advisor meeting with a client", label: "Guidance" },
  { image: businessTower, alt: "A corporate tower at dusk", label: "Business" },
  { image: aboutTeam, alt: "The Bima Cafe team working together", label: "Support" },
];

export function PuzzleHero() {
  const [assembled, setAssembled] = useState(true);

  return (
    <section className="puzzle-hero ink-panel relative isolate overflow-hidden">
      <div
        className={`puzzle-board ${assembled ? "is-assembled" : "is-scattered"}`}
        aria-label="A picture puzzle of family, advisor, business and support coming together"
      >
        {puzzlePieces.map((piece, index) => (
          <div className={`puzzle-piece puzzle-piece-${index + 1}`} key={piece.label}>
            <img src={piece.image} alt={piece.alt} />
            <span>{piece.label}</span>
          </div>
        ))}
      </div>

      <div className="puzzle-hero-content relative z-10 mx-auto flex min-h-[720px] max-w-[1400px] flex-col justify-center px-6 py-24 md:px-10 lg:min-h-[790px]">
        <div className="max-w-[790px]">
          <img
            src={bimacafeLogo.url}
            alt="Bima Cafe — Sampoorna Suraksha"
            width={512}
            height={205}
            className="puzzle-hero-logo mb-8 h-12 w-auto object-contain sm:h-14"
          />

          <div className="mb-7 flex items-center gap-4">
            <span className="gold-rule w-14 shrink-0" />
            <span className="eyebrow text-gold">Since 2009 · 35 insurer partners</span>
          </div>

          <h1 className="puzzle-headline display-xl text-ink-foreground">
            <span className="puzzle-question block">
              Too many policies.<br />
              Too many questions?
            </span>
            <span className="puzzle-solution mt-5 block font-sans text-[0.52em] font-extrabold leading-[1.12] text-gold">
              LET&apos;S PUT THE PIECES TOGETHER.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-foreground/85">
            A clearer way to protect the people, work and plans you care about.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-foreground/70 sm:text-base">
            Bima Cafe is an advisory-first insurance broker. Eleven lines of cover, thirty-five
            insurers, one dedicated advisor who stays with you through every renewal and every
            claim.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="h-auto rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-none hover:bg-primary/90 sm:px-9 sm:py-4"
            >
              <Link to="/contact">
                Talk to an advisor <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-full border-ink-foreground/35 bg-transparent px-7 py-3.5 text-sm font-semibold text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground sm:px-9 sm:py-4"
            >
              <Link to="/" hash="cover">Explore our cover</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 lg:absolute lg:bottom-9 lg:right-10 lg:mt-0">
          <Button
            type="button"
            variant="ghost"
            aria-pressed={!assembled}
            aria-label={assembled ? "Scatter the puzzle pieces" : "Put the puzzle pieces together"}
            onClick={() => setAssembled((current) => !current)}
            className="h-auto rounded-full border border-ink-foreground/30 bg-ink/35 px-4 py-2.5 text-xs font-semibold text-ink-foreground backdrop-blur-sm hover:bg-ink/60 hover:text-ink-foreground"
          >
            {assembled ? <Puzzle aria-hidden="true" /> : <RotateCcw aria-hidden="true" />}
            {assembled ? "Scatter the pieces" : "Put the pieces together"}
          </Button>
          <span className="hidden text-xs text-ink-foreground/70 sm:inline">A little clarity goes a long way</span>
        </div>
      </div>
      <span className="sr-only" aria-live="polite">
        {assembled ? "The picture is complete." : "The picture pieces are separated."}
      </span>
    </section>
  );
}