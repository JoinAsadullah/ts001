'use client'
import ThemeBtn from './components/theme-btn.tsx'
import Loader from './components/loader.tsx'
import { DevxioLogo, FbLogo,LinkedinLogo, GmailLogo, WhatsappLogo } from './svgs.tsx'
import { useEffect, useState } from 'react';
import Image from 'next/image'



export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [scrollAtTop, setScrollAtTop] = useState<boolean>(true);
  
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      console.log('loaded');
    };
  
    if (document.readyState === 'complete') {
      // If the document is already loaded, trigger handleLoad immediately
      handleLoad();
    } else {
      // Listen for the "load" event
      window.addEventListener('load', handleLoad);
    }
  
    return () => {
      // Cleanup: Remove the event listener
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollAtTop(scrollPosition === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = ['Digital Marketing', 'Social Media Marketing', 'Search Engine Optimization', 'Search Engine Marketing', 'Content Marketing', 'Email Marketing', 'Google Analytics', 'Google Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Twitter Ads', 'Pinterest Ads', 'TikTok Ads', 'Snapchat Ads', 'YouTube Ads', 'Google My Business', 'Google Tag Manager', 'Google Search Console', 'Google Data Studio', 'Google Optimize', 'Google Ads Editor', 'Google Ads Scripts', 'Google Ads API', 'Google Ads Mobile App', 'Google Ads App', 'Google Ads Editor', 'Google Ads Scripts', 'Google Ads API', 'Google Ads Mobile App', 'Google Ads App', 'Google Ads Editor', 'Google Ads Scripts', 'Google Ads API', 'Google Ads Mobile App', 'Google Ads App', 'Google Ads Editor', 'Google Ads Scripts', 'Google Ads API', 'Google Ads Mobile App', 'Google Ads App', 'Google Ads Editor', 'Google Ads Scripts', 'Google Ads API', 'Google Ads Mobile App', 'Google Ads App']

  return (
    <>
    {loading==true ? <Loader/>: ""}
    <main className={`text-foreground `}>
      <div className={`min-w-[320px] mx-[auto]`}>
        <div  className={`mobile-wrapper max-w-full h-8 flex justify-between sticky z-20 top-0 ${scrollAtTop ? '' : 'glass border-b-[1px]'} border-[#00000017] dark:border-[#ffffff17] `}>
          <div className='w-full flex justify-between items-center '>
            <DevxioLogo/>
            <ThemeBtn/>
          </div>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 pt-6 xsm:pt-7 sm:pt-8 w-full max-w-[1000px] mx-auto'>
          <h1 className='mk-heading text-[30px] xsm:text-[36px] sm:text-[40px] md:text-[48px]'>
            Unlock Your Digital Potential with <br/><span className='text-[#1E8E3E]'>Digital Marketing Expert</span>
          </h1>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 md:mt-9 w-full max-w-[1000px] mx-auto'>
          <div className='mk-shadow1 rounded-xl p-4 md:px-6 md:py-4  sm:flex'>
            <div className='rounded-full p-3 flex items-center justify-center'>
              <Image className='rounded-full border-[3px] border-solid border-[var(--accent1)] sm:w-[900px]' src="/assets/asadullah.webp" alt="Muhammad Asadullah, Software Developer and Digital Marketing Expert." width={300} height={300} />
            </div>
            <div>
              <div className='mt-5 mb-2 '>
                <h1 className='mk-heading2 mr-1 inline leading-0 xsm:text-[24px]'>
                  Muhammad Asadullah
                </h1>
              </div>
              <p className='mk-p'>
                Greetings! <br/>
                I am accomplished digital marketing professional with certifications from Meta, Google, and HubSpot,
                coupled with over two years of hands-on experience, I offer strategic leadership in driving your business&#39;s digital success.
                Contact now to discuss your project.
              </p>
              <div className='mt-5 mb-2 '>
                <a className='pr-1' href='https://web.facebook.com/joinasadullah/' target='_blank'><FbLogo/></a>
                <a className='px-1' href='https://www.linkedin.com/in/joinasadullah/' target='_blank'><LinkedinLogo/></a>
                <a className='px-1' href='mailto:asadullah@devxio.com' target='_blank'><GmailLogo/></a>
                <a className='px-1' href='http://wa.me/923111678546' target='_blank'><WhatsappLogo/></a>
              </div>
            </div>
          </div>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 w-full max-w-[1000px] mx-auto'>
          <h3 className='font-semibold text-center text-[18px] mb-4'>
            Certifications
          </h3>
          <div className='mk-shadow1 rounded-xl p-4 md:px-8 md:py-5 '>
            <div className='mb-6 mt-4'>
              <a href='https://www.credly.com/badges/9b68f292-de7c-4379-ad42-8f13f95a4c55/public_url' className='flex'>
                  <div className='flex items-center '>
                      <Image className='w-[100px]' src="/assets/metaassociate.png" alt="Meta Certified Digital Marketing Associate Badge" width={200} height={200} />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[16px] font-semibold leading-tight mb-1'>
                      Meta Certified Digital Marketing Associate
                    </h4>
                    <div>
                      <Image className='inline mb-[2px] mr-[2px] ' src="/assets/check-verified-02.png" alt="" width={15} height={15} />
                      <h4 className='text-[13px] font-light inline text-[var(--accent5)]'>
                        Click to verify
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Provider: Meta<br/>
                      Issued: August 2023 - Expires: August 2025
                      </h4>
                    </div>
                  </div>
              </a>
            </div>
            <div className='h-[1px] border-solid border-[var(--accent2)] border-[1px]' />
            <div className='mt-6 mb-6'>
              <a href='https://www.credly.com/badges/0f63e9cd-ba08-45b3-a509-1a539d076c5c/public_url' className='flex'>
                  <div className='flex items-center '>
                      <Image className='w-[100px]' src="/assets/googlebadge.png" alt="Google Digital Marketing & E-commerce certificate Badge" width={200} height={200} />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[16px] font-semibold leading-tight mb-1'>
                      Google Digital Marketing & E-commerce certificate
                    </h4>
                    <div>
                      <Image className='inline mb-[2px] mr-[2px] ' src="/assets/check-verified-02.png" alt="" width={15} height={15} />
                      <h4 className='text-[13px] font-light inline text-[var(--accent5)]'>
                        Click to verify
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Provider: coursera<br/>
                      Issued: August 2023
                      </h4>
                    </div>
                  </div>
              </a>
            </div>  
            <div className='h-[1px] border-solid border-[var(--accent2)] border-[1px]' />
            <div className='mt-6 mb-6'>
              <a href='https://coursera.org/share/0ec89c0fec0ca52fc98241b1105125d4' className='flex'>
                  <div className='flex items-center '>
                      <Image className='w-[100px]' src="/assets/metaprofessional.png" alt="Meta Social Media Marketing Professional Badge" width={200} height={200} />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[16px] font-semibold leading-tight mb-1'>
                      Meta Social Media Marketing Professional
                    </h4>
                    <div>
                      <Image className='inline mb-[2px] mr-[2px] ' src="/assets/check-verified-02.png" alt="" width={15} height={15} />
                      <h4 className='text-[13px] font-light inline text-[var(--accent5)]'>
                        Click to verify
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Provider: Coursera<br/>
                      Issued: August 2023
                      </h4>
                    </div>
                  </div>
              </a>
            </div>  
            <div className='h-[1px] border-solid border-[var(--accent2)] border-[1px]' />
            <div className='mt-6 mb-6'>
              <a href='https://app.hubspot.com/academy/achievements/mftzx71n/en/1/muhammad-asadullah/hubspot-marketing-software' className='flex'>
                  <div className='flex items-center '>
                      <Image className='w-[100px]' src="/assets/hubspotbadge.webp" alt="Badge" width={200} height={200} />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[16px] font-semibold leading-tight mb-1'>
                      Hubspot Marketing Software Certified
                    </h4>
                    <div>
                      <Image className='inline mb-[2px] mr-[2px] ' src="/assets/check-verified-02.png" alt="" width={15} height={15} />
                      <h4 className='text-[13px] font-light inline text-[var(--accent5)]'>
                        Click to verify
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Provider: Hubspot<br/>
                      Issued: August 2023 - Expires: September 2024
                      </h4>
                    </div>
                  </div>
              </a>
            </div>  
          </div>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 w-full max-w-[1000px] mx-auto'>
          <h3 className='font-semibold text-center text-[18px] mb-4'>
            Skills
          </h3>
            <div className='mb-10 flex flex-wrap'>
              {skills.map((skill, index) => (
                <div key={index} className='px-2 pb-1 pt-[1px] mr-1 inline border-solid border-accent2 border-[2px] rounded-full my-1'>
                  <h5 className='text-[12px] font-normal inline'>
                    {skill}
                  </h5>
                  <Image className='inline dark:invert' src="/assets/badge1.webp" alt="" width={15} height={15} />
                </div>
              ))}
            </div>
        </div>
      </div>
    </main>
    </>
  )
}
