function buttonFunction() { // function that was called on button click
    // window.alert("You clicked the button!");
    var sentence = "You clicked the "; // assign value to sentence variable
    sentence += "button!"; // use operator to concatenate onto the end of sentence variable
    var paragraphToChange = document.getElementById("changeWithButton"); // assign p element to variable using id
    // paragraphToChange.innerText = "You clicked the button!";
    paragraphToChange.innerText = sentence; // change inner text of p element using variable and sentence variable
}