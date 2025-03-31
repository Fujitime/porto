type DateFormatOptions = {
  locale?: string;
  weekday?: 'narrow' | 'short' | 'long';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?: 'short' | 'long';
  hour12?: boolean; // true for AM/PM, false for 24-hour format
};

const defaultOptions: DateFormatOptions = {
  locale: "id-ID",
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};

export default function formatDate(
  date: Date | string, 
  options?: DateFormatOptions
): string {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date provided");
  }

  const finalOptions: DateFormatOptions = {
    ...defaultOptions,
    ...options, 
  };

  return new Intl.DateTimeFormat(finalOptions.locale, finalOptions).format(parsedDate);
}
