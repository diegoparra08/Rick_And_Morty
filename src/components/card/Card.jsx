import { useNavigate } from 'react-router-dom';
import { SingleCard, Image, CharacterName, Info, CloseButton } from './card.style';


export default function Card(props) {
   const navigate = useNavigate();
   const { id,name, species, gender, origin, image, onClose } = props;

//esta funcion esta creando la opcion de navegar hacia el detalle de cada personaje al hacer 
//click en el nombre o la foto
   function navigateHandler(){
      navigate(`/detail/${id}`)
   }

   return (
      <SingleCard>
         <Info>Origin: {origin}</Info>
         <Info>Species: {species}</Info>
         <Info>Gender: {gender}</Info>
         {/* la funcion navigateHandler se pasa como onClic al nombre y la imagen */}
         <CharacterName onClick={navigateHandler}>{name}</CharacterName>
         <Image src={image} alt='Imagen del personaje' onClick={navigateHandler}/>
         <CloseButton onClick={() => onClose(id)}>X</CloseButton>
      </SingleCard>
   );

}

//Para usar el Link en vez del Navigate:

//import { Link } from 'react-router-dom'
{/* <Link to={`detail/${id}`}>
<CharacterName>{name}</CharacterName>
</Link> */}

