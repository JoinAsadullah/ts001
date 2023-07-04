import Image from 'next/image'
import ContactForm from './components/contactus.tsx'
import ThemeBtn from './components/theme-btn.tsx'
import { DevxioLogo, FbLogo, TwitterLogo, LinkedinLogo, GithubLogo, Badge } from './svgs.tsx'
import Head from "next/head";



export default function Home() {
  return (
    <main className="text-foreground">
      <div className='min-w-[330px] mx-[auto]'>
        <div className='mobile-wrapper h-8 flex justify-between sticky z-20 top-0 glass border-b-[1px] border-[#00000017] dark:border-[#ffffff17] '>
          <div className='w-full flex justify-between items-center'>
            <DevxioLogo/>
            <ThemeBtn/>
          </div>
        </div>
        <div className='text-center mobile-wrapper pt-8 relative mb-16'>
          <div className='relative aspect-[.750] comp-width mt-[-75px] relative z-[-1]
            bg-[linear-gradient(to_bottom,_#00000000_70%,var(--background)_80%),url(/assets/asadullahpicw.webp)]
            dark:bg-[linear-gradient(to_bottom,_#00000000_70%,var(--background)_80%),url(/assets/asadullahpic.webp)]
            bg-contain bg-no-repeat'>
          </div>
          <h1 className='hero-heading mt-[-130px] comp-width'>
            <span className='bg-clip-1'>Full</span>|
            <span className='bg-clip-1'>Stack </span>
            <span className='bg-clip-1 tracking-[1.48px]'>Developer</span>
          </h1>
          <a role='button' href='/asadullah/cv' className='text-v2 border-[1px] border-accent5 rounded-lg p-3 comp-width block mt-4'>
            VIEW CV
          </a>
          <div className='flex justify-between items-center comp-width mt-4 '>
            <a href='https://www.facebook.com/joinasadullah/' target='_blank'>   <FbLogo />  </a>
            <a href='https://twitter.com/JoinAsadullah/' target='_blank'>     <TwitterLogo />     </a>
            <a href='https://www.linkedin.com/in/JoinAsadullah/' target='_blank'> <LinkedinLogo /> </a>
            <a href='https://github.com/JoinAsadullah/' target='_blank'>     <GithubLogo />      </a>
          </div>
          <h2 className='comp-width mt-4 text-v1 text-left'>
            I&#39;m Muhammad Asadullah Full Stack Developer with design, development, and marketing expertise. Let&#39;s create exceptional websites and applications together.
          </h2>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center'>
            SKILLS
          </h3>
          <div className='flex justify-between flex-wrap pic-invert comp-width'>
            <img src='/assets/skill(1).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(2).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(3).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(4).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(5).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(6).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(7).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(8).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(9).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(10).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(11).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(12).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(13).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(14).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(15).webp' alt='skill logo' className='h-[30px] m-3'/>
          </div>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center title-space'>
            EXPERIENCE
          </h3>
          <div className='rounded-md bg-accent1 rounded-xl p-4 text-center comp-width'>
            <div className='w-[206px] mx-[auto] my-6 mb-8 relative'>
              <div className=' absolute top-0 w-full h-full p-5 flex items-center'><h2 className='text-v2 w-full'>5 years experience.</h2></div>
              <Badge />
            </div>
            <h4 className='p-3 my-4 text-v1 bg-accent2 rounded-md'>
              2+ Years web development Experience
            </h4>
            <h4 className='p-3 my-4 text-v1 bg-accent2 rounded-md'>
              3+ Years of Design Experience
            </h4>
            <h4 className='p-3 mt-4 text-v1 bg-accent2 rounded-md'>
              5 Years of Experience in the field
            </h4>
          </div>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center title-space'>
            WHAT I&#39;VE DONE SO FAR
          </h3>
          <div className='comp-width'>
            <img src='/assets/fa.webp' alt='focus academy website screenshot' className='w-full top-bdr border-[10px] border-accent1'/>
            <div className=' bottom-bdr bg-accent1 py-2'>
              <p className='w-full mx-[auto] text-v1 text-center'>
                Designed and developed Focus Academy Website
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/focusacademy' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://joinasadullah.github.io/focusacademy/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className='comp-width mt-4'>
            <img src='/assets/bk.webp' alt='focus academy website screenshot' className='w-full top-bdr border-[6px] border-accent1'/>
            <div className=' bottom-bdr bg-accent1 py-2'>
              <p className='w-full mx-[auto] text-v1 text-center'>
                Re developed the Front end of entire Bika Construction website
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/bika' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://joinasadullah.github.io/bika/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center title-space'>
            SERVICES
          </h3>
          <div className='text-center comp-width pic-invert'>
            <img src='/assets/webpg.webp' alt='webpage icon' className='w-1/2 mx-auto mt-2'/>
            <p className='text-v1 w-4/5 mx-auto mt-2'>
             Integrated web application and information system development.
            </p>
          </div>
          <div className='text-center mt-6 comp-width pic-invert'>
            <img src='/assets/mrk.webp' alt='webpage icon' className='w-1/2 mx-auto mt-2'/>
            <p className='text-v1 w-4/5 mx-auto mt-2'>
              Email Marketing, SEO, Socail Media Marketing
            </p>
          </div>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center title-space'>
            CONTACT US
          </h3>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}