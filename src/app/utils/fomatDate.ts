export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const Month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${Month}/${year}`;
}
