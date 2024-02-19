'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Graduates() {
  const courses = [
    {
      background: "https://picsum.photos/900/900?random=50",
      title: ""
    },
    {
      background: "https://picsum.photos/900/900?random=52",
      title: ""
    },
    {
      background: "https://picsum.photos/900/900?random=53",
      title: ""
    },
    {
      background: "https://picsum.photos/900/900?random=54",
      title: ""
    },
    {
      background: "https://picsum.photos/900/900?random=55",
      title: ""
    },
    {
      background: "https://picsum.photos/900/900?random=56",
      title: ""
    },
    {
      background: "https://picsum.photos/900/900?random=57",
      title: ""
    },
    {
      background: "https://picsum.photos/900/900?random=58",
      title: ""
    },
    {
      background: "https://picsum.photos/900/900?random=59",
      title: ""
    },
  ]
  return (
    <section className=" flex flex-col items-center p-10 gap-6 w-full md:justify-around px-[10%]">
      <h2 className='font-bold text-3xl font-source_s_4'>Nuestros Egresados</h2>
      <Swiper
        grabCursor={true}
        pagination={true}
        shortSwipes={false}
        autoplay={{ delay: 8000 }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-102%', 0, 0],

          },
          next: {
            shadow: true,
            translate: ['102%', 0, 0],
          },
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
        className="mySwiper2"
      >

        {courses.map((course, i) =>

          <SwiperSlide key={(i + 1)}>

            <div className='w-full h-full flex flex-col md:flex-row items-center justify-center py-2 md:py-10 gap-5 md:gap-0 text-black shadow-inner'>
              <div className='md:w-1/2 flex justify-center'>
                <figure className='flex  md:w-80 h-96  bg-slate-300 rounded-md overflow-hidden '>
                  <img className='w-full h-full object-cover object-center' src={course.background} />
                </figure>
              </div>

              <div className='md:w-1/2 flex justify-center'>
                <div className='md:w-4/5 h-full flex flex-col'>
                  <h2 className=' text-2xl font-source_s_4'>Carlos Alvarado</h2>
                  <h4 className='text-lg font-normal px-2 italic pb-5 font-source_s_4'>Web development full stack</h4>
                  <p className='font-normal text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex eligendi culpa quibusdam, dolorum ad numquam molestiae rerum nulla veritatis atque, necessitatibus quis. Porro, nesciunt! Id, nemo sapiente. Architecto, voluptates!

                  </p>

                  <figure className='w-12 h-12 rounded-md overflow-hidden self-end mr-5'>

                    {/* <a href=""> */}
                    <img className='w-full h-full object-cover object-center' src={course.background} />
                    {/* </a> */}

                  </figure>

                </div>
              </div>

            </div>

          </SwiperSlide>


        )}




      </Swiper>

    </section>
  )
}
