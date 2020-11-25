function createCourseArray(){
    let courseList = [];
    // Gets all div elements
    let divBlocks = document.querySelectorAll("div");
    // For every div element, add a name and a r
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
    let check = true

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
            // If user input is not make check = false
            check = false
        }
    }

    if (check === false){
        // If check is false, make a new div element
        let sectionElement = document.querySelector("section");
        let newDiv = document.createElement("div");
        sectionElement.appendChild(newDiv);
        
        // Then add text elements
        let divElements = document.querySelectorAll("div");
        divElements[divElements.length - 2].setAttribute("class", "divider")
        let newCode = document.createElement("a")
        let name = document.createTextNode(user_input + " - N/A")
        newCode.append(name)
        let newDate = document.createElement("p")
        let date = document.createTextNode("Fall 2020")
        newDate.append(date)
        divElements[divElements.length - 1].append(newCode)
        divElements[divElements.length - 1].append(newDate)
    }
}

courseList = createCourseArray()
findCourse(courseList)
