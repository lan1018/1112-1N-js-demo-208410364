function C2F(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  function F2C(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }

  var btnC = document.getElementById("btn-c");
btnC.addEventListener("click", function() {
  var input = document.getElementById("input-number").value;
  var result = C2F(input);
  document.getElementById("current-calculation").innerHTML = result + "°F";
});

var btnF = document.getElementById("btn-f");
btnF.addEventListener("click", function() {
  var input = document.getElementById("input-number").value;
  var result = F2C(input);
  document.getElementById("current-calculation").innerHTML = result + "°C";
});
