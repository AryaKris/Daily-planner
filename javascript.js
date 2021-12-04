
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
   console.log(description);
});

// when windows logs call this function 
// inside the function, call a loop from 8 to 17 to get the values from localstorage


window.onload = function () {
    // console.log("function executed: ", localStorage.getItem(9));
    // for each of the id in the loop, retrieve the corresponding value using getItem()
    for (var i=8; i<=17; i++){
      var description = localStorage.getItem (i);
      
        $("#id").children("description").val(localStorage.getItem("id"));
      

        // if the value is not empty:
            // get the html element for the corresponding id 
            // apply that value to html description
        // if the value is empty
            // get the html element for the corresponding id 
            // put the description value as empty


    }
    // stop the loop when it reaches 17.
}
