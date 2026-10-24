import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import needBasedAdoption from "../assets/need-based-adoption.webp.asset.json";
import photoUpload from "../assets/guard360-photo-upload.webp.asset.json";
import parkingAnalytics from "../assets/parking-analytics.webp.asset.json";
import atherCharging from "../assets/ather-charging.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishnu Menon — Product Manager, Connected Mobility" },
      { name: "description", content: "Product Manager at Mercedes-Benz R&D. 12+ years taking embedded and connected products from prototype to scaled, regulated launch." },
      { property: "og:title", content: "Vishnu Menon — Product Manager, Connected Mobility" },
      { property: "og:description", content: "Case studies across Mercedes-Benz, Ather Energy and semiconductors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  ["100K+", "Guard360 users across 20+ markets"],
  ["~500 → 5,000", "EV charging locations in 18 months"],
  ["USD 5M", "annual savings, Ather Drive Control"],
  ["2 × 40%", "Guard360 complaints and manual effort cut"],
];

const cases = [
  {
    t: "Guard360: measuring adoption against real need, not the whole fleet",
    m: "Mercedes-Benz · Cluster lead",
    img: needBasedAdoption.url,
    ar: "aspect-[19/16]",
    mat: "bg-muted/50 p-3",
    wrap: "mx-auto max-w-[340px] ring-1 ring-border",
    alt: "Infographic: 80% of trips are routine repeats that need no prompt, notifications cut by 60%, conversion up from 10% to about 25%, and prompts stepping down from full notification to silent notification to an icon glow",
    p: "Adoption looked low because most users had no need for the feature most of the time. Measuring against real need cut notifications by 60% and made them far more relevant.",
    d: "We segmented users by vehicle age, user age, powertrain and usage depth, and found low engagement across all of them. Digging into trip data showed that about 80% of trips were repeats to the same places, such as home and work, where the service was never needed. The usage rate was therefore measured against the wrong base. We identified each user’s regular destinations from weekly trip counts and stored them on the vehicle profile. Prompts at those places were then stepped down, from full notification to silent notification to a passive icon highlight, for 2–4 spots per user. Adoption is now measured against trips where the service is actually useful.",
    r: "60% fewer notifications and conversion up from 10% to ~25%, at a modest compute cost that we accepted while a cheaper method was developed.",
  },
  {
    t: "Guard360: fixing “pictures not taken” with ticket analysis and LLMs",
    m: "Mercedes-Benz · Cluster lead",
    img: photoUpload.url,
    ar: "aspect-[3/2]",
    mat: "",
    wrap: "",
    alt: "In-car display showing automatic collision detection, captured damage photos and data uploading to the cloud",
    p: "Customers reported missing collision pictures even with the service activated.",
    d: "Sorted support tickets into three failure buckets (not captured, captured but not stored, stored but not uploaded), and matched them to a visit-to-picture funnel. Shipped fixes per bucket: linked the onboard toggle to service activation, added an activation-screen disclaimer, and ran proactive notification campaigns by head-unit generation. Built an ML-driven engagement workflow and a RAG/LLM ticket-analysis workflow.",
    r: "40% fewer complaints from the ML-driven workflow, and 40% less manual triage effort from RAG/LLM analysis.",
  },
  {
    t: "Parking for Navigation: growth, plateau and a deliberate sundown",
    m: "Mercedes-Benz · Product Manager",
    img: parkingAnalytics.url,
    ar: "aspect-[3/2]",
    mat: "",
    wrap: "",
    alt: "Car dashboard showing a city map covered in parking pins beside charts of transactions, usage trends and a location heat map",
    p: "After market expansion, monthly parking transactions sat flat for a long time.",
    d: "Built the funnel, daily trackers and location heat maps. They showed users tapping the start-parking notification but not completing, and little repeat use or repeat location. Redesigned onboarding, then expanded deeper within markets by adopting municipality-level rules on the existing UX flow.",
    r: "3–4x transaction growth and a 1.7x onboarding conversion improvement. Legal and compliance constraints later capped growth, and the product was wound down. Lessons from that reset are in the full case study.",
  },
  {
    t: "Ather Energy: Drive controller, Grid 2.0 and the private charger",
    m: "Ather Energy · Program Manager, then Product Owner",
    img: atherCharging.url,
    ar: "aspect-[3/2]",
    mat: "",
    wrap: "",
    alt: "Electric scooter parked at a charging plaza with a modular battery pack and a holographic display of charging-network growth across India",
    p: "Scale a hardware-heavy product and a public charging network while keeping cost down.",
    d: "Led the Drive controller from POC to production and ramp-up, with the business case and feature benchmarking, coordinating supply chain, firmware, hardware and mechanical. Led Grid 2.0 scaling and conceptualized the private charger.",
    r: "USD 5M annual cost savings, 10–15% higher throughput through streamlined workflows, and the charging network grown from ~500 to ~5,000 locations in 18 months.",
  },
];

