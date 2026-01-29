import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Determines if a talk is upcoming based on its datetime.
 * Returns true if the datetime is after today, false otherwise.
 */
export function isUpcomingTalk(datetime?: string): boolean {
  if (!datetime) return false;
  try {
    const talkDate = new Date(datetime);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return talkDate > today;
  } catch {
    return false;
  }
}
