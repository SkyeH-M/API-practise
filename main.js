// inbuild js object for consuming APIs
// create new instance of XMLHttpRequest obj
let xhr = new XMLHttpRequest();

// get to open connection and retrieve data, then pass url of API we want to retrieve
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/")
// sends our request
xhr.send();

xhr.onreadystatechange = function() {
    // listener waiting to see for xhrs state to change
    // if everything went well, we're going to retrieve data div
    // readyState 4 means operation completed
    // http status code of 200 means ok
    // and put responseText in it (populate the html?)
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('data').innerHTML = this.responseText;
    }
};
