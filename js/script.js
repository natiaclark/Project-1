//Treehouse Techdegree: FSJS project 1 - A Random Quote Generator

// array of Quotes
var quotes= [
{
  quote: "If you don/t like something change it.  If you can/t change it change your attitude.",
  source:"Maya Angelou",
  
},
{
  quote:"People die but legends live forever.",
  source: 'Tupac Shakur',
  

},
{
  quote: "Don/t get mad at me for being the best of what I was created to be.",
  source:'Kevin Gates',
  year: '2016'

},
{
  quote:"There is only love. there is nothing else.",
  source:'Dena Botbyl',
  

},
{
  quote:"The best revenge is massive success.",
  source:'Frank Sinatra',

},

];


 //Create the `getRandomQuote` 
  function getRandomQuote(array) {
    return array[Math.floor(Math.random() * array.length)];
 }

// function printQuote:
 function printQuote() {
  //Call `getRandomQuote` and assign to `getQuote`
  var getQuote = getRandomQuote(quotes);
    //Initialize variable to store our quote/property html expression
    var html = '';
    //Every quote will have quote + source properties.. add to html string.
    html += '<p class="quote">' + getQuote.quote + '</p>' + '<p class="source">' + getQuote.source;
    //Check if quote has citation property, if so add to html string.
    if (getQuote.hasOwnProperty('citation')) {
      html += '<span class="citation">' + getQuote.citation + '</span>';
    }
    //Check if quote has year property, if so add to html string
    if (getQuote.hasOwnProperty('year')) {
      html += '<span class="year">' + getQuote.year + '</span>';
    }
    //Check if quote has category property, if so add to html string
    if (getQuote.hasOwnProperty('category')) {
      html += getQuote.category;
    }
    //Close html 2nd <p> of html string to keep all secondary props on same line.
    html += '</p>';
    //Reference the html container for the qutoe and output the quote and corresponding properties!
    var outputQuote = document.getElementById('quote-box');
    outputQuote.innerHTML = html;
    return outputQuote;
}

  
//"show another Quote" click button

document.getElementById('loadQuote').addEventListener("click", printQuote); 
    







