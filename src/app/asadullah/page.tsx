import Image from 'next/image'
import ContactForm from './components/contactus.tsx'
import MenuToggle from './components/MenuToggle.tsx'
import { DevxioLogo, FbLogo, TwitterLogo, LinkedinLogo, GithubLogo } from './svgs.tsx'


export default function Home() {
  return (
    <main className="text-foreground">
      <div className='min-w-[330px] mx-[auto]'>
        <div className='mobile-wrapper h-8 flex justify-between sticky z-20 top-0 glass border-b-[1px] border-[#00000017] dark:border-[#ffffff17] '>
          <div className='w-full flex justify-between items-center'>
            <DevxioLogo/>
            <MenuToggle/>
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
            I&#39;am Muhammad Asadullah Full Stack Developer with design, development, and marketing expertise. Let&#39;s create exceptional websites and applications together.
          </h2>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center'>
            SKILLS
          </h3>
          <div className='flex justify-between flex-wrap pic-invert'>
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
            <div className='w-4/5 aspect-square mx-[auto] my-8 relative'>
              <svg className='inline' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202">
                <path id="Polygon_1" data-name="Polygon 1" d="M122.982,3.792a5,5,0,0,1,7.584,2.032L139.926,27.6a5,5,0,0,0,5.18,2.991l23.535-2.781a5,
                5,0,0,1,5.552,5.552l-2.781,23.535a5,5,0,0,0,2.991,5.18l21.772,9.359a5,5,0,0,1,2.032,7.584L184.032,98.009a5,5,0,0,0,0,5.982l14.175,
                18.992a5,5,0,0,1-2.032,7.584L174.4,139.926a5,5,0,0,0-2.991,5.18l2.781,23.535a5,5,0,0,1-5.552,5.552l-23.535-2.781a5,5,0,0,0-5.18,
                2.991l-9.359,21.772a5,5,0,0,1-7.584,2.032l-18.992-14.175a5,5,0,0,0-5.982,0L79.018,198.208a5,5,0,0,1-7.584-2.032L62.074,174.4a5,
                5,0,0,0-5.18-2.991l-23.535,2.781a5,5,0,0,1-5.552-5.552l2.781-23.535a5,5,0,0,0-2.991-5.18L5.824,130.567a5,5,0,0,
                1-2.032-7.584l14.175-18.992a5,5,0,0,0,0-5.982L3.792,79.018a5,5,0,0,1,2.032-7.584L27.6,62.074a5,5,0,0,0,2.991-5.18L27.807,
                33.359a5,5,0,0,1,5.552-5.552l23.535,2.781a5,5,0,0,0,5.18-2.991L71.433,5.824a5,5,0,0,1,7.584-2.032L98.009,17.968a5,5,0,0,0,5.982,0Z" 
                fill="#ffffff" opacity="1" />
              </svg>
              <h4 className='absolute top-0 left-0 w-full h-full flex justify-center items-center text-cd0 px-[10vw] font-extrabold text-[5vw]'>
                2+ Years Since on GitHub
              </h4>
              </div>
              <h4 className='p-3 my-4 text-v1 bg-accent2 rounded-md'>
                2+ Years web development Experience
              </h4>
              <h4 className='p-3 my-4 text-v1 bg-accent2 rounded-md'>
                3+ Years of Design Experience
              </h4>
              <h4 className='p-3 my-4 text-v1 bg-accent2 rounded-md'>
                5 Years of Experience in the field
              </h4>
          </div>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center title-space'>
            WHAT I&#39;VE DONE SO FAR
          </h3>
          <div className='comp-width'>
            <img src='/assets/fa.webp' alt='focus academy website screenshot' className='w-full top-bdr'/>
            <div className=' bottom-bdr bg-cd1 py-2'>
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
            <img src='/assets/bk.webp' alt='focus academy website screenshot' className='w-full top-bdr'/>
            <div className=' bottom-bdr bg-cd1 py-2'>
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
          <div className='text-center comp-width'>
            <img src='/assets/webpg.webp' alt='webpage icon' className='w-1/2 mx-auto mt-2'/>
            <p className='text-v1 w-4/5 mx-auto mt-2'>
             Integrated web application and information system development.
            </p>
          </div>
          <div className='text-center mt-6 comp-width'>
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


{/* <div className='flex justify-center items-center'>
<a href='https://www.facebook.com/joinasadullah/' target='_blank'>               <Image src= '/assets/fb.webp' width={30} height={30} alt='facebook'/></a>
<a href='https://twitter.com/JoinAsadullah/' target='_blank'>               <Image src= '/assets/twt.webp' width={30} height={30} alt='twitter'/></a>
<a href='https://www.linkedin.com/in/JoinAsadullah/' target='_blank'>               <Image src= '/assets/in.webp' width={30} height={30} alt='linkedin'/></a>
<a href='https://github.com/JoinAsadullah/' target='_blank'>               <Image src= '/assets/github.webp' width={30} height={30} alt='github'/></a>
</div> */}