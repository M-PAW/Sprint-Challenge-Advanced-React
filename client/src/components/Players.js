import React from 'react';

const Players = props => {

    const player = props;

    return (
        <div className="playerCard">
            <br />
            <h2>Player: {player.name}</h2>
            <h4>Country: {player.country}</h4>
            <p>Searches: {player.searches}</p>
            <br />
        </div>
    )

}

export default Players;