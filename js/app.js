// Active class on tabs

console.log("working");
let tabs = document.getElementById("tabs");
let btns = tabs.getElementsByClassName("tabs_btn");

// Loop through the buttons and add the active class to the current/clicked button

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("tabs_active");
    console.log(current[0].className);
    current[0].className = current[0].className.replace(" tabs_active", "");
    this.className += " tabs_active";
  });
}
