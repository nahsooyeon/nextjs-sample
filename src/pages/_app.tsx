import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/GlobalStyle';
/*
1. 페이지 공통 레이아웃
2. 페이지 탐색시 상태 유지
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
