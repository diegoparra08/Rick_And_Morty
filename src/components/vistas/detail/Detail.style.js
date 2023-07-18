import { styled } from "styled-components";
import containerImg from '../../../Images/rick_morty2.jpg'

export const DetailContainer = styled.div`
background-image: url(${containerImg});
background-size: 30%;
background-attachment: fixed;
margin-top: 0px;
display: flex;
flex-wrap: wrap;
align-items: stretch;
padding-bottom: 550px;
color: black;
`
export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
height: 50%;
width: 30%;
font-family: cursive;
background-color: whitesmoke;
opacity: 0.5;
border: 5px solid white;
border-radius: 10px;
margin: 90px 100px 20px 200px;
`
export const ImageContainer = styled.div`
margin: 90px 100px 20px 0px;
width: 300px;
`
export const ImageInside = styled.img`
border-radius: 10px;
height: 100%;
width: 100%;
`

