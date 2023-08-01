import { Component } from 'react';
import './App.css';
import { InfoPanel, MyField, WelcomeMessage } from './components';
import { squares } from './constants';
import { resetScore, clearField } from './handlers';
import { connect } from 'react-redux';

class GameContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { cells: Array(9).fill(''), showWelcomeMessage: true };
	}
	setShowWelcomeMessage = (bullion) => {
		this.setState({ showWelcomeMessage: bullion });
	};
	setCells = (updatedCells) => {
		this.setState({ cells: updatedCells });
	};

	render() {
		return (
			<div className="App">
				{this.state.showWelcomeMessage ? (
					<WelcomeMessage setShowWelcomeMessage={this.setShowWelcomeMessage} />
				) : (
					<>
						<div className="container">
							<InfoPanel resetScore={resetScore} setCells={this.setCells} />
							<div className="square-container">
								{squares.map((s) => (
									<MyField
										key={s.id}
										num={s.id}
										cells={this.state.cells}
										setCells={this.setCells}
									/>
								))}
							</div>
							<button
								onClick={() =>
									clearField(this.setCells, this.props.dispatch)
								}
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
}

const Game = connect()(GameContainer);
export default Game;
