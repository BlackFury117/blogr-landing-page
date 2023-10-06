// Close the dropdown when clicking outside of it
$(document).on("click", function(event){
    if (!$(event.target).closest(".dropdown-link").length) {
      $(".dropdown-content").hide();
    }
  });
  
  // Prevent the dropdown from closing when clicking inside it
  $(".dropdown-link").on("click", function(event){
    event.stopPropagation();
  });


// MOBILE NAVIGATION //

document.addEventListener("DOMContentLoaded", function() {
  const hamburgerCheckbox = document.querySelector(".hamburger input");
  const navLinks = document.querySelector(".dropdown-links");

  hamburgerCheckbox.addEventListener("change", function() {
    if (this.checked) {
      navLinks.style.display = "inline-flex";
      document.body.style.overflow = "hidden";
      navLinks.classList.add("show");
    } else {
      navLinks.style.display = "none";
      document.body.style.overflow = "auto";
      navLinks.classList.remove("show");
    }
  });
});

// END MOBILE NAVIGATION