let courseList = [
    {
        code: "ACIT 1515",
        name: "Scripting for IT"
    },
    {
        code: "MATH 1310",
        name: "Technical Math for IT"
    },
    {
        code: "ACIT 1420",
        name: "Intro to System Admin"
    }
];

let user_input = "Placeholder text"
let length_of_input = 0;
let course;

do{
    user_input = prompt("Enter a 4 digit code: ");
    length_of_input = user_input.length;
}
// Proceeds to run the code until both conditions are met
while ((length_of_input !== 4) || (isNaN(user_input) === true))
  
for (course in courseList){
    let code_name = courseList[course].code
    // Checks to see if user input is in code
    if (code_name.includes(user_input)){
        console.log(`Yes I am taking the course: ${courseList[course].code} - ${courseList[course].name}`);
    }
    else{
        // If user input is not in any object's code, make a new object
        new_object = {code: user_input, name: null}
        courseList.push(new_object)
        // console.log(courseList)
        console.log(`Successfully added new object with code: ${user_input}`)
        break
    }
}
