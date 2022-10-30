let selected = null;

$(".rate-button").on("click", (evt) => {
    if(selected) $(selected).toggleClass("selected");
    $(evt.target).addClass("selected");
    selected = evt.target;
    $("#result").text("You selected " + $(evt.target).text() + " out of 5")
})

$("#submit").on("click", (evt) => {
    $(".rating-container").toggleClass("hide");
})