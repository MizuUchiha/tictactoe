import React from "react";
export function Board({ setBoardState }) {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const nextValue = React.useMemo(() => {
        const xCount = squares.filter(x => x === "X").length;
        const oCount = squares.filter(x => x === "O").length;
        return xCount > oCount ? "O" : "X";
    }, [squares]);

    const handleClick = (i) => {
        if (squares[i] === null) {
            const newSquares = [...squares];
            newSquares[i] = nextValue;
            setSquares(newSquares);
        }
    };

    const renderSquare = (i) => (
        <button
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
        </div>
    );
}
