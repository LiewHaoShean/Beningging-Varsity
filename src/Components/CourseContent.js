import courseImg from "../images/course2.jpg";
import courseImg2 from "../images/course.jpeg";
import courseImg3 from "../images/course2.jpeg";
import courseImg4 from "../images/course3.jpeg";
import courseImg5 from "../images/course4.jpeg";
import courseImg6 from "../images/course5.jpeg"
import lecturer from "../images/yl.jpg";
import { MdStar } from "react-icons/md";

function CourseContent(){
    return (
        <div className="w-full bg-slate-50 h-fit flex justify-center content-center pb-6">
            <ul className="h-fit w-10/12 bg-slate-50 grid grid-rows-2 grid-cols-3 gap-4">
                <li className="border-2 border-none h-full bg-white outline-none shadow-2xl shadow-black-500/40 flex-column">
                    <div className="h-72">
                        <img src={courseImg} className="object-contain overflow-hidden h-full w-full"/>
                    </div>
                    <div className="flex">
                        <div className="h-20 w-full relative">
                            <img src={lecturer} className="object-fit overflow-hidden rounded-full h-20 w-20 absolute bottom-10 left-4 shadow-xl shadow-black-500/40"></img>
                            <h1 className="absolute top-1 right-2 font-semibold italic text-lg">Hor Yuan Li</h1>
                        </div>
                        <div className="w-full flex flex-full flex-col justify-between content-center flex-wrap">
                            <div className="flex justify-center">
                                <div className="flex pt-4 pb-4">
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                </div>
                                <p className="pt-3">5  (1)</p>
                            </div>
                            <div>
                                <div class="mr-14 text-center h-8 pt-1.5 rounded-md w-24 bg-red-600 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Finance</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 border-gray-300 ">
                        <div className="h-32 px-4 py-2 flex flex-wrap content-center justify-center">
                            <h1 className="text-center italic font-bold text-3xl">Become a Product Manager | Learn the Skills & Get the Job</h1>
                        </div>
                        <div className="h-24 p-4 flex flex-wrap content-center justify-center">
                            <h2 className="text-center italic font-bold text-medium ">The most complete course available on Product Management. 13+ hours of videos, activities...<a href="#" className="text-red-700 font-extrabold">Read More</a></h2>
                        </div> 
                    </div>
                    <div className="h-20 flex flex-wrap flex-row justify-between content-center text-center">
                        <button type="submit" className="ml-6 m-2 h-12 w-40 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enrol Now!</button>
                        <h1 className="h-14 mr-12 mt-3 italic text-3xl font-semibold text-red-700">RM 69</h1>
                    </div>
                </li>
                <li className="border-2 border-none h-full bg-white outline-none shadow-2xl shadow-black-500/40 flex-column">
                    <div className="h-72">
                        <img src={courseImg2} className="object-contain overflow-hidden h-full w-full"/>
                    </div>
                    <div className="flex">
                        <div className="h-20 w-full relative">
                            <img src={lecturer} className="object-fit overflow-hidden rounded-full h-20 w-20 absolute bottom-10 left-4 shadow-xl shadow-black-500/40"></img>
                            <h1 className="absolute top-1 right-2 font-semibold italic text-lg">Hor Yuan Li</h1>
                        </div>
                        <div className="w-full flex flex-full flex-col justify-between content-center flex-wrap">
                            <div className="flex justify-center">
                                <div className="flex pt-4 pb-4">
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                </div>
                                <p className="pt-3">5  (1)</p>
                            </div>
                            <div>
                                <div class="mr-14 text-center h-8 pt-1.5 rounded-md w-24 bg-red-600 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Finance</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 border-gray-300 ">
                        <h1 className="text-center px-4 py-2 italic font-bold text-3xl">Mastering Financial Investments: Strategies for Success</h1>
                        <h2 className="text-center p-4 italic font-bold text-medium ">Unlock the secrets of the financial world and become a savvy investor with our comprehensive course on financial investments...<a href="#" className="text-red-700 font-extrabold">Read More</a></h2>
                    </div>
                    <div className="h-20 flex flex-wrap flex-row justify-between content-center text-center">
                        <button type="submit" className="ml-6 m-2 h-12 w-40 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enrol Now!</button>
                        <h1 className="h-14 mr-12 mt-3 italic text-3xl font-semibold text-red-700">RM 109</h1>
                    </div>
                </li>
                <li className="border-2 border-none h-full bg-white outline-none shadow-2xl shadow-black-500/40 flex-column">
                    <div className="h-72">
                        <img src={courseImg3} className="object-contain overflow-hidden h-full w-full"/>
                    </div>
                    <div className="flex">
                        <div className="h-20 w-full relative">
                            <img src={lecturer} className="object-fit overflow-hidden rounded-full h-20 w-20 absolute bottom-10 left-4 shadow-xl shadow-black-500/40"></img>
                            <h1 className="absolute top-1 right-2 font-semibold italic text-lg">Hor Yuan Li</h1>
                        </div>
                        <div className="w-full flex flex-full flex-col justify-between content-center flex-wrap">
                            <div className="flex justify-center">
                                <div className="flex pt-4 pb-4">
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                </div>
                                <p className="pt-3">5  (1)</p>
                            </div>
                            <div>
                                <div class="mr-14 text-center h-8 pt-1.5 rounded-md w-24 bg-red-600 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Finance</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 border-gray-300 ">
                        <div className="h-32 px-4 py-2 flex flex-wrap content-center justify-center">
                            <h1 className="text-center italic font-bold text-3xl">Fundamentals of Investing</h1>
                        </div>
                        <div className="h-24 p-4 flex flex-wrap content-center justify-center">
                            <h2 className="text-center italic font-bold text-medium ">Learn the basics of financial investing, from stocks to bonds, and build a solid foundation for your financial future....<a href="#" className="text-red-700 font-extrabold">Read More</a></h2>
                        </div>
                    </div>
                    <div className="h-20 flex flex-wrap flex-row justify-between content-center text-center">
                        <button type="submit" className="ml-6 m-2 h-12 w-40 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enrol Now!</button>
                        <h1 className="h-14 mr-12 mt-3 italic text-3xl font-semibold text-red-700">RM 119</h1>
                    </div>
                </li>
                <li className="border-2 border-none h-full bg-white outline-none shadow-2xl shadow-black-500/40 flex-column">
                    <div className="h-72">
                        <img src={courseImg4} className="object-contain overflow-hidden h-full w-full"/>
                    </div>
                    <div className="flex">
                        <div className="h-20 w-full relative">
                            <img src={lecturer} className="object-fit overflow-hidden rounded-full h-20 w-20 absolute bottom-10 left-4 shadow-xl shadow-black-500/40"></img>
                            <h1 className="absolute top-1 right-2 font-semibold italic text-lg">Hor Yuan Li</h1>
                        </div>
                        <div className="w-full flex flex-full flex-col justify-between content-center flex-wrap">
                            <div className="flex justify-center">
                                <div className="flex pt-4 pb-4">
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                </div>
                                <p className="pt-3">5  (1)</p>
                            </div>
                            <div>
                                <div class="mr-14 text-center h-8 pt-1.5 rounded-md w-24 bg-red-600 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Finance</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 border-gray-300 ">
                        <div className="h-32 px-4 py-2 flex flex-wrap content-center justify-center">
                            <h1 className="text-center italic font-bold text-3xl">Smart Investing: Maximizing Returns, Minimizing Risks</h1>
                        </div>
                        <div className="h-24 p-4 flex flex-wrap content-center justify-center">
                            <h2 className="text-center italic font-bold text-medium ">Learn how to optimize your investment portfolio by balancing risk and reward, mastering diversification, and leveraging market opportunities effectively....<a href="#" className="text-red-700 font-extrabold">Read More</a></h2>
                        </div> 
                    </div>
                    <div className="h-20 flex flex-wrap flex-row justify-between content-center text-center">
                        <button type="submit" className="ml-6 m-2 h-12 w-40 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enrol Now!</button>
                        <h1 className="h-14 mr-12 mt-3 italic text-3xl font-semibold text-red-700">RM 129</h1>
                    </div>
                </li>
                <li className="border-2 border-none h-full bg-white outline-none shadow-2xl shadow-black-500/40 flex-column">
                    <div className="h-72">
                        <img src={courseImg5} className="object-contain overflow-hidden h-full w-full"/>
                    </div>
                    <div className="flex">
                        <div className="h-20 w-full relative">
                            <img src={lecturer} className="object-fit overflow-hidden rounded-full h-20 w-20 absolute bottom-10 left-4 shadow-xl shadow-black-500/40"></img>
                            <h1 className="absolute top-1 right-2 font-semibold italic text-lg">Hor Yuan Li</h1>
                        </div>
                        <div className="w-full flex flex-full flex-col justify-between content-center flex-wrap">
                            <div className="flex justify-center">
                                <div className="flex pt-4 pb-4">
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                </div>
                                <p className="pt-3">5  (1)</p>
                            </div>
                            <div>
                                <div class="mr-14 text-center h-8 pt-1.5 rounded-md w-24 bg-red-600 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Finance</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 border-gray-300 ">
                        <div className="h-32 px-4 py-2 flex flex-wrap content-center justify-center">
                            <h1 className="text-center italic font-bold text-3xl">Real Estate Investing Essentials</h1>
                        </div>
                        <div className="h-24 p-4 flex flex-wrap content-center justify-center">
                            <h2 className="text-center italic font-bold text-medium ">Explore the lucrative world of real estate investment, covering property valuation, rental income strategies, and wealth-building through real estate assets....<a href="#" className="text-red-700 font-extrabold">Read More</a></h2>
                        </div>
                    </div>
                    <div className="h-20 flex flex-wrap flex-row justify-between content-center text-center">
                        <button type="submit" className="ml-6 m-2 h-12 w-40 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enrol Now!</button>
                        <h1 className="h-14 mr-12 mt-3 italic text-3xl font-semibold text-red-700">RM 59</h1>
                    </div>
                </li>
                <li className="border-2 border-none h-full bg-white outline-none shadow-2xl shadow-black-500/40 flex-column">
                    <div className="h-72">
                        <img src={courseImg6} className="object-contain overflow-hidden h-full w-full"/>
                    </div>
                    <div className="flex">
                        <div className="w-full h-20 relative">
                            <img src={lecturer} className="object-fit overflow-hidden rounded-full h-20 w-20 absolute bottom-10 left-4 shadow-xl shadow-black-500/40"></img>
                            <h1 className="absolute top-1 right-2 font-semibold italic text-lg">Hor Yuan Li</h1>
                        </div>
                        <div className="w-full flex flex-full flex-col justify-between content-center flex-wrap">
                            <div className="flex justify-center">
                                <div className="flex pt-4 pb-4">
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                    <MdStar className="text-yellow-300"/>
                                </div>
                                <p className="pt-3">5  (1)</p>
                            </div>
                            <div>
                                <div class="mr-14 text-center h-8 pt-1.5 rounded-md w-24 bg-red-600 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Finance</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 border-gray-300 ">
                    <div className="h-32 px-4 py-2 flex flex-wrap content-center justify-center">
                            <h1 className="text-center italic font-bold text-3xl">Stock Market Mastery: Strategies for Profitable Trading</h1>
                        </div>
                        <div className="h-24 p-4 flex flex-wrap content-center justify-center">
                            <h2 className="text-center italic font-bold text-medium ">Gain a competitive edge in the stock market with proven trading techniques, technical analysis tools, and insights into market psychology for successful trading outcomes....<a href="#" className="text-red-700 font-extrabold">Read More</a></h2>
                        </div>
                    </div>
                    <div className="h-20 flex flex-wrap flex-row justify-between content-center text-center">
                        <button type="submit" className="ml-6 m-2 h-12 w-40 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enrol Now!</button>
                        <h1 className="h-14 mr-12 mt-3 italic text-3xl font-semibold text-red-700">RM 149</h1>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default CourseContent;