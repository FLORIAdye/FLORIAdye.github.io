var typed = new Typed(".multiple-text", {
    strings: ["UNIQUE", "COLOURFUL", "ECO FRENDLY"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.getElementById("git").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("h", "_blank");
  });
  document.getElementById("codePen").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("", "_blank");
  });
  document.getElementById("instagram").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("o", "_blank");
  });
  document.getElementById("linkedIn").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("h", "_blank");
  });
  
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
  