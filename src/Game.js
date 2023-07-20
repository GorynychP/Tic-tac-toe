import { useState } from 'react';
import './App.css';
import { InfoPanel, MyField, WelcomeMessage } from './components';
import { squares } from './constants';
import { resetScore, clearField } from './handlers';
function Game() {
	const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
	// const [player, setPlayer] = useState('X');
	const [cells, setCells] = useState(Array(9).fill(''));
	// const [scoreX, setScoreX] = useState(0);
	// const [scoreO, setScoreO] = useState(0);
	return (
		<div className="App">
			{showWelcomeMessage ? (
				<WelcomeMessage setShowWelcomeMessage={setShowWelcomeMessage} />
			) : (
				<>
					<div className="container">
						<InfoPanel
							// player={player}
							// setPlayer={setPlayer}
							// scoreX={scoreX}
							// scoreO={scoreO}
							resetScore={resetScore}
							// setScoreX={setScoreX}
							// setScoreO={setScoreO}
							setCells={setCells}
						/>
						<div className="square-container">
							{squares.map((s) => (
								<MyField
									cells={cells}
									num={s.id}
									// player={player}
									// setPlayer={setPlayer}
									setCells={setCells}
									// scoreX={scoreX}
									// scoreO={scoreO}
									// setScoreX={setScoreX}
									// setScoreO={setScoreO}
									key={s.id}
								/>
							))}
						</div>
						<button
							onClick={() => clearField(setCells /*setPlayer*/)}
							className="btn-clear"
						>
							Clear
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default Game;
