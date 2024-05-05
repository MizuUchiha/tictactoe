import React from 'react';
import axios from 'axios';

export function RestartButton({ gameId, setBoardState, setGameStatus }) {
    const restartGame = async () => {
        try {
            const response = await axios.post(`/restart/${gameId}`);
            console.log('Game restarted:', response.data);
            setBoardState(response.data.board);
            setGameStatus("");
        } catch (error) {
            console.error('Error restarting the game:', error);
        }
    };

    return (
        <button
            onClick={restartGame} // Use the gameId retrieved from the URL
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full"
        >
            Restart Game
        </button>
    );
}