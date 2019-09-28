// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).attr("data-id");
    console.log(id)

    var newDevouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax({
      url: "/api/burgers/" + id, 
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    var id = $(this).attr("data-id")
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if($("#burger").val().trim().length <= 0){
      alert("Oops..put your burger!");
      return;
    }
    var newBurger = {

      burger_name: $("#burger").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
