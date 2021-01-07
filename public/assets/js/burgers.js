// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-eaten").on("click", function (event) {
        var data = $(this)
        var id = $(this).data("id");
        // var newEaten = $(this).data("")
        console.log($(this))
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function () {
                console.log("ate it");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })

    $(".create-form").on("submit", function (event) {
        event.preventDefault()

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        }

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger")

                location.reload()
            }
        )
    })
})