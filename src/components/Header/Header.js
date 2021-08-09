import React from 'react'
import { SocialIcon } from 'react-social-icons';

export default function Header({scroll}) {
    return (
        <div className={`header ${scroll ? "sticky" : "relative"} flex justify-around w-full border-b-2 border-gray-700 px-40 py-auto`}>
            <div className="logo bg-transparent mr-4">
                <img className=" w-20 h-20" src="https://i.pinimg.com/736x/0f/8a/78/0f8a7847f053d3b12aa7a5f4e63a285f.jpg" alt="logo" />
            </div>
            <div className="flex align-center justify-between ml-auto social-icons">
                <div className="self-center mx-5">
                    <SocialIcon url="https://www.twitter.com/" />
                </div>
                <div className="self-center mx-5">
                    <SocialIcon url="https://www.facebook.com/" />
                </div>
                <div className="self-center mx-5">
                    <SocialIcon url="https://www.instagram.com/" />
                </div>
            </div>
            <div></div>
        </div>
    )
}
