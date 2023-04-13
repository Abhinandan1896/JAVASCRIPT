const quotContainer =document.getElementById('quote-cont');
const quoteText  =document.getElementById('quote');
const authorText =document.getElementById('author');
const twitterBtn =document.getElementById('twitter');
const newQuoteBtn =document.getElementById('new-quote');
const loader =document.getElementById('loader');


let apiQuotes=[];
//show&hide loading
//1) Show Loading
function loading(){
    loader.hidden=false;
    quotContainer.hidden=true;
}
//2) Hide Loading
function complete(){
   quotContainer.hidden=false;
   loader.hidden=true;
}

// show New Quote
function newQuote(){
    loading();
    //pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //check if author field is blank and replace it with unknown
    if(!quote.author){
        authorText.textContent='unknown';
    }else{
    authorText.textContent=quote.author;
    }
    //check quote length to determine the styling
    if(quote.text.length>50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    //Set Quote , Hide Loader
    quoteText.textContent=quote.text;
    complete();
} 

//Get quotes from api
loading();
 async function getQuotes(){
     const apiUrl='https://type.fit/api/quotes';
     try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
     }catch(error){
        //catch error here
     }
 }
 //tweet Quote
 function tweetQuote(){
    const twitterUrl =`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
 }

 //Eveny Listeners for buttons
 newQuoteBtn.addEventListener('click', newQuote);
 twitterBtn.addEventListener('click', tweetQuote);

//On load function everytime when you load the quote should be change
getQuotes();