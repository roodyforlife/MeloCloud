import React from 'react'
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '../index.js';
import {authRoutes, publicRoutes} from '../routes.js';

export default function AppRouter() {
  const { user } = useContext(Context);

  return (
      <div>
        {
          <Routes>
          {user.isAuth && authRoutes.map(({path, component}) =>
            <Route path={path} element={component} key={path}/>
          )}
          
          {publicRoutes.map(({path, component}) => 
            <Route path={path} element={component} key={path}/>
          )}
        </Routes>
        
        }
    </div>
  )
}
