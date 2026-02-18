import { motion } from "motion/react";

interface ActivityGridProps {
  data?: number[][];
  title?: string;
}

export function ActivityGrid({ data, title = "Daily Activity" }: ActivityGridProps) {
  // Generate mock data for the last 12 weeks (84 days)
  const generateData = () => {
    const weeks = 12;
    const daysPerWeek = 7;
    const grid: number[][] = [];
    
    for (let week = 0; week < weeks; week++) {
      const weekData: number[] = [];
      for (let day = 0; day < daysPerWeek; day++) {
        weekData.push(Math.floor(Math.random() * 5));
      }
      grid.push(weekData);
    }
    return grid;
  };

  const activityData = data || generateData();

  const getColor = (value: number) => {
    if (value === 0) return 'bg-gray-800/30';
    if (value === 1) return 'bg-[var(--teal-accent)]/30';
    if (value === 2) return 'bg-[var(--teal-accent)]/50';
    if (value === 3) return 'bg-[var(--teal-accent)]/70';
    return 'bg-[var(--teal-accent)]';
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold opacity-70">{title}</h3>
      <div className="flex gap-1">
        {activityData.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day, dayIndex) => (
              <motion.div
                key={`${weekIndex}-${dayIndex}`}
                className={`h-2.5 w-2.5 rounded-sm ${getColor(day)}`}
                whileHover={{ scale: 1.3 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (weekIndex * 7 + dayIndex) * 0.002 }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 text-xs opacity-60">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`h-2.5 w-2.5 rounded-sm ${getColor(level)}`} />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
