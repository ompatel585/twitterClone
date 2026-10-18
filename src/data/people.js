export const currentUser = {
  id: 'me',
  name: 'Om Patel',
  handle: 'ompatel',
  bio: 'Building things for the web. Coffee, type systems and long walks.',
  location: 'Ahmedabad, India',
  link: 'ompatel.dev',
  joined: 'September 2020',
  following: 312,
  followers: 1840,
  hue: 210,
};

export const people = [
  { id: 'u1', name: 'Aarav Mehta', handle: 'aaravbuilds', hue: 200, verified: true, bio: 'Product engineer. Shipping small, weekly.' },
  { id: 'u2', name: 'Nisha Rao', handle: 'nisha_designs', hue: 320, verified: true, bio: 'Design systems · type nerd' },
  { id: 'u3', name: 'Kabir Shah', handle: 'kabir_codes', hue: 145, verified: false, bio: 'Rust, Go and too many side projects.' },
  { id: 'u4', name: 'Maya Iyer', handle: 'mayawrites', hue: 30, verified: true, bio: 'Writer. Newsletter on tech & culture.' },
  { id: 'u5', name: 'Rohan Desai', handle: 'rohan_ships', hue: 260, verified: false, bio: 'Indie hacker. Building in public.' },
  { id: 'u6', name: 'Tara Kapoor', handle: 'tarakapoor', hue: 175, verified: true, bio: 'Data scientist & weekend photographer.' },
];

export const peopleById = Object.fromEntries([currentUser, ...people].map((p) => [p.id, p]));

export const followSuggestions = people.filter((p) => ['u2', 'u4', 'u6'].includes(p.id));
