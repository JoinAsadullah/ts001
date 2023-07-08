import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


import Mont from 'next/font/local';
const myFont = Mont({ src: './../../fonts/Montserrat-Regular.ttf' });


export const metadata = {
    title: "Asadullah's Portfolio - A Full Stack Developer",
    description: "Muhammad Asadullah is a talented Full Stack Developer specializing in design, development, and marketing. With extensive experience in web development and design, Asadullah has successfully completed projects such as the Focus Academy website and the redevelopment of the Bika Construction website. Offering integrated web application and information system development services, Asadullah also excels in digital marketing strategies including email marketing, SEO, and social media marketing. If you're in need of a skilled professional who can handle all aspects of your project, Muhammad Asadullah is here to help.",
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
      <meta name="color-scheme" content="light"/>
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
{/* <link rel="preload" as="image" href="/assets/asadullahpic.webp"/>
<link rel="preload" as="image" href="/assets/asadullahpicw.webp"/>
<link rel="preload" as="image" href="/assets/dark-theme.webp"/>
<link rel="preload" as="image" href="/assets/system-theme.webp"/>
<link rel="preload" as="image" href="/assets/light-theme.webp"/> */}