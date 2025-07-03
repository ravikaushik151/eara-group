// app/layout.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/normalize.css';
import '../public/css/components.css';
import '../public/css/style.css';
import './globals.css';

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
