import '@/styles/globals.css'
import '@/styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  return (
    <>
    <Component {...pageProps} />
    <ToastContainer />
    </>
  )
}
