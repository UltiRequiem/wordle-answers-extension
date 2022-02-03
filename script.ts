function typeAnswer(key: string) {
  dispatchEvent(new KeyboardEvent("keydown", { key }));
}

function main() {
  const state = JSON.parse(localStorage.getItem("gameState") || "{}");

  if (!state && !state.solution) return;

  window.answer = state.solution;

  Array.from(window.answer).forEach(typeAnswer);

  typeAnswer("Enter");
}

main();
