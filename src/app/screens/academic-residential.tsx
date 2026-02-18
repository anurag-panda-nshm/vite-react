import { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Home, BookOpen, QrCode, FileText, CreditCard, Settings as SettingsIcon, ChevronRight, TrendingUp, TrendingDown } from "lucide-react";
import { BottomNav } from "../components/bottom-nav";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

type TabType = 'classroom' | 'hostel' | 'library';

const attendanceData = [
  { name: 'Present', value: 85, color: '#10B981' },
  { name: 'Absent', value: 15, color: '#EF4444' }
];

const subjectAttendance = [
  { subject: 'Data Structures', percentage: 92, status: 'up' },
  { subject: 'Machine Learning', percentage: 88, status: 'up' },
  { subject: 'Database Systems', percentage: 76, status: 'down' },
  { subject: 'Web Development', percentage: 85, status: 'up' },
];

const hostelCards = [
  { title: 'QR Attendance', icon: QrCode, action: 'Scan Now', color: 'from-purple-500 to-pink-500' },
  { title: 'Leave Request', icon: FileText, action: 'Apply', color: 'from-orange-500 to-red-500' },
  { title: 'Payment History', icon: CreditCard, action: 'View', color: 'from-blue-500 to-cyan-500' },
  { title: 'Room Settings', icon: SettingsIcon, action: 'Manage', color: 'from-green-500 to-teal-500' }
];

const books = [
  { id: 1, title: 'Introduction to Algorithms', author: 'Cormen et al.', cover: 'from-red-500 to-orange-500', dueDate: 'Feb 25', pages: 1312 },
  { id: 2, title: 'Clean Code', author: 'Robert Martin', cover: 'from-blue-500 to-cyan-500', dueDate: 'Feb 28', pages: 464 },
  { id: 3, title: 'Design Patterns', author: 'Gang of Four', cover: 'from-purple-500 to-pink-500', dueDate: 'Mar 2', pages: 395 },
  { id: 4, title: 'Deep Learning', author: 'Ian Goodfellow', cover: 'from-green-500 to-teal-500', dueDate: 'Mar 5', pages: 800 }
];

