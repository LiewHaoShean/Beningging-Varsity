import imagee from "../images/course2.jpeg"
import courseImg2 from "../images/course.jpeg";
import courseImg4 from "../images/course3.jpeg";
import courseImg5 from "../images/course4.jpeg";
import courseImg6 from "../images/course5.jpeg"
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

function FundContent(){
    return (
        <>
            <div className="bg-slate-50 h-[430px]">
                <div className="absolute top-80 h-full w-full">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-full">
                        <SwiperSlide>
                            <div className="flex flex-row justify-around w-full flex-wrap content-center px-12">
                                <div className="">
                                    <div className="h-60 rounded-t-2xl w-[25rem] bg-transparent">
                                        <img className="rounded-t-2xl h-full w-full bg-cover" src={imagee}></img>
                                    </div>
                                    <div className="bg-white h-60 w-[25rem] p-4 flex flex-col justify-center content-center">
                                        <h1 className="italic font-serif text-2xl font-semibold p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                                        <p className="p-2 font-serif text-slate-400 text-medium">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div>
                                        <div className="bg-slate-200 h-3">
                                            <div className="bg-yellow-300 h-full w-5/6"></div>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-800 h-28 rounded-b-2xl flex flex-row justify-around flex-wrap content-center">
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Goals</h1>
                                            <h2 className="text-white italic font-bold">$20000</h2>
                                        </div>
                                        <div className="h-12 w-12 rounded-full border-white border-2 border-solid"> 
                                            <h1 className="px-2 py-3 text-yellow-300 font-semibold">83%</h1>
                                        </div>
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Raised</h1>
                                            <h2 className="text-white italic font-bold">$18000</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="h-60 rounded-t-2xl w-[25rem] bg-transparent">
                                        <img className="rounded-t-2xl h-full w-full bg-cover" src={courseImg2}></img>
                                    </div>
                                    <div className="bg-white h-60 w-[25rem] p-4 flex flex-col justify-center content-center">
                                        <h1 className="italic font-serif text-2xl font-semibold p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                                        <p className="p-2 font-serif text-slate-400 text-medium">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div>
                                        <div className="bg-slate-200 h-3">
                                            <div className="bg-yellow-300 h-full w-[70%]"></div>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-800 h-28 rounded-b-2xl flex flex-row justify-around flex-wrap content-center">
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Goals</h1>
                                            <h2 className="text-white italic font-bold">$10000</h2>
                                        </div>
                                        <div className="h-12 w-12 rounded-full border-white border-2 border-solid"> 
                                            <h1 className="px-2 py-3 text-yellow-300 font-semibold">70%</h1>
                                        </div>
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Raised</h1>
                                            <h2 className="text-white italic font-bold">$7000</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="h-60 rounded-t-2xl w-[25rem] bg-transparent">
                                        <img className="rounded-t-2xl h-full w-full bg-cover" src={courseImg4}></img>
                                    </div>
                                    <div className="bg-white h-60 w-[25rem] p-4 flex flex-col justify-center content-center">
                                        <h1 className="italic font-serif text-2xl font-semibold p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                                        <p className="p-2 font-serif text-slate-400 text-medium">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div>
                                        <div className="bg-slate-200 h-3">
                                            <div className="bg-yellow-300 h-full w-[67%]"></div>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-800 h-28 rounded-b-2xl flex flex-row justify-around flex-wrap content-center">
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Goals</h1>
                                            <h2 className="text-white italic font-bold">$30000</h2>
                                        </div>
                                        <div className="h-12 w-12 rounded-full border-white border-2 border-solid"> 
                                            <h1 className="px-2 py-3 text-yellow-300 font-semibold">67%</h1>
                                        </div>
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Raised</h1>
                                            <h2 className="text-white italic font-bold">$20000</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-row justify-around w-full flex-wrap content-center px-12">
                                <div className="">
                                    <div className="h-60 rounded-t-2xl w-[25rem] bg-transparent">
                                        <img className="rounded-t-2xl h-full w-full bg-cover" src={courseImg5}></img>
                                    </div>
                                    <div className="bg-white h-60 w-[25rem] p-4 flex flex-col justify-center content-center">
                                        <h1 className="italic font-serif text-2xl font-semibold p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                                        <p className="p-2 font-serif text-slate-400 text-medium">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div>
                                        <div className="bg-slate-200 h-3">
                                            <div className="bg-yellow-300 h-full w-[13%]"></div>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-800 h-28 rounded-b-2xl flex flex-row justify-around flex-wrap content-center">
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Goals</h1>
                                            <h2 className="text-white italic font-bold">$15000</h2>
                                        </div>
                                        <div className="h-12 w-12 rounded-full border-white border-2 border-solid"> 
                                            <h1 className="px-2 py-3 text-yellow-300 font-semibold">13%</h1>
                                        </div>
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Raised</h1>
                                            <h2 className="text-white italic font-bold">$2000</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="h-60 rounded-t-2xl w-[25rem] bg-transparent">
                                        <img className="rounded-t-2xl h-full w-full bg-cover" src={courseImg6}></img>
                                    </div>
                                    <div className="bg-white h-60 w-[25rem] p-4 flex flex-col justify-center content-center">
                                        <h1 className="italic font-serif text-2xl font-semibold p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                                        <p className="p-2 font-serif text-slate-400 text-medium">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div>
                                        <div className="bg-slate-200 h-3">
                                            <div className="bg-yellow-300 h-full w-[0%]"></div>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-800 h-28 rounded-b-2xl flex flex-row justify-around flex-wrap content-center">
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Goals</h1>
                                            <h2 className="text-white italic font-bold">$7000</h2>
                                        </div>
                                        <div className="h-12 w-12 rounded-full border-white border-2 border-solid"> 
                                            <h1 className="px-2 py-3 text-yellow-300 font-semibold">0%</h1>
                                        </div>
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Raised</h1>
                                            <h2 className="text-white italic font-bold">$0</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="h-60 rounded-t-2xl w-[25rem] bg-transparent">
                                        <img className="rounded-t-2xl h-full w-full bg-cover" src={imagee}></img>
                                    </div>
                                    <div className="bg-white h-60 w-[25rem] p-4 flex flex-col justify-center content-center">
                                        <h1 className="italic font-serif text-2xl font-semibold p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                                        <p className="p-2 font-serif text-slate-400 text-medium">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div>
                                        <div className="bg-slate-200 h-3">
                                            <div className="bg-yellow-300 h-full w-[20%]"></div>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-800 h-28 rounded-b-2xl flex flex-row justify-around flex-wrap content-center">
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Goals</h1>
                                            <h2 className="text-white italic font-bold">$25000</h2>
                                        </div>
                                        <div className="h-12 w-12 rounded-full border-white border-2 border-solid"> 
                                            <h1 className="px-2 py-3 text-yellow-300 font-semibold">20%</h1>
                                        </div>
                                        <div className="h-12 w-12"> 
                                            <h1 className="text-white">Raised</h1>
                                            <h2 className="text-white italic font-bold">5000</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
};

export default FundContent;