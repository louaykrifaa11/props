import React from 'react'
import players from "./players";
import Player from "./Player";


const PlayersList = () => {
  return (
    <div>
        {players.map(player=><Player players={player}/>)}
    </div>
  )
}

export default PlayersList