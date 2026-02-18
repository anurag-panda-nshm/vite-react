import { Home, FileText, PlusCircle, Users, School } from "lucide-react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

const navItems = [
  { path: '/home', icon: Home, label: 'Home' },
  { path: '/sds', icon: FileText, label: 'SDS' },
  { path: '/post', icon: PlusCircle, label: 'Post' },
  { path: '/community', icon: Users, label: 'Community' },
  { path: '/classroom', icon: School, label: 'Classroom' },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 pb-safe">
      <div className="backdrop-blur-xl bg-white/10 border-t border-white/20 px-4 py-3">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link key={item.path} to={item.path} className="relative flex flex-col items-center gap-1">
                <div className="relative">
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-2xl transition-colors ${
                      isActive 
                        ? 'bg-[var(--electric-purple)] text-white' 
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-2xl bg-[var(--electric-purple)]/20"
                      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    />
                  )}
                </div>
                <span className={`text-[10px] font-medium ${
                  isActive ? 'text-white' : 'text-white/60'
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
