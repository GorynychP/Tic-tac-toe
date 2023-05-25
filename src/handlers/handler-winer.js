import { checkDraw, checkWin } from "../handlers";

export const winer = (
    updatedCells, 
    player, 
    scoreX, 
    scoreO, 
    setPlayer, 
    setScoreX, 
    setScoreO
    ) => {
    if (checkWin(updatedCells, player)) {
        if (player === 'X') {
            setPlayer('X winner');
            setScoreX(scoreX + 1);
        } else {
            setPlayer('O winner');
            setScoreO(scoreO + 1);
        }
    }
    if (checkDraw(updatedCells) && !checkWin(updatedCells, player)) {
        setPlayer('Draw game');
    }
};