
const num = ['a','b','c','d','e','f','g'];

var date = new Date();
var f = date.getDay();
console.log(f);
if (f>0 && f<7){
    
    var target = document.getElementById(num[f]);
    target.classList.add("active");
}


