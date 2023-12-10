// WEEK ASSIGNMENT
// Using what you have learnt from the last 3 weeks create any unique function that performs any task. 
// DO NOT USE PROMPT, ALERT, OR DOM. I WANT A REUSEABLE FUNCTION
// I DON'T WANT TO SEE ANY OTHER FILE EXCEPT YOUR JAVASCRIPT FILE. NO HTML, NO README.MD, JUST YOU JS FILE.
 
// NOT MORE THAN 2 PERSONS SHOULD NOT HAVE THE SAME IMPLEMENTATION, ELSE IT WOULD BE CANCELLED. 



// A function that adds the names of students to an empty array and returns the total number of students
function studentTotal() {
    let students = [];

    function addStudentName(input) {
        if (input !== "" || null) {
            students.push(input);
        }
    }
    addStudentName("Ada")
    addStudentName("Joe")
    addStudentName("")
    
    return students.length;
}
let total = studentTotal();
console.log(`Total number of students: ${total}`);

