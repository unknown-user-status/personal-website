'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const effectiveTheme = theme === 'system' ? systemTheme : theme;
  const isDark = effectiveTheme === 'dark';

  return (
    <header className="sticky top-0 z-50">
      <div className="container-pad">
        <div className="glass mt-3 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-5">
            <Link href="#top" className="font-semibold tracking-tight">
              dani <span className="text-muted-foreground">Janw</span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="rounded-xl border border-border bg-card px-3 py-2 text-sm transition hover:bg-muted"
              aria-label="Toggle theme"
              onClick={() => {
                if (!mounted) return;
                setTheme(isDark ? 'light' : 'dark');
              }}
            >
              <span className="inline-flex items-center gap-2">
                {mounted ? (
                  isDark ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )
                ) : null}
                <span className="hidden sm:inline">Theme</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
