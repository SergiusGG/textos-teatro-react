
import React from "react";
import './App.css';
import { Teatro } from "./Linia";
import Button from "./botones";
import styled from "styled-components";





const Titulo = styled.h1`
  text-align: center;
  font-weight:bolder;
  background-color:orange;
  padding:1rem;
  margin:0;



`

const Parr = styled.section`
    background-color:aquamarine;
    padding:2rem;
    align-items:center;
    margin-bottom:0;
  
    &:hover{
        background-color:whitesmoke;
        color:black;
    }
    `;
function App() {
  
return(
  <div>


 <Titulo>Romeo i Julieta</Titulo>
 <Parr>
    <Teatro/>
    
  <Button/>
  



</Parr>
</div>
);

  }



export default App;
