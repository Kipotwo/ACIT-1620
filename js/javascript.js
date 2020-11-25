function createCourseArray(){
    let courseList = [];
    let divBlocks = document.querySelectorAll("div");
    console.log(divBlocks[0])
    for (i = 0; i < divBlocks.length; i++){
        let courseCode = divBlocks[i].querySelector("a").innerHTML
        let courseDate = divBlocks[i].querySelector("p").innerHTML
        let course = {code: courseCode, date: courseDate}
        courseList.push(course)
    }
    return courseList
}

function findCourse(courseList){
    let user_input = "Placeholder text"
    let length_of_input = 0;

    do{
        user_input = prompt("Enter a 4 digit code: ");
        length_of_input = user_input.length;
    }
    // Proceeds to run the code until both conditions are met
    while ((length_of_input !== 4) || (isNaN(user_input) === true))
  
    for (let course in courseList){
        let code_name = courseList[course].code
        // Checks to see if user input is in code
        if (code_name.includes(user_input)){
            // If so, make the box it that contains it green
            divBlocks = document.querySelectorAll("div");
            divBlocks[course].style.backgroundColor = "green";
        }
        else{
            // If user input is not in any object's code, make a new object
            new_object = {code: user_input, name: null}
            courseList.push(new_object)
            console.log(courseList)
            console.log(`Successfully added new object with code: ${user_input}`)
            break
        }
    }
}

courseList = createCourseArray()
findCourse(courseList)
