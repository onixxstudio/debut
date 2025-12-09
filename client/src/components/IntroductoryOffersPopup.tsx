import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import introOffersImage from "@assets/poster print outdoor print debut 2_1763501710948.png";

export default function IntroductoryOffersPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm p-0 border-[hsl(var(--gold-primary))] border-2 bg-transparent overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Introductory Offers</DialogTitle>
          <DialogDescription>
            Special weekly deals from Monday through Sunday including pasta, leg quarter platters, fish and chips, burgers, wings, and soup specials.
          </DialogDescription>
        </VisuallyHidden>
        <div className="relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-1.5 transition-colors"
            data-testid="button-close-popup"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={introOffersImage}
            alt="Introductory Offers - Monday through Sunday special deals"
            className="w-full h-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
