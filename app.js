/*



This app doesn't follow a11y best practices, and the JS file is incomplete.

Complete the getDataFromApi, displaySearchData, and watchSubmit functions.

When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics.

You should make requests to this API: https://lyricsovh.docs.apiary.io/# .

Also make any necessary adjustments to make this app accessible. */




function getDataFromApi(artist, title) {

    //full AJAX intro https://www.w3schools.com/xml/ajax_intro.asp

    // make the api call
    $.ajax({
            type: "GET",
            url: 'https: //api.lyrics.ovh/v1/' + artist + '/' + title,
            dataType: 'json',
        })

        // if api call is successful
        .done(function (dataOutput) {

            //displays the external api json object in the console
            console.log(dataOutput);
            displaySearchData(dataOutput);
        })

        // if api call is a failure
        .fail(function (jqXHR, error, errorThrown) {

            //display errors
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
};



function displaySearchData(data) {

    //validate results
    //if the are no results
    if (data.lyrics == "") {

        //show and alert
        alert("No results");
    }

    //if there are results
    else {

        //display them in the html page (use "<pre><code>" to auto format the lyrics)
        $('.js-search-results').html("<pre><code>" + data.lyrics + "</code></pre>");
    }
}



function watchSubmit() {

    //triger for the form submission
    $(".js-search-form").submit(function (event) {

        //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
        event.preventDefault();

        //get the artist value from the input box
        let artist = $(".js-query-artist").val();

        //validate artist
        if (artist == '') {
            alert("Please select an artist");
        }

        //get the title value from the input box
        let title = $(".js-query-title").val();

        //validate title
        if (title == '') {
            alert("Please select a title");
        }

        //use that artist and title values to call the getResults function defined at the top
        getDataFromApi(artist, title);
    });
}



$(watchSubmit);
