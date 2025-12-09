import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { reservationSchema, type ReservationFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Calendar, Instagram, Facebook, Twitter } from "lucide-react";

export default function ReservationSection() {
  const { toast } = useToast();
  
  const form = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "2",
    },
  });

  const reservationMutation = useMutation({
    mutationFn: async (data: ReservationFormData) => {
      return await apiRequest("POST", "/api/reservations", data);
    },
    onSuccess: () => {
      toast({
        title: "Reservation Request Received",
        description: "We'll contact you shortly to confirm your booking.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit reservation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ReservationFormData) => {
    reservationMutation.mutate(data);
  };

  return (
    <section id="reservation" className="h-screen bg-[#1a1a1a] flex items-center justify-center p-2 md:p-4 overflow-hidden">
      <div className="w-full h-full max-h-[calc(100vh-1rem)] md:max-h-[calc(100vh-2rem)] flex flex-col md:flex-row gap-2 md:gap-4">
        {/* Left Half - Big Photo Button */}
        <div className="flex-[25] md:flex-1 relative overflow-hidden rounded-lg border border-border">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
            alt="Fine dining atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          
          {/* Social Media Icons */}
          <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 z-20">
            <div className="bg-background border border-border rounded-lg p-1.5 md:p-2 shadow-lg">
              <div className="flex flex-row gap-1.5 md:gap-2">
                <a
                  href="https://www.instagram.com/debutbar.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-border bg-background/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                  aria-label="Instagram"
                  data-testid="link-instagram-reservation"
                >
                  <Instagram className="h-3.5 md:h-4 w-3.5 md:w-4" strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61581988111686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-border bg-background/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                  aria-label="Facebook"
                  data-testid="link-facebook-reservation"
                >
                  <Facebook className="h-3.5 md:h-4 w-3.5 md:w-4" strokeWidth={1.5} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-border bg-background/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                  aria-label="Twitter"
                  data-testid="link-twitter-reservation"
                >
                  <Twitter className="h-3.5 md:h-4 w-3.5 md:w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Half - Book a Table Form */}
        <div className="flex-[75] md:flex-1 bg-card/90 backdrop-blur-md rounded-lg border border-border p-4 md:p-8 lg:p-12 overflow-hidden flex flex-col">
          <div className="max-w-lg mx-auto w-full flex flex-col flex-1">
            <div className="flex-shrink-0">
              <h2 className="font-heading text-xl md:text-3xl lg:text-4xl tracking-heading font-light mb-1 md:mb-2">
                Book a Table
              </h2>
              <p className="text-muted-foreground text-xs md:text-base mb-3 md:mb-6">
                Reserve your dining experience
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-evenly">
                <div className="space-y-3 md:space-y-5 flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] md:text-sm font-heading tracking-wide uppercase">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-background border-input focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] rounded-xl h-9 md:h-10 text-sm pl-[18px] pr-[18px] pt-[4px] pb-[4px]"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] md:text-sm font-heading tracking-wide uppercase">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="bg-background border-input focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] rounded-xl h-9 md:h-10 text-sm pt-[4px] pb-[4px] pl-[18px] pr-[18px]"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 flex-shrink-0 mt-[0px] mb-[0px]">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] md:text-sm font-heading tracking-wide uppercase">
                        Date
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type="date"
                            className="bg-background border-input focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] rounded-xl h-8 md:h-9 text-xs md:text-sm px-2 mt-[4px] mb-[4px] pt-[4px] pb-[4px] pl-[18px] pr-[18px]"
                            data-testid="input-date"
                          />
                          <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 h-3 md:h-4 w-3 md:w-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] md:text-sm font-heading tracking-wide uppercase">
                        Time
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="time"
                          className="bg-background border-input focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] rounded-xl h-8 md:h-9 text-xs md:text-sm px-2 pt-[4px] pb-[4px] pl-[18px] pr-[18px] mt-[4px] mb-[4px]"
                          data-testid="input-time"
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] md:text-sm font-heading tracking-wide uppercase">
                        Guests
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          min="1"
                          max="12"
                          className="bg-background border-input focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] rounded-xl h-9 md:h-10 text-sm pl-[18px] pr-[18px] ml-[0px] mr-[0px] pt-[4px] pb-[4px]"
                          data-testid="input-guests"
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
              </div>
              </div>

              <div className="flex-shrink-0">
                <Button
                  type="submit"
                  variant="outline"
                  disabled={reservationMutation.isPending}
                  className="w-full font-heading text-sm md:text-sm tracking-nav uppercase border-2 border-[hsl(var(--gold-primary))] text-[hsl(var(--gold-primary))] rounded-xl h-9 md:h-10"
                  data-testid="button-submit-reservation"
                >
                  {reservationMutation.isPending ? "Submitting..." : "Request Reservation"}
                </Button>
              </div>
            </form>
          </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
