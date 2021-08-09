import React, {useState, useEffect} from 'react'
import Header from "../Header/Header"
import "./Main.css"
import trainer from "../../images/personal_trainer.svg"

export default function Main() {
    const [scroll, setScroll] = useState(false);
    console.log(scroll)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)  
        })
    }, []);
    return (
        <div className="main">
            <Header scroll={scroll} />
            <div className="main-content flex w-4/6 mt-28 m-auto">
                <div className="main-text w-3/5 mt-16">
                    <div className="text-7xl text-left text-white leading-1 tracking-wide">
                        <h1>LOSE FAT, GET FIT</h1>
                        <h1>HAVE FUN!</h1>
                    </div>
                    <button className="mt-20 text-2xl bg-blue-500 py-5 px-16 text-white hover:bg-blue-700 tracking-wide">GET STARTED</button>
                </div>
                <div className="photo w-3/5 p-10 mt-24">
                    <img src={trainer} alt="trainer" />
                </div>
            </div>
        </div>
    )
}
