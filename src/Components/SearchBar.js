import { FaSearch } from "react-icons/fa";

function SearchBar(){
    return (
        <div className="w-full bg-slate-50 h-36 flex justify-center content-center relative">
            <input className="h-16 m-auto w-10/12 pl-14 border-2 border-none bg-white outline-none shadow-lg shadow-black-500/40"></input>
            <FaSearch className="absolute top-14 mt-1 size-6 left-36" />
        </div>
    );
}

export default SearchBar;