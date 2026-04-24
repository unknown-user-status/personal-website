import { Navbar } from '@/components/Navbar';
import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { Footer } from '@/components/Footer';
import { Customizer } from '@/components/Customizer';
import { Download } from 'lucide-react';

import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skills
} from '@/lib/data';

export default function Page() {
  return (
    <div id="top" className="min-h-dvh">
      <div className="bg-blobs">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <Navbar />
      <Customizer />

      <main>
        <section className="container-pad pb-10 pt-16 sm:pb-14 sm:pt-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Available for internships & collabs
              </div>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Hi, I’m <span className="text-gradient">{profile.name}</span>
              </h1>

              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                {profile.headline}. I like building clean, fast, human-friendly experiences and
                learning by shipping.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium transition hover:bg-muted"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium transition hover:bg-muted"
                >
                  Contact me
                </a>
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Location:</span> {profile.location}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="glass rounded-3xl p-6">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="text-sm text-muted-foreground">Quick intro</div>
                  <div className="mt-2 text-lg font-semibold tracking-tight">
                    What I’m focused on right now
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Second-year CS student exploring full-stack web dev. Currently diving into
                    Next.js, design systems, and shipping small side projects. Open to summer
                    internships in frontend or product engineering.
                  </p>
                  <div className="mt-5 grid gap-2 text-sm">
                    <div className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2">
                      <span className="text-muted-foreground">Email</span>
                      <span className="font-medium">{profile.email}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2">
                      <span className="text-muted-foreground">Stack</span>
                      <span className="font-medium">Next.js / TS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About" title="A little bit about me">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm leading-7 text-muted-foreground">
                  I’m a CS undergrad who loves the overlap of design and engineering — the kind of
                  small details that make software feel effortless. I learn best by building, so I
                  spend most weekends turning tiny ideas into usable tools.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Recent highlights: top-5 finalist at NUSHack ’25, Dean’s List two semesters in a
                  row, and a summer frontend internship where I shipped components used across the
                  product.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="text-sm font-medium">Now</div>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <div className="rounded-xl border border-border bg-background px-3 py-2">
                    Studying: BSc Computer Science
                  </div>
                  <div className="rounded-xl border border-border bg-background px-3 py-2">
                    Learning: System design & Rust
                  </div>
                  <div className="rounded-xl border border-border bg-background px-3 py-2">
                    Building: StudyLoop v2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="Work" title="Projects I’m proud of">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Toolkit" title="Skills & tools">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-3 py-2 text-sm text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Studies" title="Education">
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.school} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <div className="font-semibold tracking-tight">{e.school}</div>
                    <div className="text-sm text-muted-foreground">{e.degree}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{e.time}</div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Timeline" title="Experience">
          <div className="space-y-4">
            {experience.map((e) => (
              <div key={e.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <div className="font-semibold tracking-tight">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.org}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{e.time}</div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" eyebrow="Credentials" title="Certifications">
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between rounded-2xl border border-border bg-card p-5"
              >
                <div>
                  <div className="font-semibold tracking-tight">{c.name}</div>
                  <div className="text-sm text-muted-foreground">{c.issuer}</div>
                </div>
                <div className="text-sm text-muted-foreground">{c.time}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="achievements" eyebrow="Wins" title="Achievements">
          <ul className="grid gap-3 sm:grid-cols-2">
            {achievements.map((a) => (
              <li
                key={a}
                className="rounded-2xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground"
              >
                {a}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="mt-1 text-lg font-semibold tracking-tight">{profile.email}</div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Tell me what you’re working on, what you need help with, or what role you’re hiring
                for. I’ll reply as soon as I can.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-sm text-muted-foreground">Links</div>
              <div className="mt-4 grid gap-2">
                <a
                  className="rounded-xl border border-border bg-background px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  href="#"
                >
                  GitHub
                </a>
                <a
                  className="rounded-xl border border-border bg-background px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  href="#"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-xl border border-border bg-background px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  href="#"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
