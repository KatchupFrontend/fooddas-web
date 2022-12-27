import { StoreProvider } from '.././context/Store'
import { AuthContextProvider } from '../context/AuthContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <AuthContextProvider>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </AuthContextProvider>
  );
 
}

export default MyApp
