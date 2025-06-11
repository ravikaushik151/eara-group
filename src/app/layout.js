import Script from 'next/script';
import '../app/globals.css';
import '../public/css/normalize.css';
import '../public/css/components.css';
import '../public/css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html data-wf-page="123456" lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.svg" />

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>

        <Script src="https://jjcruzad.a2hosted.com/staging/eara-group/js/main.js" type="text/javascript"></Script>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js" strategy="beforeInteractive" />
      </head>
      <body>
        <div id="layout-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
