import { useState } from "react";
import { motion } from "motion/react";
import { Image, Video, Link, Smile, Send, Globe, Users, School, Sparkles } from "lucide-react";
import { BottomNav } from "../components/bottom-nav";

type VisibilityType = 'class' | 'department' | 'campus';

export default function PostCreator() {
  const [visibility, setVisibility] = useState<VisibilityType>('class');
  const [postContent, setPostContent] = useState('');
  const [showAITooltip, setShowAITooltip] = useState(true);

  const visibilityOptions = [
    { value: 'class' as VisibilityType, label: 'My Class', icon: School, reach: '45 students' },
    { value: 'department' as VisibilityType, label: 'My Dept', icon: Users, reach: '230 students' },
    { value: 'campus' as VisibilityType, label: 'Campus', icon: Globe, reach: '2.5K students' }
  ];

  const currentReach = visibilityOptions.find(opt => opt.value === visibility)?.reach;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--deep-indigo)] via-[#0a0118] to-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/5 border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Create Post</h1>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--electric-purple)] to-[var(--vivid-pink)] text-white font-semibold hover:shadow-lg transition-all flex items-center gap-2">
            <Send className="h-4 w-4" />
            Publish
          </button>
        </div>
      </div>

      <div className="p-4 max-w-2xl mx-auto space-y-4">
        {/* AI Schedule Assistant Tooltip */}
        {showAITooltip && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl backdrop-blur-xl bg-gradient-to-r from-[var(--electric-purple)]/20 to-[var(--vivid-pink)]/20 border border-[var(--electric-purple)]/30 p-4 relative"
          >
            <button
              onClick={() => setShowAITooltip(false)}
              className="absolute top-3 right-3 text-white/60 hover:text-white"
            >
              ×
            </button>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[var(--electric-purple)]/30">
                <Sparkles className="h-5 w-5 text-[var(--electric-purple)]" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">AI Schedule Assistant</h3>
                <p className="text-sm text-white/80">
                  Post now for <span className="text-[var(--sunset-orange)] font-bold">80% more reach</span>! 
                  Most students are active right now.
                </p>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1 text-xs rounded-lg bg-[var(--electric-purple)] text-white font-semibold">
                    Post Now
                  </button>
                  <button className="px-3 py-1 text-xs rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all">
                    Schedule Later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Visibility Toggle */}
        <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-3 opacity-80">Post Visibility</label>
            <div className="flex gap-2 p-1.5 rounded-2xl bg-white/5">
              {visibilityOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => setVisibility(option.value)}
                    className={`flex-1 py-3 px-4 rounded-xl transition-all ${
                      visibility === option.value
                        ? 'bg-[var(--electric-purple)] text-white shadow-lg'
                        : 'text-white/60 hover:text-white/80 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="h-4 w-4 mx-auto mb-1" />
                    <div className="text-xs font-semibold">{option.label}</div>
                  </button>
                );
              })}
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-white/60">Estimated reach:</span>
              <span className="font-bold text-[var(--sunset-orange)]">{currentReach}</span>
            </div>
          </div>

          {/* Tags/Categories */}
          <div>
            <label className="block text-sm font-medium mb-2 opacity-80">Add Tags</label>
            <div className="flex flex-wrap gap-2">
              {['Academic', 'Event', 'Discussion', 'Question', 'Announcement'].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1.5 text-sm rounded-full bg-white/10 border border-white/20 hover:bg-[var(--electric-purple)]/30 hover:border-[var(--electric-purple)] transition-all"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Post Content Editor */}
        <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-5">
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="What's on your mind? Share with your campus community..."
            className="w-full h-48 bg-transparent text-white placeholder:text-white/40 focus:outline-none resize-none"
          />

          {/* Character Count */}
          <div className="flex justify-end text-sm text-white/60 mb-4">
            <span>{postContent.length} / 500</span>
          </div>

          {/* Media Attachments */}
          <div className="border-t border-white/10 pt-4">
            <p className="text-sm font-medium mb-3 opacity-80">Add to your post</p>
            <div className="grid grid-cols-4 gap-2">
              <button className="aspect-square rounded-2xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2">
                <Image className="h-5 w-5 text-[var(--electric-purple)]" />
                <span className="text-xs">Photo</span>
              </button>
              <button className="aspect-square rounded-2xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2">
                <Video className="h-5 w-5 text-[var(--sunset-orange)]" />
                <span className="text-xs">Video</span>
              </button>
              <button className="aspect-square rounded-2xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2">
                <Link className="h-5 w-5 text-[var(--teal-accent)]" />
                <span className="text-xs">Link</span>
              </button>
              <button className="aspect-square rounded-2xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2">
                <Smile className="h-5 w-5 text-[var(--vivid-pink)]" />
                <span className="text-xs">Emoji</span>
              </button>
            </div>
          </div>
        </div>

        {/* Poll Creator */}
        <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Create a Poll (Optional)</h3>
            <button className="text-sm text-[var(--electric-purple)] hover:underline">
              Add Poll
            </button>
          </div>
          <p className="text-sm text-white/60">
            Polls get 3x more engagement! Ask your community a question.
          </p>
        </div>

        {/* AI Suggestions */}
        <div className="rounded-3xl backdrop-blur-xl bg-gradient-to-br from-[var(--sunset-orange)]/20 to-[var(--vivid-pink)]/20 border border-white/20 p-5">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[var(--sunset-orange)]/30">
              <Sparkles className="h-5 w-5 text-[var(--sunset-orange)]" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">AI Suggestions</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm">
                  💡 Add relevant hashtags for better discovery
                </button>
                <button className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm">
                  📸 Posts with images get 65% more engagement
                </button>
                <button className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm">
                  ❓ Convert this into a poll for more interaction
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Draft Actions */}
        <div className="flex gap-3">
          <button className="flex-1 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all">
            Save Draft
          </button>
          <button className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[var(--electric-purple)] to-[var(--vivid-pink)] text-white font-semibold hover:shadow-lg transition-all">
            Preview
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
