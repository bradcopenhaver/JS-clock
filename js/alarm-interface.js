var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();

    console.log("form submitted");
    var alarm = new Alarm($('#alarm').val());
    console.log(alarm);
    alarm.convertTime();
    $('#alarm-time').text(alarm.displayTime);
    $('#alarm-set').show();



  });
});
