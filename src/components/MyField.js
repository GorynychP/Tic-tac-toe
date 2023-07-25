import { handleClickField } from '../handlers';
export const MyField = ({ cells, num, setCells }) => {
	const cell = cells[num];
	return (
		<button
			onClick={() => handleClickField(cells, num, setCells)}
			style={{ color: cell.color }}
		>
			{cell.value}
		</button>
	);
};
