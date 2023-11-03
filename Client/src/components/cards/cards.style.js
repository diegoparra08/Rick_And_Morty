import styled from 'styled-components';
import picture from '../Images/rick_morty1.png';


export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin-top: 0px;
  background-image: url(${picture});
  background-attachment: fixed;
  background-size: 40%;
  opacity: 0.98;
  min-height: 100vh;
`
export const Banner = styled.h2`
margin: auto;
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
