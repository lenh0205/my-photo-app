import React, { Suspense } from 'react';
import './App.scss';
import { Route, Routes, Link, Navigate, Outlet } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';

// import Photo from './features/Photo' 

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate replace to="/photos" />} />
          <Route path="photos/*" element={<Photo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;