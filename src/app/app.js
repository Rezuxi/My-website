/*
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


<div id="tts">
  <form id="form" action="/action_page.php">
      Text-to-speech: <input id="input" type="text" text="I will say anything" value="Your wish is my command"><br>
      <input id="button" type="button" value="Speak!" onclick="speak();">
  </form>

  <p>Text to speech</p>
</div>


//TODO: add schedule using table/grid or something.
//TODO: plan layout and content of page.
//TODO: get a nice background image/color.
<div id="lower2container">
    <div id="left">

    </div>


    <div id="right">

    </div>
</div>
<script src="app/app.js" type="text/javascript"></script>

*/
