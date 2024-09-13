import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Img from 'next/image'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeDelivery >< Passkeys',
  description: 'DeDelivery meets Passkeys - PoC'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem'
          }}
        >
          <a href='https://dedelivery.es'>
            <Img width={163} height={45} alt='dede-logo' src='/dede.svg' />
          </a>
          <div style={{ display: 'flex' }}>
            <a
              href='#'
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '1rem'
              }}
            >
              {' '}
            </a>
            <a
              href='#'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {' '}
            </a>
          </div>
        </nav>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginLeft: '40px',
            marginRight: '40px'
          }}
        >
            {children}
        </div>
        <br />
        <div
          style={{
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          Made with ❤️ by &nbsp; 
          <a href='https://safe.global/'>
            <Img
              width={32}
              height={36}
              alt='safe-logo'
              src='/safeLogo.png'
            />
          </a>
        </div>
      </body>
    </html>
  )
}
