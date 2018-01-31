function parseQuote(response)
{
  document.getElementById("text").innerHTML = response.quoteText;
  if(response.quoteAuthor !== '') {
    document.getElementById("author").innerHTML = "-- " + response.quoteAuthor;
  }
  else {
    document.getElementById("author").innerHTML = "";
  }
}

function clickButton() {
    var s = document.createElement("script");
    s.src = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote";
    document.body.appendChild(s);
}
