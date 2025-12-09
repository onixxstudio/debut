import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { type Reservation, type ReservationStatus } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Mail, User, Search, Filter, LogOut, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { useState, useMemo, useEffect } from "react";
import { useLocation } from "wouter";
import AdminLoginPage from "./AdminLoginPage";

export default function AdminPage() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<ReservationStatus | "all">("all");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const authenticated = sessionStorage.getItem("admin_authenticated") === "true";
    setIsAuthenticated(authenticated);
  }, []);

  const { data: allReservations = [], isLoading } = useQuery<Reservation[]>({
    queryKey: ["/api/reservations"],
    enabled: isAuthenticated,
  });

  const reservations = useMemo(() => {
    let filtered = [...allReservations];

    if (statusFilter !== "all") {
      filtered = filtered.filter((r) => r.status === statusFilter);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.name.toLowerCase().includes(query) ||
          r.email.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [allReservations, statusFilter, searchQuery]);

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      return await apiRequest("PATCH", `/api/reservations/${id}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/reservations"] });
      toast({
        title: "Status Updated",
        description: "Reservation status has been updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update reservation status.",
        variant: "destructive",
      });
    },
  });

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    setIsAuthenticated(false);
    setLocation("/");
    toast({
      title: "Logged Out",
      description: "You have been logged out of admin.",
    });
  };

  if (!isAuthenticated) {
    return <AdminLoginPage />;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "cancelled":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading reservations...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl tracking-heading font-light">
              Reservations
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage all table reservations
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-base" data-testid="badge-total-reservations">
              {allReservations.length} Total
            </Badge>
            {(statusFilter !== "all" || searchQuery.trim()) && (
              <Badge variant="outline" className="text-base" data-testid="badge-filtered-count">
                {reservations.length} Showing
              </Badge>
            )}
            <Button
              size="sm"
              variant="outline"
              onClick={handleLogout}
              data-testid="button-logout"
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
              data-testid="input-search"
            />
          </div>
          <div className="flex items-center gap-2 md:w-60">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as ReservationStatus | "all")}>
              <SelectTrigger data-testid="select-status-filter">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {reservations.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-center">
                No reservations yet. They will appear here when customers book tables.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {reservations.map((reservation) => (
              <Card key={reservation.id} className="hover-elevate" data-testid={`card-reservation-${reservation.id}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[hsl(var(--gold-primary))]/10 border border-[hsl(var(--gold-primary))]/20">
                        <User className="h-5 w-5 text-[hsl(var(--gold-primary))]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl" data-testid={`text-name-${reservation.id}`}>
                          {reservation.name}
                        </CardTitle>
                        <div className="flex flex-col gap-1 mt-1">
                          <div className="flex items-center gap-2">
                            <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground" data-testid={`text-email-${reservation.id}`}>
                              {reservation.email}
                            </p>
                          </div>
                          {reservation.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground" data-testid={`text-phone-${reservation.id}`}>
                                {reservation.phone}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <Badge 
                      className={getStatusColor(reservation.status)} 
                      data-testid={`badge-status-${reservation.id}`}
                    >
                      {reservation.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm" data-testid={`text-date-${reservation.id}`}>
                        {reservation.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm" data-testid={`text-time-${reservation.id}`}>
                        {reservation.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm" data-testid={`text-guests-${reservation.id}`}>
                        {reservation.guests} {parseInt(reservation.guests) === 1 ? 'Guest' : 'Guests'}
                      </span>
                    </div>
                  </div>

                  {reservation.message && (
                    <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-start gap-2 mb-1">
                        <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Special Requests</span>
                      </div>
                      <p className="text-sm ml-6" data-testid={`text-message-${reservation.id}`}>
                        {reservation.message}
                      </p>
                    </div>
                  )}

                  <div className="text-xs text-muted-foreground mb-4">
                    Created: {format(new Date(reservation.createdAt), "PPpp")}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {reservation.status !== "confirmed" && (
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => updateStatusMutation.mutate({ id: reservation.id, status: "confirmed" })}
                        disabled={updateStatusMutation.isPending}
                        data-testid={`button-confirm-${reservation.id}`}
                      >
                        Confirm
                      </Button>
                    )}
                    {reservation.status !== "completed" && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => updateStatusMutation.mutate({ id: reservation.id, status: "completed" })}
                        disabled={updateStatusMutation.isPending}
                        data-testid={`button-complete-${reservation.id}`}
                      >
                        Complete
                      </Button>
                    )}
                    {reservation.status !== "cancelled" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateStatusMutation.mutate({ id: reservation.id, status: "cancelled" })}
                        disabled={updateStatusMutation.isPending}
                        data-testid={`button-cancel-${reservation.id}`}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
