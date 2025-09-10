const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("🚀 Thank you! James will get back to you soon.");
  contactForm.reset();
});

const reveals = document.querySelectorAll(".reveal");
function revealElements() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);
revealElements();

const body = document.body;
const emojis = ['💻','🎮','🎤','💃','🍔','🚀','✨','📸'];
for (let i = 0; i < 25; i++) {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji-fall');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.animationDuration = 5 + Math.random() * 10 + 's';
  emoji.style.fontSize = 20 + Math.random() * 20 + 'px';
  body.appendChild(emoji);
}
for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.width = 10 + Math.random() * 20 + 'px';
  bubble.style.height = bubble.style.width;
  bubble.style.animationDuration = 8 + Math.random() * 12 + 's';
  body.appendChild(bubble);
}
for (let i = 0; i < 30; i++) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.top = Math.random() * 100 + 'vh';
  sparkle.style.width = 2 + Math.random() * 3 + 'px';
  sparkle.style.height = sparkle.style.width;
  sparkle.style.animationDuration = 2 + Math.random() * 3 + 's';
  body.appendChild(sparkle);
}


const music = document.getElementById("bg-music");


  music.play().catch(() => {
    console.log("Autoplay blocked. Waiting for user interaction...");
  });

  
  document.addEventListener("click", () => {
    music.muted = false;
    music.play();
  }, { once: true });
