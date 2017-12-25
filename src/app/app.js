// Welcoming voice everytime one enters/refreshes site.
// TODO: make the voice randomized.
// voice list is loaded async to the page. An onvoicechanged event is fired when they are loaded
// so the list can get got from the callback to that event listener.
window.speechSynthesis.onvoiceschanged = function() {
  var voices = window.speechSynthesis.getVoices();
  console.log(voices);
}
window.addEventListener("load", onLoad(event));
function onLoad(e) {

  var temp_msg = new SpeechSynthesisUtterance('Welcome back master.');
  window.speechSynthesis.speak(temp_msg);
}

function speak() {
    var text = document.getElementById("input");
    var msg = new SpeechSynthesisUtterance();
    msg.text = text.value;
    window.speechSynthesis.speak(msg);
    console.log(text.value);
}
