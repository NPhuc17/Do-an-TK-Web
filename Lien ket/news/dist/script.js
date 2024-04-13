function myFunction() {
  var elements = document.getElementsByClassName("none");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
  document.getElementById("load-more").style.display = "none";
}

function mFunction() {
  var elements = document.getElementsByClassName("none");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
}

// Selecting the iframe element
var iframe = document.getElementById("ifr_main");

// Adjusting the iframe height onload event
iframe.onload = function () {
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}