/* https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb */



/*
  change(picture)
  - `picture` is a string like "images/duckstar.png"
  - We use the DOM (Document Object Model) to find the <img> with id="large"
  - Then we update its `src` attribute so the browser displays the new image
*/
function change(picture) {
    // 1) Find the element: <img id="large" ...>
    const largeImage = document.getElementById("large");

    // 2) Swap the image file it points to
    largeImage.src = picture;
}
