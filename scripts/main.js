console.log("Welcome to the main module")

//LIGHTNING EXERCISE
//  // Hello, world
//  // In your index.html file, add an h1 element with an id of #hello-container.
//  // In your JavaScript file, declare a new variable called greeting and give it a value of "Hello, world"
//
//  ////let greeting = "Hello, world";
//
//  // Use document.querySelector to target your #hello-container
//
//  ////let targetHelloContainer = document.querySelector("#hello-container");
//
//  // Use the .innerHTML property to insert the value of your greeting variable into your #hello-container element.
//
//  ////targetHelloContainer.innerHTML = greeting;


//-------------Running today's special---------------------
// The contents of this object will change depending on what today's special is
let currentSpecial = {
    name: "Fried Green Tomato BLT",
    description: "So good you'll cry",
    price: 9.99
  }
// We'll use the object to build up an HTML string
  let htmlString = `
  <h3 class="dish-name">${currentSpecial.name}</h3>
  <p class="dish-description">${currentSpecial.description}</p>
  <h5 class= "dish-price">${currentSpecial.price}</h5>
`  
// Then we'll put the html string in the #daily-special div
  document.querySelector("#daily-special").innerHTML = htmlString;



//---------------Printing the entire menu to the DOM---------------
  let menuItemsArray = ["Chicken tenders", "pizza", "spaghetti", "french fries", "pie"]

  for(let i = 0; i < menuItemsArray.length; i++){
    // target the menu items container and add a bullet for each item in the array
    document.querySelector("#menu-items-container").innerHTML += `<li>${menuItemsArray[i]}</li>`
  
  }

//---------------lightning exercise, keeping track of chores--------------
// Keeping track of chores
// In your index.html file, create an empty <ul> element and give it an id of #chores-container
// In your JavaScript file, declare a new variable called choresArray. This should be an array of chores you do regularly.
let choresArray = ["sweeping", "mopping", "laundry"];

// Loop through your choresArray. For each chore, create a new <li> element and insert it into the #chores-container element.
// You should end up with a bulleted list of all your regular chores.
for(let i=0; i < choresArray.length; i++){
    document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`
}

//-------------practice----1.movie poster problem----------------------
let movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
  }
// Use document.querySelector() to grab a reference to each element in your HTML.
// Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).
document.querySelector("#title").innerHTML = `${movieObject.title}`
document.querySelector("#genre").innerHTML = `${movieObject.genre}`
document.querySelector("#release-date").innerHTML = `${movieObject.releaseDate}`

// let titleElement = document.querySelector("#title")
// let genreElement = document.querySelector("#genre")
// let releaseDateElement = document.querySelector("#release-date")
// titleElement.innerHTML = movieObject.title
// genreElement.innerHTML = movieObject.genre
// releaseDateElement.innerHTML = movieObject.releaseDate


//-------------------------2.downtown restaurants--------------------------
let downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];
// Loop over the downtownRestaurants array.
// Use the loop to create an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to add each new <li> element to the #restaurants-list container.
// You should see a bulleted list of restaurants in the DOM.
 for(let i=0; i < downtownRestaurants.length; i++) {
    document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[i]}</li>`
 }


//-------------------------3.sandwich toppings----------------------------
let sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]
// Write a function that does the following things:
// Loop through sandwichToppings
// Build an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to print your HTML string to the "#sandwich-container".
function topIt() {
  for(let i=0; i < sandwichToppings.length; i++) {
    document.querySelector("#sandwich-container").innerHTML += `<li>${sandwichToppings[i]}</li>`
}
}
 // Call the function. You should see a bulleted list of all the sandwich toppings in the DOM.
topIt()


//-----------------------4.movie schedule----------------------------------
// You've been hired to build an app for a movie theater. You need to list all of the movies that are currently playing.
let movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    },
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
    }
  ]

// Use a for loop to loop through the movies, build an HTML representation of each movie, and insert it into the #movie-schedule container in the DOM.
// You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included.
  for (let i = 0; i < movieSchedule.length; i++) {
    // If its currently playing and has a poster, add it to index
    if (
        movieSchedule[i].hasOwnProperty("poster") &&
        movieSchedule[i].currentlyPlaying
    ) {
        document.querySelector(
            "#movie-schedule"
        ).innerHTML += `<section class="moviemovie"><h1>${movieSchedule[i].title}</h1><p>RATING: ${movieSchedule[i].rating}</p><b>GET YOUR TICKETS NOW</b><img src=${movieSchedule[i].poster} class="${movieSchedule[i].rating}">`;
    }
    // If its currently playing but has no poster, add a placeholder and put it on the index
    else if (movieSchedule[i].currentlyPlaying) {
        document.querySelector(
            "#movie-schedule"
        ).innerHTML += `<section class="moviemovie"><h1>${movieSchedule[i].title}</h1><p>RATING: ${movieSchedule[i].rating}</p><b>GET YOUR TICKETS NOW</b><img src="https://www.snhrc.com/wp-content/uploads/2018/09/Image-Coming-Soon.png">`;
    } // If its not currently playing then dont add it to the index
}

