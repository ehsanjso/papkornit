const checkActiveTabUrlMatch = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const movieId =
      /https:\/\/(?:.*\.|.*)imdb.com\/(?:t|T)itle(?:\?|\/)(..\d+)/i;
    var currentTab = tabs[0];
    if (
      currentTab &&
      currentTab.url.includes("imdb.com") &&
      currentTab.url.match(movieId) !== null
    ) {
      chrome.action.setBadgeText({
        text: "ON",
      });
      chrome.action.setIcon({ path: "icon.png" });
    } else {
      chrome.action.setBadgeText({
        text: "OFF",
      });
      chrome.action.setIcon({ path: "iconD.png" });
    }
  });
};
chrome.tabs.onUpdated.addListener(function (tabs) {
  checkActiveTabUrlMatch();
});

// fires when active tab changes
chrome.tabs.onActivated.addListener(function (tabs) {
  checkActiveTabUrlMatch();
});

chrome.action.onClicked.addListener(async (tab) => {
  const url = tab.url;
  const movieId = /https:\/\/(?:.*\.|.*)imdb.com\/(?:t|T)itle(?:\?|\/)(..\d+)/i;
  const imdbID = url.match(movieId)[1];

  chrome.tabs.create({
    url: `https://t.me/PapkornBot?start=imdb_${imdbID.substring(2)}`,
  });
});
