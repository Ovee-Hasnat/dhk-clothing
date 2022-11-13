import React from "react";
import Body from "./Body/body";
import Header from "./Header/header";


const Main = () => {
    return (
        <div>
            <Header />
            <div className="container">
            <Body />
            </div>
        </div>
    )
}

export default Main;