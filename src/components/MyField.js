import { connect } from 'react-redux';
import { handleClickField } from '../handlers';
import { Component } from 'react';
class MyFieldContainer extends Component {
	onClickField = () => {
		handleClickField(this.props);
	};
	render() {
		const cell = this.props.cells[this.props.num];
		return (
			<button onClick={this.onClickField} style={{ color: cell.color }}>
				{cell.value}
			</button>
		);
	}
}
const mapStateToProps = (state) => ({ player: state.player });
export const MyField = connect(mapStateToProps)(MyFieldContainer);
