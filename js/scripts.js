$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const countTo = parseInt($("#input1").val());
    const countBy = parseInt($("#input2").val());

    if (isNaN(countTo)) {
      alert("please enter a numerical value")
    } else if (isNaN(countBy)) {
      alert("please enter a numerical value")
    } else if (countTo <= 0 || countBy <= 0) {
      alert("please enter a number greater than 0")
    } else if (countBy > countTo) {
      alert("the number you are counting by is greater than the number you are counting to, please adjust")
    } else {
      for (let index = 0; index <= countTo; index += countBy) {
      console.log(index)
      }
    }
  });
});


