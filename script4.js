$(document).ready(function(){
  $("button").hover(function(){
    $(this).css("background-color", "white");
    }, function(){
    $(this).css("background-color", "pink");
  });
});

$('.feedback').append('<p>feedback</p>')

var disableButton = (e) => {
    console.log("va");
    $('.button1, .button2, .button3').prop('disabled', true);
};

$(document).on('click', '.button4', disableButton);

var disableButton = (e) => {
    console.log("va");
    $('.button2, .button3, .button4').prop('disabled', true);
};

$(document).on('click', '.button1', disableButton);

var disableButton = (e) => {
    console.log("va");
    $('.button1, .button3, .button4').prop('disabled', true);
};

$(document).on('click', '.button2', disableButton);

var disableButton = (e) => {
    console.log("va");
    $('.button1, .button2, .button4').prop('disabled', true);
};

$(document).on('click', '.button3', disableButton);
//$('.button5').prop('disabled', false);
