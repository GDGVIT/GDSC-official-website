import './globals.css'
import { Unbounded } from 'next/font/google'
import localFont from "@next/font/local"

const unbounded = Unbounded({ subsets: ['latin'], variable: '--font-unbounded' })
const neue_machina = localFont({
  src: '/NeueMachina-Regular.otf',
  variable: '--font-neuemachina'
})

export const metadata = {
  title: 'GDSC VIT',
  description: 'Google Developers Students Club VIT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${neue_machina.variable} text-[10px] md:text-[16px]`} >
      <body className='overflow-hidden'>{children}</body>
    </ html>
  )
}
