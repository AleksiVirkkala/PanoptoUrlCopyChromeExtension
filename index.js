(() => {
  const title = getLinkTitle();
  const timestampUrl = createTimestampURL();
  const mdLink = createMarkdownLink(title, timestampUrl);
  console.log(mdLink);
  navigator.clipboard.writeText(mdLink);
})();

function getUrlWithoutStartParameter(url) {
  const startPos = url.indexOf("&");
  if (startPos === -1) {
    return url;
  }
  const parsedURL = url.substr(0, startPos);
  return parsedURL;
}

function createTimestampURL() {
  const videoElement =
    document.querySelector("video#secondaryVideo") || // Dual player
    document.querySelector("video#primaryVideo"); // Single player
  const currentTime = videoElement.currentTime;
  const parsedURL = getUrlWithoutStartParameter(document.URL);
  const timestampUrl = `${parsedURL}&start=${currentTime}`;
  return timestampUrl;
}

function createMarkdownLink(title, url) {
  return `[${title}](${url})`;
}

function getSectionName() {
  const sectionElement = document.querySelector(
    ".index-event.highlighted .event-text span"
  );
  if (!sectionElement) {
    return null;
  }
  return sectionElement.textContent;
}

function getLinkTitle() {
  const tabTitle = document.title;
  const videoSectionName = getSectionName();

  if (!videoSectionName) {
    return tabTitle;
  }
  return `${tabTitle} > ${videoSectionName}`;
}
