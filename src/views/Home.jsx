import MainNav from "../components/mainNav"
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col bg-[url('../../src/assets/home/background-home-desktop.jpg')] mix-blend-screen bg-no-repeat bg-cover md:h-screen h-full w-screen justify-center items-center overflow-x-hidden">
            <MainNav />
            <div className="flex flex-col md:flex-row items-center justify-around h-5/6 gap-10">
                <div className="flex flex-col w-3/4 md:w-1/3 gap-3 h-full justify-center">
                    <p className="text-[#D0D6F9] text-lg tracking-widest">SO, YOU WANT TO TRAVEL TO</p>
                    <p className="text-white text-[100px] md:text-[150px] leading-none">SPACE</p>
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

export default Home