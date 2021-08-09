import React from 'react'
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { SocialIcon } from 'react-social-icons';
import data from "../../data/data.json"

export default function Header({ scroll }) {
    const handleOnSearch = (string, results) => {
        console.log(string, results);
      };
    
      const handleOnSelect = (item) => {
        console.log(item);
      };
    

    return (
        <div className={`header ${scroll ? "sticky" : "fixed"} flex justify-around sm:w-full w-full border-b-2 border-gray-700 sm:px-40 px-5`}>
            <div className="logo bg-transparent mr-4">
                <img className="w-20 h-20" src="https://i.pinimg.com/736x/0f/8a/78/0f8a7847f053d3b12aa7a5f4e63a285f.jpg" alt="logo" />
            </div>
            <div className="m-auto sm:ml-10 ml-1 sm:w-1/4 w-3/4 bg-transparent">
                <ReactSearchAutocomplete
                    items={data}
                    fuseOptions={{ keys: ["title", "description"] }} // Search on both fields
                    resultStringKeyName="title" // String to display in the results
                    styling={{ backgroundColor: "tranparent", color: "lightblue", }}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                />
            </div>
            <div className="sm:flex flex align-center justify-between sm:inline-block hidden ml-auto social-icons">
                <div className="self-center sm:mx-5 mx-2">
                    <SocialIcon url="https://www.twitter.com/" />
                </div>
                <div className="self-center sm:mx-5 mx-2">
                    <SocialIcon url="https://www.facebook.com/" />
                </div>
                <div className="self-center sm:mx-5 mx-2">
                    <SocialIcon url="https://www.instagram.com/" />
                </div>
            </div>
        </div>
    )
}
