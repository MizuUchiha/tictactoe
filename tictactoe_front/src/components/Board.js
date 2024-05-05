import React, { useEffect, useState } from "react";
import axios from "axios";

export function Board({ boardState, setBoardState, gameId, gameStatus, setGameStatus }) {
    const initialState = boardState ? boardState.split('').map(char => char === '-' ? null : char) : Array(9).fill(null);
    const [squares, setSquares] = useState(initialState);

    const nextValue = React.useMemo(() => {
        const xCount = squares.filter(x => x === "X").length;
        const oCount = squares.filter(x => x === "O").length;
        return xCount > oCount ? "O" : "X";
    }, [squares]);

    useEffect(() => {
        const newInitialState = boardState ? boardState.split('').map(char => char === '-' ? null : char) : Array(9).fill(null);
        setSquares(newInitialState);
    }, [boardState]);


    const handleClick = async (i) => {
        if (squares[i] === null && boardState !== null) {
            const newSquares = [...squares];
            newSquares[i] = nextValue;
            setSquares(newSquares);
            const newState = newSquares.map(x => x === null ? '-' : x).join('');
            setBoardState(newState);

            try {
                const response = await axios.post(`/board/${gameId}`, { board: newState });
                console.log('Board updated:', response.data);
                if (response.data.status !== "ongoing") {
                    setGameStatus(`Game Over: ${response.data.status}`);
                }
            } catch (error) {
                console.error('Error updating board:', error);
            }
        }
    };

    const renderSquare = (i) => (
        <button
            disabled={boardState === null || gameStatus !== ""}
            className={`w-24 h-24 bg-white flex items-center justify-center text-xl font-semibold hover:bg-gray-200 border-gray-700
                        ${[0, 1, 2].includes(i) ? "border-b-2 " : ""}
                        ${[0, 3, 6].includes(i) ? "border-r-2 " : ""}
                        ${[2, 5, 8].includes(i) ? "border-l-2 " : ""}
                        ${[6, 7, 8].includes(i) ? "border-t-2 " : ""}`}
            onClick={() => handleClick(i)}
        >
            {squares[i]}
        </button>
    );

    return (
        <div className="p-4">
            <div className="grid grid-cols-3 gap-0 w-fit m-auto">
                {squares.map((_, idx) => renderSquare(idx))}
            </div>
            {gameStatus && <div className="text-center mt-4 text-lg font-semibold">{gameStatus}</div>}
        </div>
    );
}
