// let prices = [100, 250, 399, 499];

// prices.forEach((price) => {
//     document.write("Hello World");    
// })


let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];


students.forEach((student) =>{
    if(student.marks > 50){
        console.log(`${student.name} - Pass`)
    }else{
        console.log(`${student.name} - Fail`)
    }
})