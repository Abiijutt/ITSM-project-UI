
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useColorShift } from "@/hooks/useColorShift";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type AuthMode = "login" | "signup" | "forgotPassword" | "resetPassword";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const accentColor = useColorShift();

  // Check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/");
      }
    };
    
    checkSession();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          navigate("/");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Account created!",
        description: "Please check your email for verification.",
      });
      
      // Auto-switch to login mode after signup
      setAuthMode("login");
      
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during sign up",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      });
      
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth?mode=resetPassword`,
      });

      if (error) throw error;
      
      setResetSent(true);
      toast({
        title: "Password reset email sent",
        description: "Please check your email to reset your password.",
      });
      
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred while sending reset email",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) throw error;
      
      toast({
        title: "Password updated",
        description: "Your password has been successfully reset.",
      });
      
      // Auto-switch to login mode after password reset
      setAuthMode("login");
      
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred while resetting password",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Check for password reset mode from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    if (mode === 'resetPassword') {
      setAuthMode('resetPassword');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="text-center mb-8">
            <h1 
              className="text-4xl font-bold mb-2"
              style={{ color: accentColor }}
            >
              {authMode === "login" && "Welcome Back"}
              {authMode === "signup" && "Create Account"}
              {authMode === "forgotPassword" && "Reset Password"}
              {authMode === "resetPassword" && "Set New Password"}
            </h1>
            <p className="text-gray-600">
              {authMode === "login" 
                ? "Sign in to access your account" 
                : authMode === "signup"
                ? "Create an account to get started"
                : authMode === "forgotPassword"
                ? "Enter your email to receive a password reset link"
                : "Enter your new password"}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* Back button for forgot password and reset password modes */}
            {(authMode === "forgotPassword" || authMode === "resetPassword") && (
              <button 
                className="flex items-center text-gray-500 hover:text-gray-800 transition-colors mb-6"
                onClick={() => setAuthMode("login")}
              >
                <ArrowLeft size={16} className="mr-1" /> Back to login
              </button>
            )}
            
            {/* Login / Signup toggle */}
            {(authMode === "login" || authMode === "signup") && (
              <div className="flex mb-6">
                <button
                  className={`flex-1 py-2 text-center ${
                    authMode === "login" 
                      ? "border-b-2 font-medium" 
                      : "text-gray-500"
                  }`}
                  style={authMode === "login" ? { borderColor: accentColor } : {}}
                  onClick={() => setAuthMode("login")}
                >
                  Login
                </button>
                <button
                  className={`flex-1 py-2 text-center ${
                    authMode === "signup" 
                      ? "border-b-2 font-medium" 
                      : "text-gray-500"
                  }`}
                  style={authMode === "signup" ? { borderColor: accentColor } : {}}
                  onClick={() => setAuthMode("signup")}
                >
                  Sign Up
                </button>
              </div>
            )}
            
            {/* Forgot Password Form */}
            {authMode === "forgotPassword" && (
              <>
                {resetSent ? (
                  <div className="text-center py-6">
                    <div className="text-green-500 text-5xl mb-4">✓</div>
                    <h3 className="text-xl font-medium mb-2">Email Sent</h3>
                    <p className="text-gray-600 mb-4">
                      Check your inbox for the password reset link.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setAuthMode("login")}
                    >
                      Return to Login
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleForgotPassword} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full hover:scale-105 transition-transform"
                      style={{ backgroundColor: accentColor }}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Reset Link"}
                    </Button>
                  </form>
                )}
              </>
            )}
            
            {/* Reset Password Form */}
            {authMode === "resetPassword" && (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pr-10 hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="pr-10 hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full hover:scale-105 transition-transform"
                  style={{ backgroundColor: accentColor }}
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Reset Password"}
                </Button>
              </form>
            )}
            
            {/* Login Form */}
            {authMode === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <button 
                      type="button"
                      className="text-xs text-gray-500 hover:text-aiwala-accent transition-colors"
                      onClick={() => setAuthMode("forgotPassword")}
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pr-10 hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full hover:scale-105 transition-transform"
                  style={{ backgroundColor: accentColor }}
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </form>
            )}
            
            {/* Signup Form */}
            {authMode === "signup" && (
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pr-10 hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="hover:border-aiwala-accent focus:border-aiwala-accent transition-colors"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full hover:scale-105 transition-transform"
                  style={{ backgroundColor: accentColor }}
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Sign Up"}
                </Button>
              </form>
            )}
            
            {/* Why sign up section */}
            {authMode === "signup" && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-2">Why sign up for AI WALA?</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 text-aiwala-accent">✓</div>
                    <span>Track and manage all your digital projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 text-aiwala-accent">✓</div>
                    <span>Save your preferences and brand requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 text-aiwala-accent">✓</div>
                    <span>Faster project setup with stored information</span>
                  </li>
                </ul>
              </div>
            )}
            
            {/* Benefits of being signed in */}
            {authMode === "login" && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-2">Benefits of signing in:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 text-aiwala-accent">✓</div>
                    <span>Access your personalized dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 text-aiwala-accent">✓</div>
                    <span>View all your ongoing and completed projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 text-aiwala-accent">✓</div>
                    <span>Get priority AI support for your questions</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