export default function AcademicResidential() {
  const [activeTab, setActiveTab] = useState<TabType>('classroom');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--deep-indigo)] via-[#0a0118] to-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/5 border-b border-white/10 p-4">
        <h1 className="text-2xl font-bold mb-4">Academic & Living</h1>
        
        {/* Tab Navigation */}
        <div className="flex gap-2 p-1 rounded-2xl bg-white/5">
          <button
            onClick={() => setActiveTab('classroom')}
            className={`flex-1 py-2 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'classroom'
                ? 'bg-[var(--electric-purple)] text-white shadow-lg'
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            <span>Classroom</span>
          </button>
          <button
            onClick={() => setActiveTab('hostel')}
            className={`flex-1 py-2 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'hostel'
                ? 'bg-[var(--sunset-orange)] text-white shadow-lg'
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            <Home className="h-4 w-4" />
            <span>Hostel</span>
          </button>
          <button
            onClick={() => setActiveTab('library')}
            className={`flex-1 py-2 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'library'
                ? 'bg-[var(--vivid-pink)] text-white shadow-lg'
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Library</span>
          </button>
        </div>
      </div>

      <div className="p-4 max-w-2xl mx-auto">
        {/* Classroom Tab */}
        {activeTab === 'classroom' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Attendance Charts */}
            <div className="grid grid-cols-2 gap-4">
              {/* Overall Attendance */}
              <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-5">
                <h3 className="font-semibold mb-4">Overall</h3>
                <div className="relative h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={attendanceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={50}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {attendanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">85%</div>
                      <div className="text-xs text-white/60">Present</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subject Average */}
              <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-5">
                <h3 className="font-semibold mb-4">This Week</h3>
                <div className="relative h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Present', value: 90, color: '#10B981' },
                          { name: 'Absent', value: 10, color: '#EF4444' }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={50}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {[
                          { name: 'Present', value: 90, color: '#10B981' },
                          { name: 'Absent', value: 10, color: '#EF4444' }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">90%</div>
                      <div className="text-xs text-white/60">Present</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subject Breakdown */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold px-2">Subject-wise Attendance</h2>
              {subjectAttendance.map((subject, index) => (
                <motion.div
                  key={subject.subject}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{subject.subject}</h3>
                    <div className="flex items-center gap-2">
                      {subject.status === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      <span className={`font-bold ${subject.percentage >= 75 ? 'text-green-500' : 'text-yellow-500'}`}>
                        {subject.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${subject.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${subject.percentage >= 75 ? 'bg-green-500' : 'bg-yellow-500'}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl backdrop-blur-xl bg-gradient-to-br from-[var(--electric-purple)]/20 to-[var(--vivid-pink)]/20 border border-white/20 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Mark Today's Attendance</h3>
                  <p className="text-sm text-white/60">3 classes remaining</p>
                </div>
                <button className="px-4 py-2 rounded-xl bg-[var(--electric-purple)] text-white font-semibold hover:bg-[var(--electric-purple)]/80 transition-all">
                  Mark
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Hostel Tab */}
        {activeTab === 'hostel' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Room Info */}
            <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold">Room 204-B</h2>
                  <p className="text-white/60">Block A, Floor 2</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm font-semibold">
                  Active
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-white/60">Roommate</p>
                  <p className="font-semibold">John Doe</p>
                </div>
                <div>
                  <p className="text-white/60">Check-in</p>
                  <p className="font-semibold">Aug 15, 2025</p>
                </div>
              </div>
            </div>

            {/* Modular Cards */}
            <div className="grid grid-cols-2 gap-3">
              {hostelCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.button
                    key={card.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-5 hover:bg-white/15 transition-all text-left"
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.color} mb-3`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold mb-1">{card.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-[var(--electric-purple)]">
                      <span>{card.action}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Recent Activity */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold px-2">Recent Activity</h2>
              {[
                { action: 'Attendance marked', time: 'Today, 10:00 PM', status: 'success' },
                { action: 'Leave approved', time: 'Yesterday', status: 'success' },
                { action: 'Maintenance requested', time: '2 days ago', status: 'pending' }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{activity.action}</p>
                      <p className="text-sm text-white/60">{activity.time}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      activity.status === 'success' 
                        ? 'bg-green-500/20 text-green-500' 
                        : 'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {activity.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Library Tab */}
        {activeTab === 'library' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4">
              <h2 className="text-lg font-bold mb-2">Your Reading List</h2>
              <p className="text-sm text-white/60">4 books currently borrowed</p>
            </div>

            {/* Horizontal Scroll of Book Cards */}
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {books.map((book, index) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-64 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-5 hover:bg-white/15 transition-all cursor-pointer group"
                  >
                    {/* Book Cover */}
                    <div className={`h-40 rounded-xl bg-gradient-to-br ${book.cover} mb-4 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <BookOpen className="h-12 w-12 text-white relative z-10" />
                      
                      {/* 3-dot menu */}
                      <button className="absolute top-2 right-2 p-2 rounded-lg bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex flex-col gap-1">
                          <div className="h-1 w-1 rounded-full bg-white" />
                          <div className="h-1 w-1 rounded-full bg-white" />
                          <div className="h-1 w-1 rounded-full bg-white" />
                        </div>
                      </button>
                    </div>

                    {/* Book Info */}
                    <h3 className="font-semibold mb-1 line-clamp-2">{book.title}</h3>
                    <p className="text-sm text-white/60 mb-3">{book.author}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">{book.pages} pages</span>
                      <span className="text-[var(--vivid-pink)]">Due {book.dueDate}</span>
                    </div>

                    {/* Reader Mode Button */}
                    <button className="w-full mt-3 py-2 rounded-xl bg-[var(--electric-purple)] text-white font-semibold opacity-0 group-hover:opacity-100 transition-all">
                      Reader Mode
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Library Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 text-center">
                <div className="text-2xl font-bold text-[var(--electric-purple)] mb-1">4</div>
                <div className="text-xs text-white/60">Borrowed</div>
              </div>
              <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 text-center">
                <div className="text-2xl font-bold text-[var(--sunset-orange)] mb-1">12</div>
                <div className="text-xs text-white/60">Completed</div>
              </div>
              <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 text-center">
                <div className="text-2xl font-bold text-[var(--vivid-pink)] mb-1">3</div>
                <div className="text-xs text-white/60">Wishlist</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
