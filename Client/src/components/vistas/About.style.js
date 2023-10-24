import { styled } from "styled-components";
import aboutImg from '../Images/rick_morty1.png'


export const AboutContainer = styled.div`
background-image: url(${aboutImg});
background-size: 45%;
background-attachment: fixed;
margin-top: 0px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: stretch;
padding-bottom: 550px;
color: black;
align-items: center;
`

export const AutorName = styled.h2`
display: flex;
flex-direction: column;
height: 50%;
width: 30%;
font-family: cursive;
background-color: #ebffd0;
opacity: 0.8;
border: 5px solid white;
border-radius: 3px;
margin-top: 50px;

`

export const TextAbout = styled.p`
display: flex;
flex-direction: column;
height: 90%;
width: 30%;
font-family: cursive;
background-color: #ebffd0;
opacity: 0.8;
border: 5px solid white;
border-radius: 3px;
`