type Career = {
  r: string;
  d: string;
  b: string;
  link?: { label: string; href: string };
  projects?: Project[];
};

type Project = {
  t: string;
  href: string;
  img: string;
  alt: string;
  panelImg?: boolean;
  play?: boolean;
};

const career: Career[] = [
  {
    r: "Product Manager, Mercedes-Benz R&D",
    d: "2022 – present · Bangalore",
    b: "Guard360 cluster lead and Parking for Navigation and Payments. Release management, AI/LLM-driven support tooling, and cross-market regulatory compliance (EU Data Act, PSD2, DSA).",
    link: {
      label: "Parking for Navigation and Payments",
      href: "https://business.parkopedia.com/solutions/mercedes-in-car-integrations",
    },
    projects: [
      {
        t: "Parking for Navigation and Payments",
        href: "https://business.parkopedia.com",
        img: "https://business.parkopedia.com/hubfs/Payments%20Platform/Payments-Platform-Parking-image-480x229px.png",
        alt: "Mercedes-Benz with the in-car parking payment flow on its display, from Parkopedia's payments platform",
        panelImg: true,
      },
      {
        t: "AMG Experience: B2B and B2C portal",
        href: "https://experience.mercedes-amg.com/en/events/all-amg-experience-events",
        img: "https://api.microlink.io/?url=https%3A%2F%2Fexperience.mercedes-amg.com%2Fen%2Fevents%2Fall-amg-experience-events&screenshot=true&meta=false&embed=screenshot.url",
        alt: "Screenshot of the AMG Experience events portal listing all AMG experience events",
      },
      {
        t: "Collision detection and vehicle snapshot",
        href: "https://www.youtube.com/watch?v=UjYlGlI-YeY",
        img: "https://img.youtube.com/vi/UjYlGlI-YeY/hqdefault.jpg",
        alt: "Video thumbnail: Mercedes-Benz collision detection capturing and uploading a vehicle damage snapshot",
        play: true,
      },
      {
        t: "Emergency key deactivation",
        href: "https://www.mercedes-benz.com.au/passengercars/services/mercedes-me/digital-extras/guard360.html",
        img: "https://api.microlink.io/?url=https%3A%2F%2Fwww.mercedes-benz.com.au%2Fpassengercars%2Fservices%2Fmercedes-me%2Fdigital-extras%2Fguard360.html&screenshot=true&meta=false&embed=screenshot.url",
        alt: "Screenshot of the Mercedes-Benz Guard360 digital extras page showing emergency key deactivation",
      },
    ],
  },
  {
    r: "Product Owner, Grid 2.0, Ather Energy",
    d: "2019 – 2022",
    b: "Drive Control Program Manager, then Grid 2.0 Product Owner. Also Scrum Master on the Gen 2 dashboard and part of the Scrum-to-SAFe move for a 50+ engineer organization.",
  },
  {
    r: "Program Manager, Tessolve Semiconductors",
    d: "2017 – 2019",
    b: "Post-silicon validation, wafer-out test and packaging programs for TI and Intel, with 85% on-time delivery.",
  },
  {
    r: "Test Lead and NPI Lead, Kaynes Technology",
    d: "2014 – 2017",
    b: "Evaluation and development kits for Cypress Semiconductor, and new product introduction.",
  },
];

function CareerBody({ c }: { c: Career }) {
  if (!c.link) return <>{c.b}</>;
  const [before, after] = c.b.split(c.link.label);
  return (
    <>
      {before}
      <a
        href={c.link.href}
        target="_blank"
        rel="noreferrer"
        className="underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
      >
        {c.link.label}
      </a>
      {after}
    </>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const [failed, setFailed] = useState(false);
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-accent"
    >
      {failed ? (
        <div className="flex aspect-video items-center justify-center bg-muted px-4 text-center">
          <span className="text-sm text-muted-foreground">{p.t}</span>
        </div>
      ) : (
        <div className="relative">
          {p.panelImg ? (
            <div className="v-panel-img">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                onError={() => setFailed(true)}
                className="aspect-video w-full object-cover"
              />
            </div>
          ) : (
            <img
              src={p.img}
              alt={p.alt}
              loading="lazy"
              onError={() => setFailed(true)}
              className="aspect-video w-full object-cover"
            />
          )}
          {p.play && (
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background/85 ring-1 ring-border">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-foreground">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          )}
        </div>
      )}
      <p className="p-3 text-sm font-medium">{p.t}</p>
    </a>
  );
}

const skills: [string, string[]][] = [
  ["Strengths", ["Stakeholder orchestration", "End-to-end ownership", "Release management", "Regulatory compliance", "Funnel and cohort analytics", "Embedded to cloud"]],
  ["AI and tools", ["RAG pipelines", "Azure AI Foundry", "LLM prompting", "n8n", "Claude API and MCP", "SQL"]],
  ["Certifications", ["AWS Certified AI Practitioner", "AWS Cloud Practitioner", "SAFe PM/PO", "Design Thinking"]],
];

