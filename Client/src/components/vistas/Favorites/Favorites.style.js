import { styled } from "styled-components";


export const FavContainer = styled.div`

align-items: center;
margin-top: 0;
background-color: black;
`
export const MyFavTitle = styled.h2`
height: 10px;
color: white;
font-family: cursive;
`

export const SelectFilters = styled.select`
height: 25px;
width: 110px;
color: black;
font-family: cursive;
margin-left: 10px;
outline: none;
border: none;
background-color: #32CD32;
margin-top: 28px;
border-radius: 10px;
`
export const ResetFilterButton = styled.button`
height: 25px;
width: 110px;
color: black;
font-family: cursive;
margin-left: 10px;
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

@media (max-width: 768px) {
    margin: 5px;
  }
`

