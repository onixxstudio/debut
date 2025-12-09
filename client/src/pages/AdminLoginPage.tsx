import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        sessionStorage.setItem("admin_authenticated", "true");
        window.location.href = "/admin";
      } else {
        toast({
          title: "Access Denied",
          description: "Incorrect password. Please try again.",
          variant: "destructive",
        });
        setPassword("");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 text-foreground hover:text-[hsl(var(--gold-primary))] transition-colors"
          data-testid="link-home"
        >
          <Home className="h-4 w-4" />
          <span className="text-sm font-heading tracking-nav uppercase">Back to Home</span>
        </Link>

        <Card className="w-full">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-full bg-[hsl(var(--gold-primary))]/10 border border-[hsl(var(--gold-primary))]/20">
              <Lock className="h-6 w-6 text-[hsl(var(--gold-primary))]" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center font-heading">
            Admin Access
          </CardTitle>
          <CardDescription className="text-center">
            Enter the admin password to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                data-testid="input-admin-password"
                className="text-center"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !password}
              data-testid="button-admin-login"
            >
              {isLoading ? "Verifying..." : "Access Admin"}
            </Button>
          </form>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
