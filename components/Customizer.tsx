'use client';

import { useEffect, useState } from 'react';
import { Palette, X, Check } from 'lucide-react';
import { clsx } from 'clsx';

type Accent = 'violet' | 'emerald' | 'rose' | 'amber' | 'cyan' | 'slate';
type Template = 'modern' | 'minimal' | 'classic' | 'bold';

const ACCENTS: { id: Accent; label: string; from: string; to: string }[] = [
  { id: 'violet', label: 'Violet', from: '#7c3aed', to: '#06b6d4' },
  { id: 'emerald', label: 'Emerald', from: '#059669', to: '#14b8a6' },
  { id: 'rose', label: 'Rose', from: '#e11d48', to: '#f59e0b' },
  { id: 'amber', label: 'Amber', from: '#d97706', to: '#f43f5e' },
  { id: 'cyan', label: 'Cyan', from: '#0891b2', to: '#6366f1' },
  { id: 'slate', label: 'Slate', from: '#334155', to: '#64748b' }
];

const TEMPLATES: { id: Template; label: string; desc: string }[] = [
  { id: 'modern', label: 'Modern', desc: 'Glassy nav, gradient blobs' },
  { id: 'minimal', label: 'Minimal', desc: 'Clean, typographic, no blobs' },
  { id: 'classic', label: 'Classic', desc: 'Serif, paper-like resume feel' },
  { id: 'bold', label: 'Bold', desc: 'Large type, strong accents' }
];

const ACCENT_CLASSES = ACCENTS.map((a) => `accent-${a.id}`);
const TEMPLATE_CLASSES = TEMPLATES.map((t) => `template-${t.id}`);

function applyClasses(accent: Accent, template: Template) {
  const root = document.documentElement;
  root.classList.remove(...ACCENT_CLASSES, ...TEMPLATE_CLASSES);
  root.classList.add(`accent-${accent}`, `template-${template}`);
}

export function Customizer() {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState<Accent>('violet');
  const [template, setTemplate] = useState<Template>('modern');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const a = (localStorage.getItem('accent') as Accent) || 'violet';
    const t = (localStorage.getItem('template') as Template) || 'modern';
    setAccent(a);
    setTemplate(t);
    applyClasses(a, t);
    setMounted(true);
  }, []);

  const pickAccent = (a: Accent) => {
    setAccent(a);
    localStorage.setItem('accent', a);
    applyClasses(a, template);
  };

  const pickTemplate = (t: Template) => {
    setTemplate(t);
    localStorage.setItem('template', t);
    applyClasses(accent, t);
  };

  if (!mounted) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Customize"
        className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-lg transition hover:bg-muted print:hidden"
      >
        <Palette className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed bottom-20 right-5 z-50 w-[20rem] max-w-[calc(100vw-2.5rem)] rounded-2xl border border-border bg-card p-4 shadow-2xl print:hidden">
          <div className="flex items-center justify-between">
            <div className="font-semibold tracking-tight">Customize</div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Accent
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {ACCENTS.map((a) => {
                const active = a.id === accent;
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => pickAccent(a.id)}
                    className={clsx(
                      'group flex items-center gap-2 rounded-xl border p-2 text-left transition',
                      active
                        ? 'border-foreground bg-muted'
                        : 'border-border hover:bg-muted'
                    )}
                  >
                    <span
                      className="h-5 w-5 shrink-0 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${a.from}, ${a.to})`
                      }}
                    />
                    <span className="text-xs">{a.label}</span>
                    {active ? <Check className="ml-auto h-3.5 w-3.5" /> : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Template
            </div>
            <div className="mt-2 grid gap-2">
              {TEMPLATES.map((t) => {
                const active = t.id === template;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => pickTemplate(t.id)}
                    className={clsx(
                      'flex items-start justify-between gap-2 rounded-xl border p-3 text-left transition',
                      active
                        ? 'border-foreground bg-muted'
                        : 'border-border hover:bg-muted'
                    )}
                  >
                    <div>
                      <div className="text-sm font-medium">{t.label}</div>
                      <div className="text-xs text-muted-foreground">{t.desc}</div>
                    </div>
                    {active ? <Check className="mt-1 h-4 w-4" /> : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 text-[11px] text-muted-foreground">
            Your choice is saved on this device.
          </div>
        </div>
      ) : null}
    </>
  );
}
