//selecting pop-box, popup-overlay and button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var popupbtn = document.getElementById("popup-btn")

popupbtn.addEventListener("click", function () {
    popupbox.style.display = "block"
    popupoverlay.style.display = "block"
})
//selecting cancel btn
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})
//select overall container, add book, book input, book auth input, book disc input
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var bookinput = document.getElementById("book-input")
var bookauth = document.getElementById("book-author-input")
var bookdisc = document.getElementById("book-disc-input")

addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${bookinput.value}</h2>
            <h4>${bookauth.value}</h4>
            <p>${bookdisc.value}</p>
            <button onclick = "deletebook(event)">Delete</button>
            <button onclick="editbook(event)" class="edit-book" data-index="${document.querySelectorAll('.book-container').length}">Edit</button>`
    container.append(div)
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})


function deletebook(event)
{
    event.target.parentElement.remove()
}

// Add event listener to all edit buttons
var editButtons = document.querySelectorAll(".edit-book");
Array.from(editButtons).forEach(function (button) {
    button.addEventListener("click", function (event) {
        var index = parseInt(event.target.dataset.index); // Get the index from data-index attribute
        var bookContainer = document.querySelectorAll(".book-container")[index];
        var bookTitle = bookContainer.querySelector("h2").innerText;
        var bookAuthor = bookContainer.querySelector("h4").innerText;
        var bookDescription = bookContainer.querySelector("p").innerText;

        // Populate edit popup fields with existing details
        document.getElementById("edit-input").value = bookTitle;
        document.getElementById("edit-author-input").value = bookAuthor;
        document.getElementById("edit-disc-input").value = bookDescription;

        // Show edit popup
        document.querySelector(".edit-overlay").style.display = "block";
        document.querySelector(".edit-popup").style.display = "block";
    });
});

// When "Done" button is clicked in the edit popup
document.getElementById("edit-con").addEventListener("click", function (event) {
    event.preventDefault();
    var index = parseInt(document.querySelector(".edit-book").dataset.index);
    var editedTitle = document.getElementById("edit-input").value;
    var editedAuthor = document.getElementById("edit-author-input").value;
    var editedDescription = document.getElementById("edit-disc-input").value;

    // Update the details in the original book container
    var editedBookContainer = document.querySelectorAll(".book-container")[index];
    editedBookContainer.querySelector("h2").innerText = editedTitle;
    editedBookContainer.querySelector("h4").innerText = editedAuthor;
    editedBookContainer.querySelector("p").innerText = editedDescription;

    // Hide edit popup
    document.querySelector(".edit-overlay").style.display = "none";
    document.querySelector(".edit-popup").style.display = "none";
});
// Add event listener to the container element for edit buttons
container.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("edit-book")) {
        var index = parseInt(event.target.dataset.index); // Get the index from data-index attribute
        var bookContainer = document.querySelectorAll(".book-container")[index];
        var bookTitle = bookContainer.querySelector("h2").innerText;
        var bookAuthor = bookContainer.querySelector("h4").innerText;
        var bookDescription = bookContainer.querySelector("p").innerText;

        // Populate edit popup fields with existing details
        document.getElementById("edit-input").value = bookTitle;
        document.getElementById("edit-author-input").value = bookAuthor;
        document.getElementById("edit-disc-input").value = bookDescription;

        // Show edit popup
        document.querySelector(".edit-overlay").style.display = "block";
        document.querySelector(".edit-popup").style.display = "block";
    }
});
