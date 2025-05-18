import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    // Log the error
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
      "Search params:",
      location.search
    );

    // Check if URL contains Clerk handshake parameter
    const searchParams = new URLSearchParams(location.search);
    const hasClerkHandshake = searchParams.has('__clerk_handshake');

    // If this is a Clerk handshake and user is authenticated, redirect to dashboard
    if (hasClerkHandshake && isLoaded && isSignedIn) {
      console.log("Detected Clerk handshake in 404 page, redirecting to dashboard");
      // Remove the handshake parameter and navigate to dashboard
      navigate('/dashboard', { replace: true });
    }
  }, [location.pathname, location.search, isLoaded, isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-5xl font-serif font-bold mb-4 text-leaflens-green-dark">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <p className="text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-leaflens-green text-white rounded-md hover:bg-leaflens-green-dark transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
