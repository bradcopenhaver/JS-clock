function Alarm(time) {
  this.time = time;
  this.displayTime;
}

Alarm.prototype.snooze = function() {
  this.time = this.time + 10;
}

Alarm.prototype.convertTime = function () {
  var hour = parseInt(this.time.slice(0,2));
  console.log(this.time);
  var minutes = this.time.slice(3,5);
  var hours;
  var ampm;
  if (hour > 12) {
  hours = ((hour + 11) % 12) + 1;
  ampm = "PM";
  } else if (hour === 12) {
  hours = 12;
  ampm = "PM";
} else if (hour === 00) {
  hours = 12;
  ampm = "AM";
  } else if (hour < 12){
  ampm = "AM";
  }
  var convertedTime = hours + ":" + minutes + " " + ampm;
  this.displayTime = convertedTime;
}

exports.alarmModule = Alarm;
