
// Display of current date and time
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentTime);
$(".time-block").each(function (index) {
    var timeBlock = $(this).attr("id")
    var hour = moment().hours()
    // if else condition for setting the color code for past, present and future events
    if (timeBlock < hour) {
        $(this).children(".description").addClass("past");
    } else if (timeBlock == hour) {
        $(this).children(".description").addClass("present");
    } else if (timeBlock > hour) {
        $(this).children(".description").addClass("future");
    }
});


$('.saveBtn').on('click', function () {
    var time = ($(this).parent().attr('id'));
    var description = $(this).siblings(".description").val();
    localStorage.setItem(time, JSON.stringify(description));
});

// when windows logs call this function 
// inside the function, call a loop from 8 to 17 to get the values from localstorage
window.onload = function () {
    for (var i=8; i<=17; i++){
        var value = localStorage.getItem(i);
        // if condition if the value is not null, replace the ""
        if(value!=null){
        var description = value.replace(/['"]+/g, '');
        }else {
            var description = null;
        }
        // else the value is null keep var description = null
        let test = `#${i} > .description`
        $(test).val(description);
    }

}
