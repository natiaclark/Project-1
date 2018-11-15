/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// array of Quotes
var quotes= [
{
  quote:'If you don’t like something, change it.  If you can’t change it, change your attitude.',
  source: 'Maya Angelou',
  year:
  category:
},
{
  quote:'People die but legends live forever.'
  source: 'Tupac Shakur'
  year:

},
{
  quote: 'Don’t get mad at me for being the best of what I was created to be.',
  source:'Kevin Gates',
  year: '2016'

},
{
  quote:'There is only love; there is nothing else.',
  source:'Dena Botbyl',
  year:

},
{
  quote:'The best revenge is massive success.',
  source:'Frank Sinatra',

},

];






  //Create the `getRandomQuote` function to:
  function getRandomQuote(array) {

       return array[Math.floor(Math.random() * array.length)];

   }


// function printQuote:
function printQuote() {

      var randomQuote = getRandomQuote(quotes);

      var quoteProps = '';

      


      quoteProps = '<p class="quote">' + randomQuote.quote + '</p><p class="source">'

          + randomQuote.source + '<span class="citation">'

          + randomQuote.citation + '</span> <span class="year">'

          + randomQuote.year + '</span> <span class="category">'

          + randomQuote.category + '</span> </p>';



      

      document.getElementById('quote-box').innerHTML = quoteProps;

  }

//"show another Quote" click button

document.getElementById('loadQuote').addEventListener("click", printQuote);







// Remember to delete the comments that came with this file, and replace them with your own code comments.
