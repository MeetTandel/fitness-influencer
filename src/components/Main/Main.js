import React, {useState, useEffect} from 'react'
import Header from "../Header/Header"
import "./Main.css"
import trainer from "../../images/personal_trainer.svg"

export default function Main({search}) {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)  
        })
    }, []);
    return (
        <div className="main sm:h-screen h-full py-px">
            <Header scroll={scroll} search={search}/>
            <div className="main-content sm:flex sm:w-4/6 w-100 mt-28 m-auto">
                <div className="main-text sm:w-3/5 w-100 sm:mt-16 m-4">
                    <div className="sm:text-7xl text-5xl text-left text-white leading-1 tracking-wide">
                        <h1>LOSE FAT, GET FIT</h1>
                        <h1>HAVE FUN!</h1>
                    </div>
                    <button className="sm:mt-20 mt-10 text-2xl bg-blue-500 py-5 px-16 text-white hover:bg-blue-700 tracking-wide">GET STARTED</button>
                </div>
                <div className="photo sm:w-3/5 w-100 p-10 sm:mt-24 mt-12">
                    <img src={trainer} alt="trainer" />
                </div>
            </div>
        </div>
    )
}
