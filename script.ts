function typeAnswer(key: string) {
	dispatchEvent(new KeyboardEvent('keydown', {key}));
}

type WordleState = {
	solution: string;
};

function isWordleState(state: unknown): state is WordleState {
	return (
		typeof state === 'object'
		&& state !== null
		&& 'solution' in state
		&& typeof state.solution === 'string'
	);
}

function main() {
	const state: unknown = JSON.parse(localStorage.getItem('gameState')!);

	if (!isWordleState(state)) {
		return;
	}

	// Exposed on purpose so the answer can be read from the console
	// eslint-disable-next-line unicorn/no-global-object-property-assignment
	globalThis.answer = state.solution;

	for (const letter of state.solution) {
		typeAnswer(letter);
	}

	typeAnswer('Enter');
}

main();
