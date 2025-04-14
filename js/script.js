document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalQuemSomos");
    const openBtn = document.getElementById("quemSomosBtn");
    const closeBtn = document.querySelector(".modal .close");
  
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("show");
      modal.classList.remove("hide");
    });
  
    closeBtn.addEventListener("click", function () {
      modal.classList.add("hide");
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("hide");
      }, 300);
    });
  
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeBtn.click();
      }
    });
  });
  