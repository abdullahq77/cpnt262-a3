// Importing animals.js into client.js
import { animals } from "./animals.js"

// Create a `outputHTML` variable where you will store the html that will eventually be printed to the page
let outputHTML = ""; 

// Using `document.querySelector()`, assign the .gallery element to a `gallery` variable.
const gallery =  document.querySelector(".gallery");   

// Loop through `animals` array using `array.forEach()`.
animals.forEach(function(animals) {
  
  // For each image ID, 
  // 1. create an image card for each image that includes:
  //      - a `<figure class="card">` container
  //      - an `<img>` element including `src`, `alt`, `width` and `height` attributes
  //      - a `<figcaption>` element containing photo credit and link to Unsplash source
  // 2. append the `<figure>` card to the `outputHTML` variable you created earlier
outputHTML +=  `<figure class="card">
                  <img src= ${animals.path} alt="Lorem Pocsum: ${animals.title}" width="${animals.width}" height="${animals.height}">
                  <figcaption>
                    <h1>${animals.title}</h1>
                    <a href="${animals.url}">Credits: ${animals.credit}</a> 
                  </figcaption>
                </figure>`
});



// Using element.innerHTML (or other DOM manipulation technique), add the list of figure cards in `outputHTML` to the `gallery` variable you created earlier.
gallery.innerHTML = outputHTML;
