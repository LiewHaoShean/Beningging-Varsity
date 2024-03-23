import { useState } from "react";
import background from "../images/crowdFundingBck.webp";
import "../Styles/typingAnimation.css";
import { BiDollarCircle } from "react-icons/bi";

function FundCrowding() {
    const [value, setValue] = useState('');
    const handleClick = (value) => {
        setValue(value);
    }

    const handleInputChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <div className="bg-slate-50 h-20 relative">
                <div className="w-[50%] h-[42rem] bg-black absolute left-32 z-10 rounded-3xl">
                    <div className="flex flex-col pl-16">
                        <h3 className="text-white pt-9 text-lg">Give support to help them iniate their busineess idea now!</h3>
                        <h1 className="text-5xl font-semibold text-white py-1 animated-text">
                            <span className=""></span>
                        </h1>
                        <p className="text-yellow-300 py-2"><span className="text-white text-3xl">$88888 </span> of $100000 raised</p>
                        <div className="py-6 pr-16">
                            <div className="bg-slate-200 h-2 w-full rounded-xl">
                                <div className="bg-yellow-300 h-full w-5/6 rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                    <div className="px-16 flex flex-row ">
                        <div className="bg-yellow-300 w-20 flex flex-row justify-center flex-wrap content-center rounded-l-sm"><BiDollarCircle className="text-3xl"/></div>
                        <input className="p-2 w-full h-16 rounded-r-sm" id="amountInput" type="number" onChange={handleInputChange} value={value}></input>
                    </div>
                    <div className="px-16 flex flex-row flex-wrap content-center justify-between mt-6 h-16">
                        <a className="h-full border-solid border-white w-32 text-white text-3xl flex flex-wrap justify-center content-center hover:bg-yellow-300 hover:border-none hover:text-black delay-100" id="firstOption" onClick={() => handleClick('500')}>$500</a>
                        <a className="h-full border-solid border-white w-32 text-white text-3xl flex flex-wrap justify-center content-center hover:bg-yellow-300 hover:border-none hover:text-black delay-100" id="secondOption" onClick={() => handleClick('1000')}>$1000</a>
                        <a className="h-full border-solid border-white w-32 text-white text-3xl flex flex-wrap justify-center content-center hover:bg-yellow-300 hover:border-none hover:text-black delay-100" id="thirdOption" onClick={() => handleClick('1500')}>$1500</a>
                    </div>
                    <div className="px-16 py-6">
                        <div className="border-solid border-0 border-b-2 border-white">
                            <h1 className="text-white text-3xl">Personal Information</h1>
                        </div>
                        <div className="grid grid-rows-2 grid-cols-2 h-32 pt-4 gap-2">
                            <input className="w-full col-start-1 col-end-2 row-start-1 row-end-2 bg-white p-2 text-xl rounded-r-sm" placeholder="FirstName"></input>
                            <input className="w-full col-start-2 col-end-3 row-start-1 row-end-2 bg-white p-2 text-xl rounded-r-sm" placeholder="LastName"></input>
                            <input className="w-full col-start-1 col-end-3 row-start-2 row-end-3 bg-white p-2 text-xl rounded-r-sm" placeholder="EmailAddress"></input>
                        </div>
                    </div>
                    <div className="px-16 flex">
                        <a href="" className="rounded-full p-4 z-10 text-black bg-yellow-300 border-white border-solid border-2 bg-transparent relative group hover:border-none hover:text-white overflow-hidden transition duration-[0.2s]">Propose Now
                        <span id="span" className="absolute rounded-full top-16 z-[-1] w-[25%] left-0 h-20 bg-orange-400 group-hover:translate-y-[-70px] group-hover:w-24 delay-[0s]"></span>
                        <span className="absolute top-16 w-[25%] rounded-full z-[-1] left-8 h-20 bg-orange-400 group-hover:translate-y-[-70px] group-hover:w-20 delay-[0.1s] "></span>
                        <span className="absolute top-16 w-[25%] rounded-full z-[-1] left-16 h-20 bg-orange-400 group-hover:translate-y-[-70px] group-hover:w-20 delay-[0.2s]"></span>
                        <span className="absolute top-16 w-[26%] rounded-full z-[-1] left-[6.0rem] h-20 bg-orange-400 group-hover:translate-y-[-70px] group-hover:w-20 delay-[0.3s] "></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-[650px] relative z-0 bg-cover bg-center overflow-visible" style={{backgroundImage: `url(${background})`}}>
                <div className="h-20 w-96 pt-10 z-20 top-10 absolute right-52">
                        <div>
                            <h2 className="text-yellow-300 italic font-serif text-2xl py-2">Crowd Funding</h2>
                            <p className="text-white text-4xl font-mono text-extrabold">Raise capital for a project or venture now!</p>
                        </div>
                        <div>
                            <h3 className="text-white py-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default FundCrowding;