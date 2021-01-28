import React from "react";
import "./App.css";
import data from "./data.json"

export const Teatro=()=>{
    
        return(
<div >

{data.map((data)=> {

return(

<div >

<div >
    <div className="contenedor">{data}</div>
   
 </div>
 </div>
);
})}
</div>

        );
    };