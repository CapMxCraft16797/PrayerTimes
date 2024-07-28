document.getElementById("calc_btn").addEventListener("click", function () {
  let firstInput = document.getElementById("first-input").value;
  let secondInput = document.getElementById("second-input").value;

  try {
    let result = divide(Number(firstInput), Number(secondInput));
    document.getElementById("result").innerHTML = result;
  } catch (error) {
    alert("Error:  " + error);
  } finally {
    console.log("Hello World");
  }
});
