import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}