function calculateWater() {
  var weight = document.getElementById("weight").value;
  var age = document.getElementById("age").value;
  var activity = document.getElementById("exercise").value;
  var taken = document.getElementById("taken").value;
  var requiredWaterOz = 16.5 * 0.2365882365;
  var waterBottles = requiredWaterOz - taken;
  var waterBottles2 = waterBottles.toFixed(2);
  if (isNaN(weight) || isNaN(activity) || isNaN(age)) {
    alert("Please enter only numeric values");
  }
  else if (weight === "") {
    alert("Please enter your weight.");
  }
  else if (age === "") {
  alert("Please enter your age")
  }
  else if (activity === "") {
    alert("Please enter your exercise time. If you have not been active, please enter 0.");
  }

  else if (taken === "") {
    alert("Please enter the cups of water taken. If you have not been taken any, please enter 0.");
  }
  else {
    document.getElementById("required_water").value = requiredWaterOz;
    document.getElementById("water_bottles").value = waterBottles2;
  }
}
function resetForm() {
	document.getElementById("personal_info").reset();
}

