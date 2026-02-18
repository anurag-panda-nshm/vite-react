import { useState } from "react";
import { motion } from "motion/react";
import { Search, Bell, ThumbsUp, MessageCircle, Share2, Calendar, CheckCircle, XCircle, User } from "lucide-react";
import { BottomNav } from "../components/bottom-nav";
import { NotificationDrawer } from "../components/notification-drawer";
import { Link } from "react-router";

const feedPosts = [
  {
    id: '1',
    type: 'poll',
    author: 'Prof. Sarah Johnson',
    avatar: 'SJ',
    time: '2h ago',
    content: 'What topic should we cover in next week\'s advanced algorithms session?',
    pollOptions: [
      { id: 1, text: 'Dynamic Programming', votes: 45 },
      { id: 2, text: 'Graph Algorithms', votes: 32 },
      { id: 3, text: 'Tree Traversal', votes: 18 }
    ],
    tags: ['Computer Science', 'Algorithms']
  },
  {
    id: '2',
    type: 'event',
    author: 'Tech Club',
    avatar: 'TC',
    time: '4h ago',
    content: 'Annual Hackathon 2026 - Build the future in 48 hours!',
    eventDate: 'Feb 22-24',
    eventLocation: 'Main Auditorium',
    rsvp: { going: 234, interested: 89 },
    tags: ['Event', 'Hackathon']
  },
  {
    id: '3',
    type: 'post',
    author: 'Alex Chen',
    avatar: 'AC',
    time: '6h ago',
    content: 'Just finished my Machine Learning project on sentiment analysis. Achieved 94% accuracy! Thanks to everyone who helped. 🎉',
    tags: ['Machine Learning', 'AI', 'Project'],
    likes: 156,
    comments: 23,
    aiTags: ['Academic Achievement', 'ML Project']
  },
  {
    id: '4',
    type: 'post',
    author: 'Student Council',
    avatar: 'SC',
    time: '1d ago',
    content: 'New library hours: Extended till 11 PM during exam week. Let\'s ace those finals!',
    tags: ['Announcement', 'Library'],
    likes: 289,
    comments: 45,
    aiTags: ['Important', 'Academic']
  }
];

export default function HomeFeed() {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--deep-indigo)] via-[#0a0118] to-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/5 border-b border-white/10 p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">mE n Campus</h1>
            <p className="text-sm text-white/60">Good morning, Alex!</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/profile"
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
            >
              <User className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setNotificationOpen(true)}
              className="relative p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
            >
              <Bell className="h-5 w-5" />
              <div className="absolute top-2 right-2 h-2 w-2 bg-[var(--vivid-pink)] rounded-full" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input
            type="text"
            placeholder="✨ Explore Your Classroom! ✨"
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--electric-purple)]"
          />
        </div>
      </div>

      {/* Feed */}
      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        {feedPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-5 shadow-xl"
          >
            {/* Post Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[var(--electric-purple)] to-[var(--vivid-pink)] flex items-center justify-center font-bold">
                {post.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{post.author}</h3>
                <p className="text-sm text-white/60">{post.time}</p>
              </div>
            </div>

            {/* Post Content */}
            <p className="mb-4 text-white/90">{post.content}</p>

            {/* Poll */}
            {post.type === 'poll' && post.pollOptions && (
              <div className="space-y-2 mb-4">
                {post.pollOptions.map((option) => {
                  const totalVotes = post.pollOptions!.reduce((sum, opt) => sum + opt.votes, 0);
                  const percentage = (option.votes / totalVotes) * 100;
                  
                  return (
                    <button
                      key={option.id}
                      onClick={() => setSelectedPoll(option.id)}
                      className={`w-full p-3 rounded-2xl border transition-all text-left relative overflow-hidden ${
                        selectedPoll === option.id
                          ? 'border-[var(--electric-purple)] bg-[var(--electric-purple)]/20'
                          : 'border-white/20 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div
                        className="absolute inset-0 bg-[var(--electric-purple)]/10 transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                      <div className="relative flex justify-between items-center">
                        <span>{option.text}</span>
                        <span className="text-sm text-white/60">{option.votes} votes</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Event Card */}
            {post.type === 'event' && (
              <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-[var(--sunset-orange)]/20 to-[var(--vivid-pink)]/20 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-[var(--sunset-orange)]" />
                  <div>
                    <p className="font-semibold">{post.eventDate}</p>
                    <p className="text-sm text-white/60">{post.eventLocation}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-4 rounded-xl bg-[var(--electric-purple)] text-white font-semibold hover:bg-[var(--electric-purple)]/80 transition-all flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Going ({post.rsvp?.going})
                  </button>
                  <button className="flex-1 py-2 px-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <XCircle className="h-4 w-4" />
                    Interested ({post.rsvp?.interested})
                  </button>
                </div>
              </div>
            )}

            {/* AI Tags */}
            {post.aiTags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.aiTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-[var(--teal-accent)]/20 border border-[var(--teal-accent)]/30 text-[var(--teal-accent)]"
                  >
                    AI: {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/20 text-white/70"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            {post.type === 'post' && (
              <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                <button className="flex items-center gap-2 text-white/70 hover:text-[var(--vivid-pink)] transition-colors">
                  <ThumbsUp className="h-5 w-5" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-white/70 hover:text-[var(--electric-purple)] transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-white/70 hover:text-[var(--sunset-orange)] transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <BottomNav />
      <NotificationDrawer isOpen={notificationOpen} onClose={() => setNotificationOpen(false)} />
    </div>
  );
}