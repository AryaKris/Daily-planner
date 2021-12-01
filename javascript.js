
// Display of current date and time
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text (currentTime);
$(".time-block").each (function (index) {
var timeBlock = $(this).attr("id")
var hour = moment().hours()
console.log (timeBlock, hour);
// if else condition for setting the color code for past, present and future events
if (timeBlock<hour){ 
    $(this).children(".description").addClass ("past")
    
} else if (timeBlock==hour) {
    $(this).children(".description").addClass ("present")
} else if (timeBlock>hour){
    $(this).children(".description").addClass ("future")
}
});
$(".saveBtn").each (function (index){
    $(this).on("click", function (event){
console.log ($(this).siblings(".description").val())
    })

});
var dailySchedule = [];
window.localStorage.setItem('data', JSON.stringify(dailySchedule));
window.localStorage.getItem('data');
JSON.parse(window.localStorage.getItem('data'));
console.log ('data');