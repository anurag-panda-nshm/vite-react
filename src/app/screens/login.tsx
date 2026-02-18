import { useState } from "react";
import { motion } from "motion/react";
import { Fingerprint, Key, Mail } from "lucide-react";
import { useNavigate } from "react-router";

export default function Login() {
  const [userType, setUserType] = useState<'student' | 'faculty'>('student');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--deep-indigo)] via-[#0a0118] to-[var(--electric-purple)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Hero Animation Placeholder */}
        <motion.div
          className="mb-8 text-center"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-[var(--electric-purple)] to-[var(--vivid-pink)] mb-4 shadow-2xl">
            <span className="text-4xl font-bold">mE</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-white/70">Your campus ecosystem awaits</p>
        </motion.div>

        {/* User Type Toggle */}
        <div className="mb-6 p-1.5 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20">
          <div className="flex gap-2">
            <button
              onClick={() => setUserType('student')}
              className={`flex-1 py-3 px-6 rounded-2xl font-semibold transition-all ${
                userType === 'student'
                  ? 'bg-[var(--electric-purple)] text-white shadow-lg shadow-[var(--electric-purple)]/30'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setUserType('faculty')}
              className={`flex-1 py-3 px-6 rounded-2xl font-semibold transition-all ${
                userType === 'faculty'
                  ? 'bg-[var(--sunset-orange)] text-white shadow-lg shadow-[var(--sunset-orange)]/30'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Faculty
            </button>
          </div>
        </div>

        {/* Login Form */}
        <div className="space-y-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6">
          <div>
            <label className="block text-sm font-medium mb-2 opacity-80">Email</label>
            <input
              type="email"
              placeholder="you@campus.edu"
              className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--electric-purple)]"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 opacity-80">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--electric-purple)]"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--electric-purple)] to-[var(--vivid-pink)] text-white font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            Sign In
          </button>

          {/* Biometric Options */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-sm text-center text-white/60 mb-4">Or continue with</p>
            <div className="flex gap-3">
              <button className="flex-1 py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Fingerprint className="h-5 w-5 text-[var(--electric-purple)]" />
                <span className="text-sm">Biometric</span>
              </button>
              <button className="flex-1 py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Key className="h-5 w-5 text-[var(--sunset-orange)]" />
                <span className="text-sm">Passkey</span>
              </button>
            </div>
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-2 pt-2">
            <button className="w-full py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <Mail className="h-5 w-5" />
              <span>Continue with Google</span>
            </button>
            <button className="w-full py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <Mail className="h-5 w-5" />
              <span>Continue with Microsoft</span>
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-white/50 mt-6">
          Don't have an account? <a href="#" className="text-[var(--electric-purple)] hover:underline">Sign up</a>
        </p>
      </motion.div>
    </div>
  );
}
