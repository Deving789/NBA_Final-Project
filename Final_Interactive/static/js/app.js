// from data.js
const tableData = data;
let tableMatch = null;

// set the reference to the table body and initialize filter flag
let tbody = d3.select("#stats").select("tbody");
let filtered = 0;

// fill in full table by default
tableData.forEach(row => {
    tbody.append("tr");

    for (key in row){
        const cell = tbody.append("td");
        cell.text(row[key]);
    }
});

// define references to fields and buttons

let nameField = d3.select("#Name");
let posField = d3.select("#Pos");
let teamField = d3.select("#Team");

const button = d3.select("#filter-btn"); //linked to index
const reset = d3.select("#reset-btn");
const jsonDownload = d3.select("#download-json");
const csvDownload = d3.select("#download-csv");

// filter the table by properties
function filterObs(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // flag that table is filtered (>0?)
    filtered = 1;

    // get the user-entered values
    let userName    = nameField.property("value");
    let userPos    = posField.property("value");
    let userTeam   = teamField.property("value");

    // only filter if user entered a value
    if(userName || userPos || userTeam){
        // flag that table is filtered
        filtered = 1;

        // use only the conditions that have values entered and dynamically build up condition statement
        let userArray = [["Name", userName], ["Pos", userPos], ["Team", userTeam]];
        let existingArray = userArray.filter(user => user[1] !== "");
        let condition = existingArray.map(arr => "obs." + arr[0] + " == " + "'" + arr[1] + "'").join(" && ");
        
        tableMatch = tableData.filter(obs => eval(condition));

        // wipe out the tbody to be able to write out new table
        tbody.html("");

        // fill in observations only where date matches user input
        tableMatch.forEach(row => {
            tbody.append("tr");
        
            for (key in row){
                const cell = tbody.append("td");
                cell.text(row[key]);
            }
        });
    };
}

// reset table to original display
function resetData(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // reset the form
    document.forms["stats-form"].reset() //check data name

    // flag that table is not filtered
    filtered = 0;

    // wipe out the tbody to be able to write out new table
    tbody.html("");

    // fill in observations only where date matches user input
    tableData.forEach(row => {
        tbody.append("tr");
    
        for (key in row){
            const cell = tbody.append("td");
            cell.text(row[key]);
        }
    });
}

// ******************
// Download Functions
// ******************

// download query results as CSV file
function arrayToCSV(objArray) {
    let csv = '';
    let header = Object.keys(objArray[0]).join(',');
    let values = objArray.map(o => Object.values(o).join(',')).join('\n');

    csv += header + '\n' + values;
    return csv;
}

// return full table or filtered table
function tableReturned(filtered_val){
    if (filtered_val){
        return tableMatch;
    } else {
        return tableData;
    }
}

// download query results as CSV file
function downloadCSV(){
    let jsonFile = tableReturned(filtered);
    let csvDownloadFile = arrayToCSV(jsonFile);

    let blob = new Blob([csvDownloadFile], {
        type: "text/plain;charset=utf-8"
    });

    saveAs(blob, "players_stats.csv");
}

// download query results as JSON file
function downloadJSON(){
    let jsonDownloadFile = tableReturned(filtered);

    let blob = new Blob([JSON.stringify(jsonDownloadFile,undefined,2)], {
        type: "application/json"
    });

    saveAs(blob, "players_stats.json");
}

// run filterObs function if Enter key is pressed
function enterFilterObs(){
    if (d3.event.keyCode == 20){
        filterObs();
    }
}

// define what happens when user clicks the button
button.on("click", filterObs);
reset.on("click", resetData);
jsonDownload.on("click", downloadJSON);
csvDownload.on("click", downloadCSV);

// alternatively allow user to just hit Enter to filter for any field
d3.selectAll(".form-control").on("keyup",enterFilterObs);
