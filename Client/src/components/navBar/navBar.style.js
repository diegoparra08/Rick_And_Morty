import styled from 'styled-components';


export const NavContainer = styled.div`
background-image: linear-gradient(to right, #006400, #32CD32);
height: 80px;
display: flex;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 10px;
  }

`
export const HomeButton = styled.button`
height: 25px;
width: 55px;
color: #32CD32;
font-family: cursive;
margin-left: 220px;
outline: none;
border: 1px solid #e5f1bb;
background-color: black;
margin-top: 28px;
border-radius: 5px;

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
export const AboutButton = styled.button`
height: 25px;
width: 55px;
color: #32CD32;
font-family: cursive;
margin-left: 5px;
outline: none;
border: 1px solid #e5f1bb;
background-color: black;
margin-top: 28px;
border-radius: 5px;

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
export const FavButton = styled.button`
height: 25px;
width: 73px;
color: #32CD32;
font-family: cursive;
margin-left: 5px;
outline: none;
border: 1px solid #e5f1bb;
background-color: black;
margin-top: 28px;
border-radius: 5px;

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
export const Logo = styled.img`
margin-right: 20px;
margin-left: 100px;
margin-top: 5px;
width: 70px;
height: 70px;;
border-radius: 18px;

@media (max-width: 768px) {
    margin: 5px;
  }
`
export const LogoWord = styled.img`
width: 150px;
height: 60px;
margin-right: 190px;
margin-left: 0px;
border-radius: 18px;
margin-top: 10px;

@media (max-width: 768px) {
    margin: 5px;
  }
`



