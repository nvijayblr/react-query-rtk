import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Navigate, Routes, Route, Link } from 'react-router-dom';
import { PostsList } from './components/PostsList/PostsList'
import { AlbumsList } from './components/AlbumsList/AlbumsList'
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="demo-app">
        <Router>
          <header>
            <Link to="/albums" style={{ padding: 5 }}>
              Alubms [React Query]
            </Link>
            <Link to="/posts" style={{ padding: 5 }}>
              Posts [RTK Query]
            </Link>
          </header>

          <Routes>
            <Route path="/albums" element={<AlbumsList />} />
            <Route path="/posts" element={<PostsList />} />
            <Route
              path="*"
              element={<Navigate to="/albums" replace />}
            />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
