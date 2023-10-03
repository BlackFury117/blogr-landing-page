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


