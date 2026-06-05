// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    margin: 20, // 여백을 줄여 이미지가 더 크게 보이도록 설정
    scrollOffset: 0, // 스크롤 시 오프셋 제거
  });
});
