
export const clear = (setCells, setPlayer) => {
    setCells(Array(9).fill(''));
    setPlayer('X');
};