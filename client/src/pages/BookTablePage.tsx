import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Calendar, Clock, Users, Home, Phone, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "wouter";
import { z } from "zod";

const isTuesday = (dateString: string): boolean => {
  if (!dateString) return false;
  const date = new Date(dateString + "T00:00:00");
  return date.getDay() === 2;
};

const bookingSchema = reservationSchema.refine(
  (data) => !isTuesday(data.date),
  {
    message: "We are closed on Tuesdays. Please select another day.",
    path: ["date"],
  }
);

export default function BookTablePage() {
  const { toast } = useToast();
  
  const form = useForm<ReservationFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      message: "",
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
    <>
      <Navigation />
      <div className="min-h-screen relative overflow-hidden bg-background">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/attached_assets/IMG_0579 2_1760687688482.jpg"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20 md:py-24">
          <div className="w-full max-w-2xl">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 mb-6 text-white/70 hover:text-[hsl(var(--gold-primary))] transition-colors"
                data-testid="link-home"
              >
                <Home className="h-5 w-5" />
                <span className="font-heading text-sm tracking-wide uppercase">Back to Home</span>
              </Link>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-heading font-light mb-4 text-white">
                Reserve Your Table
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
                Experience culinary excellence in an unforgettable atmosphere
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 p-6 md:p-10 shadow-2xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-heading tracking-wide uppercase text-muted-foreground">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="John Doe"
                              className="bg-background/50 border-border focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] h-11"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-heading tracking-wide uppercase text-muted-foreground">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="john@example.com"
                              className="bg-background/50 border-border focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] h-11"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Phone Number Row */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-heading tracking-wide uppercase text-muted-foreground">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <Input
                              {...field}
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              className="bg-background/50 border-border focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] h-11 pl-10"
                              data-testid="input-phone"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Date, Time, Guests Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-heading tracking-wide uppercase text-muted-foreground">
                            Date
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                              <Input
                                {...field}
                                type="date"
                                className="bg-background/50 border-border focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] h-11 pl-10"
                                data-testid="input-date"
                              />
                            </div>
                          </FormControl>
                          <p className="text-xs text-muted-foreground mt-1">Closed on Tuesdays</p>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-heading tracking-wide uppercase text-muted-foreground">
                            Time
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                              <Input
                                {...field}
                                type="time"
                                className="bg-background/50 border-border focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] h-11 pl-10"
                                data-testid="input-time"
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-heading tracking-wide uppercase text-muted-foreground">
                            Guests
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                              <Input
                                {...field}
                                type="number"
                                min="1"
                                max="12"
                                className="bg-background/50 border-border focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] h-11 pl-10"
                                data-testid="input-guests"
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message/Special Requests */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-heading tracking-wide uppercase text-muted-foreground">
                          Special Requests (Optional)
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <Textarea
                              {...field}
                              placeholder="Dietary restrictions, seating preferences, special occasions..."
                              className="bg-background/50 border-border focus:border-[hsl(var(--gold-primary))] focus:ring-[hsl(var(--gold-primary))] pl-10 min-h-[100px] resize-none"
                              data-testid="input-message"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={reservationMutation.isPending}
                      className="w-full h-12 font-heading text-sm tracking-nav uppercase bg-[hsl(var(--gold-primary))] text-black hover:bg-[hsl(var(--gold-primary))]/90"
                      data-testid="button-submit-reservation"
                    >
                      {reservationMutation.isPending ? "Submitting..." : "Confirm Reservation"}
                    </Button>
                  </div>

                  {/* Additional Info */}
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    By submitting this form, you agree to receive confirmation emails.
                    We'll contact you within 24 hours to confirm your reservation.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
