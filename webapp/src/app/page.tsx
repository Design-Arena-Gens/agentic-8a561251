import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Command,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Visual Workflow Builder",
    description:
      "Drag-and-drop agents, data sources, and human checkpoints into resilient, observable pipelines that anyone can edit.",
    icon: Workflow,
  },
  {
    title: "Realtime Orchestration",
    description:
      "Stream execution updates, retry failed branches automatically, and surface leading indicators before SLAs slip.",
    icon: Zap,
  },
  {
    title: "Enterprise Guardrails",
    description:
      "Apply prebuilt compliance policies, PII scrubbing, and role-based review flows without writing brittle glue code.",
    icon: ShieldCheck,
  },
  {
    title: "Unified Command Center",
    description:
      "Track throughput, cost-per-run, model drift, and human approvals from a single mission control dashboard.",
    icon: Command,
  },
];

const timeline = [
  {
    phase: "Discover",
    title: "Map your operational intent",
    detail:
      "Document goals with our collaborative brief canvas, then import existing SOPs to auto-generate agent-ready steps.",
  },
  {
    phase: "Design",
    title: "Compose intelligent workflows",
    detail:
      "Blend AI agents, deterministic APIs, and human experts. Simulate scenarios with synthetic data before releasing.",
  },
  {
    phase: "Deploy",
    title: "Ship with confidence",
    detail:
      "Version deployments, schedule rollouts, and receive regression alerts backed by analytics trusted by SRE teams.",
  },
  {
    phase: "Optimize",
    title: "Continuously improve",
    detail:
      "Capture feedback loops, benchmark model swaps, and push one-click experiments into production safely.",
  },
];

const metrics = [
  { label: "Automation coverage", value: "84%" },
  { label: "Avg. turnaround", value: "↘ 67%" },
  { label: "Human escalations", value: "1.4%" },
  { label: "Annual savings", value: "$4.2M" },
];

const plans = [
  {
    name: "Launch",
    price: "$0",
    cadence: "up to 3 live workflows",
    highlights: [
      "Starter agent library",
      "Realtime run monitor",
      "Community support",
    ],
    cta: "Start free",
  },
  {
    name: "Scale",
    price: "$249",
    cadence: "per workspace / month",
    highlights: [
      "Unlimited workflows",
      "SOC2 compliant guardrails",
      "Advanced analytics & alerts",
    ],
    cta: "Book demo",
    accent: true,
  },
  {
    name: "Mission Control",
    price: "Talk to us",
    cadence: "for regulated teams",
    highlights: [
      "On-prem data planes",
      "Dedicated success pod",
      "Deeper policy automation",
    ],
    cta: "Contact sales",
  },
];

