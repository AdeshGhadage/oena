// ./time-table/table.html
var date = new Date();
var day = date.getDay();
// alert(day);
var input = document.getElementById("key");
function timetable(){
    var password = "oenatt";
    var user = input.value;
    if (user == password){
        if (day == 0 || day == 6){
            console.log("you enterd if statment");
            window.location.href = "https://www.youtube.com/";        
        }
        else{
            window.location.href = "./time-table/table.html";
        }
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