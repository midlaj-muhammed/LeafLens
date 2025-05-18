import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'
import './index.css'

// Get the publishable key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Check if the key is available
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

// Define routing and navigation configuration for Clerk
const clerkAppearance = {
  layout: {
    socialButtonsVariant: "iconButton",
    socialButtonsPlacement: "bottom"
  }
};

createRoot(document.getElementById("root")!).render(
  <ClerkProvider
    publishableKey={PUBLISHABLE_KEY}
    afterSignOutUrl="/"
    navigate={(to) => window.location.href = to}
    appearance={clerkAppearance}
  >
    <App />
  </ClerkProvider>
);
