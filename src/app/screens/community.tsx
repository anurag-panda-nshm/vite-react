import { motion } from "motion/react";
import { Users, MessageCircle, TrendingUp, Award } from "lucide-react";
import { BottomNav } from "../components/bottom-nav";

const communities = [
  { id: 1, name: 'CS Department', members: 234, icon: '💻', activity: 'high' },
  { id: 2, name: 'Machine Learning Club', members: 156, icon: '🤖', activity: 'high' },
  { id: 3, name: 'Campus Events', members: 892, icon: '🎉', activity: 'medium' },
  { id: 4, name: 'Study Groups', members: 445, icon: '📚', activity: 'high' },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--deep-indigo)] via-[#0a0118] to-black pb-24">
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/5 border-b border-white/10 p-4">
        <h1 className="text-2xl font-bold">Community</h1>
        <p className="text-sm text-white/60">Connect with your campus</p>
      </div>

      <div className="p-4 max-w-2xl mx-auto space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Users, label: 'Groups', value: '12', color: 'from-purple-500 to-pink-500' },
            { icon: MessageCircle, label: 'Messages', value: '89', color: 'from-orange-500 to-red-500' },
            { icon: Award, label: 'Reputation', value: '450', color: 'from-blue-500 to-cyan-500' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 text-center"
              >
                <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${stat.color} mb-2`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Communities List */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold px-2">Your Communities</h2>
          {communities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-5 hover:bg-white/15 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{community.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold">{community.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Users className="h-3 w-3" />
                    <span>{community.members} members</span>
                    <span>•</span>
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-green-500">{community.activity} activity</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
