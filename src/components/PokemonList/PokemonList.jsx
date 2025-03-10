import { NavLink } from "react-router";

const PokemonList = (props) => {
    return (
        <>
            <h2>All Pokemon</h2>
            <ul>
                {props.pokemon.map((currentPokemon) => (
                    <li key={currentPokemon.name}>
                        <NavLink
                            to={`/pokemon/${currentPokemon._id}`}
                        >
                            {currentPokemon.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default PokemonList;