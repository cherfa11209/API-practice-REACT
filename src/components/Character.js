import react from 'react';

const Character = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.birth_year}</p>
            <p>{props.gender}</p>
            <p>{props.height}</p>
        </div>
    )
}

export default Character;