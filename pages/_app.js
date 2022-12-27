import { StoreProvider } from '.././context/Store'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
  
  );
 
}

export default MyApp
