import { useDispatch, useSelector } from 'react-redux';
import { handleClickField } from '../handlers';
export const MyField = ({ cells, num, setCells }) => {
	const player = useSelector((state) => state.player);
	const dispatch = useDispatch();
	const onClickField = () => {
		handleClickField(cells, num, setCells, player, dispatch);
	};
	const cell = cells[num];
	return (
		<button onClick={onClickField} style={{ color: cell.color }}>
			{cell.value}
		</button>
	);
};
