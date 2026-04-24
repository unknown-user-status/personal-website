import { ArrowUpRight } from 'lucide-react';

import type { Project } from '@/lib/data';

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <div className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:bg-muted">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-semibold tracking-tight">{project.title}</div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
        </div>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  if (project.href) {
    return (
      <a href={project.href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
