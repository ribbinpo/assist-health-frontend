import React from 'react';
import { Routes, Route, } from 'react-router-dom';

import { guestRoutes } from './routes';

interface guestRoute {
  path: string,
  element: React.ReactNode
}

function App() {
  return (
    <div>
      <Routes>
        {guestRoutes.map((route: guestRoute, key: number) => (
          <Route path={route.path} element={route.element} key={key}></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
