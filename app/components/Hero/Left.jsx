'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Left() {
    const courses = [
        {
            background: "https://picsum.photos/900/900?random=1",
            title: ""
        },
        {
            background: "https://picsum.photos/900/900?random=2",
            title: ""
        },
        {
            background: "https://picsum.photos/900/900?random=3",
            title: ""
        },
        {
            background: "https://picsum.photos/900/900?random=4",
            title: ""
        },
        {
            background: "https://picsum.photos/900/900?random=5",
            title: ""
        },
        {
            background: "https://picsum.photos/900/900?random=6",
            title: ""
        },
        {
            background: "https://picsum.photos/900/900?random=7",
            title: ""
        },
        {
            background: "https://picsum.photos/900/900?random=8",
            title: ""
        },
        {
            background: "https://picsum.photos/900/900?random=9",
            title: ""
        },
    ]
    return (

        <div className="h-1/2 w-full md:relative  md:w-1/2  md:h-full">


            <Swiper
                grabCursor={true}
                navigation={true}
                pagination={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-110%', 60, -3200],

                    },
                    next: {
                        shadow: true,
                        translate: ['110%', 0, -3200],
                    },
                }}
                modules={[EffectCreative, Navigation, Pagination]}
                className="mySwiper2"
            >
                {courses.map(course =>

                    <SwiperSlide>
                        <img className='w-full h-full object-cover object-center' src={course.background} />
                    </SwiperSlide>


                )}


            </Swiper>
        </div>
    )
}
