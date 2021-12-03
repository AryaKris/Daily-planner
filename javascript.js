
// Display of current date and time
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentTime);
$(".time-block").each(function (index) {
    var timeBlock = $(this).attr("id")
    var hour = moment().hours()
    // if else condition for setting the color code for past, present and future events
    if (timeBlock < hour) {
        $(this).children(".description").addClass("past")
    } else if (timeBlock == hour) {
        $(this).children(".description").addClass("present")
    } else if (timeBlock > hour) {
        $(this).children(".description").addClass("future")
    }
});


$('.saveBtn').on('click', function () {
    var time = ($(this).parent().attr('id'));
    var description = $(this).siblings(".description").val();
    localStorage.setItem(time, JSON.stringify(description));
   
});