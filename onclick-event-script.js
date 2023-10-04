// navbar menu
let sidebar = document.createElement("section");
navbarMenu.addEventListener("click", () => {
  sidebar.id = "nav-menu";
  sidebar.innerHTML = `
              <div id="nav-side-top">
                  <img src="./Assets/cookpal-logo.svg" alt="cookpal-logo">
                  <img id="profile-pic" src="./Assets/profile-pic.jpg" alt="Profile Picture">
              </div>
              <div>
                <span><a href="#" id="active-nav-link" onclick="hideSidebar()">Home</a></span>
                <span><a href="#">Explore</a></span>
                <span><a href="#">Help</a></span>
              </div>`;
  navbar.append(sidebar);
});

function hideSidebar() {
  const sidebarMenu = document.getElementById("nav-menu");
  sidebarMenu.remove();
}

// search recipe funtionality
searchBar.addEventListener("keyup", () => {
  const searchItem = document.getElementById("search-bar").value.toLowerCase();
  let filteredRecipes = data.filter((data) =>
    data.name.toLowerCase().includes(searchItem)
  );
  displayData(filteredRecipes);
});
// now onClick funtions -> filtering and showing data
allRecipes.addEventListener("click", () => {
  displayData(data);
});
vegRecipes.addEventListener("click", () => {
  let showVegRecipes = data.filter((data) => data.type == "veg");
  displayData(showVegRecipes);
});
nonVegRecipes.addEventListener("click", () => {
  let showNonVegRecipes = data.filter((data) => data.type == "non-veg");
  displayData(showNonVegRecipes);
});
ratingAbove4.addEventListener("click", () => {
  let above4Filtered = data.filter((data) => data.rating >= 4);
  displayData(above4Filtered);
});
ratingBelow4.addEventListener("click", () => {
  let below4Filtered = data.filter((data) => data.rating < 4);
  displayData(below4Filtered);
});
function isliked(event) {
  event.classList.toggle("like-heart");
}
