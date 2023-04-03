function init(){
   global.student = {
        students : [],
      };
    }

function Studentadd(Name ,age ,qualification , DOB , gender ) {
  if(Name.length>0 && age.length>0 && qualification.length>0 && DOB.length>0 && gender.length>0){
        student.students[ student.students.length] = {
        id :student.students.length +1 ,
        Name: Name,
        age : age ,
        qualification : qualification,
        DOB : DOB, 
        gender : gender,
      };
     }
  }

  function updatename(Name, newName) {
    for (var i = 0; i < student.students.length; i++) {
      if (student.students[i].Name === Name) {
        student.students[i].Name = newName;
        break ;
      }  
    }
    console.log(`${Name} is not a correct name.`)
 }  

  function deleteStudentid(Name) {
    for (var i = 0; i < student.students.length; i++) {
    if (student.students[i].Name === Name) {
      student.students.splice(i, 1);
      break;
    }
  }
  console.log(`Student ${Name} is doesnot exist `);
}

function studentDetails(Name) {
  for (var i = 0; i < student.students.length; i++) {
    if (student.students[i].Name === Name) {
      console.table(student.students[i]);
        break;
      }
    }
    console.log( `${Name} is doesn't exits. `)
  }

export {init , Studentadd ,updatename , deleteStudentid , studentDetails}