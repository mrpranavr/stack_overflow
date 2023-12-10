import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamps = (createdAt: Date): string => {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - createdAt.getTime();

  // Calculate year and month difference
  const diffInYears = now.getFullYear() - createdAt.getFullYear();
  const diffInMonths = now.getMonth() - createdAt.getMonth() + diffInYears * 12;

  if (diffInMonths >= 12) {
    return `${Math.floor(diffInMonths / 12)} ${
      Math.floor(diffInMonths / 12) === 1 ? 'year' : 'years'
    } ago`;
  } else if (diffInMonths > 0) {
    return `${diffInMonths} ${diffInMonths === 1 ? 'month' : 'months'} ago`;
  } else if (diffInMilliseconds < 60000) {
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    return `${diffInSeconds} ${diffInSeconds === 1 ? 'second' : 'seconds'} ago`;
  } else if (diffInMilliseconds < 3600000) {
    const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
    return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (diffInMilliseconds < 86400000) {
    const diffInHours = Math.floor(diffInMilliseconds / 3600000);
    return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
  } else if (diffInMilliseconds < 2592000000) {
    const diffInDays = Math.floor(diffInMilliseconds / 86400000);
    return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
  } else {
    // Display the date in a specific format if it's more than 30 days ago
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return createdAt.toLocaleDateString(undefined, options);
  }
};

export const formatNumberWithExtension = (number: number): string => {
  if (number >= 1000000) {
    const result = (number / 1000000).toFixed(1);
    return `${result}M`;
  } else if (number >= 1000) {
    const result = (number / 1000).toFixed(1);
    return `${result}K`;
  } else {
    return number.toString();
  }
};
