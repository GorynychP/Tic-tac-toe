export const WelcomeMessage = ({ setShowWelcomeMessage }) => {
	return (
		<>
			<div className="welcome__block">
				<h1 className="welcome__title">
					Welcome to the
					<span style={{ color: 'red' }}> Tic Tac Toe </span> game!
				</h1>
				<button
					className="start-game"
					onClick={() => setShowWelcomeMessage(false)}
				>
					Start game
				</button>
			</div>
		</>
	);
};
