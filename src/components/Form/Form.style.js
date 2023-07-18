import { styled } from "styled-components";
import loginImg from '../../Images/login.jpg'


export const FormContainer = styled.div` 
width: 100%;
height: 100vh;
background: linear-gradient(to bottom, transparent 0%, green 50%, transparent 100%);
align-items: center;
align-content: center;
`

export const FormContent = styled.form`
display: flex;
flex-direction: column;
width: 300px;
height: 350px;
align-items: center;
border: 3px solid #32CD32;
margin-top: 90px;
margin-left: 470px;
background-image: url(${loginImg});
border-radius: 15px;
padding: 25px;
background-size: 100%;
opacity: 0.9;
`
export const Labels = styled.label`
color: white;
font-family: cursive;
`
export const InputsLogin = styled.input`
border-radius: 10px;
background-color: #32CD32;
margin-bottom: 30px;
`
export const SumbmitButton = styled.button`
height: 25px;
width: 55px;
color: black;
font-family: cursive;
margin-left: 5px;
outline: none;
border: none;
background-color: #32CD32;
margin-top: 28px;
border-radius: 10px;

-moz-osx-font-smoothing: grayscale;
backface-visibility: hidden;
transform: translateZ(0);
transition: transform 0.25 ease-out;

&:hover {
    transform: scale(1.05);
}
`
export const ErroresConsola = styled.p`
color: white;
`


