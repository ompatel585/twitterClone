import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import { PostsProvider } from './context/PostsContext';
import ExplorePage from './features/explore/ExplorePage';
import GrokPage from './features/grok/GrokPage';
import HomePage from './features/home/HomePage';
import MessagesPage from './features/messages/MessagesPage';
import NotificationsPage from './features/notifications/NotificationsPage';
import ProfilePage from './features/profile/ProfilePage';

export default function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="explore/:tab?" element={<ExplorePage />} />
            <Route path="notifications/:tab?" element={<NotificationsPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="grok" element={<GrokPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
}
