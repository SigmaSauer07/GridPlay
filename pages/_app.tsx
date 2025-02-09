import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
import { SessionProvider } from '@supabase/auth-helpers-react';
import { supabase } from '../utils/supabaseClient';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider supabaseClient={supabase}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
