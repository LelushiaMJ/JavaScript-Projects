function doMaths() {
    var addition = 5 + 5, subtraction = 5 - 5, multiplication = 5 * 5, division = 5 / 5, remainder = 5 % 5,
    multipleOperators = 5 + 6 * 7, unary = 5, increment = 5, decrement = 5; // Assign Math Values To Variables
    var additionP = document.getElementById("addition"); // Locate Maths Paragraphs
    var subtractionP = document.getElementById("subtraction"); 
    var multiplicationP = document.getElementById("multiplication"); 
    var divisionP = document.getElementById("division"); 
    var remainderP = document.getElementById("remainder"); 
    var multipleOperatorsP = document.getElementById("multipleOperators"); 
    var unaryP = document.getElementById("unary"); 
    var incrementP = document.getElementById("increment"); 
    var decrementP = document.getElementById("decrement"); 

    // Assign Concatenated String With Math Value
    additionP.innerHTML = "5 + 5 = " + addition.toString(); 
    subtractionP.innerHTML = "5 - 5 = " + subtraction.toString(); 
    multiplicationP.innerHTML = "5 * 5 = " + multiplication.toString(); 
    divisionP.innerHTML = "5 / 5 = " + division.toString(); 
    remainderP.innerHTML = "5 % 5 = " + remainder.toString(); 
    multipleOperatorsP.innerHTML = "5 + 6 * 7 = " + multipleOperators.toString(); 

    // Use Unary Operator And Assign To P Element
    unaryP.innerHTML = "Negative 5 = " + -unary;

    // Increment & Decremenet And Assign To P Elements
    increment++;
    decrement--;
    incrementP.innerHTML = "Increment 5 = " + increment;
    decrementP.innerHTML = "Decrement 5 = " + decrement;

    // Alert Window With Random Value Between 0 & 100
    window.alert(Math.random()* 100);
}