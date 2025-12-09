import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import MenuPage from "@/pages/MenuPage";
import FoodMenuPage from "@/pages/FoodMenuPage";
import BookTablePage from "@/pages/BookTablePage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import AdminPage from "@/pages/AdminPage";
import AdminLoginPage from "@/pages/AdminLoginPage";
import DesignCredit from "@/components/DesignCredit";
import IntroductoryOffersPopup from "@/components/IntroductoryOffersPopup";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/food-menu" component={FoodMenuPage} />
      <Route path="/book" component={BookTablePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/admin-login" component={AdminLoginPage} />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <DesignCredit />
        <IntroductoryOffersPopup />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
