import {handleClick} from '../handlers'

export 	const MyField = ({ 
    cells, 
    num, 
    player,
    setPlayer,
    setCells,
    scoreX,
    scoreO,
    setScoreX,
    setScoreO }) => {
    const cell = cells[num];
    return (
        <button onClick={() => handleClick(
            cells,
            num, 
            player,
            setPlayer,
            setCells,
            scoreX,
            scoreO,
            setScoreX,
            setScoreO
            )} style={{ color: cell.color }}>
            {cell.value}
        </button>
    );
};

