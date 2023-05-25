// import { winer } from  './handler-winer'

export const handleClick = (num, cells, player) => {
    let square = [...cells];
    if (cells[num] !== '') {
        return;
    }
    if (player === 'X winner' || player === 'O winner') {
        return;
    }
    if (player === 'X') {
        square[num] = { value: 'X', color: 'red' };
        // setPlayer('O');
    } else {
        square[num] = { value: 'O', color: 'blue' };
        // setPlayer('X');
    }
    // setCells(square);
    // winer(
    //     square, 
    //     player, 
    //     scoreX, 
    //     scoreO, 
    //     setPlayer, 
    //     setScoreX, 
    //     setScoreO 
    //     );
};