import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

import { socials } from '@/lib/data';

const items = [
  { href: socials.github, label: 'GitHub', Icon: Github },
  { href: socials.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: socials.twitter, label: 'X / Twitter', Icon: Twitter },
  { href: socials.email, label: 'Email', Icon: Mail }
];

export function SocialRow() {
  return (
    <div className="flex items-center gap-2">
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
