import react from 'react';

const Character = (props) => {
    return(
        <div className="card">
            <h2>Name: {props.name}</h2>
            <p>birth_year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
            <p>height: {props.height}</p>
        </div>
    )
}

export default Character;