function test() {


  // using javascript

  // var firstName = document.getElementById("firstName");
  // var lastName = document.getElementById("lastName");
  // var reg = document.getElementById("reg");
  // var age = document.getElementById("age");
  // var dob = document.getElementById("dob");
  // var department = document.getElementById("department");
  // var gender = document.getElementById("gender");
  // var hobbies = document.getElementById("hobbies");

  // greetMe(firstName.value + " " + lastName.value,reg.value,dob.value,age.value,hobbies.value)



  // using jquery
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var reg = $('#reg').val();
  var age = $('#age').val();
  var dob = $('#dob').val();
  var hobbies = $('#hobbies').val();
  var gender = $("input[name='gender']:checked").val();
  var department = $("#test-dropdown option:selected").val();

  greetMe(firstName + " " + lastName,reg,dob,age,hobbies,gender,department)



  function greetMe(yourName,reg,dob, age, hobbies,gender,department) {
    alert(
      `Hello ${yourName}, your registration number is ${reg}, Your dob is ${dob} and you are ${age} years old, Your hobbies are ${hobbies} and you are ${gender}, you are from ${department} department`
    );
  }





  // function greetMe(yourName, reg, age, dob, hobbies) {
  //   alert(
  //     `hello ${yourName} , Your Registration Number is ${reg}, You are ${age} years old, Your dob is : ${dob} Your hobbies are ${hobbies}, you are from ${department} department`
  //   );
  // }






  // var x = document.getElementById("test-dropdown");
  // var firstName = $("#firstName")
  // var lastName = $("#firstName")
  // var department = $("#firstName")

  // firstName[0].css()

  
  //   gender.value

  //   greetMe(firstName[0].value + " " + lastName[0].value);

  
}

// git init
// git add .
// git commit
// git push

// git pull
// git merge
// git branch

// git restore --stays
// git clone
