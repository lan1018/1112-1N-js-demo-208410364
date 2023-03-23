import { students, sdata } from './data_64.js';

console.log("sdata original", sdata);

const students2 = students.map((student) => {
    student.role = "student";
    return student;
});

console.log("students2", students2);

sdata.sort( function(a,b){return b-a});
console.log("sdata", sdata);
console.log(`The hightest score: ${sdata[0]}`);
console.log(`The lowest score: ${sdata[sdata.length-1]}`);

students.sort(function(a,b){return b.score - a.score })
console.log("students", students);