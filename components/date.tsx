import { parseISO, format } from 'date-fns';

type DateType = {
  value: string;
  formatType?: string;
};

export default function Date({
  value,
  formatType = 'LLLL dd, yyyy',
}: DateType) {
  const date = parseISO(value);
  return (
    <time
      className="text-sm text-gray-600"
      dateTime={value}
      suppressHydrationWarning
    >
      {format(date, formatType)}
    </time>
  );
}
