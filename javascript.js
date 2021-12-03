
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

// when the savebutton is clicked, wait for the event of the click
// $(".saveBtn").each(function (index) {
//     $(this).on("click", function (event) {
//         console.log($(this).siblings(".description").val())
//     })

// });
// get the corresponding parent id
// var id = use that id as the key for the localstorage key: 14
// var description = use the id to get the value of the text from the class description
// localStorage.setItem(id, JSON.stringify(description));

$('.saveBtn').on('click', function () {
    var time = ($(this).parent().attr('id'));
    var description = $(this).siblings(".description").val();
    localStorage.setItem(time, JSON.stringify(description));
   
});