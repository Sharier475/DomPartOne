//DOM Manipulation 

//Selecting with ID

let heading = document.getElementById("header");
console.dir(heading);

// Selecting with class

let heading4 = document.getElementsByClassName("heading");
console.dir(heading4);
console.log(heading4);

//selecting with tag

let para = document.getElementsByTagName("p");
console.dir(para);
console.log(para);


// Query Selector

//Returns with First Element
let firstEle = document.querySelector("p");
console.dir(firstEle);

let firstClass = document.querySelector(".heading");
console.dir(firstClass); 

let button = document.querySelector("#myId")
console.dir(button); 

let fruits = document.querySelector("#fru");
console.dir(fruits);



//Returns with All Elements

let allEle = document.querySelectorAll("p");
console.dir(allEle);

let allClass = document.querySelectorAll(".heading");
console.dir(allClass); 


// Properties 
// tagName: returns tag for element nodes
// innerText: returns the text content of the element and all its children.
// innerHtml: returns the plain text or HTML contents in the Element.
// textContent: returns textual content even for hidden elements.

