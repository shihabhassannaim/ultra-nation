import React from 'react';

const Country = (props) => {
    const flagStyle = {height : '50px'};
    const countryStyle = {border:'1px solid red' , margin: '10px' , padding: '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h3>This is {props.country.name.common}</h3>
            <p>population: {props.country.population}</p>
            <img style={flagStyle} src={props.country.flags.svg} alt="" />
            <button onClick={() => handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;