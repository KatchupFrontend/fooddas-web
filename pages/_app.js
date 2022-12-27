import { useRouter } from 'next/router';
import { StoreProvider } from '.././context/Store'
import Protected from '../components/Protected';
import { AuthContextProvider } from '../context/AuthContext';
import '../styles/globals.css'


const noAuthPages = ['/Login', '/SignUp', '/Reset']
function MyApp({ Component, pageProps: {...pageProps } }) {
 const router = useRouter();
  return (
    <AuthContextProvider>
      <StoreProvider>
        {noAuthPages.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <Protected>
            <Component {...pageProps} />
          </Protected>
        )}
      
      </StoreProvider>
    </AuthContextProvider>
  );
 
}

export default MyApp
