import React from "react";
import styled from "styled-components"

// const color="blue";
const StyledButton = styled.button`
    background-color: red;
    color:#fff;
    margin-top:2rem;
    margin-left:.5rem;
    width:10rem;
    font-size:1.2rem;
    
    
    &:hover{
        background-color:blue;
        color:white;
    }

`

const Button = () =>{

        return(
            <div className="boton">
            <StyledButton onClick>Anterior</StyledButton>
            <StyledButton onClick>Siguiente</StyledButton>
            </div>
        )

}

export default Button