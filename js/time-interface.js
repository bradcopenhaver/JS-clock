$(document).ready(function() {
  setInterval(function(){
    document.getElementById("time").innerHTML = moment().format('LT');
  }, 1000);
});
//
