function updateWidth() {
  const screenWidth = document.documentElement.clientWidth;
  document.documentElement.style.setProperty(
    "--screen-width",
    `${screenWidth}px`
  );
}

window.addEventListener("resize", updateWidth);
window.addEventListener("load", updateWidth);
