/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
      return [
        {
            source: '/asadullah/cv',
            destination: '/AsadullahCV.pdf',
            permanent: true, // 301 Permanent Redirect
          },
        {
            source: '/sendemail',
            destination: 'mailto:asadullah@devxio.com',
            permanent: false, // 301 Permanent Redirect
            basePath: false,
          },
      ];
    },
  };
  
