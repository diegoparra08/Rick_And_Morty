import Card from '../card/Card';
import {CardsContainer} from './cards.style'

export default function Cards({ characters, onClose }) {
   

   return (
      <CardsContainer>
         {characters.map((character) => (
            <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
            />
         ))}
      </CardsContainer>
   );
}



