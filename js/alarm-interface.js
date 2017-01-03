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

    setInterval(function(){
      console.log($('#time').html());
      console.log(alarm.displayTime);
      if(alarm.displayTime === $('#time').html()) {
        $('#alarm-display').show();
        $('#noise').get(0).play();
      }
    }, 1000)

    $('#stop').click(function(){
      alarm.displayTime = "";
      $('#noise').get(0).pause();
      $('#alarm-display').hide();
      $('#alarm-set').hide();
      $('#alarm').val("");
    });
  });

});
