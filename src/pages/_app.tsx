import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { Router } from 'next/router';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: true,
});

const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  );
};


export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
      NProgress.start();
    };

    const endLoading = () => {
      setLoading(false);
      NProgress.done();
    };

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', endLoading);
    Router.events.on('routeChangeError', endLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', endLoading);
      Router.events.off('routeChangeError', endLoading);
    };
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}
