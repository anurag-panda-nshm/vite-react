import { useState } from "react";
import { Bell, BookOpen, Users, Calendar, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'general' | 'academic';
  icon?: React.ReactNode;
  unread?: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Assignment Posted',
    message: 'Data Structures - Assignment 3 due Feb 20',
    time: '2h ago',
    type: 'academic',
    icon: <BookOpen className="h-4 w-4" />,
    unread: true
  },
  {
    id: '2',
    title: 'Event Tomorrow',
    message: 'Tech Fest Registration closes at 5 PM',
    time: '5h ago',
    type: 'general',
    icon: <Calendar className="h-4 w-4" />,
    unread: true
  },
  {
    id: '3',
    title: 'Achievement Unlocked!',
    message: 'You reached Apex level in Computer Science',
    time: '1d ago',
    type: 'general',
    icon: <Award className="h-4 w-4" />,
    unread: false
  },
  {
    id: '4',
    title: 'Study Group Created',
    message: 'Sarah invited you to "Machine Learning Masters"',
    time: '2d ago',
    type: 'academic',
    icon: <Users className="h-4 w-4" />,
    unread: false
  }
];

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationDrawer({ isOpen, onClose }: NotificationDrawerProps) {
  const [activeTab, setActiveTab] = useState<'general' | 'academic'>('general');

  const filteredNotifications = mockNotifications.filter(
    (notif) => activeTab === 'general' ? notif.type === 'general' : notif.type === 'academic'
  );

  const unreadCount = mockNotifications.filter(n => n.unread).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[90%] max-w-md bg-gradient-to-br from-[var(--deep-indigo)] to-[#0a0118] z-50 overflow-hidden"
          >
            {/* Glass effect container */}
            <div className="h-full backdrop-blur-xl bg-white/5 border-l border-white/10">
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-[var(--electric-purple)]" />
                    <h2 className="text-xl font-bold">Notifications</h2>
                  </div>
                  {unreadCount > 0 && (
                    <div className="bg-[var(--vivid-pink)] text-white text-xs px-2 py-1 rounded-full">
                      {unreadCount} new
                    </div>
                  )}
                </div>

                {/* Tabs */}
                <div className="flex gap-2 p-1 rounded-2xl bg-white/5">
                  <button
                    onClick={() => setActiveTab('general')}
                    className={`flex-1 py-2 px-4 rounded-xl transition-all ${
                      activeTab === 'general'
                        ? 'bg-[var(--electric-purple)] text-white shadow-lg'
                        : 'text-white/60 hover:text-white/80'
                    }`}
                  >
                    General
                  </button>
                  <button
                    onClick={() => setActiveTab('academic')}
                    className={`flex-1 py-2 px-4 rounded-xl transition-all ${
                      activeTab === 'academic'
                        ? 'bg-[var(--sunset-orange)] text-white shadow-lg'
                        : 'text-white/60 hover:text-white/80'
                    }`}
                  >
                    Academic
                  </button>
                </div>
              </div>

              {/* Notifications List */}
              <div className="overflow-y-auto h-[calc(100%-140px)] p-4 space-y-3">
                {filteredNotifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-2xl backdrop-blur-md border ${
                      notification.unread
                        ? 'bg-white/10 border-white/20'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className={`mt-1 p-2 rounded-xl ${
                        activeTab === 'general' 
                          ? 'bg-[var(--electric-purple)]/20' 
                          : 'bg-[var(--sunset-orange)]/20'
                      }`}>
                        {notification.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-semibold text-sm">{notification.title}</h4>
                          {notification.unread && (
                            <div className="h-2 w-2 rounded-full bg-[var(--vivid-pink)] mt-1" />
                          )}
                        </div>
                        <p className="text-sm text-white/70 mb-2">{notification.message}</p>
                        <span className="text-xs text-white/50">{notification.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
