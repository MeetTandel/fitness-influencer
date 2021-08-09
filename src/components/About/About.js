import React from 'react'
import "./About.css"

export default function About() {
    return (
        <div className="h-screen flex m-auto bg-red">
            <div className="bg-black text-white sm:w-4/6 w-4/6 h-full">
                <div className="about-content sm:w-2/3 w-100 sm:m-auto m-3 sm:mt-28 mt-16">
                    <h1 className="sm:text-5xl text-4xl text-left text-white tracking-wide mb-4">HEY, THERE!</h1>
                    <h1 className="text-5xl text-left text-white tracking-wide mb-16">I'M ASUTOSH VERMA</h1>

                    <p className="leading-8">I'm a coder and a fitness enthusiast. I have helped a lot of people live and healthy lifestyle and I
                    will help you turn your life around and elevate your mindset. With adapted training and nutrition programs to suit your needs, you can access the lifestyle that you deserve.</p>
                    <button className="sm:mt-20 mt-16 sm:text-xl text-l bg-blue-900 py-5 px-16 text-white hover:bg-blue-500 tracking-wide">LEARN MORE</button>
                </div>
            </div>
            <div className="image-background sm:w-2/6 w-2/6">
            </div>
        </div>
    )
}
