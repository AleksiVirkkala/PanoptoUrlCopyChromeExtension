const COPY_URL_COMMAND = "Copy URL";
const COPY_COMMAND_FILE = "index.js";

console.log(`Panopto extension`);

chrome.commands.onCommand.addListener((command) => {
  if (command !== COPY_URL_COMMAND) {
    return;
  }
  console.log(`Command: ${command}`);
  copyPanoptoURL();
});

async function copyPanoptoURL() {
  const currentTabId = await getCurrentTabId();
  execFileOnTab(currentTabId, COPY_COMMAND_FILE);
}

async function getCurrentTabId() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.id;
}

async function execFileOnTab(tabId, fileName) {
  chrome.scripting.executeScript(
    {
      target: { tabId },
      files: [fileName],
    },
    () => {}
  );
}