function Label({ n, children }: { n: string; children: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="text-accent">{n}</span> — {children}
    </p>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-semibold text-blue-600">Vishnu Menon</a>
          <div className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            {[["work", "Case studies"], ["path", "Career"], ["skills", "Skills"], ["contact", "Contact"]].map(([id, l]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-accent">{l}</a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        <section className="py-20 md:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Product Manager · Connected Mobility · Bangalore</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] md:text-6xl">
            I take complex embedded and connected products from first prototype to <em className="text-accent">scaled, regulated launch.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            12+ years across semiconductors, EVs and connected vehicles. Today I lead Guard360 and Parking for Navigation at Mercedes-Benz R&D, with a bias for measurable outcomes and honest post-mortems.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent">Read case studies</a>
            <a href="#contact" className="rounded-sm border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent">Get in touch</a>
          </div>
          <dl className="mt-20 grid grid-cols-2 border-t border-border md:grid-cols-4">
            {stats.map(([v, l]) => (
              <div key={v} className="border-b border-border py-6 pr-4 md:border-b-0">
                <dt className="font-display text-3xl md:text-4xl">{v}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work" className="scroll-mt-20 border-t border-border py-20">
          <Label n="01">Case studies</Label>
          <p className="mt-4 max-w-xl text-muted-foreground">Selected work. Details are kept NDA-safe; full write-ups available on request.</p>
          <div className="mt-12 space-y-6">
            {cases.map((c, i) => (
              <article key={c.t} className="rounded-sm border border-border bg-card p-8 md:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl">{c.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.m}</p>
                  </div>
                </div>
                <div className={i === 0 ? "mt-8 grid items-start gap-8 md:grid-cols-[minmax(0,364px)_minmax(0,1fr)]" : "mt-8"}>
                  <figure className={`overflow-hidden rounded-sm border border-border ${i === 0 ? "mx-auto w-full max-w-[364px]" : ""} ${c.mat}`}>
                    <img src={c.img} alt={c.alt} loading="lazy" className={`${c.ar} w-full object-cover ${c.wrap}`} />
                  </figure>
                  <div className={i === 0 ? "grid gap-6" : "mt-8 grid gap-8 md:grid-cols-3"}>
                    {[["Problem", c.p], ["What I did", c.d], ["Result", c.r]].map(([h, b]) => (
                      <div key={h}>
                        <h4 className={`font-mono text-xs uppercase tracking-widest ${h === "Result" ? "text-accent" : "text-muted-foreground"}`}>{h}</h4>
                        <p className={`mt-3 text-sm leading-relaxed ${h === "Result" ? "font-medium" : ""}`}>{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="path" className="scroll-mt-20 border-t border-border py-20">
          <Label n="02">Career</Label>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">Hardware roots, platform and AI product ownership today.</h2>
          <ol className="mt-12">
            {career.map((c) => (
              <li key={c.r} className="grid gap-2 border-t border-border py-8 md:grid-cols-[1fr_2fr]">
                <div>
                  <p className="font-semibold">{c.r}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{c.d}</p>
                </div>
                <div className="grid gap-5">
                  <p className="text-muted-foreground">
                    <CareerBody c={c} />
                  </p>
                  {c.projects && (
                    <div className="grid gap-5 md:grid-cols-2">
                      {c.projects.map((p) => (
                        <ProjectCard key={p.t} p={p} />
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <p className="border-t border-border pt-8 text-sm text-muted-foreground">B.E. Electrical & Electronics, Anna University · MBA Systems & Operations, SCMS Cochin</p>
        </section>

        <section id="skills" className="scroll-mt-20 border-t border-border py-20">
          <Label n="03">Skills and credentials</Label>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {skills.map(([h, items]) => (
              <div key={h}>
                <h3 className="font-display text-xl">{h}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li key={s} className="rounded-full border border-border bg-card px-3 py-1 text-sm">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section id="contact" className="scroll-mt-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">04 — Contact</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">Let’s talk.</h2>
          <p className="mt-6 max-w-xl opacity-75">Open to senior product and program roles in connected and embedded products.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {[["Email", "mailto:you@example.com"], ["LinkedIn", "#"], ["Resume (PDF)", "#"]].map(([l, h]) => (
              <a key={l} href={h} className="rounded-sm border border-primary-foreground/40 px-6 py-3 text-sm transition-colors hover:border-accent hover:bg-accent">{l}</a>
            ))}
          </div>
          <p className="mt-20 text-xs opacity-60">© 2026 Vishnu Menon. Case studies are shared in NDA-safe form.</p>
        </div>
      </section>
    </div>
  );
}
