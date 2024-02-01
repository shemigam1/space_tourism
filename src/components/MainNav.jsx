import { NavLink } from "react-router-dom"

const MainNav = () => {

    const handleHamb = () => {
        console.log('hanmmm');
    }

    return (
        <div className="flex justify-between w-screen max-h-1/6 items-center pt-5">
            <div className="pl-10">
                <img src="../../src/assets/shared/logo.svg" alt="" />
            </div>
            <nav className="flex w-1/2 h-full justify-evenly text-white items-center pr-16 backdrop-blur-2xl border border-transparent hidden md:block">
                <NavLink to="/" className="h-full flex justify-center items-center gap-3 focus:border-b-white"><span>00</span> Home</NavLink>
                <NavLink to="/destination" className="h-full flex justify-center items-center gap-3"><span>01</span> Destination</NavLink>
                <NavLink to="/crew" className="h-full flex justify-center items-center gap-3"><span>02</span> Crew</NavLink>
                <NavLink to="/technology" className="h-full flex justify-center items-center gap-3"><span>03</span> Technology</NavLink>
            </nav>
            <nav onClick={handleHamb} className="pr-10 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
            </nav>
        </div>
    )
}

export default MainNav