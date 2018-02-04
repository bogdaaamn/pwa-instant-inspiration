import idb from 'idb';

var dbPromise,
    intervalId,
    intervalRunning,
    quotesCounter = 0,
    networkStatus;

window.addEventListener('offline', function(e) {
  networkStatus = 0;
  clearInterval(intervalId);
});
window.addEventListener('online', function(e) {
  networkStatus = 1;
  intervalId = setInterval(function() {
    fetchQuote(1) //created an anon function in order
  }, 2000);       //to make fetchQuote to be called properly
});

window.onload = () => {
  if (navigator.onLine) networkStatus = 1;
  else                  networkStatus = 0;

  if(networkStatus){
    intervalId = setInterval(function() {
      fetchQuote(1)
    }, 2000);
  }

  dbPromise = idb.open('instant-inspiration', 1, (upgradeDb) => {
    var quotesStore = upgradeDb.createObjectStore('quotes', {keyPath: 'id', autoIncrement: true});
  });
}

window.clickButton = () => {
  if (!intervalRunning && networkStatus) fetchQuote(0); //fetch a backup quote

  dbPromise.then(function(db) {
    var transaction = db.transaction('quotes', 'readwrite');
    var quotesStore = transaction.objectStore('quotes');

    return quotesStore.openCursor();
  }).then(function (cursor) {
    if (!cursor) parseQuote("", ""); //vanish the screen if there is no text
    else         parseQuote(cursor.value.quoteAuthor, cursor.value.quoteText);
    cursor.delete();
    return cursor;
  });

  //disable the button enough time to fetch the API
  document.getElementById("button").classList.add('button-disabled');
  document.getElementById("button").disabled = true;
  setTimeout(function(){
    document.getElementById("button").classList.remove('button-disabled');
    document.getElementById("button").disabled = false;
  }, 2000);
}


var fetchQuote = (intervalCall) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';

  fetch(proxyUrl + url)
  .then(response => response.json())
  .then(json => {
    dbPromise.then(function(db) {
      var transaction = db.transaction('quotes', 'readwrite');
      var quotesStore = transaction.objectStore('quotes');

      if(quotesCounter > 19 && intervalCall){ //STOP the fetching after 20 quotes per session
        clearInterval(intervalId);
        intervalRunning = 0;
      }
      else {
        if(intervalCall) quotesCounter++, intervalRunning = 1;
        quotesStore.add(json);
        console.log('added ', quotesCounter, intervalRunning);
      }
      return transaction.complete;
    });
  });
}

var parseQuote = (author, text) => {
  document.getElementById("text").innerHTML = text;
  if(author !== '') {
    document.getElementById("author").innerHTML = "-- " + author;
  }
  else {    // do NOT post the author's name if it does not exist
    document.getElementById("author").innerHTML = "";
  }
}
