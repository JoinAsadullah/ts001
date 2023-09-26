'use client'
import ThemeBtn from './components/theme-btn.tsx'
//import Loader from './components/loader.tsx'
import CopyButton from './components/copyButton.tsx'
import { DevxioLogo, FbLogo,LinkedinLogo, GmailLogo, WhatsappLogo, UpworkLogo } from './svgs.tsx'
import { useEffect, useState } from 'react';
import Image from 'next/image'


export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [scrollAtTop, setScrollAtTop] = useState<boolean>(true);
  
  // useEffect(() => {
  //   const handleLoad = () => {
  //     setLoading(false);
  //     console.log('loaded');
  //   };
  
  //   if (document.readyState === 'complete') {
  //     // If the document is already loaded, trigger handleLoad immediately
  //     handleLoad();
  //   } else {
  //     // Listen for the "load" event
  //     window.addEventListener('load', handleLoad);
  //   }
  
  //   return () => {
  //     // Cleanup: Remove the event listener
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);
  
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

  const skills = ['Digital Marketing', 'Social Media Marketing', 'Search Engine Marketing', 'Content Marketing', 'Email Marketing', 'Social Media Management', 'Google Analytics', 'Google Ads','Display ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Twitter Ads', 'Pinterest Ads', 'TikTok Ads', 'Snapchat Ads', 'YouTube Ads', 'Google My Business', 'Digital Marketing Stratey', 'Growth Consultancy', 'Ads Strategy']

  return (
    <>
    <main className={`text-foreground `}>
      <div className={`min-w-[320px] mx-[auto]`}>
        <div  className={`mobile-wrapper max-w-full h-8 flex justify-between sticky z-20 top-0 ${scrollAtTop ? '' : 'glass border-b-[1px]'} border-[#00000017] dark:border-[#ffffff17] `}>
          <div className='w-full flex justify-between items-center '>
            <DevxioLogo/>
            <ThemeBtn/>
          </div>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 pt-7 xsm:pt-8 sm:pt-9 w-full max-w-[1000px] mx-auto'>
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
                <a className='px-1' href='http://wa.me/923121963230' target='_blank'><WhatsappLogo/></a> 
                <a className='px-1' href='mailto:asadullah@devxio.com' target='_blank'><GmailLogo/></a>
                <a className='pr-1' href='https://web.facebook.com/joinasadullah/' target='_blank'><FbLogo/></a>
                <a className='px-1' href='https://www.linkedin.com/in/joinasadullah/' target='_blank'><LinkedinLogo/></a>
                <a className='px-1' href='https://www.upwork.com/freelancers/~012c5ae6f4106f7c7d?s=1110580753207906304' target='_blank'><UpworkLogo/></a>

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
              <a href='https://www.credly.com/badges/9b68f292-de7c-4379-ad42-8f13f95a4c55/public_url' target='_blank' className='flex'>
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
              <a href='https://www.credly.com/badges/0f63e9cd-ba08-45b3-a509-1a539d076c5c/public_url' target='_blank' className='flex'>
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
            <div className='mt-6 mb-6'>
              <a href='https://www.credly.com/badges/68ecd291-1fca-4846-9ed2-3a5e51e71af4/public_url' target='_blank' className='flex'>
                  <div className='flex items-center '>
                      <Image className='w-[100px]' src="/assets/ibm-key-technology.png" alt="IBM key technologies for business Badge" width={200} height={200} />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[16px] font-semibold leading-tight mb-1'>
                      IBM Key Technologies For Business Specialist
                    </h4>
                    <div>
                      <Image className='inline mb-[2px] mr-[2px] ' src="/assets/check-verified-02.png" alt="" width={15} height={15} />
                      <h4 className='text-[13px] font-light inline text-[var(--accent5)]'>
                        Click to verify
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Provider: coursera<br/>
                      Issued: September 2023
                      </h4>
                    </div>
                  </div>
              </a>
            </div>  
            <div className='h-[1px] border-solid border-[var(--accent2)] border-[1px]' />
            <div className='mt-6 mb-6'>
              <a href='https://www.credly.com/badges/de8392fe-4200-404c-acec-fb9ca19b5c1b/public_url' target='_blank' className='flex'>
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
              <a href='https://app.hubspot.com/academy/achievements/mftzx71n/en/1/muhammad-asadullah/hubspot-marketing-software' target='_blank' className='flex'>
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
            <div className=' flex flex-wrap'>
              {skills.map((skill, index) => (
                <ul key={index} className=' pb-1 px-2 mr-1 inline border-solid border-accent2 border-[2px] rounded-full my-1'>
                  <li className='text-[12px]  font-normal inline'>
                    {skill}
                  </li>
                  <Image className='inline dark:invert mt-[3px]' src="/assets/badge1.webp" alt="" width={10} height={10} />
                </ul>
              ))}
            </div>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 w-full max-w-[1000px] mx-auto'>
          <h3 className='font-semibold text-center text-[18px] mb-4'>
            Contact
          </h3>
            <div className='mb-10'>
              <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-8 md:py-5 mb-3'>
                <a className='' href='mailto:asadullah@devxio.com' target='_blank'><p className=''>Email<br/><span className='hover:underline text-accent7'>asadullah@devxio.com</span></p></a><CopyButton textToCopy="asadullah@devxio.com"/>
              </div>
              <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-8 md:py-5 mb-3'>
                <a className='' href='http://wa.me/923121963230' target='_blank'><p className=''>WhatsApp<br/><span className='hover:underline text-accent7'>+92 312 1963230</span></p></a><CopyButton textToCopy="http://wa.me/923121963230"/>
              </div>
              <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-8 md:py-5 mb-3'>
                <a className='' href='https://www.linkedin.com/in/joinasadullah/' target='_blank'><p className=''>LinkedIn<br/><span className='hover:underline text-accent7'>linkedin.com/in/joinasadullah</span></p></a><CopyButton textToCopy="https://www.linkedin.com/in/joinasadullah/"/>
              </div>
              <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-8 md:py-5 mb-3'>
                <a className='' href='https://www.facebook.com/joinasadullah/' target='_blank'><p className=''>Facebook<br/><span className='hover:underline text-accent7'>facebook.com/joinasadullah</span></p></a><CopyButton textToCopy="https://www.facebook.com/joinasadullah/"/>
              </div>
              <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-8 md:py-5 mb-3'>
                <a className='' href='https://www.upwork.com/freelancers/~012c5ae6f4106f7c7d?s=1110580753207906304' target='_blank'><p className=''>Upwork<br/><span className='hover:underline text-accent7'></span></p></a><CopyButton textToCopy="https://www.facebook.com/joinasadullah/"/>
              </div>
            </div>
        </div>
      </div>
    </main>
    </>
  )
}
