import { Instagram, Facebook, Twitter } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      <a
        href="https://www.instagram.com/debutbar.ca/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full border-2 border-[hsl(var(--gold-primary))] bg-background/40 backdrop-blur-sm flex items-center justify-center text-[hsl(var(--gold-primary))] hover:bg-[hsl(var(--gold-primary))] hover:text-background transition-all duration-300"
        aria-label="Instagram"
        data-testid="link-instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61581988111686"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full border-2 border-[hsl(var(--gold-primary))] bg-background/40 backdrop-blur-sm flex items-center justify-center text-[hsl(var(--gold-primary))] hover:bg-[hsl(var(--gold-primary))] hover:text-background transition-all duration-300"
        aria-label="Facebook"
        data-testid="link-facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full border-2 border-[hsl(var(--gold-primary))] bg-background/40 backdrop-blur-sm flex items-center justify-center text-[hsl(var(--gold-primary))] hover:bg-[hsl(var(--gold-primary))] hover:text-background transition-all duration-300"
        aria-label="Twitter"
        data-testid="link-twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
    </div>
  );
}
