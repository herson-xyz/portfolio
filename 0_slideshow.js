/* Class the members of each slideshow group with different CSS classes */
var sketchCollection = ["sketches_1", "sketches_2"]
showSlides(0, 0);
showSlides(0, 1);


function showSlides(sketch, sketchCollectionNumber) {

    //Get elements that match 'sketchCollection', and assign to element group
    var divElement = document.getElementsByClassName(sketchCollection[sketchCollectionNumber]);

    //Hide all sketches within the element group
    for (let i = 0; i < divElement.length; i++) {
        divElement[i].style.display = "none";
    }

    //Show individual sketch within the element group
    divElement[sketch].style.display = "block";
}

