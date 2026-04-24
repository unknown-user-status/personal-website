export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-pad py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} dani Janw
          </div>
          <div className="text-sm text-muted-foreground">Built with Next.js + Tailwind</div>
        </div>
      </div>
    </footer>
  );
}
