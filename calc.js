function equation() {


    var a = document.getElementById('firstNumber').value;
    var b = document.getElementById('secondNumber').value;
    var c = document.getElementById('thirdNumber').value;
    var discr = (b * b) - 4 * (a * c);
    var sqrDiscr = Math.sqrt(discr);
    document.getElementById('answer').value = discr;

    if (a == 0) {
        alert("First coefficient is zero!");
    }

    
    else if (b == 0 && c == 0){
      document.getElementById('secondAnswer').value = "Something went wrong!";
    }
    else if (discr < 0){
      document.getElementById('secondAnswer').value = "У данного уравнения нет решения";
      document.getElementById('thirdAnswer').value = "-";
    }else if (discr == 0){
      document.getElementById('secondAnswer').value = "У данного уравнения может быть один корень";
      document.getElementById('thirdAnswer').value = ((- b - sqrDiscr) / (2 * a));
    }else if (discr > 0){
      document.getElementById('secondAnswer').value = "У данного уравнения может быть два корня";
      document.getElementById('thirdAnswer').value = ((- b + sqrDiscr) / (2 * a)) + ";     " + ((- b - sqrDiscr) / (2 * a));
    }
  }

  function cancel() {
    document.getElementById('firstNumber').value = null;
    document.getElementById('secondNumber').value = null;
    document.getElementById('thirdNumber').value = null;
    document.getElementById('answer').value = null;
    document.getElementById('secondAnswer').value = null;
    document.getElementById('thirdAnswer').value = null;
  }
  
  