import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Muhammad Asadullah - Digital Marketing Expert",
    description: "Muhammad Asadullah is Digital Marketing Expert & Google and Meta Ads Specialist. Hire and boost Your Business with Proven Social Media Strategies.",
  }
  
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <link rel="preload" as="image" href="/assets/loader.svg"/>
      <head>
      <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-RSF1SVHWW3`}
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-RSF1SVHWW3');
                `}
            </Script>
            
      <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=AW-11293577838`}
            />

            <Script id="google-ads" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-11293577838');
                `}
            </Script>
            <Script id="google-ads-pageview" strategy="afterInteractive">
                {`
                  gtag('event', 'conversion', {'send_to': 'AW-11293577838/kgY1CMC_4c4YEO6kmYkq'});
                `}
            </Script>
            
       <meta name="color-scheme" content="light"/>
       <link rel="icon" type="image/x-icon" href="favicon16.ico" sizes='16x16'/>
       <link rel="icon" type="image/x-icon" href="favicon32.ico" sizes='32x32'/>
       <link rel="icon" type="image/x-icon" href="favicon.ico" sizes='48x48'/>
       <link rel="icon" type="image/x-icon" href="favicon1.ico" sizes='96x96'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
