function initListeners() {
  $("#submit").on("click", function (e) {
    e.preventDefault();
    let fn = $("#firstName").val();
    let ln = $("#lastName").val();
    let pn = $("#phoneNum").val();
    let sa = $("#stuAge").val();
    let se = $("#stuEmail").val();
    let cs = $("#classes").val();

    let newArrClasses = cs.split(",").map((item) => item.trim());

    let studentObj = {
      fName: fn,
      lName: ln,
      pNum: pn,
      sAge: sa,
      sEmail: se,
      classes: newArrClasses,
    };

    $("#firstName").val("");
    $("#lastName").val("");
    $("#classes").val("");
    $("#phoneNum").val("");
    $("#stuAge").val("");
    $("#stuEmail").val("");
    addStudent(studentObj);
  });
  $("#showLocal").on("click", (e) => {
    getStudents();
  });
}

function addStudent(student) {
  let allStudents = JSON.parse(localStorage.getItem("students"));
  allStudents.push(student);

  localStorage.setItem("students", JSON.stringify(allStudents));
}
// function getStudents() {
//   $("#app").empty();
//   // $("#app").html("") same thing as above
//   let allStudents = JSON.parse(localStorage.getItem("students"));
//   let studentString = "<div>";
//   $.each(allStudents, (index, student) => {
//     studentString += `First Name: ${student.fName} Last Name: ${student.lName}`;

//     $.each(student.classes, (i, cls) => {
//       studentString += `<p><span> ${cls} </span>, `;
//     });
//     studentString += "</p>";
//   });
//   studentString += "</div>";
//   $("#app").html(studentString);
// }

function connectToStorage() {
  if (localStorage) {
    let students = localStorage.getItem("students");

    if (students) {
      console.log("Students found in local storage.");
    } else {
      localStorage.setItem("students", JSON.stringify([]));
    }
  } else {
    console.log("Local storage not supported.");
  }
}

$(document).ready(function () {
  connectToStorage();
  initListeners();
});
let studentHTML = "<div>";
$.each(allStudents, (index, student) => {
  studentHTML += `
      <div style="border:1px solid #ccc; padding:8px; margin:8px 0;">
        <strong>${student.fName} ${student.lName}</strong><br>
        Age: ${student.age}<br>
        Phone: ${student.phone}<br>
        Email: ${student.email}<br>
        Classes: ${student.classes.join(", ")}
      </div>
    `;
});
