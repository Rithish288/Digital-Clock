const months = ["January","February","March","April","May","June",
"July","August","September","October","November","December"];

const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 
const ids = ["date","day","month","dayNum","year","hour", "minutes", "seconds", "period"]



function updateClock(){
    var now = new Date()
    var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds,
    pe = 'AM';

    const values = [dname, mo, dnum, yr , hou , min , sec , pe ];


    for(i = 0; i<ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initClock(){
    updateClock()
    window.setInterval("updateClock()", 1)
}