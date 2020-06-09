$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const countTo = parseInt($("#input1").val());
    const countBy = parseInt($("#input2").val());

    if (isNaN(countTo)) {
      alert("please enter a numerical value")
    } else if (countTo < 0 || countBy < 0) {
      alert("please enter a number greater than 0")
    } else {
      for (let index = 0; index <= countTo; index += countBy) {
      console.log(index)
      }
    }
  });
});


// function milliseconds(x) {
//   if (isNaN(x)) {
//     return 'Not a Number!';
//   }
//   return x * 1000;
// }

// console.log(milliseconds('100F'));
// // expected output: "Not a Number!"

// console.log(milliseconds('0.0314E+2'));
// // expected output: 3140