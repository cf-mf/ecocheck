import Header from '../components/Header.jsx';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
