var countAnswers = function (answers) {
  for (i = 0; i < answers.length; i++) {
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    if (answers[i] === 1) {
      a += 1;
    } else if (answers[i] === 2) {
      b += 1;
    } else if (answers[i] === 3) {
      c += 1;
    } else if (answers[i] === 4) {
      d += 1;
    } else {
      e += 1;
    }
    var count = [a, b, c, d, e];
    return count;
  }
}



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
    var d = 0;
    var e = 0;
    var one = parseInt($('input:radio[name="yeet"]:checked').val());
    var two = parseInt($('input:radio[name="greet"]:checked').val());
    var three = parseInt($('input:radio[name="zombie"]:checked').val());
    var four = parseInt($('input:radio[name="day"]:checked').val());
    var five = parseInt($('input:radio[name="scream"]:checked').val());
    var six = parseInt($('input:radio[name="president"]:checked').val());
    var seven = parseInt($('input:radio[name="toDo"]:checked').val());
    var name = $("input#uName").val();

    var answers = [one, two, three, four, five, six, seven];



    alert(counts);


  });



});