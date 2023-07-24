import React from "react";

function Pokecard(props) {
  let pokemonimg = `https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

  return (
    <div>
      <div>{props.name}</div>
      <img src={pokemonimg} />
      <div>Type: {props.type}</div>
      <div>EXP: {props.base_experience}</div>
    </div>
  );
}

export default Pokecard;

//pokecard: name, image, and type
