import { minutesAgo } from '../utils/format';

// type: like | repost | follow | mention
export const notifications = [
  { id: 'n1', type: 'like', actorId: 'u2', createdAt: minutesAgo(6), excerpt: 'Shipping small beats shipping big, every single time.' },
  { id: 'n2', type: 'follow', actorId: 'u6', createdAt: minutesAgo(25) },
  { id: 'n3', type: 'mention', actorId: 'u1', createdAt: minutesAgo(70), excerpt: '@ompatel this is exactly the pattern we used — happy to share the repo.' },
  { id: 'n4', type: 'repost', actorId: 'u4', createdAt: minutesAgo(180), excerpt: 'Component APIs should read like sentences.' },
  { id: 'n5', type: 'like', actorId: 'u3', createdAt: minutesAgo(60 * 7), excerpt: 'Shipping small beats shipping big, every single time.' },
  { id: 'n6', type: 'mention', actorId: 'u5', createdAt: minutesAgo(60 * 26), excerpt: '@ompatel thoughts on server components for dashboards?' },
  { id: 'n7', type: 'follow', actorId: 'u3', createdAt: minutesAgo(60 * 40) },
];
