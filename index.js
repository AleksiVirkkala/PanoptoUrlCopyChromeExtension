(() => {
  const videoElement = document.querySelector("video#secondaryVideo");
  const currentTime = videoElement.currentTime;
  const parsedURL = getUrlWithoutStartParameter(document.URL);
  const timestampUrl = `${parsedURL}&start=${currentTime}`;
  console.log(timestampUrl);
  navigator.clipboard.writeText(timestampUrl);
})();

function getUrlWithoutStartParameter(url) {
  const startPos = url.indexOf("&");
  if (startPos === -1) {
    return url;
  }
  const parsedURL = url.substr(0, startPos);
  return parsedURL;
}
