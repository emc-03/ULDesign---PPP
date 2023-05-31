


/*contact form submit*/
function runForm(e) {
  console.log(e);
  e.preventDefault();// TO DO: use fetch or similar to make a post request... 
}
/*nav dropdown animal education*/
function animalEdButton() {
  document.getElementById("dropdownList").classList.toggle("show");
}

//open/close dropdown when clicked on page itself
window.onclick = function(event) {
  if (!event.target.matches('.dropButton')) {
    var dropList = document.getElementsByClassName('animalDropdown');
    var i;
    for (i = 0; i < dropList.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*search Button */
let inputQuery = document.querySelector('.inputQuery');
let searchButton = document.querySelector('.searchButton');
 //check for valid length 
 
searchButton.onclick = function () {
 
  if (this.querySelector.valute.trim().length) {
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