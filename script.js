var date = new Date($.now());
var simpleDate = (date.toDateString());
// var simpleDate = date.getDay() + ", " + (date.getMonth()+1) + "/" + date.getDate + "/" + date.getFullYear();
console.log(date);
$("#currentDay").text(simpleDate);
