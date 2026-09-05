export interface ExperienceDuration {
  years: number;
  months: number;
  days: number;
  formatted: string;
  formattedShort: string;
  formattedFull: string;
}

/**
 * Dynamically calculates career experience from start date (Dec 18, 2018) to current date.
 */
export function calculateExperience(
  startDate: Date = new Date(2018, 11, 18),
  currentDate: Date = new Date()
): ExperienceDuration {
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  let days = currentDate.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
    // Get total days in previous month
    const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    days += prevMonthLastDay;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const formattedShort = `${years}y ${months}m ${days}d`;
  const formatted = `${years} yrs, ${months} mos, ${days} days`;
  const formattedFull = `${years} years, ${months} months, ${days} days`;

  return {
    years,
    months,
    days,
    formatted,
    formattedShort,
    formattedFull,
  };
}
