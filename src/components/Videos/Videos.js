import React from 'react'
import VideoDetail from './VideoDetail'
import JSONdata from "../../data/data.json"
import "./Videos.css"

export default function Videos() {
    console.log(JSONdata)
    return (
        <div className="videos h-full w-100 text-center">
            <h1 className="pt-20 text-white text-7xl leading-1 tracking-wide">CHECK OUT MY VIDEOS</h1>

            <div className="sm:w-4/6 w-100 m-auto p-4">
                <div className="sm:flex sm:flex-wrap sm:w-100">
                    {JSONdata.map((item) => {
                        return (
                            <VideoDetail title={item.title} url={item.videoURL} description={item.description} />
                        )
                    })}
                </div>

            </div>
            {/* <div className="down-arrow w-100">
                <img className="m-auto text" src={downArrow} alt="down-arrow" />
            </div> */}

        </div>
    )
}
