var computeLanguage = function (aCount, bCount, cCount, dCount) {
  //if more a's than anything, they like python

  //else if more b's than anything, they like Java

  // else if more c's than anything, they like ruby

  // else if more d's, they are inhuman and must learn machine code


};



$(document).ready(function () {
  $("#startButton").click(function () {
    $("#startButton").hide();
    $("#questionOne").slideDown();




  });

  $("#qOne").submit(function (event) {
    event.preventDefault();
    $("#questionOne").slideUp();
    $("#questionTwo").slideDown();
  });

  $("#qTwo").submit(function (event) {
    event.preventDefault();
    $("#questionTwo").slideUp();
    $("#questionThree").slideDown();
  });

  $("#qThree").submit(function (event) {
    event.preventDefault();
    $("#questionThree").slideUp();
    $("#questionFour").slideDown();
  });

  $("#qFour").submit(function (event) {
    event.preventDefault();
    $("#questionFour").slideUp();
    $("#questionFive").slideDown();
  });

  $("#qFive").submit(function (event) {
    event.preventDefault();
    $("#questionFive").slideUp();
    $("#questionSix").slideDown();
  });

  $("#qSix").submit(function (event) {
    event.preventDefault();
    $("#questionSix").slideUp();
    $("#questionSeven").slideDown();
  });

  $("#qSeven").submit(function (event) {
    event.preventDefault();
    $("#questionSeven").slideUp();
    $("#questionEight").slideDown();
  });

  $("#qEight").submit(function (even) {
    even.preventDefault();
    //alert("quiz finished");
    var a = 0;
    var b = 0;
    var c = 0;
    var b = 0;
    //if ($"input:radio[name=")



    //yeet, greet, zombie

  });



});