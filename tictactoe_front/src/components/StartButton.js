import React from 'react';
import axios from 'axios';

export function StartButton({ setGameId, setBoardState }) {
    const startGame = async () => {
        try {
            const response = await axios.post('/start');
            console.log('Game started:', response.data);
            window.history.pushState({ game: response.data.game_id }, '', `?game=${response.data.game_id}`);
            setGameId(response.data.game_id);
            setBoardState(response.data.board);
        } catch (error) {
            console.error('Error starting the game:', error);
        }
    };

    return (
        <button
            onClick={startGame}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
            Start Game
        </button>

    );
}
