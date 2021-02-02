import React from "react";
import "./App.css";
import data from "./data.json"
import styled from "styled-components"



const Esc = styled.p`
margin-left: 1em;;
  margin-top: .5em;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom:1.3rem;
    `;
export const Teatro=()=>{
    
        return(
<div >

{data.map((data)=> {

return(

<div >

<div >
    <Esc className="contenedor">{data}</Esc>
   
 </div>
 </div>
);
})}
</div>

        );
    };

    