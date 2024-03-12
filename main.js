function test() {
  // using JAVASCRIPT
  // var firstName = document.getElementById("firstName");
  // var lastName = document.getElementById("lastName");
  // var reg = document.getElementById("reg");
  // var age = document.getElementById("age");
  // var dob = document.getElementById("dob");
  // var department = document.getElementById("department");
  // var gender = document.getElementById("gender");
  // var hobbies = document.getElementById("hobbies");

  // greetMe(firstName.value + " " + lastName.value,reg.value,dob.value,age.value,hobbies.value)

  // using JQUERY
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var reg = $("#reg").val();
  var age = $("#age").val();
  var dob = $("#dob").val();
  var hobbies = $("#hobbies").val();
  var gender = $("input[name='gender']:checked").val();
  var department = $("#test-dropdown option:selected").val();

  const arr = [
    {
      firstName: firstName,
      lastName: lastName,
      reg: reg,
      age: age,
      dob: dob,
      hobbies: hobbies,
      gender: gender,
      department: department,
    },
  ];

  let newData = {
    firstName: firstName,
    lastName: lastName,
    reg: reg,
    age: age,
    dob: dob,
    hobbies: hobbies,
    gender: gender,
    department: department,
  };

  arr.push(newData);
  console.log(arr);

  show(firstName + " " + lastName, reg, dob, age, hobbies, gender, department);

  function show(yourName, reg, dob, age, hobbies, gender, department) {
    alert(
      `Hello ${yourName}, your registration number is ${reg}, Your dob is ${dob} and you are ${age} years old, Your hobbies are ${hobbies} and you are ${gender}, you are from ${department} department`
    );
  }
}

$("document").ready(function () {
  $("#button").click(test);
});
