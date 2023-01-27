
document
//timer's script goes here
setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}

//load timer on page
document.addEventListener("load",myTimer);

//Rabbit Hole random link code
// the used links
var links = [
  "https://mariobluegloves.info",
  "https://jbr.me.uk/futurese.html",
  "https://www.youtube.com/watch?v=acVPdJAC2NA&t=68s",
  "https://terraria.wiki.gg/wiki/Truffle",

];

openStuff = function() {
  // get a random number between 0 and the number of links
  var randIdx = Math.random() * links.length;
  // round it, so it can be used as array index
  randIdx = parseInt(randIdx, 10);
  // construct the link to be opened
  var link = links[randIdx];
  // open it in a new window / tab (depends on browser setting)
  window.open(link);
};