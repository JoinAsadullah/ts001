import Image from 'next/image'

export default function Home() {
  return (
    <main className="text-cw0">
      <div className=''>
        <div className='px-[var(--mobile-wrapper)] text-cw0 h-[60px] flex justify-between'>
          <div className='flex justify-center items-center'>
            <Image src= '/assets/logo.svg' width={98} height={25} alt='devxio logo'/>
          </div>
          <div className='flex justify-center items-center'>
            <div className='p-1'><Image src= '/assets/fb.png' width={30} height={30} alt='facebook'/></div>
            <div className='p-1'><Image src= '/assets/twt.png' width={30} height={30} alt='twitter'/></div>
            <div className='p-1'><Image src= '/assets/in.png' width={30} height={30} alt='linkedin'/></div>
            <div className='p-1'><Image src= '/assets/github.png' width={30} height={30} alt='github'/></div>
          </div>
        </div>
        <div className='px-[var(--mobile-wrapper)] pt-14 relative mb-16'>
          <h1 className='text-center [font-size:15vw] font-black tracking-tight leading-none'>
            <span>Muhammad </span>
            <span>Asadullah</span>
          </h1>
          <div className='w-[calc(100%-var(--mobile-wrapper)*2)] aspect-[0.611] himg absolute [z-index:-1]'>
          </div>
          <div className='text-center w-full mt-[280px]'>
            <a role='button' href='/asadullah/cv' className='font-semibold border-[1px] rounded-md p-1 px-10'>
              VIEW CV
            </a>
            <h1 className='pt-6 text-center [font-size:13vw] font-black tracking-tight leading-none'>
              <span className='tracking-wider'>Full Stack </span>
              <span className='tracking-wide'>Developer</span>
            </h1>
            <h2 className='pt-6 text-center text-base tracking-normal text-cw1 font-semibold tracking-tight leading-normal w-5/6 mx-[auto]'>
              Design, Development, and Marketing coverage in one skilled professional.
            </h2>
          </div>
        </div>
        <div className='px-[var(--mobile-wrapper)] mb-16'>
          <h3 className='text-center text-sm tracking-normal text-cw1 font-bold tracking-tight leading-normal'>
            SKILLS
          </h3>
          <div className='flex justify-between flex-wrap'>
            <img src='/assets/skill(1).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(2).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(3).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(4).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(5).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(6).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(7).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(8).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(9).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(10).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(11).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(12).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(13).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(14).png' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(15).png' alt='skill logo' className='h-[30px] m-3'/>
          </div>
        </div>
        <div className='px-[var(--mobile-wrapper)] mb-16'>
          <h3 className='text-center text-sm tracking-normal text-cw1 font-bold tracking-tight leading-normal mb-4'>
            EXPERIENCE
          </h3>
          <div className='rounded-md bg-cd1 p-4 text-center '>
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
              <h4 className='absolute top-0 left-0 w-full h-full flex justify-center items-center text-cd0 px-10 font-extrabold text-2xl'>
                2+ Years Since on GitHub
              </h4>
            </div>
            <h4 className='p-3 my-4 rounded-md bg-cd2'>
              2+ Years web development Experience
            </h4>
            <h4 className='p-3 my-4 rounded-md bg-cd2'>
              3+ Years of Design Experience
            </h4>
            <h4 className='p-3 my-4 rounded-md bg-cd2'>
              5 Years of Experience in the field
            </h4>
          </div>
        </div>
        <div className='px-[var(--mobile-wrapper)] mb-16'>
          <h3 className='text-center text-sm tracking-normal text-cw1 font-bold tracking-tight leading-normal mb-4'>
            WHAT I&#39;VE DONE SO FAR
          </h3>
          <div className=''>
            <img src='/assets/fa.jpg' alt='focus academy website screenshot' className='w-full top-bdr'/>
            <div className=' bottom-bdr bg-cd1 py-6'>
              <p className='w-2/3 mx-[auto] text-center '>
                Designed and developed Focus Academy Website
              </p>
              <div className='flex justify-center items-center'>
                <a href='https://github.com/JoinAsadullah/focusacademy' target='_blank'><img src='/assets/github.png' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://joinasadullah.github.io/focusacademy/' target='_blank'><img src='/assets/rd.png' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <img src='/assets/bk.jpg' alt='focus academy website screenshot' className='w-full top-bdr'/>
            <div className=' bottom-bdr bg-cd1 py-6'>
              <p className='w-2/3 mx-[auto] text-center '>
                Re developed the Front end of entire Bika Construction website
              </p>
              <div className='flex justify-center items-center'>
                <a href='https://github.com/JoinAsadullah/bika' target='_blank'><img src='/assets/github.png' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://joinasadullah.github.io/bika/' target='_blank'><img src='/assets/rd.png' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
        </div>
        <div className='px-[var(--mobile-wrapper)] mb-16'>
          <h3 className='text-center text-sm tracking-normal text-cw1 font-bold tracking-tight leading-normal mb-4'>
            SERVICES
          </h3>
          <div className='text-center'>
            <h2 className='w-3/4 mx-auto mt-2 font-bold'>
             website design and development
            </h2>
            <img src='/assets/webpg.png' alt='webpage icon' className='w-1/2 mx-auto mt-2'/>
            <p className='w-4/5 mx-auto mt-2'>
             Integrated web application and information system development.
            </p>
          </div>
          <div className='text-center mt-6'>
            <h2 className='w-2/4 mx-auto mt-2 font-bold'>
              Digital Marketing
            </h2>
            <img src='/assets/mrk.png' alt='webpage icon' className='w-1/2 mx-auto mt-2'/>
            <p className='w-4/5 mx-auto mt-2'>
              Email Marketing, SEO, Socail Media Marketing
            </p>
          </div>
        </div>
        <div className='px-[var(--mobile-wrapper)] mb-16'>
          <h3 className='text-center text-sm tracking-normal text-cw1 font-bold tracking-tight leading-normal mb-4'>
            CONTACT US
          </h3>
        </div>
      </div>
    </main>
  )
}
