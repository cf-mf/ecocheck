import AuthHeader from '../components/AuthHeader.jsx';
import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  );
}