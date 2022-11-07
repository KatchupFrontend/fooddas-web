import { StoreProvider } from '.././context/Store'
import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps }) {

  return (
    
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  
  );
 
}

export default MyApp
