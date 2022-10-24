window.onload =init;
        function init(){
            console.log('Javascript')
            generateQuote()
        }
        
        

const quoteBank=[
    { "quote":"Ships that pass in the night.", "author":" Henry Wadsworth Longfellow" },
    { "quote":"An artist has been defined as a neurotic who continually cures himself with his art.", "author":"Lee Simonson" },
    { "quote":"The highest result of education is tolerance.", "author":"Helen Keller" },
    { "quote":"We must use time as a tool, not as a crutch.", "author":"John F. Kennedy" },
    { "quote":"To be prepared for war is one of the most effectual means of preserving peace.", "author":"George Washington" },
    { "quote":"Something will turn up.", "author":"Benjamin Disraeli" },
    { "quote":"The land shall not be sold for ever: for the land is mine; for ye are strangers and sojourners with me.", "author":"Leviticus" },
    { "quote":"Money is good for bribing yourself through the inconveniences of life.", "author":"Gottfried Reinhardt 4" }
    
]

function generateQuote(){
    console.log('Generate Quote');
    const arrIndex=  Math.floor(Math.random()*quoteBank.length)
    randomQuoteData= quoteBank[arrIndex]

    document.getElementById('text').innerText = randomQuoteData.quote
    document.getElementById('author').innerText = randomQuoteData.author
    
    let link ="https://twitter.com/intent/tweet?text="
    let fullink =  link   + randomQuoteData.quote.replace(/ /g,'%20') + '%20Author:%20' + randomQuoteData.author.replace(/ /g,'%20') +'"'
    document.getElementById("tweet-quote").href= fullink
    console.log(fullink)
}

