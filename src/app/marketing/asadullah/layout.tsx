import Script from 'next/script';



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
       <meta name="color-scheme" content="light"/>
      </head>
      <body >{children}</body>
    </html>
  )
}


