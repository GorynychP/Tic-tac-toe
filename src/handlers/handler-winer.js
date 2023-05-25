import { checkDraw, checkWin } from "../handlers";

export const winer = (
    square, 
    player, 
    scoreX, 
    scoreO, 
    setPlayer, 
    setScoreX, 
    setScoreO
    ) => {
    if (checkWin(square, player)) {
        if (player === 'X') {
            setPlayer('X winner');
            setScoreX(scoreX + 1);
        } else {
            setPlayer('O winner');
            setScoreO(scoreO + 1);
        }
    }
    if (checkDraw(square) && !checkWin(square, player)) {
        setPlayer('Draw game');
    }
};