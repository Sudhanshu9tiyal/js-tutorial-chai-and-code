

const tinderuser = new Object(); // ---->singleton object
// const tinderuser = {}; // ---> non singleton object.
tinderuser.id = 78;
tinderuser.name = "kon"
tinderuser.isloggedin = false

// console.log(tinderuser)


const anotheruser = {
    email : "someone@gmail.com" ,
    course : {
        branch: "computer application",
        university_name : "graphic era university",
        imp_details : {
            student_id : 22151599,
            student_phonenumber : 828908800


        }

    }
}

// console.log(anotheruser.course.imp_details.student_phonenumber)//->> object k andr objects
obj1 = {a : "1" , b :"2"}
obj2 = {c:"3" , d : "4"}
obj3 = {e : "5" , f : "6"}

obj4 = Object.assign({} , obj1 , obj2 , obj3)
console.log(obj4)