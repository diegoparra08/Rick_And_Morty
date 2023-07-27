import styled from 'styled-components'


export const SingleCard = styled.div`
width: 150px;
display: flex;
flex-direction: column-reverse;
border: 5px solid rgb(12, 206, 173); 
border-radius: 25px;
padding: 15px;
margin: 20px;
margin-top: 50px;
justify-content: center;


-moz-osx-font-smoothing: grayscale;
backface-visibility: hidden;
transform: translateZ(0);
transition: transform 0.25 ease-out;
background-image: linear-gradient(#32CD32, #FFD700, white);


&:hover {
    transform: scale(1.05);
}
`
export const CharacterName = styled.h2`
font-size: 100%;
/* font-style: italic; */
font-family: cursive;
text-decoration: underline;
text-decoration-style: dashed;

`
export const Info = styled.h3`
/* font-family:Georgia, serif; */
font-family: cursive;
font-size: 80%;
margin-top: 1px;

`
export const Image = styled.img`
height: 38%;
width: 80%;
border-radius: 10px;
border: 3px solid black; 
margin-left: 10%;
`
export const CloseButton = styled.button`
font-family:Georgia, serif;
font-style: italic;
width: 20%;
align-content: center;
margin-left: 40%;
border-radius: 10%;
background-color: rgb(12, 206, 173);
display: flex;
align-items: center;
align-content: center;
justify-content: center;
`
export const FavButtonInCard = styled.button`
margin-top: 0;
margin-left: 63px;
padding: 1px;
width: 25px;
align-items: center;
align-content: center;
justify-content: center;
border-radius: 30%;
border: 1px;
background-color:  rgb(12, 206, 173);
&:hover {
    transform: scale(1.05);
}
`
