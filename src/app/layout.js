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
import PathBasedPreload from './components/PathBasedPreload';
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-wf-page="123456">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.svg" />
        <PathBasedPreload />
        {/* Preload critical CSS */}
        <link rel="preload" href="/css/components.css" as="style" />
        <link rel="preload" href="/css/style.css" as="style" />

        {/* Load non-critical CSS without blocking render */}
        <link rel="stylesheet" href="/css/components.css" media="print" onLoad="this.media='all'" />
        <link rel="stylesheet" href="/css/style.css" media="print" onLoad="this.media='all'" />

        {/* Bootstrap & FontAwesome lazy load */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" media="print" onLoad="this.media='all'" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" media="print" onLoad="this.media='all'" />

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
