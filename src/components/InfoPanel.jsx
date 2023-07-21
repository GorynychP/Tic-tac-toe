import React from 'react';
import { store } from '../store/store';

export const InfoPanel = ({ resetScore, setCells }) => {
	const { player, scoreX, scoreO } = store.getState();
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
