import React from 'react';
import { store } from '../store/store';

export const InfoPanel = ({
	scoreX,
	scoreO,
	resetScore,
	setScoreX,
	setScoreO,
	setCells,
	setPlayer,
}) => {
	const { player } = store.getState();
	const playerBackgroundColor = player.includes('winner') ? 'green' : '#a02222';
	return (
		<>
			<div className="player" style={{ background: playerBackgroundColor }}>
				Player: {player}
			</div>
			<div className="score-container">
				<div className="player-score">
					Player X: {scoreX}; Player O: {scoreO}
				</div>
				<button
					className="btn-reset"
					onClick={() => resetScore(setScoreX, setScoreO, setCells, setPlayer)}
				>
					Reset
				</button>
			</div>
		</>
	);
};
