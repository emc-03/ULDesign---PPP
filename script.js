


/*contact form submit*/
function runForm(e) {
  console.log(e);
  e.preventDefault();// TO DO: post request ** this won't function without it ** 
}
/*nav dropdown animal education*/
const animalDropButton = document.getElementById("animalButton");
const dropdownList = document.getElementById("dropdownList");

const dropdownButton = function() {
  animalDropButton.classList.toggle("show");

}

animalDropButton.addEventListener("click", function (e){
  e.stopPropagation();
  dropdownButton();
});

document.documentElement.addEventListener("click", function() {
if (dropdownButton.classList.contains("show")) {
  dropdownButton();
}
});

/*search Button */
let inputQuery = document.querySelector('.inputQuery');
let searchButton = document.querySelector('.searchButton');
//check for valid length 

searchButton.onclick = function searchBar() {

  if (this.querySelector.value.trim().length) {
    let url = 'https://www.petparadigm.com/searchq=' + this.querySelector.value;
    window.open(url, '_self');
  }
}


var searchInput = document.getElementById(searchInput)
searchInput.addEventListener("keyup"), function (event) {
  if (event.keyCode === 13 && InputDeviceInfo.value) {
    event.preventDefault();
    document.getElementById("searchSubmit").click();
  }
}