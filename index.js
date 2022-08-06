var input = document.getElementById("key")
function timetable(){
    var password = "oenatt";
    var user = input.value;
    if (user == password){
        window.location.href = "/time-table/table.html";
    }
    else {
        alert("login unsuccessful");
    }
}

input.addEventListener("keydown", function(event){
    console.log(event);
    if (event.key === "Enter"){
        timetable();
    }
});