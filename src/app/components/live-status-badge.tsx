import { motion } from "motion/react";

interface LiveStatusBadgeProps {
  isOnline?: boolean;
  label?: string;
  showLabel?: boolean;
}

export function LiveStatusBadge({ isOnline = true, label, showLabel = true }: LiveStatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="relative flex items-center justify-center">
        <motion.div
          className={`h-2.5 w-2.5 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {isOnline && (
          <motion.div
            className="absolute h-2.5 w-2.5 rounded-full bg-green-500"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-medium">
          {label || (isOnline ? 'Online' : 'Offline')}
        </span>
      )}
    </div>
  );
}
