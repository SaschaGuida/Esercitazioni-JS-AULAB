var activityList = [];

function addActivity() {
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    
    activityList.push({ name, description, completed: false });
    
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";

    updateTable();
}

function markAsComplete(index) {
    activityList[index].completed = true;
    updateTable();
}

function updateTable() {
    var table = document.getElementById("activityTable");
    table.innerHTML = "";

    activityList.forEach((activity, index) => {
        var row = document.createElement("tr");
        var columnName = document.createElement("td");
        var columnDescription = document.createElement("td");
        var columnStatus = document.createElement("td");
        var columnAction = document.createElement("td");

        columnName.textContent = activity.name;
        columnDescription.textContent = activity.description;
        columnStatus.textContent = activity.completed ? "Completata" : "Non Completata";

        if(!activity.completed) {
            var completeButton = document.createElement("button");
            completeButton.textContent = "Completa";
            completeButton.onclick = function() { markAsComplete(index); };
            columnAction.appendChild(completeButton);
        }

        row.appendChild(columnName);
        row.appendChild(columnDescription);
        row.appendChild(columnStatus);
        row.appendChild(columnAction);

        table.appendChild(row);
    });
}


/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/