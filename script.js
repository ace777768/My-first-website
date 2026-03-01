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