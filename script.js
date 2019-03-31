$(document).ready(function () {

  var formErrorfname = true;
  var formErrorlname = true;
  var formErroremail = true;
  var formErrorcemail = true;
  var formErrormobile = true;
  var formErrorland = true;
  var formErrorpost = true;
  var formErroraddl1 = true;
  var formErroraddl2 = true;
  var formErrortown = true;

  $("#message").hide();

  $("#firstname").focusout(function () {
    check_fname();
  });
  $('#lastname').focusout(function(){
    check_lname();
  });
  $('#email-address').focusout(function(){
    check_email();
  });
  $('#confirm-email').focusout(function() {
    check_cemail();
  });
  $('#mobile').focusout(function(){
    check_mobile();
  });
  $('#landline').focusout(function(){
    check_landline();
  });
  $('#postcode').focusout(function(){
    check_postcode();
  });
  $('#AddressLine1').focusout(function(){
    check_addl1();
  });
  $('#AddressLine2').focusout(function(){
    check_addl2();
  });
  $('#town').focusout(function(){
    check_town();
  });
//Check First-NAme
  function check_fname() {
    var pattern = /^[a-zA-Z]*$/;
    var fname = $('#firstname').val();
    if(pattern.test(fname) && fname !== ""){
      $('#fnameerror').css("display", "none");
      formErrorfname = false;
    }
    else {
      $('#fnameerror').text('Enter A Valid First Name');
      $('#fnameerror').css("display", "block");
      $('#firstname').css('border', '2px solid #FF4600');
      formErrorfname = true;
    }
  }

//Check Last NAme

  function check_lname() {
    var pattern = /^[a-zA-Z]*$/;
    var lname = $('#lastname').val();
    if(pattern.test(lname) && lname !== ""){
      $('#lnameerror').css("display", "none");
      formErrorlname = false;
    }
    else {
      $('#lnameerror').text('Enter a Valid Last Name');
      $('#lnameerror').css("display", "block");
      $('#lastname').css('border', '2px solid #FF4600');
      formErrorlname = true;
    }
  }

//Check Email is Valid

  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $('#email-address').val();
    if(pattern.test(email) && email !== ""){
      $('#emailerror').css("display", "none");
      formErroremail = false;
    }
    else {
      $('#emailerror').text("Enter A Valid Email Address");
      $('#emailerror').css("display", "block");
      $('#email-address').css('border', '2px solid #FF4600');
      formErroremail = true;
    }
  }
//Check Both Emails Match

  function check_cemail() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $('#email-address').val();
    var cemail = $('#confirm-email').val();
    if(pattern.test(cemail) && cemail !== ""){
      if(email == cemail){
        $('#cemailerror').css("display", "none");
        formErrorcemail = false;
      }
      else{
        $('#cemailerror').text("Emails Doesn't Match");
        $('#cemailerror').css("display", "block");
        $('#confirm-email').css('border', '2px solid #FF4600');
        formErrorcemail = true;
      }
    }
    else {
      $('#cemailerror').text("Enter A Valid Email Address");
      $('#cemailerror').css("display", "block");
      $('#confirm-email').css('border', '2px solid #FF4600');
      formErrorcemail = true;
    }
  }

//Check Mobile Number

function check_mobile() {
  var pattern = /^[0-9]+$/;
  var mobile = $('#mobile').val();
  if(pattern.test(mobile) && mobile !== "" && mobile.length == 11){
    $('#mobileerror').css("display", "none");
    formErrormobile = false;
  }
  else {
    $('#mobileerror').text('Enter a Valid Mobile Number');
    $('#mobileerror').css("display", "block");
    $('#mobile').css('border', '2px solid #FF4600');
    formErrormobile = true;
  }
}

//Check Landline


function check_landline() {
  var pattern = /^[0-9]+$/;
  var landline = $('#landline').val();
  if(pattern.test(landline) && landline !== "" && landline.length == 11){
    $('#landerror').css("display", "none");
    formErrorland = false;
  }
  else {
    $('#landerror').text('Enter a Valid Mobile Number');
    $('#landerror').css("display", "block");
    $('#landline').css('border', '2px solid #FF4600');
    formErrorland = true;
  }
}

//Check postcode

function check_postcode() {
  var pattern = /^[0-9]+$/;
  var post = $('#postcode').val();
  if(pattern.test(post) && post !== "" && post.length == 6){
    $('#posterror').css("display", "none");
    formErrorpost = false;
  }
  else {
    $('#posterror').text('Enter a Valid Post Code');
    $('#posterror').css("display", "block");
    $('#postcode').css('border', '2px solid #FF4600');
    formErrorpost = true;
  }
}

//Check Address Line 1

function check_addl1() {
  var addl1 = $('#AddressLine1').val();
  if(addl1 !== ""){
    $('#addl1error').css("display", "none");
    formErroraddl1 = false;
  }
  else {
    $('#addl1error').text('Enter Your Address');
    $('#addl1error').css("display", "block");
    $('#AddressLine1').css('border', '2px solid #FF4600');
    formErroraddl1 = true;
  }
}

//Check Address Line 2

function check_addl2() {
  var addl2 = $('#AddressLine2').val();
  if(addl2 !== ""){
    $('#addl2error').css("display", "none");
    formErroraddl2 = false;
  }
  else {
    $('#addl2error').text('Enter Your Address');
    $('#addl2error').css("display", "block");
    $('#AddressLine2').css('border', '2px solid #FF4600');
    formErroraddl2 = true;
  }
}

//Check town

function check_town() {
  var town = $('#town').val();
  if(town !== ""){
    $('#townerror').css("display", "none");
    formErrortown = false;
  }
  else {
    $('#townerror').text('Enter Your Town Name');
    $('#townerror').css("display", "block");
    $('#town').css('border', '2px solid #FF4600');
    formErrortown = true;
  }
}

$('#reg-form').submit(function() {

      check_fname();
      check_lname();
      check_email();
      check_cemail();
      check_mobile();
      check_landline();
      check_postcode();
      check_addl1();
      check_addl2();
      check_town();


    if(formErrorfname == false && formErrorlname == false && formErroremail == false && formErrorcemail == false && formErrormobile == false && formErrorland == false && formErrorpost == false && formErroraddl1 == false && formErroraddl2 == false && formErrortown == false){
      alert("Registration Sucessful");
      return true;
    }
    else {
      $('#message').show();
      return false;
    }
});

});
