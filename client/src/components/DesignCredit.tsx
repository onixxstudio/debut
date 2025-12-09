export default function DesignCredit() {
  return (
    <div className="hidden md:block fixed bottom-4 left-4 z-[9999]">
      <a
        href="https://www.onixxstudio.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-3 py-1.5 text-xs font-medium tracking-wide bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold-primary))]/30 rounded-md hover-elevate active-elevate-2 transition-all"
        data-testid="link-design-credit"
      >
        <span className="text-[hsl(var(--gold-primary))]">DESIGN BY ONIXX</span>
      </a>
    </div>
  );
}
