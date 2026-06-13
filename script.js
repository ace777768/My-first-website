document.addEventListener("DOMContentLoaded", function () {

  // ── Accordion ──────────────────────────────────────────
  document.querySelectorAll(".sem-header").forEach(btn => {
    btn.addEventListener("click", function () {
      const targetId = this.dataset.target;
      const content  = document.getElementById(targetId);
      const chevron  = this.querySelector(".chevron");
      const isOpen   = content.classList.contains("active");

      // Close all
      document.querySelectorAll(".sem-content").forEach(c => c.classList.remove("active"));
      document.querySelectorAll(".chevron").forEach(c => c.classList.remove("rotated"));
      document.querySelectorAll(".sem-header").forEach(b => b.setAttribute("aria-expanded", "false"));

      // Open clicked if it was closed
      if (!isOpen) {
        content.classList.add("active");
        chevron.classList.add("rotated");
        this.setAttribute("aria-expanded", "true");
      }
    });
  });

  // ── Music Player ───────────────────────────────────────
  const music  = document.getElementById("bg-music");
  const btn    = document.getElementById("music-btn");
  const icon   = document.getElementById("music-icon");
  const label  = document.getElementById("music-label");
  const bar    = document.getElementById("musicBar");

  if (music && btn) {
    btn.addEventListener("click", function () {
      if (music.paused) {
        music.play().catch(() => {});
        icon.textContent  = "⏸";
        label.textContent = "Now Playing";
        bar.classList.add("playing");
      } else {
        music.pause();
        icon.textContent  = "▶";
        label.textContent = "Play BGM";
        bar.classList.remove("playing");
      }
    });
  }

});
