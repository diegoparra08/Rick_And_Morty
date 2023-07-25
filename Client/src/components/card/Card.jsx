import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav } from '../../Redux/actions';
import { removeFav } from '../../Redux/actions';


import { SingleCard, Image, CharacterName, Info, CloseButton, FavButtonInCard } from './card.style';


function Card(props) {
   const navigate = useNavigate();
   const { id, name, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props;

   const [isFav, setIsFav] = useState(false);
   const [closeBtn, setCloseBtn] = useState(true);

   useEffect(() => {
      if (!onClose) {
         setCloseBtn(false);
      }
   }, [])


   //esta funcion esta creando la opcion de navegar hacia el detalle de cada personaje al hacer 
   //click en el nombre o la foto
   function navigateHandler() {
      navigate(`/detail/${id}`)
   }

   function handleFavorite() {

      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, species, gender, origin, image });
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <SingleCard>
         {
            isFav ? (
               <FavButtonInCard onClick={() => handleFavorite(id)}>❤️</FavButtonInCard>
            ) : (
               <FavButtonInCard onClick={() => handleFavorite()}>🤍</FavButtonInCard>
            )
         }
         <Info>Origin: {origin}</Info>
         <Info>Species: {species}</Info>
         <Info>Gender: {gender}</Info>
         {/* la funcion navigateHandler se pasa como onClic al nombre y la imagen */}
         <CharacterName onClick={navigateHandler}>{name}</CharacterName>
         <Image src={image} alt='Imagen del personaje' onClick={navigateHandler} />
        {
         closeBtn && (
            <CloseButton onClick={() => onClose(id)}>X</CloseButton>
         )
        }
         

      </SingleCard>
   );

}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),

      removeFav: (id) => dispatch(removeFav(id)),
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)
//Para usar el Link en vez del Navigate:

//import { Link } from 'react-router-dom'
{/* <Link to={`detail/${id}`}>
<CharacterName>{name}</CharacterName>
</Link> */}

