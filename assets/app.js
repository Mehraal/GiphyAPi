$("button").on("click", function () {
    var sport = $(this).attr("data-sport");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sport + "&api_key=dc6zaTOxFJmzC&limit=10";
// $("#find-sport").on("click", function (event) {
//     event.preventDefault();
//   var sport = $("#sport-input").val();


    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class='item'>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var sportImage = $("<img>");
                sportImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(sportImage);

                $("#gifs-appear-here").prepend(gifDiv);
            }
            $("#add-sport").on("click", function (event) {
                event.preventDefault();

                var movie = $("#sport-input").val().trim();

                sport.push(sport);

                renderButtons();
            });


            $(document).on("click", ".sport-btn", displaysportInfo);


            renderButtons();
        });
});