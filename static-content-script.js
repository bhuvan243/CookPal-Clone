// Globally accessible data
const data = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];
const navbar = document.getElementById("navbar");
const navbarMenu = document.getElementById("navbar-menu");
const searchBar = document.getElementById("search-bar");
const allRecipes = document.getElementById("all-recipes");
const vegRecipes = document.getElementById("veg-recipes");
const nonVegRecipes = document.getElementById("non-veg-recipes");
const recipeList = document.getElementById("recipe-list");
const ratingAbove4 = document.getElementById("rating-checkbox-above-4");
const ratingBelow4 = document.getElementById("rating-checkbox-below-4");
const likeButton = document.getElementsByClassName("like-button");
displayData(data);

// adding card to web page body
function displayData(data) {
  recipeList.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let recipeCard = document.createElement("div");
    recipeCard.innerHTML = `
          <div class="recipe-card">
                          <img class="recipe-image"
                              src=${data[i].imageSrc}
                              alt="Food Photo">
                          <div class="recipe-type">${data[i].type}</div>
                          <div>
                              <span class="recipe-name">${data[i].name}</span>
                              <span>
                                  <i class="fa-solid fa-star" style="color: rgba(253, 192, 64, 1);"></i>
                                  <span class="recipe-rating">${data[i].rating}</span>
                              </span>
                          </div>
                          <div class="recipe-making-time">
                              <span>${data[i].time}</span>
                              <span>
                                  <i onclick="isliked(this)" class="fa-regular fa-heart" style="color: rgba(0, 0, 0, 1);"></i>
                                  <i class="fa-regular fa-comment fa-flip-horizontal" style="color: #000000;"></i>
                              </span>
                          </div>
                      </div>
          `;
    recipeList.appendChild(recipeCard);
  }
}


