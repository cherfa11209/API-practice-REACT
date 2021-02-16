import react from 'react';

const Character = (props) => {
    return(
        <div className='card'>
            <div className='visible-top'>
                <h2>Name: {props.name}</h2>
                <p>birth_year: {props.birth_year}</p>
                <p>Gender: {props.gender}</p>
                <p>height: {props.height}</p>
            </div>

            <div className={props.className}>
                <p>Eye color: {props.eye_color}</p>
                <p>Hair color: {props.hair_color}</p>
                <p>Skin color: {props.skin_color}</p>
                <p>Mass: {props.mass}</p>
            </div>
        </div>
    )
}

export default Character;