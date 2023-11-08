import Script from 'next/script';
import './globals.css';
import localFont from 'next/font/local';

const neue_machina = localFont({
  src: '/NeueMachina-Regular.otf',
  variable: '--font-neuemachina',
});

export const metadata = {
  title: 'GDSC VIT',
  description: 'Google Developers Students Club VIT',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://dscvit.com',
    site_name: 'GDSC VIT',
    images: [
      {
        url: 'https://dscvit.com/projects/default.png',
        width: 1200,
        height: 630,
        alt: 'GDSC VIT',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${neue_machina.variable} text-[10px] md:text-[16px]`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q1SGQCL6BJ"
          strategy="afterInteractive"
        />
        <Script id="gtagconfig" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-Q1SGQCL6BJ');
    `}
        </Script>
        <Script id="gtag" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M4WQ5S5N');
  `}
        </Script>
      </head>
      <body className="overflow-hidden bg-dark">
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M4WQ5S5N"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
