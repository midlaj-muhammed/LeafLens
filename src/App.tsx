
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import PageTransition from "@/components/PageTransition";
import AppLoader from "@/components/AppLoader";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import PlantDatabasePage from "./pages/PlantDatabasePage";
import ResourcesPage from "./pages/ResourcesPage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import { Suspense, lazy } from 'react';

const queryClient = new QueryClient();

// AnimatePresence requires a key to properly animate route changes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Index />
          </PageTransition>
        } />
        <Route path="/database" element={
          <PageTransition>
            <PlantDatabasePage />
          </PageTransition>
        } />
        <Route path="/dashboard" element={
          <PageTransition>
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          </PageTransition>
        } />
        <Route path="/resources" element={
          <PageTransition>
            <ResourcesPage />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <AboutPage />
          </PageTransition>
        } />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={
          <PageTransition>
            <NotFound />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppLoader>
        <BrowserRouter>
          <Suspense fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="w-16 h-16 border-4 border-leaflens-green-light border-t-leaflens-green rounded-full animate-spin"></div>
            </div>
          }>
            <AnimatedRoutes />
          </Suspense>
        </BrowserRouter>
      </AppLoader>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
