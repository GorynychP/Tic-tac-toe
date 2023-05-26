import { useState } from 'react';



export const WelcomeMessage = () => {
	const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
	setTimeout(() => {
		setShowWelcomeMessage(false);
	}, 4200);

	return (
		<>
			{showWelcomeMessage && (
				<div className="welcome__block">
					<h1 className="welcome__title">
						Welcome to the
						<span style={{ color: 'red' }}> Tic Tac Toe </span> game!
					</h1>
				</div>
			)}
		</>
	);
};
