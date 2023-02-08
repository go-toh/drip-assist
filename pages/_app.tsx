import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SignInStateProvider } from '../src/contexts/signInStateProvider'
import { theme } from '@/src/theme/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SignInStateProvider>
        <Component {...pageProps} />
      </SignInStateProvider>
    </ChakraProvider>
  )
}
