const speed = 40;

function typeText(elementId, text, callback) {
  let i = 0;
  const el = document.getElementById(elementId);

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", () => {
  // first: name
  typeText("title", "isabelle dahlström", () => {
    // then: code line
    typeText("typing", "work in progress:3", () => {
      typeText("galleryTitle", "gallery")
    });
  });
});