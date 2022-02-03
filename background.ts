chrome.browserAction.onClicked.addListener(tab => {
	if (tab.id) {
		void chrome.tabs.executeScript(tab.id, {
			file: 'script.js',
		});
	}
});
