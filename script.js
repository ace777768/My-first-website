document.addEventListener("DOMContentLoaded", function () {
  const semesters = document.querySelectorAll(".semester h2");

  semesters.forEach(title => {
    title.addEventListener("click", function () {
      const content = this.nextElementSibling;

      content.classList.toggle("active");
      this.classList.toggle("open");
    });
  });
});
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

btn.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    btn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    btn.textContent = "🎵 Play Music";
  }
});
