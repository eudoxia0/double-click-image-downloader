// Listen for messages from content script
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "download") {
    browser.downloads
      .download({
        url: message.url,
        filename: message.filename,
        saveAs: false,
      })
      .catch((error) => {
        console.error("Download failed:", error);
      });
  }
});
