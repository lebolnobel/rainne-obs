export function currentDate() {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0');
  const month = today.toLocaleString('default', { month: 'short' });

  return `${day} ${month}`;
}
