import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoDetail({title, url, description}) {
    return (
        <div className="sm:w-2/4 w-100 sm:p-5 p-3 text-white">
        {/* card container */}
          <div className="border-2 border-gray-600 rounded">
                    {/* card */}
                    <div className="m-5 w-100 rounded-lg hover:border-blue-200 hover:drop-shadow-xl shadow mb-1">
                    <ReactPlayer width="100%" height="300px" controls url={url} />
                    </div>
                    <div className="title mt-3 text-blue-600 text-3xl">{title}</div>
                    <div className="description text-blue-200 text-xl my-2 mx-5">{description}</div>
                </div>
            
        </div>
    )
}
