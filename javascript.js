var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text (currentTime);
$(".time-block").each (function (index) {
var timeBlock = $(this).attr("id")
var hour = moment().hours()
console.log (timeBlock, hour);
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

