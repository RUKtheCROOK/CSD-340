let listContainer = document.getElementById("listContainer");
// Initially I had the elements stored as actual arrays and used for loops to display them and the reverse function to reverse them, but it was not efficient.

let selected = 'topToBottom';
function bottomToTop() {
    if (selected === 'topToBottom') {
        listContainer.style.display = 'flex';
        listContainer.style.flexDirection = 'column-reverse';
        selected = 'bottomToTop';
    }
    else {
        alert("Already in bottom choice(10) to top choice(1) order.");
    }
}

function topToBottom() {
    if (selected === 'bottomToTop') {
        listContainer.style.display = 'flex';
        listContainer.style.flexDirection = 'column';
        selected = 'topToBottom';
    }
    else {
        alert("Already in top choice(1) to bottom choice(10) order.");
    }
}