import background from "../images/fundBackground.avif";
import curlyLine from "../images/curlyLine.png";

function FundHeader(){
    return (
        <div className="w-full h-[500px] bg-cover relative" style={{backgroundImage: `url(${background})`}}>
            <div className="absolute h-20 w-40 top-10 left-10">
                <img src={curlyLine}></img>
            </div>
            <div className="py-24 px-32">
                <div className="flex flex-row justify-between content-around flex-wrap">
                    <div>
                        <h1 className="italic font-sans text-2xl text-amber-300 border">Business Idea</h1>
                        <h3 className="font-serif text-white text-4xl">Propose your business idea here!</h3>
                    </div>
                    <div className="pt-4 flex flex-col">
                        <a href="" className="rounded-full p-4 z-10 text-white border-white border-solid border-2 bg-transparent relative group hover:border-none hover:text-black overflow-hidden transition duration-[0.2s]">Propose Now
                        <span id="span" className="absolute rounded-full top-16 z-[-1] w-[25%] left-0 h-20 bg-yellow-300 group-hover:translate-y-[-70px] group-hover:w-24 delay-[0s]"></span>
                        <span className="absolute top-16 w-[25%] rounded-full z-[-1] left-8 h-20 bg-yellow-300 group-hover:translate-y-[-70px] group-hover:w-20 delay-[0.1s] "></span>
                        <span className="absolute top-16 w-[25%] rounded-full z-[-1] left-16 h-20 bg-yellow-300 group-hover:translate-y-[-70px] group-hover:w-20 delay-[0.2s]"></span>
                        <span className="absolute top-16 w-[26%] rounded-full z-[-1] left-[6.0rem] h-20 bg-yellow-300 group-hover:translate-y-[-70px] group-hover:w-20 delay-[0.3s] "></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FundHeader;