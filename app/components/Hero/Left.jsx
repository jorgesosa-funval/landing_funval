'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';

export default function Left() {
    return (

        <div className="h-1/2 w-full md:relative  md:w-1/2  md:h-full">


            <Swiper
                grabCursor={true}
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
                modules={[EffectCreative]}
                className="mySwiper2"
            >
                <SwiperSlide><img className='w-full h-full object-cover object-center' src="https://picsum.photos/900/900?random=1" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full object-cover object-center' src="https://picsum.photos/900/900?random=2" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full object-cover object-center' src="https://picsum.photos/900/900?random=3" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full object-cover object-center' src="https://picsum.photos/900/900?random=4" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full object-cover object-center' src="https://picsum.photos/900/900?random=5" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full object-cover object-center' src="https://picsum.photos/900/900?random=6" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full object-cover object-center' src="https://picsum.photos/900/900?random=7" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full object-cover object-center' src="https://picsum.photos/900/900?random=8" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-full object-cover object-center' src="https://picsum.photos/900/900?random=9" /></SwiperSlide>
            </Swiper>
        </div>
    )
}
