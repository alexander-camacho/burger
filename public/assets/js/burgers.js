// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-eaten").on("click", function (event) {
        console.log($(this))
        var id = $(this).data("id");
        // var newEaten = $(this).data("")
    })
})