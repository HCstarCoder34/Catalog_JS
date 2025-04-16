

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";


// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air", 
  "Curb Your Enthusiasm",
  "East Los High",
];

// I combined both the titles and imageURL data into one array, but then nothing was displaying when I opened the webpage.
//   let titles = [
//     {title: "Fresh Prince of Bel Air", imageURL: FRESH_PRINCE_URL},
//     {title:"Curb Your Enthusiasm", imageURL:  CURB_POSTER_URL},
//     {title:"East Los High", imageURL: EAST_LOS_HIGH_POSTER_URL}
// ];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];
    // let { title, url } = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);


function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

          // Sort by the URL string
  // imageURL.sort((a, b) => a.url - (b.url));
// titleWithImages.sort((a, b) => a.titleWithImages.localeCompare(b.titleWithImages));  

// const sortedTitles = titlesWithImages.map(item => item.title);
// const sortedURLs = titlesWithImages.map(item => item.url);

// console.log(sortedTitles);
// console.log(sortedURLs);
// showCards();
  // document.getElementById("card-container").innerHTML = titles;
  

function sortAlphabetically() {
  titles.sort();
  showCards();
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
