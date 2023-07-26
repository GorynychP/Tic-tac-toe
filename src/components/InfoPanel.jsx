import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const InfoPanel = ({ resetScore, setCells }) => {
	const player = useSelector((state) => state.player);
	const scoreX = useSelector((state) => state.scoreX);
	const scoreO = useSelector((state) => state.scoreO);
	const dispatch = useDispatch();
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
					onClick={() => resetScore(setCells, dispatch)}
				>
					Reset
				</button>
			</div>
		</>
	);
};
