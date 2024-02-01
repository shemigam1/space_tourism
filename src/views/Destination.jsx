import MainNav from "../components/mainNav"
import data from '../../data.json'
import { useState } from "react"

const Destination = () => {
    const [focus, setFocus] = useState(0)
    // console.log(data.destinations);
    const destinations = data.destinations
    let imgUrl = `../../src${destinations[focus].images.png}`
    return (
        <div className="flex flex-col bg-[url('../../src/assets/destination/background-destination-desktop.jpg')] mix-blend-screen bg-no-repeat bg-cover md:h-screen h-full overflow-x-hidden w-screen justify-center items-center">
            <MainNav />
            <div className="flex flex-col md:flex-row items-center justify-around h-5/6">
                <div className="flex flex-col gap-3">
                    <div className="text-2xl text-white tracking-wider"><span className="opacity-25 font-bold">01</span> PICK YOUR DESTINATION</div>
                    <div className="">
                        <img src={imgUrl} alt="" />
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-1/3 gap-3 h-full justify-center text-white">
                    <div className="flex justify-center md:justify-start gap-8 tracking-tighter p-2">
                        <a onClick={() => setFocus(0)} className="hover:border-b-white hover:cursor-pointer">MOON</a>
                        <a onClick={() => setFocus(1)} className="hover:border-b-white hover:cursor-pointer">MARS</a>
                        <a onClick={() => setFocus(2)} className="hover:border-b-white hover:cursor-pointer">EUROPA</a>
                        <a onClick={() => setFocus(3)} className="hover:border-b-white hover:cursor-pointer">TITAN</a>
                    </div>
                    <p className=" text-8xl justify-center">{destinations[focus].name}</p>
                    <p className="text-[#D0D6F9] leading-8 text-lg">
                        {destinations[focus].description}
                    </p>
                    <div className="flex justify-around">
                        <div >
                            <p className="text-sm tracking-tighter">AVG. DISTANCE</p>
                            <p className="text-3xl">{destinations[focus].distance}</p>
                        </div>
                        <div className="">
                            <p className="text-sm tracking-tighter">EST. TRAVEL TIME</p>
                            <p className="text-3xl">{destinations[focus].travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination