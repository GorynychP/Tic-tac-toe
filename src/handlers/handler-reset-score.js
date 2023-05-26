import { clearField } from "./handler-clearField";

export const resetScore = (setScoreX, setScoreO, setCells, setPlayer) => {
    setScoreX(0);
    setScoreO(0);
    clearField(setCells, setPlayer)
};
