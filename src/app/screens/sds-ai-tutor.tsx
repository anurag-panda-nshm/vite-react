import { useState } from "react";
import { motion } from "motion/react";
import { FolderOpen, Bot, BookOpen, Brain, Zap, Download, Upload, FileText } from "lucide-react";
import { BottomNav } from "../components/bottom-nav";

type AIModeType = 'summarizer' | 'universal' | 'exam';

const documents = [
  { id: 1, name: 'Data Structures Notes.pdf', size: '2.4 MB', date: 'Feb 10, 2026', subject: 'CS' },
  { id: 2, name: 'Machine Learning Lab.pdf', size: '3.1 MB', date: 'Feb 12, 2026', subject: 'ML' },
  { id: 3, name: 'Algorithm Assignment.docx', size: '1.2 MB', date: 'Feb 14, 2026', subject: 'CS' },
  { id: 4, name: 'Database Schema.pdf', size: '890 KB', date: 'Feb 15, 2026', subject: 'DB' },
];

const lmtSubjects = [
  { name: 'Data Structures', progress: 85, status: 'green', topics: 12, completed: 10 },
  { name: 'Machine Learning', progress: 72, status: 'green', topics: 15, completed: 11 },
  { name: 'Database Systems', progress: 58, status: 'yellow', topics: 10, completed: 6 },
  { name: 'Web Development', progress: 45, status: 'yellow', topics: 14, completed: 6 },
  { name: 'Computer Networks', progress: 28, status: 'red', topics: 12, completed: 3 },
];

export default function SDSAITutor() {
  const [activeTab, setActiveTab] = useState<'locker' | 'ai' | 'lmt'>('locker');
  const [aiMode, setAiMode] = useState<AIModeType>('universal');
  const [chatMessage, setChatMessage] = useState('');

  const getStatusColor = (status: string) => {
    if (status === 'green') return 'bg-green-500';
    if (status === 'yellow') return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--deep-indigo)] via-[#0a0118] to-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/5 border-b border-white/10 p-4">
        <h1 className="text-2xl font-bold mb-4">Study & Development Suite</h1>
        
        {/* Tab Navigation */}
        <div className="flex gap-2 p-1 rounded-2xl bg-white/5">
          <button
            onClick={() => setActiveTab('locker')}
            className={`flex-1 py-2 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'locker'
                ? 'bg-[var(--electric-purple)] text-white shadow-lg'
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            <FolderOpen className="h-4 w-4" />
            <span>Locker</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 py-2 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'ai'
                ? 'bg-[var(--sunset-orange)] text-white shadow-lg'
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            <Bot className="h-4 w-4" />
            <span>AI Tutor</span>
          </button>
          <button
            onClick={() => setActiveTab('lmt')}
            className={`flex-1 py-2 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'lmt'
                ? 'bg-[var(--vivid-pink)] text-white shadow-lg'
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            <Brain className="h-4 w-4" />
            <span>LMT</span>
          </button>
        </div>
      </div>

      <div className="p-4 max-w-2xl mx-auto">
        {/* Me Locker */}
        {activeTab === 'locker' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Upload Area */}
            <div className="rounded-3xl backdrop-blur-xl bg-white/10 border-2 border-dashed border-white/20 p-8 text-center hover:bg-white/15 transition-all cursor-pointer">
              <Upload className="h-12 w-12 mx-auto mb-3 text-[var(--electric-purple)]" />
              <h3 className="font-semibold mb-2">Upload Documents</h3>
              <p className="text-sm text-white/60">Drag & drop or click to upload</p>
            </div>

            {/* Documents Grid */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold px-2">Your Documents</h2>
              {documents.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 hover:bg-white/15 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[var(--electric-purple)]/20">
                      <FileText className="h-6 w-6 text-[var(--electric-purple)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">{doc.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.date}</span>
                        <span className="px-2 py-0.5 rounded-full bg-[var(--sunset-orange)]/20 text-[var(--sunset-orange)] text-xs">
                          {doc.subject}
                        </span>
                      </div>
                    </div>
                    <Download className="h-5 w-5 text-white/60 hover:text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* AI Chatbot */}
        {activeTab === 'ai' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* AI Mode Toggle */}
            <div className="flex gap-2 p-1.5 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20">
              <button
                onClick={() => setAiMode('summarizer')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all ${
                  aiMode === 'summarizer'
                    ? 'bg-[var(--electric-purple)] text-white shadow-lg'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <BookOpen className="h-4 w-4 mx-auto mb-1" />
                <span className="text-xs">Summarizer</span>
              </button>
              <button
                onClick={() => setAiMode('universal')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all ${
                  aiMode === 'universal'
                    ? 'bg-[var(--sunset-orange)] text-white shadow-lg'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <Zap className="h-4 w-4 mx-auto mb-1" />
                <span className="text-xs">Universal</span>
              </button>
              <button
                onClick={() => setAiMode('exam')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all ${
                  aiMode === 'exam'
                    ? 'bg-[var(--vivid-pink)] text-white shadow-lg'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <Brain className="h-4 w-4 mx-auto mb-1" />
                <span className="text-xs">Exam Expert</span>
              </button>
            </div>

            {/* Chat Interface */}
            <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 h-[500px] flex flex-col">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {/* AI Message */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[var(--electric-purple)] to-[var(--vivid-pink)] flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="flex-1 bg-white/10 rounded-2xl rounded-tl-none p-4">
                    <p className="text-sm">
                      Hi! I'm your AI tutor in <strong>{aiMode === 'summarizer' ? 'Summarizer' : aiMode === 'universal' ? 'Universal' : 'Exam Expert'}</strong> mode. 
                      {aiMode === 'summarizer' && ' I can help you summarize your notes and documents.'}
                      {aiMode === 'universal' && ' Ask me anything about your coursework!'}
                      {aiMode === 'exam' && ' I can help you prepare for your exams with practice questions.'}
                    </p>
                  </div>
                </div>

                {/* User Message Example */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-[var(--electric-purple)]/80 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                    <p className="text-sm">Explain binary search trees</p>
                  </div>
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-white to-gray-200 flex items-center justify-center text-sm font-bold text-black flex-shrink-0">
                    AC
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--electric-purple)]"
                />
                <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--electric-purple)] to-[var(--vivid-pink)] text-white font-semibold hover:shadow-lg transition-all">
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* LMT Dashboard */}
        {activeTab === 'lmt' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4">
              <h2 className="text-lg font-bold mb-2">Learning Management Tracker</h2>
              <p className="text-sm text-white/60">Track your progress across all subjects</p>
            </div>

            {lmtSubjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{subject.name}</h3>
                    <p className="text-sm text-white/60">
                      {subject.completed} of {subject.topics} topics completed
                    </p>
                  </div>
                  <div className={`h-3 w-3 rounded-full ${getStatusColor(subject.status)} shadow-lg`} />
                </div>

                <div className="relative h-3 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${subject.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full ${getStatusColor(subject.status)} shadow-lg`}
                  />
                </div>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-white/60">{subject.progress}% Complete</span>
                  <button className="text-sm text-[var(--electric-purple)] hover:underline">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 text-center">
                <div className="text-2xl font-bold text-green-500 mb-1">2</div>
                <div className="text-xs text-white/60">On Track</div>
              </div>
              <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-1">2</div>
                <div className="text-xs text-white/60">Need Focus</div>
              </div>
              <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 text-center">
                <div className="text-2xl font-bold text-red-500 mb-1">1</div>
                <div className="text-xs text-white/60">Behind</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
