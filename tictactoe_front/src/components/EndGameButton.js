import React from 'react';
import axios from 'axios';

export function EndGameButton() {

    const endGame = async () => {
        try {
            const response = await axios.post('/start');
            console.log('Game started:', response.data);
        } catch (error) {
            console.error('Error starting the game:', error);
        }
    };

    return (
        <button
            onClick={endGame}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
        >
            End Game
        </button>

    );

}