import React from 'react';
import { Routes, Route, } from 'react-router-dom';

import { guestRoutes } from './routes';
import { Layout } from './layouts';

interface guestRoute {
  path: string,
  element: React.ReactNode
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {guestRoutes.map((route: guestRoute, key: number) => (
            <Route path={route.path} element={route.element} key={key}></Route>
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
