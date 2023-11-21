const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter the tasks");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value; // Use textContent instead of innerHTML for security reasons
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; // Remove the space here
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") { // Use tagName to check the tag name
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
