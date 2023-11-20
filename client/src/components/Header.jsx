import {FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to={"/"}>
        <h1 className='font-bold text-2xl sm:text-2xl lg:text-3xl flex flex-wrap'>
            <span className='text-zinc-950'>Y</span>
            <span className='text-sky-600'>estates</span>
        </h1>
        </Link>
        <form className='bg-slate-50 p-2 rounded-md flex items-center'>
            <input type='text' placeholder='Search...'  className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className="text-slate-600"/>
        </form>
        <ul className="flex gap-4 items-center">
          <Link to={"/"} className="Hidden sm:inline hover:underline md:text-lg font-semibold "><li >Home</li></Link>
          <Link to={"/about"} className="Hidden sm:inline hover:underline md:text-lg font-semibold"><li >About</li></Link>
          <Link to={"/sigin"} className="Hidden sm:inline hover:underline md:text-lg font-semibold "><li >SignIn</li></Link>
        </ul>
    </div>
    </header>
  )
}
