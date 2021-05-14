

function clock(){
    var fullDate = new Date();
var hours = fullDate.getHours();
var minutes = fullDate.getMinutes();
var seconds = fullDate.getSeconds();

var day= fullDate.getUTCDate();
var month= fullDate.getUTCMonth() + 1 ;
var year= fullDate.getFullYear();

if(hours < 10) {
    hours = "0" + hours
}
if(minutes < 10) {
    minutes = "0" + minutes
}
if(seconds < 10) {
    seconds = "0" + seconds
}
if(day < 10) {
    day = "0" + day
}
if(month < 10) {
    month = "0" + month
}

if(hours > 12){
    hours = hours - 12
}

if(fullDate.getHours() < 12){
    document.getElementById('timePeriod').innerHTML = 'AM'
}
else{
    document.getElementById('timePeriod').innerHTML = 'PM'
}

document.getElementById('day').innerHTML = day + ' --'
document.getElementById('month').innerHTML = month + ' --'
document.getElementById('year').innerHTML = year;

document.getElementById('hour').innerHTML = hours + '  :'
document.getElementById('minutes').innerHTML = minutes + '  :'
document.getElementById('seconds').innerHTML = seconds
}

setInterval(clock)

console.log(new Date())