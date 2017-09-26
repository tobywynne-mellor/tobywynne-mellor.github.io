$(document).ready(function(){


  //typewriter

  var str = "<h1>TOBY WYNNE-MELLOR</h1>",
      i = 0,
      isTag,
      text;

  (function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.getElementById('title').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 80);
  }());


});