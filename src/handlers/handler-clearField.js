export const clearField = (setCells, setPlayer) => {
    setCells(Array(9).fill(''));
    setPlayer('X');
};