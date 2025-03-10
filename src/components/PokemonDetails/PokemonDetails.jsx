import { useParams } from "react-router";

const PokemonDetails = (props) => {
    // Always verify that any props are being passed correctly!
    // console.log(props);

    const { pokemonID } = useParams();
    // console.log(pokemonID);
    // console.log(props.pokemon);

    const thisPokemon = props.pokemon.find(p => p._id === Number(pokemonID));
    console.log(thisPokemon);

    return (
        <>
            <h2>{thisPokemon.name}</h2>
            <dl>
                <dt>Weight:</dt>
                <dd>{thisPokemon.weight}</dd>
                <dt>Height:</dt>
                <dd>{thisPokemon.height}</dd>
            </dl>
        </>
    );
};

export default PokemonDetails;