import { useState } from "react"
import data from '../../data.json'
import { MainNav } from "../components/MainNav"
import bg from '../assets/technology/background-technology-desktop.jpg'


const Technology = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        opcity: "100%",
        transition: "200ms",
    };
    const [focus, setFocus] = useState(0)
    // console.log(data.destinations);
    const destinations = data.technology
    let imgUrl = `../../src${destinations[focus].images.portrait}`
    return (
        <div className="flex flex-col mix-blend-screen bg-no-repeat bg-cover md:h-screen h-full w-screen justify-center items-center overflow-x-hidden"
            style={style}>
            <MainNav />
            <div className="flex flex-col md:flex-row items-center justify-around h-5/6">
                <div className="flex flex-col gap-10 w-1/2">
                    <div className="text-2xl text-white tracking-wider"><span className="opacity-25 font-bold">03</span> SPACE LAUNCH 101</div>
                    <div className="flex flex-col md:flex-row gap-9">



                        <div className="flex flex-col gap-3 h-full justify-center text-white md:order-2">
                            <p className="text-3xl opacity-50">THE TERMINOLOGY</p>
                            <p className="text-6xl">{destinations[focus].name}</p>
                            <p className="text-[#D0D6F9] leading-8 text-lg">
                                {destinations[focus].description}
                            </p>
                        </div>

                        <div className="flex md:flex-col gap-4 md:order-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" onClick={() => setFocus(0)} className="border border-white rounded-full hover:cursor-pointer">
                                <circle cx="40" cy="40" r="40" fill={focus === 0 ? 'white' : ""} />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" onClick={() => setFocus(1)} className="border border-white rounded-full hover:cursor-pointer">
                                <circle cx="40" cy="40" r="40" fill={focus === 1 ? 'white' : ""} />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" onClick={() => setFocus(2)} className="border border-white rounded-full hover:cursor-pointer">
                                <circle cx="40" cy="40" r="40" fill={focus === 2 ? 'white' : ""} />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-2/5">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Technology