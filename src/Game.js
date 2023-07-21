import { useState } from 'react';
import './App.css';
import { InfoPanel, MyField, WelcomeMessage } from './components';
import { squares } from './constants';
import { resetScore, clearField } from './handlers';
function Game() {
	const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
	const [cells, setCells] = useState(Array(9).fill(''));
	return (
		<div className="App">
			{showWelcomeMessage ? (
				<WelcomeMessage setShowWelcomeMessage={setShowWelcomeMessage} />
			) : (
				<>
					<div className="container">
						<InfoPanel resetScore={resetScore} setCells={setCells} />
						<div className="square-container">
							{squares.map((s) => (
								<MyField
									key={s.id}
									num={s.id}
									cells={cells}
									setCells={setCells}
								/>
							))}
						</div>
						<button
							onClick={() => clearField(setCells)}
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
