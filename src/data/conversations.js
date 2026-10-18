import { minutesAgo } from '../utils/format';

// `from: 'me'` marks messages sent by the current user.
export const conversations = [
  {
    id: 'c1',
    personId: 'u2',
    messages: [
      { id: 'm1', from: 'u2', text: 'Loved the dashboard mock you shared!', at: minutesAgo(95) },
      { id: 'm2', from: 'me', text: 'Thanks! Still tuning the spacing scale.', at: minutesAgo(90) },
      { id: 'm3', from: 'u2', text: 'Stick to 4/8/12/16 and you are done 😄', at: minutesAgo(14) },
    ],
  },
  {
    id: 'c2',
    personId: 'u1',
    messages: [
      { id: 'm1', from: 'u1', text: 'Are you joining the meetup on Saturday?', at: minutesAgo(60 * 6) },
      { id: 'm2', from: 'me', text: 'Planning to. Will confirm tonight.', at: minutesAgo(60 * 5) },
    ],
  },
  {
    id: 'c3',
    personId: 'u5',
    messages: [{ id: 'm1', from: 'u5', text: 'Sent you the pricing page draft.', at: minutesAgo(60 * 30) }],
  },
];
