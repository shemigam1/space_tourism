import { useState } from "react"
import data from '../../data.json'
import { MainNav } from "../components/MainNav"
import bg from '../assets/crew/background-crew-desktop.jpg'


const Crew = () => {
    const style = {
        backgroundImage: `url(${bg})`,
        opcity: "100%",
        transition: "200ms",
    };
    const [focus, setFocus] = useState(0)
    // console.log(data.destinations);
    const destinations = data.crew
    let imgUrl = `../../src${destinations[focus].images.png}`
    return (
        <div className="flex flex-col mix-blend-screen bg-no-repeat bg-cover md:h-screen h-full overflow-x-hidden w-screen justify-center items-center"
            style={style}>
            <MainNav />
            <div className="flex flex-col md:flex-row items-center justify-around h-5/6">
                <div className="flex flex-col gap-10 w-3/4 md:w-1/3 order-2 md:order:1">
                    <div className="text-2xl text-white tracking-wider"><span className="opacity-25 font-bold">02</span> MEET YOUR CREW</div>
                    <div className="flex flex-col gap-3 h-full justify-center text-white order-2 md:order:1">
                        <p className="text-3xl opacity-50">{destinations[focus].role}</p>
                        <p className="text-6xl">{destinations[focus].name}</p>
                        <p className="text-[#D0D6F9] leading-8 text-lg">
                            {destinations[focus].bio}
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="132" height="15" viewBox="0 0 132 15" fill="none">
                            <circle opacity={focus === 0 ? 1 : 0.174363} cx="7.5" cy="7.5" r="7.5" fill="white" onClick={() => setFocus(0)} />
                            <circle opacity={focus === 1 ? 1 : 0.174363} cx="46.5" cy="7.5" r="7.5" fill="white" onClick={() => setFocus(1)} />
                            <circle opacity={focus === 2 ? 1 : 0.174363} cx="85.5" cy="7.5" r="7.5" fill="white" onClick={() => setFocus(2)} />
                            <circle opacity={focus === 3 ? 1 : 0.174363} cx="124.5" cy="7.5" r="7.5" fill="white" onClick={() => setFocus(3)} />
                        </svg>
                    </div>
                </div>
                <div className="w-1/5 order-1 md:order-2">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Crew