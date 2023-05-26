import { useState } from 'react';
import './App.css';
import { MyField, WelcomeMessage } from './components';
import { squares } from './constants';
import { resetScore, clearField } from './handlers';

function App() {
	const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
	const [player, setPlayer] = useState('X');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [scoreX, setScoreX] = useState(0);
	const [scoreO, setScoreO] = useState(0);

	setTimeout(() => {
		setShowWelcomeMessage(false);
	}, 4000);
	const playerBackgroundColor = player.includes('winner') ? 'green' : '#a02222';

	return (
		<div className="App">
			{showWelcomeMessage ? (
				<WelcomeMessage />
			) : (
				<div className="container">
					<div className="player" style={{ background: playerBackgroundColor }}>
						Player: {player}
					</div>
					<div className="score-container">
						<div className="player-score">
							Player X: {scoreX}; Player O: {scoreO}
						</div>
						<button
							className="btn-reset"
							onClick={() =>
								resetScore(setScoreX, setScoreO, setCells, setPlayer)
							}
						>
							Reset
						</button>
					</div>
					<div className="square-container">
						{squares.map((s) => (
							<MyField
								cells={cells}
								num={s.id}
								player={player}
								setPlayer={setPlayer}
								setCells={setCells}
								scoreX={scoreX}
								scoreO={scoreO}
								setScoreX={setScoreX}
								setScoreO={setScoreO}
								key={s.id}
							/>
						))}
					</div>
					<button
						onClick={() => clearField(setCells, setPlayer)}
						className="btn-clear"
					>
						Clear
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
