import React from 'react';
import axios from 'axios';

export function RestartButton() {
    const restartGame = async () => {
        try {
            const response = await axios.post('/start');
            console.log('Game started:', response.data);
        } catch (error) {
            console.error('Error starting the game:', error);
        }
    };

    return (
    <button 
        onClick={restartGame} 
        className="bg-yellow-500 hover:bg-yellow-700 font-bold py-2 px-4 rounded w-full"
    >
        Restart Game
    </button>
    
    );
}