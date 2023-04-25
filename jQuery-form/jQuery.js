// jQuery Form Validation assignment

// create variables
var nameId=$("#name");
var emailId=$('#email');
var phoneId=$('#phone');
var message=$('#message')

// create an array
var required = [nameId,emailId,phoneId];

// create a function
$(document).ready(function() {
    $('#submit').on('click', function(){
    for (var i = 0; i < required.length; i++){ // loop for entire required array
        if (required[i].val () == ""){
        message.html('Please Fill Out the Required Fields')
        required[i].prev().addClass('warning');
        message.addClass('warning')
        }
        if (required[i].val () !== ""){
        required[i].prev().removeClass('warning');
        }
        if (!$("label").hasClass("warning")) { // another if statement
        $("#form").remove();
        $('h2').html('Thanks for your feedback!')
        }
        
    }
});
})