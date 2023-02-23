function loadItems() {
  const url = getCurrentURL();
  const movieId = /https:\/\/www\.imdb\.com\/title\/(tt[0-9]*)/gm;
  console.log(tab);
  console.log(url.match(movieId)[1]);
}

function getCurrentURL() {
  return window.location.href;
}

document.getElementById("papkorn").addEventListener("click", function (ev) {
  loadItems();
});
