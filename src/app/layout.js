// app/layout.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../public/css/normalize.css';
// import '../public/css/components.css';
// import '../public/css/style.css';
import './globals.css';
import ClientWrapper from "./components/ClientWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Eara Group",
  description: "Eara Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-wf-page="123456">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.svg" />

        {/* Non-critical CSS loading without blocking */}
        <link rel="stylesheet" href="/css/normalize.css" media="print" />
        <link rel="stylesheet" href="/css/components.css" media="print" />
        <link rel="stylesheet" href="/css/style.css" media="print" />

        {/* Fix media after load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.querySelectorAll('link[media="print"]').forEach(link => {
                link.addEventListener('load', () => {
                  link.media = 'all';
                });
              });
            `,
          }}
        />
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