const faqs = [
  {
    question: "How do I connect my existing tools?",
    answer:
      "Agentic OS ships with native connectors for 60+ SaaS tools, plus an SDK for custom adapters. Deploy in your VPC or use our managed secure bridge.",
  },
  {
    question: "Can humans intervene mid-run?",
    answer:
      "Every workflow can pause at approval checkpoints, assign to the right subject-matter expert, and resume automatically once cleared.",
  },
  {
    question: "Do you support sensitive data?",
    answer:
      "Yes. Field-level redaction, audit trails, and policy templates keep PII and PHI guarded. Customer-controlled keys are available on enterprise plans.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%)] blur-3xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 sm:px-10 lg:px-14">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xl font-semibold tracking-tight">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 ring-1 ring-sky-400/50">
                AO
              </span>
              Agentic&nbsp;OS
            </div>
            <div className="hidden items-center gap-8 text-sm font-medium md:flex">
              <Link href="#features" className="transition hover:text-sky-200">
                Features
              </Link>
              <Link href="#workflow" className="transition hover:text-sky-200">
                Workflow
              </Link>
              <Link href="#pricing" className="transition hover:text-sky-200">
                Pricing
              </Link>
              <Link href="#faq" className="transition hover:text-sky-200">
                FAQ
              </Link>
              <Link
                href="#"
                className="rounded-full border border-white/20 px-4 py-2 transition hover:border-sky-200 hover:text-sky-200"
              >
                Sign in
              </Link>
            </div>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[3fr,2fr] lg:items-center">
            <div className="space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1 text-sm text-sky-100">
                <Sparkles className="h-4 w-4" />
                New: Autonomous playbooks with human-grade oversight
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                Orchestrate resilient AI workflows with human-aware guardrails.
              </h1>
              <p className="text-lg text-slate-300 md:text-xl">
                Agentic OS gives operations teams a real-time command center to
                design, deploy, and iterate AI-assisted processes without losing
                accountability. Automate the busywork while keeping humans in
                the loop where it matters.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300 hover:text-slate-900"
                >
                  Launch a workspace
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#workflow"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-sky-200 hover:text-sky-200"
                >
                  Watch workflow demo
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <div className="text-3xl font-semibold text-sky-200">
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-300">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-sky-400/40 via-sky-500/10 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 shadow-2xl shadow-sky-900/50 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Live workflow monitor
                  </div>
                  <span className="text-xs text-slate-400">Last synced 12s</span>
                </div>
                <div className="space-y-6 px-6 py-8">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Active orchestration
                    </p>
                    <h2 className="text-2xl font-semibold">
                      Customer renewal intelligence
                    </h2>
                    <p className="text-sm text-slate-300">
                      Agents monitor product usage, draft renewal briefs, and
                      ping account teams when thresholds deviate from forecast.
                    </p>
                  </div>
                  <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Workflow health</span>
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                        Stable
                      </span>
                    </div>
                    <div className="h-32 rounded-xl bg-gradient-to-r from-sky-500/40 via-sky-400/10 to-transparent">
                      <div className="flex h-full items-center justify-center text-xs text-slate-400">
                        Predictive trendline rendering…
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-slate-300">
                        <Clock className="h-4 w-4 text-sky-300" />
                        Next human review
                      </span>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">
                        37 minutes
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-slate-300">
                        <Target className="h-4 w-4 text-sky-300" />
                        Accounts at risk
                      </span>
                      <span className="text-sky-200">12 flagged</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-slate-300">
                        <LineChart className="h-4 w-4 text-sky-300" />
                        Win probability lift
                      </span>
                      <span className="text-emerald-200">+19%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-32 px-6 py-24 sm:px-10 lg:px-14">
        <section id="features" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-sky-200/80">
                Why teams choose Agentic OS
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Build, observe, and evolve autonomous operations faster.
              </h2>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-sky-200 hover:text-sky-200"
            >
              Explore full capabilities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-sky-200/60 hover:bg-white/[0.07]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)] opacity-0 transition group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-6 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-6 text-slate-300">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="workflow"
          className="grid gap-16 rounded-[40px] border border-white/10 bg-white/[0.04] p-12 text-slate-200 lg:grid-cols-[1.2fr,1fr]"
        >
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200/80">
              Operational rhythm
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              A guided path from intent to measurable outcomes.
            </h2>
            <p className="text-base text-slate-300">
              Every phase is instrumented with analytics, safety checks, and
              ready-made playbooks so your team spends less time wiring systems
              together and more time launching experiences customers feel.
            </p>
            <div className="grid gap-6">
              {timeline.map((item) => (
                <div
                  key={item.phase}
                  className="relative rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-sky-200/50"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200">
                    {item.phase}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-sky-900/40">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-sky-300" />
                  Recommended playbook
                </span>
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-100">
                  92% success
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-100">
                Journey rescue workflow
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Detect intent shifts, pre-empt churn, and surface empathetic
                responses that feel handcrafted yet scale to millions of users.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  Autonomous channel routing
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-teal-400" />
                  Human empathy checkpoints
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-400" />
                  Real-time impact telemetry
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-200">
                Success stories
              </p>
              <blockquote className="mt-4 space-y-4">
                <p>
                  “We replaced nine brittle scripts with one adaptive workflow.
                  Humans still review nuanced calls, but the system spots them
                  faster than our best ops analysts.”
                </p>
                <footer className="text-slate-400">
                  Maya Chen — VP, Lifecycle Operations @ Helios Cloud
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="pricing" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-sky-200/80">
                Invest with clarity
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Plans that scale with every workflow you unlock.
              </h2>
            </div>
            <p className="text-sm text-slate-300">
              Annual pricing available with two months free. Usage-based data
              plane add-ons for high volume workloads.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 ${
                  plan.accent
                    ? "ring-2 ring-offset-4 ring-offset-slate-950 ring-sky-400"
                    : ""
                }`}
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {plan.name}
                  </h3>
                  <p className="text-3xl font-semibold text-sky-200">
                    {plan.price}
                  </p>
                  <p className="text-sm text-slate-400">{plan.cadence}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-200">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-sky-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.accent
                      ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
                      : "border border-white/20 hover:border-sky-200 hover:text-sky-200"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-sky-200/80">
              Frequently asked
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Answers for operations, security, and engineering teams.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-sky-200/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-100">
                  {faq.question}
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300 group-open:bg-sky-400/10 group-open:text-sky-100">
                    View
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <div className="flex items-center gap-3 text-base font-semibold text-slate-200">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-200">
              AO
            </span>
            Agentic&nbsp;OS
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="#" className="transition hover:text-sky-200">
              Status
            </Link>
            <Link href="#" className="transition hover:text-sky-200">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-sky-200">
              Terms
            </Link>
            <Link href="#" className="transition hover:text-sky-200">
              Support
            </Link>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Agentic OS. Crafted for resilient AI
            operations.
          </p>
        </div>
      </footer>
    </div>
  );
}
