import React from 'react';
import { useSelector } from 'react-redux';

export const InfoPanel = ({ resetScore, setCells }) => {
	const player = useSelector((state) => state.player);
	const scoreX = useSelector((state) => state.scoreX);
	const scoreO = useSelector((state) => state.scoreO);
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
				<button className="btn-reset" onClick={() => resetScore(setCells)}>
					Reset
				</button>
			</div>
		</>
	);
};
