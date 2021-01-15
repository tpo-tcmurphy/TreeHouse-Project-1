/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*** 
 * `quotes` array This is where the program will pull quotes and other values to display on the web page. 
***/
const quotes = [
  { quote: "Your time is limited, so don't waste it living someone else's life.", 
   source: "Steve Jobs",
   category: "#business"},
  { quote: "Don't let the fear of losing be greater than the excitement of winning.", 
   source: "Robert Kiyosaki",
   category: "#business"},
  { quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
   source: "Dale Carnegie",
   category: "#business"}, 
  { quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
   source: "-Forrest Gump",
   year: 1994,
   category: "#movie"},
 { quote: "Keep your friends close, but your enemies closer.",
   source: "Michael Corleone",
   citation: "-The GodFather Part II",
   year: 1974,
   category: "#movie"},
 { quote: "They may take our lives, but they'll never take our Freedom!!!" ,
  source: "Willam Wallace",
  citation: "-Brave Heart",
   year: 1995,
  category: "#movie"}
];

/****
 * colors array This were the program will pull colors to display on the web page
 */

 let color =[
  "blue",
  "pink",
  "green",
  "orange",
  "red",
  "purple"
];

let timer;

/***
 * This section creates a random number and color and assigns it to a variable then uses it to return a random color and object from the arrays above.
***/
function getRandomQuote() {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

  return quotes[randomQuoteIndex];
}
function getRandomColor(){
  let randomColorIndex = Math.floor(Math.random() * color.length);

  return color[randomColorIndex];
}
/*
* //Giving credit to Stack over flow for the idea of the timer. 
//This section creates a setInterval method to the variables so that printQuote function will run after 3 seconds
//clears the setInterval method from the timer varible. 

***/
function startTimer(){
  timer = setInterval(printQuote, 5000);
}

function clearTimer(){
  clearInterval(timer);
}


/***
 * //This section creates the presentQuote variable and set the value to the random quote array that is returned when the randomQuote function is called
 * //This section creates the presentColor variable and sets the value to the random color array that is returned when the randomColor function is called
 * //This section creates the html variable that uses the key values to create a string..
***/
function printQuote (){
  const presentQuote = getRandomQuote ();
  const presentColor = getRandomColor();
  let html = `<p class='quote'>${presentQuote.quote}</p>`;
  html += "<p class ='source'>" + presentQuote.source;

  /***
   * // The if statements are used here to see if a value is present and adds it to the html string
   */

  if ("citation" in presentQuote){
    html += "<span class ='citation'>" + presentQuote.citation + "</span>";
  } 
    if ("year" in presentQuote){
      html += "<span class = 'year'>" + presentQuote.year + "</span>";
  }
    if ("category" in presentQuote){
        html+= "<span class = 'category'>" + presentQuote.category + "</span>";
  }
  /***
   * These functions below execute the program for the quotes and the background color
   */
  
    document.getElementById("quote-box").innerHTML = html;
    document.body.style.background = presentColor;

    clearTimer();
    startTimer();

}

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);