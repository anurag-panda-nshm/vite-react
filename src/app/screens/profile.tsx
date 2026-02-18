import { motion } from "motion/react";
import { BookOpen, GraduationCap, Briefcase, Home as HomeIcon, Calendar, Settings, Award, TrendingUp } from "lucide-react";
import { BottomNav } from "../components/bottom-nav";
import { ActivityGrid } from "../components/activity-grid";
import { LiveStatusBadge } from "../components/live-status-badge";

const services = [
  { icon: BookOpen, label: 'Library', color: 'from-purple-500 to-pink-500', path: '/library' },
  { icon: GraduationCap, label: 'Course Reg', color: 'from-orange-500 to-red-500', path: '/courses' },
  { icon: Briefcase, label: 'Placements', color: 'from-blue-500 to-cyan-500', path: '/placements' },
  { icon: HomeIcon, label: 'Hostel', color: 'from-green-500 to-teal-500', path: '/hostel' },
  { icon: Calendar, label: 'Events', color: 'from-yellow-500 to-orange-500', path: '/events' },
  { icon: Settings, label: 'Settings', color: 'from-indigo-500 to-purple-500', path: '/settings' },
];

const levels = [
  { name: 'Spark', min: 0, max: 100, color: 'bg-orange-500' },
  { name: 'Rising', min: 100, max: 300, color: 'bg-yellow-500' },
  { name: 'Achiever', min: 300, max: 600, color: 'bg-green-500' },
  { name: 'Excellence', min: 600, max: 1000, color: 'bg-blue-500' },
  { name: 'Apex', min: 1000, max: 2000, color: 'bg-purple-500' },
];

export default function Profile() {
  const currentScore = 750;
  const currentLevel = levels.find(level => currentScore >= level.min && currentScore < level.max) || levels[0];
  const nextLevel = levels[levels.indexOf(currentLevel) + 1];
  const progressInLevel = nextLevel 
    ? ((currentScore - currentLevel.min) / (nextLevel.max - currentLevel.min)) * 100
    : 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--deep-indigo)] via-[#0a0118] to-black pb-24">
      {/* Header */}
      <div className="relative h-48 bg-gradient-to-br from-[var(--electric-purple)] via-[var(--vivid-pink)] to-[var(--sunset-orange)]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -bottom-16 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-white to-gray-200 p-1 shadow-2xl">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-[var(--electric-purple)] to-[var(--vivid-pink)] flex items-center justify-center text-4xl font-bold">
                AC
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2">
              <LiveStatusBadge isOnline={true} showLabel={false} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pt-20 px-4 space-y-6 max-w-2xl mx-auto">
        {/* User Info */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Alex Chen</h1>
          <p className="text-white/70">Computer Science • Year 3</p>
          <p className="text-sm text-white/50">alex.chen@campus.edu</p>
        </div>

        {/* The Score - Gamification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 shadow-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-[var(--sunset-orange)]" />
              <h2 className="text-xl font-bold">The Score</h2>
            </div>
            <div className="flex items-center gap-2 text-[var(--sunset-orange)]">
              <TrendingUp className="h-4 w-4" />
              <span className="font-bold">+125 this week</span>
            </div>
          </div>

          {/* Current Level */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-2xl font-bold">{currentScore} Points</p>
              <p className="text-sm text-white/60">Level: {currentLevel.name}</p>
            </div>
            {nextLevel && (
              <div className="text-right">
                <p className="text-sm text-white/60">Next: {nextLevel.name}</p>
                <p className="text-sm font-semibold">{nextLevel.max - currentScore} to go</p>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="relative h-8 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressInLevel}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full ${currentLevel.color} shadow-lg`}
            />
            <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
              {Math.round(progressInLevel)}%
            </div>
          </div>

          {/* Level Indicators */}
          <div className="flex justify-between mt-3">
            {levels.map((level, index) => (
              <div key={level.name} className="flex flex-col items-center gap-1">
                <div className={`h-2 w-2 rounded-full ${
                  currentScore >= level.min ? level.color : 'bg-white/20'
                }`} />
                <span className={`text-[10px] ${
                  currentScore >= level.min ? 'text-white' : 'text-white/40'
                }`}>
                  {level.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Service Grid */}
        <div>
          <h2 className="text-xl font-bold mb-4 px-2">Quick Access</h2>
          <div className="grid grid-cols-3 gap-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="aspect-square rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 shadow-xl hover:bg-white/20 transition-all flex flex-col items-center justify-center gap-3"
                >
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-center">{service.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Activity Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 shadow-xl"
        >
          <ActivityGrid title="Academic Activity" />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Courses', value: '8', color: 'from-[var(--electric-purple)] to-[var(--vivid-pink)]' },
            { label: 'Achievements', value: '23', color: 'from-[var(--sunset-orange)] to-[var(--vivid-pink)]' },
            { label: 'Connections', value: '142', color: 'from-[var(--teal-accent)] to-[var(--electric-purple)]' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 text-center"
            >
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
