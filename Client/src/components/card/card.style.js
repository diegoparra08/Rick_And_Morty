import styled from 'styled-components'


export const SingleCard = styled.div`
width: 200px;
height: 350px;
border: 1px solid #e5f1bb;
border-radius: 5px;
padding-bottom: 5px;
margin: 20px;
margin-top: 50px;
justify-content: start;


-moz-osx-font-smoothing: grayscale;
backface-visibility: hidden;
transform: translateZ(0);
transition: transform 0.25 ease-out;
background-image: linear-gradient(to bottom, #006400, #32CD32);


&:hover {
    transform: scale(1.05);
}
`
export const PicInfoDiv = styled.div`
display: flex;
flex-direction: column;
height: 95%;
` 

export const CharacterName = styled.h2`
font-size: 20px;
font-style: italic;
font-weight: bold !important;
color: #ddffaf;
`
export const Info = styled.h3`

font-family: cursive;
font-size: 80%;
margin-top: 1px;
color: #003a00;
`
export const InfoDiv = styled.div`
margin-bottom: 3px;
`

export const Image = styled.img`
height: 38%;
width: 100%;
border-radius: 2px;
border: none; 

`
export const CloseButton = styled.button`
                                   
padding-top: 2px;
width: 25px;
align-content: center;
margin-top: 0;
margin-left: 0;
border: 1px;
border-radius: 25%;
background-color: #dfeaa8;
display: inline-block;
align-items: center;
align-content: center;
justify-content: center;

&:hover {
    transform: scale(1.05);
}
`
export const FavButtonInCard = styled.button`
display: inline-block;
margin-top: 0;
margin-left: 0;
padding: 1px;
width: 25px;
align-items: center;
align-content: center;
justify-content: center;
border-radius: 25%;
border: 1px;
background-color: #dfeaa8;
&:hover {
    transform: scale(1.05);
}
`
export const ButtonsDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;

`

