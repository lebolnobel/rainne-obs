type DateInput = Date | string | number;

function toDate(input: DateInput): Date {
  if (!input) return new Date();
  return input instanceof Date ? input : new Date(input);
}

const shortFormatter = new Intl.DateTimeFormat('fr-BE', {
  day: '2-digit',
  month: 'short',
});

const fullFormatter = new Intl.DateTimeFormat('fr-BE', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export function readableDate(rawDate: DateInput = new Date()): string {
  return shortFormatter.format(toDate(rawDate));
}

export function fullReadableDate(rawDate: DateInput = new Date()): string {
  return fullFormatter.format(toDate(rawDate));
}
