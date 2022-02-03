function typeAnswer(key: string) {
	dispatchEvent(new KeyboardEvent('keydown', {key}));
}

interface WordleState {
	solution: string;
}

function isWordleState(state: any): state is WordleState {
	return 'solution' in state && typeof state.solution === 'string';
}

function main() {
	const state = JSON.parse(localStorage.getItem('gameState')!);

	if (!isWordleState(state)) {
		return;
	}

	window.answer = state.solution;

	for (const letter of window.answer) {
		typeAnswer(letter);
	}

	typeAnswer('Enter');
}

main();
