import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DetailContainer, ImageContainer, ImageInside, InfoContainer } from "./Detail.style";

function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});


    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <DetailContainer>
            <InfoContainer>
                <h2>Name: {character.name}</h2>
                <h3>status: {character.status}</h3>
                <h3>species: {character.species}</h3>
                <h3>gender: {character.gender}</h3>
                <h3>origin: {character.origin?.name}</h3>
            </InfoContainer>
            <ImageContainer>
                <ImageInside src={character.image} alt={character.name} />
            </ImageContainer>
        </DetailContainer>
    )
}
export default Detail;
