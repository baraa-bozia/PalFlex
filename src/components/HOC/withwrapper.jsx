import React from "react";
export default function withwrapper(Component){
    return(props)=> (
        <div className="w-[1149px] max-w-[calc(100%-30px)] mx-auto">

        
      <Component {...props}/>
      </div>
    )
}