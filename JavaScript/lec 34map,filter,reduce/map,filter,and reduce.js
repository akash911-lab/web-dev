let originalPrices = [463, 654, 2346]
let discountedPrices = []


// for (value of originalPrices){
//     //let discount = value * 10/100
//     //discountedPrices.push(value - discount)//10% discount
//     discountedPrices.push(value * 0.9)//10% discount
// }


originalPrices.forEach((value) => {
    discountedPrices.push(value * 0.9) //10% discount
})

// console.log(originalPrices);
// console.log(discountedPrices);


const discountedPrices2 = originalPrices.map((value) => value * 0.9)

// console.log(discountedPrices2);

let students = [
    {
        name: "Ayaan",
        marks: 56,
    },
    {
        name: "Manshi",
        marks: 46,
    },
    {
        name: "Shiva",
        marks: 30,
    },
    {
        name: "Daefeg",
        marks: 66,
    },
    {
        name: "aloud",
        marks: 28,
    },
]

// let studentName = []
// students.forEach((value)=>{
//     studentName.push(value.name)
// })
//const studentName = students.map((student) => student.name)
//const studentMarks = students.map((student) => student.marks)
//console.log(studentName,studentMarks);

// let boostMarks = students.map ((student)=>{
//     return{...student, marks: student.marks +10}
// })

//let boostMarks = students.map (student=>({...student, marks: student.marks +10}))
//let boostMarks = students.map(student => student.marks < 33)

//console.log(boostMarks);


// let failedStudents = []
// students.forEach((student)=>{
//     if(student.marks <33){
//         failedStudents.push(student)
//     }
// })

//const failedStudents = students.filter((student)=> student.marks<33).map((student)=> student.name) //[{name:'shiva'}]
//const  failedStudentsName = failedStudents.map((student)=>student.name)
//console.log(failedStudents ,failedStudentsName);


//let marks = [56, 26, 6, 73, 78]
// let totalMarks = 0
// marks.forEach((marks)=> totalMarks = totalMarks + marks)
//const totalMarks = students.reduce((acc, student)=>acc = acc + student.marks,0)
//console.log(totalMarks);

const attendence = ["present","present", "absent","present","absent"]

// let obj ={}
// attendence.forEach((value)=>{
//     if (obj[value]){
//         obj[value] = obj[value]+1
//     }else{
//         obj[value]=1
//     }
// })

// console.log(obj);


const obj = attendence.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
    return acc
      
}, {})
console.log(obj);
