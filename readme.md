# Song Lyrics API solution

for the Lyrics API white-board challenge (https://repl.it/@thinkful/song-lyric-API-eval-question)

### Live preview: https://mariusbanea.github.io/thinkful-song-lyrics-api

# FAQs


## How to build an API app?

* Step 1 - watch for user input; tell shopkeeper what shoe size, color
* - Step 1a - create a trigger
* - Step 1b - get user input
* - Step 1c - input validation
* - Step 1d - use the api function


* Step 2 - define the function to make the api call; shopkeeper goes to warehouse to get shoe
* - Step 2a - make the api call using the URL, dataType (JSON or JSONP), type (GET or POST)
* - Step 2b - success scenario (call the function to display the results)
* - Step 2c - failure scenario (display errors)


* Step 3 - display the results; sales process
* - Step 3a - console.log the results
* - Step 3b - if there are no results show errors
* - Step 3c - if there are results, create an HTML results variable
* - Step 3d - if there is more than one result, use a for loop (or .each) to populate the empty HTML results variable
* - Step 3e - send the content of HTML results variable to the HTML ($("class or id name from the HTML").html(HTML results variable))

## What is AJAX?

AJAX basics https://www.w3schools.com/xml/ajax_intro.asp

## Where do I find the API documentation?

https://lyricsovh.docs.apiary.io/


## What is the API end point syntax?

https://api.lyrics.ovh/v1/' + artist + '/' + title

## Do I need an API key?

No.

## My page refreshes as soon as I click the button

Use event.preventDefault(); (mode details here https://www.w3schools.com/jquery/event_preventdefault.asp)

## How do I format the lyrics after I receive them from the API?

Use (< pre >< code > + data.lyrics + < /code >< /pre >) wihout spaces inside html tags
Mode details here https://www.w3schools.com/tags/tag_code.asp and here https://www.w3schools.com/tags/tag_pre.asp

## How do I make the website accessible?

Visit https://courses.thinkful.com/web-dev-002v1/project/1.2.2
