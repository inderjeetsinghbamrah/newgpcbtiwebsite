import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import logo from "@/assets/logo.png";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Admin login logic will be implemented with backend
    console.log("Admin login attempted");
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/">
            <img src={logo} alt="GPC Bathinda" className="w-20 h-20 mx-auto mb-4" />
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Admin Portal</h1>
          <p className="text-sm text-muted-foreground mt-1">Government Polytechnic College, Bathinda</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-xl border border-border p-8">
          <h2 className="text-lg font-serif font-bold text-foreground mb-6">Sign In</h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-xs text-primary hover:text-gold transition-colors">
              Forgot Password?
            </a>
          </div>
        </form>

        <p className="text-center text-xs text-muted-foreground mt-6">
          <Link to="/" className="hover:text-primary transition-colors">← Back to Website</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
