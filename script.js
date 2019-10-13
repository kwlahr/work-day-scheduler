//var for date that appears in currentDay
var date = new Date($.now());
var simpleDate = (date.toDateString());
console.log(date);
$("#currentDay").text(simpleDate);

var timeBlocks = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
console.log(timeBlocks);
$("button").on("click", function(){
    var data = $(".input-group-text").val();
    // $("input.input-group-text").each(function(index){
    // });
    // var myStorage = window.localstorage;
    // var data = $(timeBlocks[i]).val();
    // var data = $(this).val();
    console.log(data);
    // localStorage.setItem(data, "text");
    // var saved = localStorage.getItem(data);
});