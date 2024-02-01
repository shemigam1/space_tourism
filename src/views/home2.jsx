// import MainNav from "../components/mainNav"
import { NavLink } from "react-router-dom"

const Demo = () => {
    return (
        <div className="bg-black h-screen w-screen justify-center items-center pt-5">

            <div className="flex justify-between w-screen max-h-1/6 items-center">
                <div className="pl-10">
                    <img src="../../src/assets/shared/logo.svg" alt="" />
                </div>
                <nav className="flex w-1/2 h-full justify-evenly text-white items-center pr-16 backdrop-blur-2xl border border-transparent">
                    <NavLink to="/" className="h-full flex justify-center items-center gap-3 focus:border-b-white"><span>00</span> Home</NavLink>
                    <NavLink to="/destination" className="h-full flex justify-center items-center gap-3"><span>01</span> Destination</NavLink>
                    <NavLink to="/crew" className="h-full flex justify-center items-center gap-3"><span>02</span> Crew</NavLink>
                    <NavLink to="/technology" className="h-full flex justify-center items-center gap-3"><span>03</span> Technology</NavLink>
                </nav>
            </div>
            <div className="flex items-center justify-around h-5/6">
                <div className="flex flex-col w-[450px] gap-3 h-full justify-center">
                    <p className="text-[#D0D6F9] text-lg tracking-widest">SO, YOU WANT TO TRAVEL TO</p>
                    <p className="text-white text-[150px] leading-none">SPACE</p>
                    <p className="text-[#D0D6F9] text-base leading-8">
                        Lets face it; if you want to go to space,
                        you might as well genuinely go to outer
                        space and not hover kind of on the edge of it.
                        Well sit back, and relax because well give you
                        a truly out of this world experience!
                    </p>
                </div>
                <div className="w-64 h-64 border rounded-[256px] flex justify-center items-center bg-white">
                    <NavLink to="/destination" className=" text-4xl">EXPLORE</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Demo