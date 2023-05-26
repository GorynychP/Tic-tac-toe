import { winer } from  './handler-winer'
import clickX  from '../audio/click-XX.mp3';
import clickO  from '../audio/click-O.mp3';


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
    const audioX = new Audio(clickX);
    const audioO = new Audio(clickO);
    audioX.volume = 0.2; 
    audioO.volume = 0.3; 
    
    let updatedCells = [...cells];
    if (cells[num] !== '') {
        return;
    }
    if (player === 'X winner' || player === 'O winner') {
        return;
    }
    if (player === 'X') {
        updatedCells[num] = { value: 'X', color: 'red' };
        audioX.play();
        setPlayer('O');
    } else {
        updatedCells[num] = { value: 'O', color: 'blue' };
        audioO.play();
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