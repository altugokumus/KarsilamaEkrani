
let username = prompt ("Lütfen adınızı girin: ");

let myName = document.querySelector("#myName");

myName.innerHTML = username;

var span = document.getElementById('myClock');

function showTime() {         
    setTimeout(function() {   
      const d = new Date();
      const n = d.toLocaleTimeString();
      document.getElementById("myClock").innerHTML = n; 
      showTime();             
    }, 1000)
  }
  showTime();

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.getElementById("date").innerHTML = today;
