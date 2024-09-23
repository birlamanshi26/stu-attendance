import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

function layout({children}){
    return(
        <div className="flex">
            <div className="md:w-64 w-full fixed hidden md:block"><SideNav/></div>
            <div className="md:ml-64 flex-1">
                <Header/>
            {children}
            </div>
        </div>
    )
}
export default layout