const compact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });

export const formatCount = (n) => (n >= 1000 ? compact.format(n) : String(n));

const STEPS = [
  [60, 's'],
  [60, 'm'],
  [24, 'h'],
  [7, 'd'],
];

export function timeAgo(timestamp, now = Date.now()) {
  let value = Math.max(1, Math.floor((now - timestamp) / 1000));
  for (const [size, unit] of STEPS) {
    if (value < size) return `${value}${unit}`;
    value = Math.floor(value / size);
  }
  return `${value}w`;
}

export const minutesAgo = (m) => Date.now() - m * 60 * 1000;
