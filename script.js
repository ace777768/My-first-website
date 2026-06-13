document.addEventListener("DOMContentLoaded", function () {

  // ── Accordion ──────────────────────────────────────────
  document.querySelectorAll(".sem-header").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = this.dataset.target;
      var content  = document.getElementById(targetId);
      var chevron  = this.querySelector(".chevron");
      var isOpen   = content.classList.contains("active");

      // Close all
      document.querySelectorAll(".sem-content").forEach(function (c) {
        c.classList.remove("active");
      });
      document.querySelectorAll(".chevron").forEach(function (c) {
        c.classList.remove("rotated");
      });
      document.querySelectorAll(".sem-header").forEach(function (b) {
        b.setAttribute("aria-expanded", "false");
      });

      // Open clicked if it was closed
      if (!isOpen) {
        content.classList.add("active");
        chevron.classList.add("rotated");
        this.setAttribute("aria-expanded", "true");
      }
    });
  });

  // ── Music Player ───────────────────────────────────────
  var music = document.getElementById("bg-music");
  var btn   = document.getElementById("music-btn");
  var icon  = document.getElementById("music-icon");
  var label = document.getElementById("music-label");
  var bar   = document.getElementById("musicBar");

  if (music && btn) {
    btn.addEventListener("click", function () {
      if (music.paused) {
        music.play().catch(function () {});
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
