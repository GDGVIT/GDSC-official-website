
import './globals.css'
import localFont from "next/font/local"

const neue_machina = localFont({
  src: '/NeueMachina-Regular.otf',
  variable: '--font-neuemachina'
})

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
        url: 'https://dscvit.com/og.png',
        width: 1200,
        height: 630,
        alt: 'GDSC VIT',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${neue_machina.variable} text-[10px] md:text-[16px]`} >
      <body className='overflow-hidden bg-dark'>{children}</body>
    </ html>
  )
}
