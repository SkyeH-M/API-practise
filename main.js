const baseURL =  "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    // inbuild js object for consuming APIs
    // create new instance of XMLHttpRequest obj
    let xhr = new XMLHttpRequest();


    // get to open connection and retrieve data, then pass url of API we want to retrieve
    xhr.open("GET", baseURL + type + "/");
    // sends our request
    xhr.send();

    xhr.onreadystatechange = function () {
        // listener waiting to see for xhrs state to change
        // if everything went well, we're going to retrieve data div
        // readyState 4 means operation completed
        // http status code of 200 means ok
        // and put responseText in it (populate the html?)
        if (this.readyState == 4 && this.status == 200) {
            // cb func evoked only when above conditions are met
            cb(JSON.parse(this.responseText));
        }
    };
}

function getTableHeaders(obj) {
    let tableHeaders = [];
    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td> ${key} </td>`)
    });
    return `<tr> ${tableHeaders} </tr>`;
}

function writeToDocument(type) {
    let tableRows = [];
    let el = document.getElementById("data");
    // each time button is clicked, data on page is reset
    el.innerHTML = "";
    getData(type, function(data) {
        // console.directory
        // console.dir(data);
        data = data.results;
        let tableHeaders = getTableHeaders(data[0]);
        data.forEach(function(item) {
            let dataRow = [];
            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td> ${truncatedData} </td>`)
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table> ${tableHeaders} ${tableRows} </table>`;
    });
}



// takes 2 parameters, 1 is a func to run, 2 is length in milliseconds to wait
// setTimeout(function() {
//     console.log(data);
// }, 500);