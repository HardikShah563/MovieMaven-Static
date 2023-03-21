let editVenue = document.querySelectorAll(".editVenue");
let deleteVenue = document.querySelectorAll(".deleteVenue");
editVenue.forEach(element => {
    element.addEventListener("click", () => {
        console.log("Edit Venue been clicked");
    })
});

deleteVenue.forEach(element => {
    element.addEventListener("click", () => {
        console.log("Delete Venue has been clicked");
    })
});

// editVenue[0].addEventListener("click", () => {
//     console.log("I've been clicked");
// })