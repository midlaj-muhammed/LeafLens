import React from 'react';
import { useAuth, SignIn } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  redirectTo = '/' 
}) => {
  const { isLoaded, isSignedIn } = useAuth();

  // Show loading state while Clerk is initializing
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-leaflens-green-light border-t-leaflens-green rounded-full animate-spin"></div>
      </div>
    );
  }

  // If user is not signed in, show the sign-in component
  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-serif font-bold text-center mb-6 text-leaflens-green-dark">
            Sign in to access this page
          </h2>
          <SignIn redirectUrl={window.location.pathname} />
        </div>
      </div>
    );
  }

  // If user is signed in, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
