/* <button onclick="topFunction()" id="my-button" >
      Back to top
    </button> */

// Get the button
let myButton = document.getElementById("my-button");

// Following line attaches an event listener to the scroll event of the 'window' object.
// Whenever the user scrolls the window, the scrollFunction() will be called.
window.onscroll = function () {
  scrollFunction();
};

// It first checks the scroll position of the document using 'document.documentElement.scrollTop'.
// document.documentElement.scrollTop: This property is used to get or set the number of pixels that the content of the document's root element (usually <html>) is scrolled vertically. This property is preferred over document.body.scrollTop because it represents the scroll position of the entire document, regardless of whether the scroll is applied to the 'body' or 'html' element.
// If the scroll position is greater than 20 pixels, it sets the display property of myButton to "block" to make it visible.
//Otherwise, it sets the display property of myButton to "none" to hide it.
function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, it run this function: topFunction(), scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}
