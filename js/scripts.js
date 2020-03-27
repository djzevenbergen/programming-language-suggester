var countAnswers = function (answers) {
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  var e = 0;
  for (i = 0; i < answers.length; i++) {
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
  }
  var count = [a, b, c, d, e];
  return count;
}

var compareAnswers = function (counts) {
  var a = counts[0];
  var b = counts[1];
  var c = counts[2];
  var d = counts[3];
  var e = counts[4];
  var maxCount = 0;
  var message = "";
  if (a >= b && a >= c && a >= d && a >= e) {
    maxCount = a;
    message = "With " + maxCount + " a's, you're a wild one and should choose Ruby!";
    $("#linkOne").prepend("**");
    $("#linkOne").append("**");
    $
  } else if (b >= a && b >= c && b >= d && b >= e) {
    maxCount = b;
    message = "With " + maxCount + " b's, you're a syntax lover and should choose Java!";
    $("#linkTwo").prepend("**");
    $("#linkTwo").append("**");
  } else if (c >= a && c >= b && c >= d && c >= e) {
    maxCount = c;
    message = "With " + maxCount + " c's, you're a wandering soul and should choose Python!";
    $("#linkThree").prepend("**");
    $("#linkThree").append("**");
  } else if (d >= a && d >= b && d >= c && d >= e) {
    maxCount = d;
    message = "With " + maxCount + " d's, you're a robot and should choose binary!";
    $("#linkFour").prepend("**");
    $("#linkFour").append("**");
  } else {
    message = "You didn't answer enough questions! Your punishment is learning C!"
    $("#linkFive").prepend("**");
    $("#linkFive").append("**");
  }
  return message;
}



$(document).ready(function () {
  var modal = document.getElementById("myModal");
  var span = document.getElementById("close");
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

  $("#qEight").submit(function (event) {
    var one = parseInt($('input:radio[name="yeet"]:checked').val());
    var two = parseInt($('input:radio[name="greet"]:checked').val());
    var three = parseInt($('input:radio[name="zombie"]:checked').val());
    var four = parseInt($('input:radio[name="day"]:checked').val());
    var five = parseInt($('input:radio[name="scream"]:checked').val());
    var six = parseInt($('input:radio[name="president"]:checked').val());
    var seven = parseInt($('input:radio[name="toDo"]:checked').val());
    var name = $("input#uName").val();
    var answers = [one, two, three, four, five, six, seven];

    event.preventDefault();
    $("#questionEight").slideUp();
    $("#viewResults").slideDown();

    $("#nameDisplay").text(name);
    $("#results").text(compareAnswers(countAnswers(answers)));

    modal.style.display = "block";

    span.onclick = function () {
      modal.style.display = "none";
      //window.location.reload();
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    $("#viewAgain").click(function () {
      modal.style.display = "block";

      span.onclick = function () {
        modal.style.display = "none";
        //window.location.reload();
      }

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";

        }
      }
    });

    $("#takeAgain").click(function () {
      window.location.reload();
    });



  });



});