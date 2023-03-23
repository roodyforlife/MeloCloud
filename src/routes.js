import { LOGIN_ROUTE, REGISTRATION_ROUTE, DEFAULT_ROUTE} from './utils/const';
import { Navigate } from 'react-router-dom';
import UserLogin from './pages/UserLogin.jsx';
import UserRegistration from './pages/UserRegistration.jsx';

export const authRoutes = [
];

export const publicRoutes = [
    { path: LOGIN_ROUTE, component: <UserLogin /> },
    { path: REGISTRATION_ROUTE, component: <UserRegistration /> },
    { path: DEFAULT_ROUTE, component: <Navigate to={LOGIN_ROUTE}/> },
];