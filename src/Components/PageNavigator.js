import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function PageNavigator() {
    return (
        <div className="h-20 bg-white pb-6">
            <ul className="h-full flex flex-row flex-wrap justify-center content-center">
                <li className="p-2 mt-1 text-3xl hover:text-red-500"><IoIosArrowBack /></li>
                <li className="p-2 text-3xl text-red-500">1</li>
                <li className="p-2 text-3xl hover:text-red-500">2</li>
                <li className="p-2 text-3xl hover:text-red-500">3</li>
                <li className="p-2 text-3xl hover:text-red-500">4</li>
                <li className="p-2 text-3xl hover:text-red-500">5</li>
                <li className="p-2 mt-1 text-3xl hover:text-red-500"><IoIosArrowForward/></li>
            </ul>
        </div>
    )
}

export default PageNavigator;