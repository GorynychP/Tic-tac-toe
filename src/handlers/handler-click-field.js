import { winer } from  './handler-winer'

export const handleClick = (
    cells, 
    num, 
    player,
    setPlayer,
    setCells,
    scoreX,
    scoreO,
    setScoreX,
    setScoreO
    ) => {
    let updatedCells = [...cells];
    if (cells[num] !== '') {
        return;
    }
    if (player === 'X winner' || player === 'O winner') {
        return;
    }
    if (player === 'X') {
        updatedCells[num] = { value: 'X', color: 'red' };
        setPlayer('O');
    } else {
        updatedCells[num] = { value: 'O', color: 'blue' };
        setPlayer('X');
    }
    setCells(updatedCells);
    winer(
        updatedCells, 
        player, 
        scoreX, 
        scoreO, 
        setPlayer, 
        setScoreX, 
        setScoreO 
        );
};