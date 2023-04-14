"use strict";

//runClock();
setInterval("runClock()", 1000);

function runClock(){

/*current time */
var currentDay= new Date()

/*countdown*/
var graduation = new Date("May 10, 2023");
var daysLeft = (graduation - currentDay)/(1000*60*60*24);
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent= Math.floor(hrsLeft);
document.getElementById("mins").textContent= Math.floor(minsLeft);
document.getElementById("secs").textContent= Math.floor(secsLeft);
}