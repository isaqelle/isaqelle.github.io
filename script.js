
const text = `work in progress:3`;

const speed = 40; // ms per character
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text[index];
    index++;
    setTimeout(type, speed);
  }
}

type();
