import { useState } from 'react';
import './App.css';
import { MyField } from './components';
import {squares} from './constants'
import {
	clear,
	btnResetScore,
} from './handlers'

function App() {

	const [player, setPlayer] = useState('X');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [scoreX, setScoreX] = useState(0);
	const [scoreO, setScoreO] = useState(0);

	return (
		<div className="App">
			<div className="container">
				<div className="player">Player: {player}</div>

				<div className="score-container">
					<div className='plair-score'>
						Player X: {scoreX}; Player O: {scoreO}
					</div>
					<button className='btn-reset' onClick={() => btnResetScore(setScoreX, setScoreO)}>Reset</button>
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
						key={s.id} />
					))}
				</div>
				<button onClick={() => clear(setCells, setPlayer)} className="btn-clear">
					Clear
				</button>
			</div>
		</div>
	);
}

export default App;
