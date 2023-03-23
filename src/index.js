import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import { GOOGLE_CLIENT_ID } from './utils/const';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      user: new UserStore(),
    }}>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
      </GoogleOAuthProvider>
    </Context.Provider>
);