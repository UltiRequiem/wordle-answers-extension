chrome.browserAction.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.tabs.executeScript(tab.id, {
      file: "script.js",
    });
  }
});
