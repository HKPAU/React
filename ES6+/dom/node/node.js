let headingVal = document.createElement("h2");
let nodeText = document.createTextNode("Pamukkale University");
headingVal.appendChild(nodeText)

let divtag = document.getElementById("div-tag");
let p2Tag = document.getElementsByClassName("p2-tag")[0];

divtag.insertBefore(headingVal, p2Tag);

alert("P2 Tag is Deleting....");
divtag.removeChild(p2Tag);