import { clsx } from 'clsx';

export function Section({
  id,
  eyebrow,
  title,
  children,
  className
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx('py-16 sm:py-20', className)}>
      <div className="container-pad">
        <div className="mb-10">
          {eyebrow ? (
            <div className="text-sm font-medium text-muted-foreground">{eyebrow}</div>
          ) : null}
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
