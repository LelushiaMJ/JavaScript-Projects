function dictFunction() {   // Function Called By Clicking
    var animals = { // Create animals Dictionary
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete animals.Sound; // Delete Sound from animals
    document.getElementById("Dictionary").innerHTML = animals.Sound; // Change inner text to deleted part, which shows undefined

    window.alert(typeof "Word");
}