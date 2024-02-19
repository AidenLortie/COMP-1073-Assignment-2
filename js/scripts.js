// constants for query selector
let pStudID = document.getElementById("myStudentId");
let customNumInput = document.getElementById("customNumber");
let buttonCustomColor = document.getElementsByClassName("custColor")[0];
let buttonRandomColor = document.getElementsByClassName("randColor")[0];
let select = document.querySelector('select');
let imgArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let img = document.querySelector('img')

// function to change bg color from user input and add student id
function changeCustomColor(){
    pStudID.textContent = "LUSN: 1217609"
    let input = customNumInput.value;
    let colourOut;
    if(0 > input || input > 100){
        colourOut = "rgb(255, 0, 0)";
        console.log("RED");
    } else if( input < 20){
        colourOut = "rgb(0, 255, 0)";
        console.log("GREEN");
    } else if( input < 40){
        colourOut = "rgb(0, 0, 255)";
        console.log("BLUE");
    } else if( input < 60){
        colourOut = "rgb(255, 127, 0)";
        console.log("ORANGE");
    } else if( input < 80){
        colourOut = "rgb(127, 0, 255)";
        console.log("PORPLE");
    } else if( input < 100){
        colourOut = "rgb(255, 255, 0)";
        console.log("WELLO");
    }
    document.body.style.backgroundColor = colourOut;
    console.log(input);
}

// function to change bg color from random no.
function changeRandomColor() {
    let value = Math.random() * 100;
    let colourOut;
    if( value < 20){
        colourOut = "rgb(0, 255, 0)";
    } else if( value < 40){
        colourOut = "rgb(0, 0, 255)";
    } else if( value < 60){
        colourOut = "rgb(255, 127, 0)";
    } else if( value < 80){
        colourOut = "rgb(127, 0, 255)";
    } else if( value < 100){
        colourOut = "rgb(255, 255, 0)";
    }
    document.body.style.backgroundColor = colourOut;
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
    if(select.children.length > imgArray.length){
        return;
    }
    for(let i in imgArray){
        let newOpt = document.createElement("option")
        newOpt.value = imgArray[i];
        newOpt.text = imgArray[i];
        select.add(newOpt)
    }

}

// function to change image
function changeImage() {
    console.log(select.value);
    img.src = "img/"+ select.value;
}

// event listeners for on click event of buttons and select
buttonCustomColor.onclick = changeCustomColor;
buttonRandomColor.onclick = changeRandomColor;
select.onclick = addList;
select.onchange = changeImage;
// event listeners for on change event of select