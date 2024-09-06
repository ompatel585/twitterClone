import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Explore from './components/Explore/Explore';
import Notifications from './components/Notifications/Notifications';
import Messages from './components/Messages/Messages';
import Grok from './components/Grok/Grok';
import Profile from './components/Profile/Profile';
import ExForYou from './components/Explore/ExForYou';
import ExTrending from './components/Explore/ExTrending';
import ExNews from './components/Explore/ExNews';
import ExSports from './components/Explore/ExSports';
import ExEntertainment from './components/Explore/ExEntertainment';
import NotificationAll from './components/Notifications/NotificationAll';
import NotificationMention from './components/Notifications/NotificationMention';
import NotificationVerified from './components/Notifications/NotificationVerified';
import './App.css';

function App() {
  return (
    <div className="App bg-black h-full">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/foryou" element={<ExForYou />} />
          <Route path="/explore/trending" element={<ExTrending />} />
          <Route path="/explore/news" element={<ExNews />} />
          <Route path="/explore/sports" element={<ExSports />} />
          <Route path="/explore/entertainment" element={<ExEntertainment />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/grok" element={<Grok />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications/all" element={<NotificationAll />} />
          <Route path="/notifications/verified" element={<NotificationVerified />} />
          <Route path="/notifications/mentions" element={<NotificationMention />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
