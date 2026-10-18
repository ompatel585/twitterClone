# Threads

A UI-only social timeline clone built with React 18, React Router 6 and Tailwind CSS. No backend or credentials needed — all data is mocked in `src/data`.

```bash
npm install
npm start      # http://localhost:3000
npm run build
```

## Structure

```
src/
  App.js                 routes
  styles/index.css       Tailwind layers + shared component classes
  context/               PostsContext (posts, likes, reposts, bookmarks, follows)
  data/                  mock people, posts, trends, notifications, conversations
  utils/                 formatting helpers
  components/
    layout/              AppShell, Sidebar, RightRail, PageHeader, ComposeModal
    ui/                  Avatar, Tabs, SearchInput, FollowButton, EmptyState
    post/                PostCard, Composer
    widgets/             TrendList, WhoToFollow, PremiumCard
  features/              home, explore, notifications, messages, grok, profile
```

Design tokens (colors, fonts) live in `tailwind.config.js`.
