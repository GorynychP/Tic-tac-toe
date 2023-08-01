import { Component } from 'react';
import { connect } from 'react-redux';

class InfoPanelContainer extends Component {
	render() {
		const playerBackgroundColor = this.props.player.includes('winner')
			? 'green'
			: '#a02222';
		return (
			<>
				<div className="player" style={{ background: playerBackgroundColor }}>
					Player: {this.props.player}
				</div>
				<div className="score-container">
					<div className="player-score">
						Player X: {this.props.scoreX}; Player O: {this.props.scoreO}
					</div>
					<button
						className="btn-reset"
						onClick={() =>
							this.props.resetScore(
								this.props.setCells,
								this.props.dispatch,
							)
						}
					>
						Reset
					</button>
				</div>
			</>
		);
	}
}
const mapStateToProps = (state) => ({
	player: state.player,
	scoreX: state.scoreX,
	scoreO: state.scoreO,
});
export const InfoPanel = connect(mapStateToProps)(InfoPanelContainer);
