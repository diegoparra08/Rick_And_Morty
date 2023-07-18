import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav } from '../../Redux/actions';
import { removeFav } from '../../Redux/actions';
import { useState, useEffect } from 'react';

import { SingleCard, Image, CharacterName, Info, CloseButton } from './card.style';


function Card(props) {
   const navigate = useNavigate();
   const { id, name, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props;

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   //esta funcion esta creando la opcion de navegar hacia el detalle de cada personaje al hacer 
   //click en el nombre o la foto
   function navigateHandler() {
      navigate(`/detail/${id}`)
   }

   function handleFavorite() {
      // if (isFav) {
      //    removeFav(id);
      //    setIsFav(false);
      // } else {
      //    addFav(id);
      //    setIsFav(true);
      // }
      if (isFav) {
         removeFav({ id, name, species, gender, origin, image });
         setIsFav(false);
      } else {
         addFav({ id, name, species, gender, origin, image });
         setIsFav(true);
      }
   }

   return (
      <SingleCard>
         <Info>Origin: {origin}</Info>
         <Info>Species: {species}</Info>
         <Info>Gender: {gender}</Info>
         {/* la funcion navigateHandler se pasa como onClic al nombre y la imagen */}
         <CharacterName onClick={navigateHandler}>{name}</CharacterName>
         <Image src={image} alt='Imagen del personaje' onClick={navigateHandler} />
         <CloseButton onClick={() => onClose(id)}>X</CloseButton>
         {
   isFav ? (
      <button onClick={()=> handleFavorite(id)}>❤️</button>
   ) : (
      <button onClick={() => handleFavorite()}>🤍</button>
   )
}
      </SingleCard>
   );

}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav,
      removeFav,
      // addFav: (character) => dispatch(addFav(character)),

      // removeFav: (character) => dispatch(removeFav(character)),
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
//Para usar el Link en vez del Navigate:

//import { Link } from 'react-router-dom'
{/* <Link to={`detail/${id}`}>
<CharacterName>{name}</CharacterName>
</Link> */}

