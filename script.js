
// not grabbing links on lines 32 / 33 on index.html 
// animal education button 

const animalButton = document.querySelector(".dropButton");
const dropMenu = document.querySelector(".animalDropdown");
  animalButton.addEventListener("click", () => {
    
    dropMenu.classList.toggle("hide");

  });

window.addEventListener("click", (e) => {
  if (e.target !== animalButton) {
  dropMenu.classList.add("hide");
}
});

// toggle / responsive nav menu 
// will show on desktop size - but not scaled to "600px" - media query issues 
const navToggleBars = document.querySelector("#navToggle");
const navBarList = document.querySelector(".container");

  navToggleBars.addEventListener("click", () => {
    
    navBarList.classList.toggle("hide");

  });
