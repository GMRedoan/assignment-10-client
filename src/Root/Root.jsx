import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet, useNavigation, useLocation } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loading from '../Pages/Loading';

const Root = () => {
  const navigation = useNavigation()
  const location = useLocation();
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // first visit → dark
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };


  useEffect(() => {
    const delay = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(delay)
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const showLoader = loading || navigation.state === 'loading';
  return (
    <div className="relative max-w-[1500px] mx-auto bg-base-200">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Outlet />

      <Footer />

      {showLoader && (
        <div className="fixed inset-0 bg-white z-100 flex items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Root;