// Exercise 5. Movie Scheduling cont. I made the edits above for this part.

// Revisit your movie schedule exercise from above.
// Add a conditional so that you only print movies where the currentlyPlaying property is equal to true.
// Use flexbox to arrange your movie schedule side by side on your web page.
// If a movie does not have a poster property, give it a placeholder image like this
// Give all G-rated movies a dotted green border that's 2px wide.
// Give all PG-rated movies a dotted yellow border that's 2px wide.
// Give all PG-13 movies a dotted orange border that's 2px wide.
// Give all R-rated movies a dotted red border that's 2px wide.





//--------------------------6.cohort website------------------------
// The buildHtmlString function should take an cohort object as a parameter and return a HTML string with the following elements:
// An h1 of the cohort's name
// An h3 for the start date
// An h3 for the end date
// An unordered list of instructors
// An unordered list of technologies learned
let cohort1 = {
    name: "Cohort One",
    startDate: "January 15, 2018",
    endDate: "July 12, 2019",
    instructors: ["Kim", "Josh", "Jordan"],
    techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
  }
  
  let cohort2 = {
   name: "Cohort Two",
   startDate: "August 15, 2019",
   endDate: "Feb 10, 2020",
   instructors: ["Tommy", "Jordan"],
   techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
  }
  
  let cohort3 = {
   name: "Cohort Three",
   startDate: "April 6, 2020",
   endDate: "August 20, 2020",
   instructors: ["Tommy", "Jordan"],
   techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
  }
  
//   function buildHtmlString(cohortObjectParameter){
//     // Put the cohort name in h1 tag
//     if(cohortObjectParameter === "cohort1"){
//         document.querySelector("#cohort-one-container").innerHTML += `<h1>${cohort1.name}</h1><h3>${cohort1.startDate}</h3><h3>${cohort1.endDate}</h3>`;
//         for (let i = 0; i < cohort1.instructors.length; i++) {document.querySelector("#cohort-one-container").innerHTML += `<li>${cohort1.instructors[i]}</li>`;}
//         for (let i = 0; i < cohort1.techStack.length; i++) {document.querySelector("#cohort-one-container").innerHTML += `<li>${cohort1.techStack[i]}</li>`;}
//     }

//     if(cohortObjectParameter === "cohort2"){
//         document.querySelector("#cohort-two-container").innerHTML += `<h1>${cohort2.name}</h1><h3>${cohort2.startDate}</h3><h3>${cohort2.endDate}</h3>`;
//         for (let i = 0; i < cohort2.instructors.length; i++) {document.querySelector("#cohort-two-container").innerHTML += `<li>${cohort2.instructors[i]}</li>`;}
//         for (let i = 0; i < cohort2.techStack.length; i++) {document.querySelector("#cohort-two-container").innerHTML += `<li>${cohort2.techStack[i]}</li>`;}
//     }

//     if(cohortObjectParameter === "cohort3"){
//         document.querySelector("#cohort-three-container").innerHTML += `<h1>${cohort3.name}</h1><h3>${cohort3.startDate}</h3><h3>${cohort3.endDate}</h3>`;
//         for (let i = 0; i < cohort3.instructors.length; i++) {document.querySelector("#cohort-three-container").innerHTML += `<li>${cohort3.instructors[i]}</li>`;}
//         for (let i = 0; i < cohort3.techStack.length; i++) {document.querySelector("#cohort-three-container").innerHTML += `<li>${cohort3.techStack[i]}</li>`;}
//     }

// }
 
// buildHtmlString("cohort1")
// buildHtmlString("cohort2")
// buildHtmlString("cohort3")

// The printHtmlString function should take two parameters:
// An HTML string
// The id of the element into which you want to print your HTML string

// The printHtmlString function should do the following things:
// Use document.querySelector to get a reference to the element in the DOM with whatever id you passed in.
// Use innerHTML to print the HTML string you passed in to the DOM.

// Call the buildHTMLString function and pass in cohort1 as an example.
// Store the returned value in a new variable called cohort1HTML.
// Call the printHtmlString function and pass in your cohort1HTML variable and the id of the element you want to print to ("cohort-one-container").



  // let cohort1HTML = document.querySelector("#cohort1-container").innerHTML
  // let cohort2HTML = document.querySelector("#cohort2-container").innerHTML
  // let cohort3HTML = document.querySelector("#cohort3-container").innerHTML


  // function buildHtmlString(cohortObject){
  //   <h1 class = "cohortName">${cohortName}</h1>,
  //   <h3 class = "startDate">${startDate}</h3>,
  //   <h3 class = "endDate">${endDate}</h3>,
  //   <ul class = "instructors">${instructors}</ul>,
  //   <ul class = "technologies">${technologies}</ul>

  //   return buildHtmlString()
  // }

  // fuction printHTMLString()





  