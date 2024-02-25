const inputBox = document.getElementById('inputBox');
const ul = document.querySelector('ul');

function addTask() {
    if (inputBox.value === '') {
        alert('You Must Write Something..!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        ul.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';   // cross symbol
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();  // save the data 
}

ul.addEventListener('click', function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();  // save the data 
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();  // save the data 
    }

});


// save the data so that when page reloads our data will be saved to local storage.
function saveData() {
    localStorage.setItem("data", ul.innerHTML);
}


// load the data from local storage.
function showData() {
    ul.innerHTML = localStorage.getItem("data");
}
showData();




