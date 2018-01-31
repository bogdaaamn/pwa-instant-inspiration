function parseQuote(response) {
  document.getElementById("text").innerHTML = response.quoteText;
  if(response.quoteAuthor !== '') {
    document.getElementById("author").innerHTML = "-- " + response.quoteAuthor;
  }
  else {    // do NOT post the author's name if it does not exist
    document.getElementById("author").innerHTML = "";
  }
}

function clickButton() {
    var s = document.createElement("script");
    s.src = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote";
    document.body.appendChild(s);

    //disable the button enough time to wait for the API
    document.getElementById("button").classList.add('button-disabled');
    document.getElementById("button").disabled = true;
    setTimeout(function(){
        document.getElementById("button").classList.remove('button-disabled');
        document.getElementById("button").disabled = false;
    }, 1800);
}
