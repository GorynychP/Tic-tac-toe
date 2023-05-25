import { useState } from 'react';
import './App.css';

function App() {
	const squares = [
		{ id: 0 },
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
		{ id: 6 },
		{ id: 7 },
		{ id: 8 },
	];
	const [player, setPlayer] = useState('X');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [scoreX, setScoreX] = useState(0);
	const [scoreO, setScoreO] = useState(0);

	const handleClick = (num) => {
		let square = [...cells];
		if (cells[num] !== '') {
			return;
		}
		if (player === 'X winner' || player === 'O winner') {
			return;
		}
		if (player === 'X') {
			square[num] = { value: 'X', color: 'red' };
			setPlayer('O');
		} else {
			square[num] = { value: 'O', color: 'blue' };
			setPlayer('X');
		}
		setCells(square);
		winer(square);
	};

	const winCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const checkWin = (arrCells, player) => {
		return winCombinations.some((check) => {
			return check.every((index) => arrCells[index].value === player);
		});
	};
	const checkDraw = (arrCells) => {
		return arrCells.every((cell) => cell !== '');
	};
	const winer = (arrCells) => {
		if (checkWin(arrCells, player)) {
			if (player === 'X') {
				setPlayer('X winner');
				setScoreX(scoreX + 1);
			} else {
				setPlayer('O winner');
				setScoreO(scoreO + 1);
			}
		}
		if (checkDraw(arrCells) && !checkWin(arrCells, player)) {
			setPlayer('Draw game');
		}
	};
	
	const btnResetScore = () => {
		setScoreX(0);
		setScoreO(0);
	};

	const Cell = ({ num }) => {
		const cell = cells[num];
		return (
			<button onClick={() => handleClick(num)} style={{ color: cell.color }}>
				{cell.value}
			</button>
		);
	};

	const clear = () => {
		setCells(Array(9).fill(''));
		setPlayer('X');
	};

	return (
		<div className="App">
			<div className="container">
				<div className="player">Player: {player}</div>

				<div className="score-container">
					<div className='plair-score'>
						Player X: {scoreX}; Player O: {scoreO}
					</div>
					<button className='btn-reset' onClick={btnResetScore}>Reset</button>
				</div>

				<div className="square-container">
					{squares.map((s) => (
						<Cell num={s.id} key={s.id} />
					))}
				</div>
				<button onClick={clear} className="btn-clear">
					Clear
				</button>
			</div>
		</div>
	);
}

export default App;
