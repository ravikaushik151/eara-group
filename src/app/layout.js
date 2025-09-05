// app/layout.js
// 
import 'bootstrap/dist/css/bootstrap.min.css';
//import './normalize.css';
//import './components.css';
//import './style.css';
//defer css into clientwrapper for better performance
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Script from "next/script"; // ✅ Import Script component
import ClientWrapper from './components/ClientWrapper';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Eara Group',
  description: 'Eara Group',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-wf-page="123456">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.svg" />
      </head>
      <body>
        <ClientWrapper>
          <div id="layout-wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </ClientWrapper>

       
      </body>
    </html>
  );
}
