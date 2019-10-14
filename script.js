//var for date that appears in currentDay
var date = new Date($.now());
var simpleDate = (date.toDateString());
console.log(date);
$("#currentDay").text(simpleDate);

//event listener that saves to localStorage
var timeBlocks = document.getElementById(["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"]);

//short circuiting to fix undefined val
var data = localStorage.getItem("data") || [];
data = data.split(",");
console.log(data);
console.log(timeBlocks);
$("button").on("click", function(event){
    console.log(event);
    var inputVal = $(event.target).siblings(".input-group-text").val();
    console.log(inputVal);
    data.push(inputVal);
    console.log(data);
    localStorage.setItem("data", data);
    // var data = $(".input-group-text").val();
    // $("input.input-group-text").each(function(index){
    // });
    // var myStorage = window.localstorage;
    // localStorage.setItem(data, "text");
    // var saved = localStorage.getItem(data);
});

function appendData(){
    for(var i = 0; i < data.length; i++){
        $("#" + i).attr("value", data[i]);
    }
}

appendData();

function clear(){
    localStorage.setItem("data", "")
}

$("#clear").on("click", clear);

//function that turns current hour to red